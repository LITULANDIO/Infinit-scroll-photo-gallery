import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import photos from '@/modules/photos/store';
 
export default createStore({
  state:{},
  getters:{},
  mutations:{},
  actions:{},
  modules: {
    photos
  },
  plugins: [createPersistedState()],

})

