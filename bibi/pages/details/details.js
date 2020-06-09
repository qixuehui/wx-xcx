// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // :
    videoInfo: null,
    othersList: [],
    commentData: []
  },
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let videoid = options.id
    // this
    this.getvideo(videoid)
    this.getOthersList(videoid);
    this.getCommentList(videoid);
  },
  getvideo(videoid){
    let that=this;
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/videoDetail?id='+videoid,
      success(res){
        // console.log(res);
        if(res.data.code===0){
          that.setData({
            videoInfo:res.data.data.videoInfo
          })
        } else {
          console.log(res);
        }
      }
    })
  },
   // 获取推荐视频
   getOthersList(videoid){
    const _this = this;
    wx.request({
      url: 'https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/otherList?id='+videoid,
      success(res){
        if(res.data.code === 200) {
          this.setData({
            othersList:res.data
          });
        } else{
          console.log(res);
          
        }
      }
    });
  },

  // 获取评论数据
  getCommentList(videoid){
    const _this = this;
    wx.request({
      url: 'https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/commentLIst?id='+videoid,
      success(res){i
        if(res.data.code === 200) {
          _this.setData({
            commentData:res.data
          });
        } else {
          console.log(res);
          
        }
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})