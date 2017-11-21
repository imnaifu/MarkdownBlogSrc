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
    imgPath: 'static/data/img/',
    resumeData: '',
    enableResume: false,
    meImg: 'avatar.jpg',
    meText: 'Hello',
    navText: ['Me', 'Resume', 'Blog'] 
};

const mutations = {
    activeSidebar(state){
        state.sidebarStatus = 'active';
    },
    disableSidebar(state){
        state.sidebarStatus = 'disable';
    },

    fetchConfig(state){
        axios.get('../../static/config/config.json').then( (response) => {

            let enableResume = response.data.enable_resume;
            if (enableResume === true || enableResume === 'true'){
                state.enableResume = true;
            }else{
                state.enableResume = false;
            }

            let navText = response.data.nav_text;
            if (navText.length !== 3){
                console.log('nav_text must be a length 3 array');
            }else{
                state.navText = navText;
            }

            state.meImg = response.data.me_img;
            state.meText = response.data.me_text;
            // state.allTypes = response.data.article_types;

            if (state.enableResume){
                axios.get('../../static/data/resume/resume.md').then( (response1) => {
                    state.resumeData = response1.data;
                }, (error) => {
                    console.log(error)
                });                
            }

        }, (error) => {
            console.log(error)
        })
    },

    fetchAllDetailsAndArticles(state){
        axios.get('../../static/data/article_info.json').then( (response) => {
            let articles = Object.values(response.data.articles);
            for (let article of articles){
                state.allDetails[encodeURI(article.title)] = article;
                state.allTypes.push(article.type);
                state.allArticleTitle.push(encodeURI(article.title));
            	axios.get(state.articlePath +　article.filename).then( (response1) => {
            		state.allArticles[encodeURI(article.title)] = response1.data
            	}, (error1) => {
            		console.log(error)
            	});
            }
            console.log(state.allArticles);
            // console.log(state.allDetails);
        }, (error) => {
            console.log(error)
        })
    },
    

}

export default new Vuex.Store({
    state,
    mutations
})
