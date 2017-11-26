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
    enableResume: false,
    enableAddNew: false,
    meImg: 'avatar.jpg',
    meText: 'Hello',
    navText: ['Me', 'Resume', 'Blog'],

    //search
    maxReturnLength: 200,
    search: null,
    searchResults: {
        showSearch: false
    }
};

const getters = {
    getAllArticles: (state) => {
        return state.allArticles;
    }
};

const mutations = {

    //search
    setSearch(state, value){
        state.search = value;
    },
    setSearchResults(state, value){
        state.searchResults = value;
    },
    setShowSearch(state, value){
        state.searchResults.showSearch = value;
    },

    setSidebar(state, value){
        state.sidebarStatus = value;
    },
    setResume (state, value){
        state.enableResume = value;
    },
    setAddNew (state, value){
        state.enableAddNew = value;
    },

    setNavText (state, value){
        state.navText = value;
    },

    setMeImg (state, value){
        state.meImg = value;
    },

    setMeText (state, value){
        state.meText = value;
    },

    setResumeData (state, value){
        state.resumeData = value;
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

    setAllArticlesFetched (state, value){
        state.allArticlesFetched = value;
    }, 

}

const actions = {
    actionFetch (store){
        axios.get('../../static/config/config.json').then( (response) => {

            let enableResume = response.data.enable_resume;
            let enableAddNew = response.data.enable_add_new;
            if (enableResume === true || enableResume === 'true'){
                store.commit('setResume', true);
            }else{
                store.commit('setResume', false);
            }
            if (enableAddNew === true || enableAddNew === 'true'){
                store.commit('setAddNew', true);
            }else{
                store.commit('setAddNew', false);
            }

            let navText = response.data.nav_text;
            if (navText.length !== 3){
                console.log('nav_text must be a length 3 array');
            }else{
                store.commit('setNavText', navText);
            }

            store.commit('setMeImg', response.data.me_img);
            store.commit('setMeText', response.data.me_text);

            if (store.state.enableResume){
                axios.get('../../static/data/resume/resume.md').then( (response1) => {
                    store.commit('setResumeData', response1.data);
                }, (error) => {
                    console.log(error)
                });                
            }
        }, (error) => {
            console.log(error)
        });

        axios.get('../../static/data/article_info.json').then( (response) => {
            let articles = Object.values(response.data.articles);
            let len = articles.length;

            for (let i=0; i<len; i++){
                let article = articles[i]
                store.commit('setAllDetails', article);
                store.commit('setAllTypes', article.type);
                store.commit('setAllArticleTitle', article.title);

                axios.get(state.articlePath +　article.filename).then( (response1) => {
                    store.commit('setAllArticles',  {
                        "title": article.title,    
                        "content":response1.data
                    });
                    if (i == len-1){
                        //set it true when complete getting the last one
                        store.commit('setAllArticlesFetched', true);
                    }
                }, (error1) => {
                    console.log(error);
                });
            }
        }, (error) => {
            console.log(error)
        });
    },

    actionSetSearch(store, value){
        store.commit('setSearch', value.value);
        console.log(value);
        let searchResults = {};
        if (value.value.trim().length > 0){
            //only search when string not empty
            
            // console.log(store.state.allArticles);
            let allArticles = store.state.allArticles;
            let search = store.state.search.toLowerCase(); //to lowercase for search
            searchResults = {
                'showSearch': true,
                'hasResult': false,
                'results':{}
            };
            for (let title in allArticles){
                //search here
                allArticles[title] = allArticles[title].toLowerCase(); //to lowercase for search
                if (allArticles[title].indexOf(search) !== -1){
                    let article = {};
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
                    article['resultStart'] = result['targetStart'];
                    article['resultLength'] = result['targetLength'];
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
