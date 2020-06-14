import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        current: "1",
        headerClass: "",
        isLoading: true,
    },
    mutations: {
        setHeaderClass(state, name) {
            state.headerClass = name;
        },
        setMenueCurrent(state, name) {
            state.current = name;
        },
        setLoading(state, value) {
            state.isLoading = value;
        }
    },
    actions: {
        Loading(state, value) {
            state.commit('setLoading', true);
            setTimeout(() => {
                state.commit('setLoading', false);
            }, value)
        }
    },
    modules: {}
})