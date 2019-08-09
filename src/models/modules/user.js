// 此处用来实现用户数据
const state = {
  userInfo: {
    userName: '苏思洋',
    avatar: 'http://img3.a0bi.com/upload/ttq/20140813/1407915088900.jpg',
    list: [{
      title: '个人中心',
      icon: '',
      path: '/user-center'
    }, {
      title: '设置',
      icon: '',
      path: '/setting'
    }]
  }
}

// getters
const getters = {
  userInfo: state => state.userInfo
}

export default {
  state,
  getters
}
