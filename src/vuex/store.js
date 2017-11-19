import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
Vue.use(Vuex);

const state = {
    sidebarClass: 'active',
    toggleButtonStatus: 'disable',
    allTypes: null,
    allDetails: null,
    allArticles: [],
    article_path: '../../static/articles/',
};

const mutations = {
    toggleSidebar(state){
        state.sidebarClass = (state.sidebarClass=='active')?'disable':'active';
    },

    activeTogglButton(state){
    	state.toggleButtonStatus = '';
    },

    disableToggleButton(state){
    	state.toggleButtonStatus = 'disable';
    },

    fetchAllTypes(state){
        axios.get('../../static/data/types.json').then( (response) => {
            state.allTypes = Object.values(response.data.types);
            // console.log(state.allTypes);
        }, (error) => {
            console.log(error)
        })
    },

    fetchAllDetailsAndArticles(state){
        axios.get('../../static/data/details.json').then( (response) => {
            state.allDetails = Object.values(response.data);
            for (let article of state.allDetails){
            	axios.get(state.article_path +　article.filename).then( (response1) => {
            		state.allArticles.push(response1.data)
            	}, (error1) => {
            		console.log(error)
            	});
            }
        }, (error) => {
            console.log(error)
        })
    },
    
}

export default new Vuex.Store({
    state,
    mutations
})
