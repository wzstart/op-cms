const state = {
  list: [],
  inited: false,
  disable: false // 认证状态
}
if (state.disable) {
  console.log('%c 您现在启用Authorized组件，请勿放到生产环境', 'font-size:16px;color:red')
}
const getters = {
  authList: state => state.list,
  authInited: state => state.disable || state.inited,
  authDisable: state => state.disable
}

const actions = {
  fetchAuthList ({ commit, state }) {
    // eslint-disable-next-line
    return new Promise((reslove, reject) => {
      if (state.inited) {
        reslove()
      } else {
        // 该出替换为请求认证路由列表的接口
        setTimeout(() => {
          commit('SET_AUTH_LIST', ['/aaa', '/bccce/'])
          reslove()
        }, 1000)
      }
    })
  }
}

const mutations = {
  SET_AUTH_LIST (state, data) {
    state.list.push(...data)
    state.inited = true
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
