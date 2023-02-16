Page({
  data: {
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

  onShow() {
    
  },

  init() {
    this.fetUseriInfoHandle();
  },

  fetUseriInfoHandle() {
    wx.getSetting({
      success (res){
        if (res.authSetting['scope.userLocation']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })
  },



  gotoUserEditPage() {
    const { currAuthStep } = this.data;
    if (currAuthStep === 2) {
      wx.navigateTo({ url: '/pages/usercenter/person-info/index' });
    } else {
      this.fetUseriInfoHandle();
    }
  },

});
