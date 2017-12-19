import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import funcs from '../general_funcs.js';

Vue.use(Vuex);

const state = {
    sidebarStatus: '',

    allTypes: [],
    allDetails: {},
    allArticles: {},
    allArticleTitle: [],

    articlePath: '../../static/data/articles/',
    imgPath: 'static/data/img/',


    articleInfo: [],
    articleInfoFetched: false,
    allArticles: {},
    allArticlesFetched: false,

    resumeData: '',
        
    pageTitle:'',

    enableResume: false,

    meAnimation: false,
    showImg: false,
    meImg: undefined,
    meText: undefined,
    navText: ['Me', 'Resume', 'Blog'],

    //search
    maxReturnLength: 200,
    search: null,
    searchResults: {
        showSearch: false
    }
};

const getters = {
    getAllArticleInfos: (state)=>{
        let final_directory = {}; //whole directory
        if (state.allArticlesFetched){
            for (let i of state.allTypes){
                if (!final_directory[i]){
                    Object.defineProperty(
                        final_directory, 
                        i, 
                        {
                            value: [],
                            writable: true,
                            enumerable: true,
                            configurable: true
                        }
                    );                            
                }
            }

            for (let val of state.allArticleTitle){
                let articleDetails = state.allDetails[val];
                final_directory[articleDetails['type']].push(articleDetails); 
            }
        }
        return final_directory;
    },

    /* return article title group by types */
    getTypeList(state){
        let types = {};
        let articleInfo = state.articleInfoFetched?state.articleInfo:[];
        state.articleInfo.forEach(function(val){
            if (!(val.type in types)){
                //if not exist create empty array
                types[val.type] = [];
            }
            types[val.type].push(val.title);
        })
        console.log(types);
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

    setArticleInfo(state, value){
        state.articleInfo = value;
        state.articleInfoFetched = true;
    },

    pushAllArticles (state, title, content){
        state.allArticles[title] = content;
    },
    setAllArticlesFetched: setterFactory('allArticlesFetched'),

    // above created function same as below
    // setAllArticlesFetched (state, value){
    //     state.allArticlesFetched = value;
    // }


    setShowSearch(state, value){
        state.searchResults.showSearch = value;
    },

    // setPageTitle(state, value){
    //     state.pageTitle = value;
    //     document.title = value; //set title
    // },

    // setAllDetails (state, value){
    //     state.allDetails[value.title] = value;
    // },

    // setAllTypes (state, value){
    //     state.allTypes.push(value);
    // },



    // setAllArticleTitle (state, value){
    //     state.allArticleTitle.push(value);
    // },
  


    setNewestArticle (state, value){
        state.allDetails[value]['is_newest'] = true;
    }

}

const actions = {

    actionFetch (store){
        //getting all settings
        axios.get('../../static/data/config.json').then((response) => {

            let error_info = '';

            //resume
            let enable_resume = response.data.enable_resume;
            if ($.type(enable_resume)!=='boolean'){
                error_info += "'enable_resume' must be a boolean (without quote) in config.json\n";
            }else{
                store.commit('setResume', enable_resume);
            }

            //navbar
            let nav_text = response.data.nav_text;            
            if ($.type(nav_text)!=='array' || nav_text.length !== 3){
                error_info += "'nav_text' must be a legnth 3 array in config.json\n";
            }else{
                store.commit('setNavText', nav_text);
            }

            //title
            let page_title = response.data.page_title;
            if ($.type(page_title)!=='string'){
                error_info += "'page_title' must be a string in config.json\n";
            }else{
                store.commit('setPageTitle', page_title);
            }

            //animation
            let me_animation = response.data.me_animation;
            if ($.type(me_animation)!=='boolean'){
                error_info += "'me_animation' must be a boolean (without quote) in config.json\n";                
            }else{
                store.commit('setShowImg', !me_animation);
                store.commit('setMeAnimation', me_animation); 
            }

            //text
            let me_text = response.data.me_text;
            if ($.type(me_text)!=='string'){
                error_info += "'me_text' must be a string in config.json\n";                
            }else{
                store.commit('setMeText', me_text); 
            }

            //image
            let me_img = response.data.me_img;
            if ($.type(me_img)!=='string'){
                error_info += "'me_img' must be a string in config.json\n";                
            }else{
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

            let articles = Object.values(response.data.articles);
            let articles_obj = funcs.arr2obj(articles, 'title');
            console.log('bb', articles_obj);

            store.commit('setArticleInfo', response.data.articles);


            let len = articles.length;
            let all_files = [];
            // console.log(articles);



            // function getUserAccount() {
            //   return axios.get('/user/12345');
            // }

            // function getUserPermissions() {
            //   return axios.get('/user/12345/permissions');
            // }

            // let ajax_funcs = [];
            // articles.forEach(function(val){
            //     ajax_funcs.push(function(){
            //         return axios.get(state.articlePath + val.filename);
            //     }())
            // });

            // axios.all(ajax_funcs).then(axios.spread(function() {
            //     console.log(arguments);
            //     // console.log(perms);
            //     for (let index in articles){
            //         articles[index]['content'] = arguments[index]['data'];  
            //     }
            // }));


            // for (let i=0; i<len; i++){
            //     let article = articles[i]

            //     store.commit('setAllDetails', article);
            //     store.commit('setAllTypes', article.type);
            //     store.commit('setAllArticleTitle', article.title);

            //     axios.get(state.articlePath +　article.filename).then((response1) => {
            //         store.commit('setAllArticles',  {
            //             "title": article.title,    
            //             "content":response1.data
            //         });
            //         if (i == len-1){
            //             //set last article the nest article
            //             store.commit('setNewestArticle', article.title);
            //             //set it true when complete getting the last one
            //             store.commit('setAllArticlesFetched', true);
            //         }
            //     }, (error1) => {
            //         alert("Error getting " + article.filename 
            //               + "\nPlease check article_info.json" );
            //         console.log(error1);
            //     });
            // }

        }, (error) => {
            console.log(error)
        });
    },

    actionSetSearch(store, value){
        store.commit('setSearch', value.value);
        let searchResults = {};

        if (value.value.trim().length > 0){
            //only search when string not empty
            
            let allArticles = store.state.allArticles;
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
                    let result = func.getSubstring(
                            allArticles[title], 
                            store.state.maxReturnLength, 
                            allArticles[title].indexOf(search),
                            search.length
                        );

                    //add span to target string for color control
                    let spanOpen = "<span class='search_value'>";
                    let spanClose = "</span>";
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
