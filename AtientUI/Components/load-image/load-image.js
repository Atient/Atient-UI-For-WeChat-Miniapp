// components/load-image/load-image.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    id: {
      type: String,
      value: ''
    },
    src: {
      type: String,
      value: ''
    },
    loadsrc: {
      type: String,
      value: ''
    },
    mode: {
      type: String,
      value: 'aspectFit'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

    Loaded: function (e) {
      this.setData({
        isLoaded: true
      });
      var event = {
        id: this.data.id,
        event: "load",
        content: e
      };
    }
  }
})
