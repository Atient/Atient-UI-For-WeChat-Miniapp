// components/float-button-list/float-button-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    background: {
      type: String,
      value: '#62b900'
    },
    list: {
      type: Array,
      value: []
    },
    length: {
      type: Number,
      value: 50
    },
    direction: {
      type: String,
      value: "up"
    },
    top: {
      type: String,
      value: ''
    },
    duration: {
      type: Number,
      value: 500
    },
    singleTap: {
      type: String,
      value: "true"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    topAmt: null,
    buttonAmts: [],
    listed: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    TopTap: function(e){
      var that = this;
      var k = 0;
      this.setData({
        listed: !this.data.listed
      });
      switch(that.data.direction){
        case "up":case "left": k=-1.2;break;
        case "down": case "right": k=1.2;break;
        default: k=1.2;
      }
      if(this.data.listed){
        var amt = wx.createAnimation({
          duration: that.data.duration,
          timingFunction: "linear",
          delay: 0,
          transformOrigin: "50% 50% 0",
        });
        amt.rotate(45).step();

        var bamt = wx.createAnimation({
          duration: that.data.duration,
          timingFunction: "linear",
          delay: 0,
          transformOrigin: "50% 50% 0",
        });
        var bamts = [];
        switch(that.data.direction){
        case "left":case "right":  
          for(var i in that.data.list){
            bamt.translateX(k*that.data.length*i).step();
            bamts.push(bamt.export());
          }
          this.setData({
            topAmt: amt.export(),
            buttonAmts: bamts
          });break;
        case "up": case "down":default:
          for (var i in that.data.list) {
            bamt.translateY(k * that.data.length * i).step();
            bamts.push(bamt.export());
          }
          this.setData({
            topAmt: amt.export(),
            buttonAmts: bamts
          });break;
        }
      }else{
        var amt = wx.createAnimation({
          duration: that.data.duration,
          timingFunction: "linear",
          delay: 0,
          transformOrigin: "50% 50% 0",
        });
        amt.rotate(0).step();
        var bamt = wx.createAnimation({
          duration: that.data.duration,
          timingFunction: "linear",
          delay: 0,
          transformOrigin: "50% 50% 0",
        });
        var bamts = [];
        for (var i in that.data.list) {
          bamt.translate(0,0).step();
          bamts.push(bamt.export());
        }
        this.setData({
          topAmt: amt.export(),
          buttonAmts: bamts
        });
      }
    },
    Tap: function(e){
      this.triggerEvent("itemtap", {current: e.currentTarget.id});
      if(this.data.singleTap == "true"){
        this.TopTap();
      }
    }
  }
})
