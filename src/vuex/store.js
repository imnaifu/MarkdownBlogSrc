import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
    contentClass: 'disable',
    sidebarClass: 'active'
};

const mutations = {
    toggleSidebar(state){
        state.sidebarClass = (state.sidebarClass=='active')?'disable':'active';
        state.contentClass = (state.sidebarClass=='active')?'disable':'active';
    } 
}

export default new Vuex.Store({
    state,
    mutations
})
