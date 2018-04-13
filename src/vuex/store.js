import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import funcs from '../assets/js/general_funcs.js';

Vue.use(Vuex);

const state = {

    //constant
    articlePath: '../../static/data/articles/',
    imgPath: 'static/data/img/',

    //status
    articleInfoFetched: false,
    allArticlesFetched: false,
    enableResume: false,
    showImg: false,
    sidebarStatus: '',

    //datas
    articleInfo: [],
    articlesContent: {},
    resumeData: '',        
    pageTitle:'',
    meImg: '',
    meText: '',
    navText: ['Me', 'Resume', 'Blog'],

    //search related
    maxReturnLength: 200,
    search: '',
    searchResults: {
        showSearch: false
    }
};

const getters = {
    /* return article title group by types */
    getArticleInfosGroupByType(state){
        let types = {};
        let articleInfo = state.articleInfoFetched?state.articleInfo:[];

        // below used if articleInfo is array
        // articleInfo.forEach(function(val){
        //     if (!(val.type in types)){
        //         //if not exist create empty array
        //         types[val.type] = [];
        //     }
        //     types[val.type].push(val.title);
        // })

        //articleInfo is object
        for (let val in articleInfo){
            if (!(articleInfo[val]['type'] in types)){
                //if not exist create empty array
                types[articleInfo[val]['type']] = [];
            }
            types[articleInfo[val]['type']].push(articleInfo[val]);
        }
        return types;
    }
};



//use closure as Factory function for setting only
function setterFactory(stateValue){
    return function (state, value){
        state[stateValue] = value;
    };
};

const mutations = {

    setSearch: setterFactory('search'),
    setSearchResults: setterFactory('searchResults'),
    setResume: setterFactory('enableResume'),
    setSidebar: setterFactory('sidebarStatus'),
    setNavText: setterFactory('navText'),
    setShowImg: setterFactory('showImg'),
    setMeImg: setterFactory('meImg'),
    setMeAnimation: setterFactory('meAnimation'),
    setMeText: setterFactory('meText'),
    setResumeData: setterFactory('resumeData'),
    setMeAnimation: setterFactory('meAnimation'),
    setAllArticlesFetched: setterFactory('allArticlesFetched'),
    setShowSearch: setterFactory('showSearch'),

    // above created function same as below
    // setAllArticlesFetched (state, value){
    //     state.allArticlesFetched = value;
    // }

    setArticleInfo(state, value){
        state.articleInfo = value;
        state.articleInfoFetched = true;
    },


    pushArticlesContent(state, value){
        state.articlesContent[value.title] = value.content;        
    },

    setShowSearch(state, value){
        state.searchResults.showSearch = value;
    },

    setPageTitle(state, value){
        state.pageTitle = value;
        document.title = value; //set title
    }
}

