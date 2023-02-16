// miniprogram/components/textComponent/index.js
const { isMac } = require('../../envList.js');

Component({

  /**
   * 页面的初始数据
   */
  data: {
    tipText: isMac ? 'sh ./uploadCloudFunction.sh' : './uploadCloudFunction.bat'
  },
  properties: {
   
  },
  observers: {
   
  },
  methods: {
    copyShell() {
      wx.setClipboardData({
        data: this.data.tipText,
      });
    },
  }

});
