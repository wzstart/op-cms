// initial state
const state = {
  collapse: false,
  list: [
    {
      id: '1',
      title: '商品管理',
      path: '/list/table-list'
    },
    {
      id: '2',
      title: '用户包裹管理',
      path: '/list/table-list'
    },
    {
      id: '3',
      title: '应用管理',
      icon: 'unorderedlist',
      path: '/list/table-list'
    },
    {
      id: '4',
      title: 'SDK下载',
      icon: 'unorderedlist',
      path: '/list/table-list'
    },
    {
      id: '5',
      title: '数据查询',
      icon: 'unorderedlist',
      path: '/list/table-list'
    },
    {
      id: '6',
      title: '权限管理',
      icon: 'unorderedlist',
      path: '/list/table-list'
    }]
}

// actions
const actions = {
  toggleCollapse ({ commit, state }) {
    commit('changeCollapse', !state.collapse)
  }
}

// mutations
const mutations = {
  changeCollapse (state, val) {
    state.collapse = val
  }
}
// getters
const getters = {
  navList: state => state.list,
  navCollapse: state => state.collapse
}

export default {
  state,
  getters,
  actions,
  mutations
}
