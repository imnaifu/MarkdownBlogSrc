import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex);

const state = {
    sidebarStatus: '',
    allTypes: [],
    allDetails: {},
    allArticles: {},
    allArticleTitle: [],
    articlePath: '../../static/data/articles/',
    allArticlesFetched: false,
    imgPath: 'static/data/img/',
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
    setShowImg: setterFactory('meImg'),
    setMeAnimation: setterFactory('meAnimation'),
    setMeText: setterFactory('meText'),
    setResumeData: setterFactory('resumeData'),
    setMeAnimation: setterFactory('meAnimation'),
    setAllArticlesFetched: setterFactory('allArticlesFetched'),
    // same as written as below
    // setAllArticlesFetched (state, value){
    //     state.allArticlesFetched = value;
    // }


    setShowSearch(state, value){
        state.searchResults.showSearch = value;
    },

    setPageTitle(state, value){
        state.pageTitle = value;
        document.title = value; //set title
    },

    setAllDetails (state, value){
        state.allDetails[value.title] = value;
    },

    setAllTypes (state, value){
        state.allTypes.push(value);
    },

    setAllArticles (state, value){
        state.allArticles[value.title] = value.content;
    },

    setAllArticleTitle (state, value){
        state.allArticleTitle.push(value);
    },


}

const actions = {
    actionFetch (store){

        //getting all settings
        axios.get('../../static/config/config.json').then( (response) => {

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

        //getting all articles
        axios.get('../../static/data/article_info.json').then((response) => {
            let articles = Object.values(response.data.articles);
            let len = articles.length;

            for (let i=0; i<len; i++){
                let article = articles[i]
                store.commit('setAllDetails', article);
                store.commit('setAllTypes', article.type);
                store.commit('setAllArticleTitle', article.title);

                axios.get(state.articlePath +　article.filename).then((response1) => {
                    store.commit('setAllArticles',  {
                        "title": article.title,    
                        "content":response1.data
                    });
                    if (i == len-1){
                        //set it true when complete getting the last one
                        store.commit('setAllArticlesFetched', true);
                    }
                }, (error1) => {
                    alert("Error getting " + article.filename 
                          + "\nPlease check article_info.json" );
                    console.log(error1);
                });
            }
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
                    let result = getSubstring(
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

/*
*   naifu
*   返回一个指定长度的以目标string为中心的左右等长的substring
*   
*   input:
*       fullString: string
*       returnLength: int
*       targetStringStart: int
*       targetStringLength: int
*   return object
*/
function getSubstring(fullString, returnLength, targetStringStart, targetStringLength){
    let result = {
        text: null,
        targetStart: null,
        targetLength: targetStringLength
    };

    let fullStringLength = fullString.length;
    if (fullString.length <= returnLength || targetStringLength >= returnLength){
        //rare situation
        result['text'] = fullString;
        result['targetStart'] = targetStringStart;
    }else{
        //normal situation
        let singleSideLength = Math.ceil((returnLength - targetStringLength)/2);

        //hadle border issue
        let leftSide = targetStringStart - singleSideLength;
        leftSide = (leftSide>0)?leftSide:0;
        let rightSide = targetStringStart + targetStringLength + singleSideLength;
        rightSide = (rightSide>(fullStringLength-1))?(fullStringLength-1):rightSide;

        let targetStart = 0
        if (leftSide === 0){
            targetStart = targetStringStart;
        }else{
            targetStart = singleSideLength;
        }

        result['text'] = fullString.substring(leftSide, rightSide);
        result['targetStart'] = targetStart;
    }

    return result;

}

export default new Vuex.Store({
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
})
