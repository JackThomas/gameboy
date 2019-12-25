import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX);

export const store = new VueX.Store({
    state: {
        resolution: 0
    },
    mutations: {
        change(state, resolution) {
            state.resolution = resolution
        }
    },
    getters: {
        resolution: state => state.resolution
    }
})