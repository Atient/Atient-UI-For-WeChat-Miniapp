// components/gradient-color-view/gradient-color-view.js
Component({
  relation :{

  },
  /**
   * 组件的属性列表
   */
  properties: {
    startColor: {
      type: String,
      value: '#000000'
    },
    endColor: {
      type: String,
      value: '#ffffff'
    },
    autoStart: {
      type: String,
      value: "true"
    },
    start: {
      type:String,
      value: "false",
      observer: function(){
        if (this.data.start == 'true') {
          this.triggerEvent("start",{
            event: "Start",
            startColor: this.data.startColor,
            endColor: this.data.endColor,
            duration: this.data.duration
          });
          var that = this;
          var start = this.data.startColor.split('#')[1];
          var end = this.data.endColor.split('#')[1];
          var s = new Array, e = new Array, d = new Array;
          s.push(parseInt(start.slice(0, 2), 16));
          s.push(parseInt(start.slice(2, 4), 16));
          s.push(parseInt(start.slice(4, 6), 16));
          e.push(parseInt(end.slice(0, 2), 16));
          e.push(parseInt(end.slice(2, 4), 16));
          e.push(parseInt(end.slice(4, 6), 16));
          d.push((e[0] - s[0]) / that.data.duration);
          d.push((e[1] - s[1]) / that.data.duration);
          d.push((e[2] - s[2]) / that.data.duration);
          var n = 0;
          var interval = setInterval(function () {
            if (n < that.data.duration) {
              s[0] += d[0]; s[1] += d[1]; s[2] += d[2];
              var n0 = Math.round(s[0]).toString(16);
              var n1 = Math.round(s[1]).toString(16);
              var n2 = Math.round(s[2]).toString(16);
              var now_color = '#' + (n0.length < 2 ? ('0' + n0) : n0) + (n1.length < 2 ? ('0' + n1) : n1) + (n2.length < 2 ? ('0' + n2) : n2);
              that.setData({
                startColor: now_color
              });
              n++;
            } else {
              that.triggerEvent("end", {
                event: "End",
                endColor: that.data.endColor
              });
              that.setData({
                start: false
              });
              clearInterval(interval);
            }
          }, 1);
        }
      }
    },
    height: {
      type: Number,
      value: 100
    },
    width: {
      type: Number,
      value: 100
    },
    duration: {
      type: Number,
      value: 500
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  ready() {
    if(this.data.autoStart == 'true'){
      this.setData({
        start: true
      });
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})
