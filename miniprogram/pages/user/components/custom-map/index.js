Component({
  data: {
    latitude: 23.133099,
    longitude: 113.273605,
    markers: [{
      id: 1,
      latitude: 23.133099,
      longitude: 113.273605,
      title: '泊雅居酒店式公寓',
      label: {
        content: '泊雅居酒店式公寓',
        color: '#0cab06',
        fontSize: 14,
      }
    }],
  },
  ready: function (e) {
    this.mapCtx = wx.createMapContext('myMap', this)
  },
  properties: {

  },
  methods: {
    
  }
})