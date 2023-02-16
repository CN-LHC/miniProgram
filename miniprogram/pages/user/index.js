Page({
  data: {
    img1: 'https://tdesign.gtimg.com/miniprogram/images/example1.png',
    currAuthStep: 1,
    userInfo: {
      avatarUrl: '',
      nickName: '正在登录...',
      phoneNumber: '',
    },
  },
  onLoad() {
    this.init()
  },
  onShow() {},
  init() {
    this.getScopeInfo();
  },
  getUserInfo() {
    const _that = this
    wx.getUserInfo({
        success: function(res) {
            _that.setData({
                userInfo: {
                    avatarUrl: res.userInfo.avatarUrl,
                    nickName: res.userInfo.nickName,
                    gender: res.userInfo.gender,
                    phoneNumber: res.userInfo.phoneNumber || ''
                },
                currAuthStep: 2,
            })
        }
    })
  },
  getScopeInfo() {
    const _that = this
    wx.getSetting({
      success (res){
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          _that.getUserInfo()
        } else {
            wx.authorize({
                scope: 'scope.userInfo',
                success () {
                    _that.getUserInfo()
                }
            })
        }
      }
    })
  },
  gotoUserEditPage() {
    const { currAuthStep } = this.data;
    if (currAuthStep === 1) {
        this.getScopeInfo();
    }
  },

});
