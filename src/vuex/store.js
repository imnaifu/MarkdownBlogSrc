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
    meImg: 'avatar.jpg',
    meText: 'Hello',
    navText: ['Me', 'Resume', 'Blog'] 
};

const mutations = {
    setSidebar(state, value){
        state.sidebarStatus = value;
    },
    
    // disableSidebar(state){
    //     state.sidebarStatus = 'disable';
    // },

    setResume (state, value){
        state.enableResume = value;
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
            if (enableResume === true || enableResume === 'true'){
                store.commit('setResume', true);
            }else{
                store.commit('setResume', false);
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
            for (let article of articles){
                store.commit('setAllDetails', article);
                store.commit('setAllTypes', article.type);
                store.commit('setAllArticleTitle', article.title);

                axios.get(state.articlePath +　article.filename).then( (response1) => {
                    store.commit('setAllArticles',  {
                        "title": article.title,    
                        "content":response1.data
                    });
                
                }, (error1) => {
                    console.log(error);
                });
            }
            store.commit('setAllArticlesFetched', true);
        }, (error) => {
            console.log(error)
        });
    },

}

export default new Vuex.Store({
    state: state,
    mutations: mutations,
    actions: actions
})
