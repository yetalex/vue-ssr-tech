import Vuex from 'vuex'

import defaultState from './state/state'
import mutations from './mutations/mutaions'
import getters from './getters/getters'
import actions from './actions/actions'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
  return new Vuex.Store({
    strict: isDev,
    state: defaultState,
    mutations,
    getters,
    actions
  })
}
