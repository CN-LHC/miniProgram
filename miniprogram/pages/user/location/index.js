Page({
    callPhone() {
        wx.makePhoneCall({
            phoneNumber: '13650968509'
        })
    },
    activeAddress() {
        wx.openLocation({
            latitude: 23.133099,
            longitude: 113.273605,
            name: '泊雅居',
            address: '广州市越秀区广大路广大二巷6号泊雅居'
        })
    }
})