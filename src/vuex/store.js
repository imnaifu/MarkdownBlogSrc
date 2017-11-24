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

    search:'',
    searchResults:{}
};

const getters = {
    getAllArticles: (state) => {
        return state.allArticles;
    }
};

const mutations = {
    setSearch(state, value){
        state.search = value.value;
    },
    setSearchResults(state, value){
        state.searchResults = value;
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
        store.commit('setSearch', value);
        // console.log(store.state.allArticles);
        let allArticles = store.state.allArticles;
        let search = store.state.search;
        let searchResults = {
            hasResult:false,
            results:{}, 
        };
        for (let title in allArticles){
            if (allArticles[title].indexOf(search) !== -1){
                searchResults['results'][title] = allArticles[title];
            }
        }

        //has results
        if (Object.keys(searchResults['results']).length !== 0){
            searchResults['hasResult'] = true;
        }

        store.commit('setSearchResults', searchResults);
        console.log(searchResults);
    }
}

export default new Vuex.Store({
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
})