const actions = {

    actionFetch (store){
        //getting all settings
        axios.get('../../static/data/config.json').then((response) => {

            let error_info = '';

            //resume
            let enable_resume = response.data.enable_resume;
            if (funcs.type(enable_resume)!=='boolean'){
                error_info += "'enable_resume' must be a boolean (without quote) in config.json\n";
            }else{
                store.commit('setResume', enable_resume);
            }

            //navbar
            let nav_text = response.data.nav_text;            
            if (funcs.type(nav_text)!=='array' || nav_text.length !== 3){
                error_info += "'nav_text' must be a legnth 3 array in config.json\n";
            }else{
                store.commit('setNavText', nav_text);
            }

            //title
            let page_title = response.data.page_title;
            if (funcs.type(page_title)!=='string'){
                error_info += "'page_title' must be a string in config.json\n";
            }else{
                store.commit('setPageTitle', page_title);
            }

            //text
            let me_text = response.data.me_text;
            if (funcs.type(me_text)!=='string'){
                error_info += "'me_text' must be a string in config.json\n";                
            }else{
                store.commit('setMeText', me_text); 
            }

            //image
            let me_img = response.data.me_img;
            if (funcs.type(me_img)!=='string'){
                error_info += "'me_img' must be a string in config.json\n";                
            }else{
                if (me_img.trim() === ''){
                    store.commit('setShowImg', false);
                }else{
                    store.commit('setShowImg', true);
                }
                store.commit('setMeImg', me_img); 
            }

            //show error
            if (error_info.length >0){
                alert(error_info);
            }

            if (store.state.enableResume){
                axios.get('../../static/data/resume/resume.md').then((response1) => {
                    store.commit('setResumeData', response1.data);
                }, (error) => {
                    console.log(error)
                });                
            }

        }, (error) => {
            console.log(error)
        });
        
        axios.get('../../static/data/article_info.json').then((response) => {

            //get array
            let articlesArray = Object.values(response.data.articles);

            //set last one is_newset prop
            articlesArray[articlesArray.length-1]['is_newest'] = true;
            
            //get object with title as key
            let articlesObj = funcs.arr2obj(articlesArray, 'title');
            store.commit('setArticleInfo', articlesObj);

            let ajaxFuncs = [];
            articlesArray.forEach(function(val){
                ajaxFuncs.push(function(){
                    return axios.get(state.articlePath + val.filename);
                }())
            });

            //get all articles
            axios.all(ajaxFuncs).then(axios.spread(function() {
                let data = arguments;
                articlesArray.forEach(function(val, index){
                    let $payload = {
                        'title': val.title,
                        'content': data[index]['data']
                    };
                    store.commit('pushArticlesContent', $payload);
                    store.commit('setAllArticlesFetched', true);
                })
            })).catch((err)=>{
                console.log(err);
            });
            
        }, (error) => {
            console.log(error)
        });
    },

    actionSetSearch(store, value){
        store.commit('setSearch', value.value);
        let searchResults = {};

        if (value.value.trim().length > 0){
            //only search when string not empty
            
            let allArticles = store.state.articlesContent;
            let search = store.state.search.toLowerCase(); //to lowercase for search
            searchResults = {
                'showSearch': true,
                'hasResult': false,
                'results':{}
            };
            for (let title in allArticles){
                //search here

                //to lowercase for search
                let lowCaseTitle = title.toLowerCase();        
                allArticles[title] = allArticles[title].toLowerCase(); 

                let article = {};
                //search by title higher priority than content
                if (lowCaseTitle.indexOf(search) !== -1){  
                    article['content'] = allArticles[title].slice(0, store.state.maxReturnLength);
                    searchResults['results'][title] = article;
                }
                //search by content
                else if (allArticles[title].indexOf(search) !== -1){
                    let result = funcs.getSubstring(
                            allArticles[title], 
                            store.state.maxReturnLength, 
                            allArticles[title].indexOf(search),
                            search.length
                        );

                    //add span to target string for color control
                    let spanOpen = "<span class='search_value'>";
                    let spanClose = "</span>";

                    //2018-04-13 encode to html entities to prevent from injection
                    // let content = funcs.htmlEntityEncode(result['text']);
                    let content = result['text'];

                    content = content.slice(0, result['targetStart']) 
                                + spanOpen 
                                + content.slice(
                                    result['targetStart'] 
                                );
                    content = content.slice(0, result['targetStart'] + spanOpen.length + result['targetLength'])
                                + spanClose
                                + content.slice(
                                    result['targetStart'] 
                                    + spanOpen.length 
                                    + result['targetLength']
                                );

                    article['content'] = content;
                    
                    // article['resultStart'] = result['targetStart'];
                    // article['resultLength'] = result['targetLength'];
                    searchResults['results'][title] = article;
                }
            }

            //has results
            if (Object.keys(searchResults['results']).length !== 0){
                searchResults['hasResult'] = true;
            }else{
                searchResults['hasResult'] = false;
            }

        }else{
            searchResults = {
                'showSearch': false
            };
        }
        store.commit('setSearchResults', searchResults);       
    }
}

export default new Vuex.Store({
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
})
