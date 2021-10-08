import { createStore } from 'vuex'
import itemsModule from './modules/items'

export default createStore({
  modules: {
    itemsModule
  }
})
