/*
1、获取歌曲
    请求地址：https://autumnfish.cn/search
    请求方法：get
    请求参数：keywords

2、歌曲url获取接口
    请求地址：https://autumnfish.cn/song/url
    请求方法：get
    请求参数：id（歌曲id）
    响应内容：歌曲url地址


3、歌曲封面获取接口
    请求地址：https://autumnfish.cn/song/detail
    请求方法：get
    请求参数：ids（歌曲id）
    响应内容：歌曲详情（包括封面信息）

4、热门评论获取
    请求地址：https://autumnfish.cn/comment/hot?type=0
    请求方法：get
    请求参数：id（歌曲id，地址中的type限定为0）
    响应内容：歌曲热门评论

5、mv地址获取
    请求地址：https://autumnfish.cn/mv/url
    请求方法：get
    请求参数：id（mvid，为0表示没有mv）
    相应内容：mv的地址
*/


var app = new Vue({
    el : "#player",

    data : {
        query : "",
        musicList : [],
        musicUrl : "",
        musicCover : "",
        hotComments : [],
        isPlaying : false,
        //遮罩层的显示状态
        isShow : false,
        //mv地址
        mvUrl : ""


    },

    methods : {
        searchMusic : function() {
            var that = this;
            axios.get("https://autumnfish.cn/search?keywords="+this.query)
                .then(function(response){
                    //console.log(response);
                    that.musicList = response.data.result.songs;
                    //console.log(response.data.result.songs);
                },function(err){});
        },

        playMusic : function(musicId) {
            var that = this;
            axios.get("https://autumnfish.cn/song/url?id="+musicId)
            .then(function(response){
                that.musicUrl = response.data.data[0].url;
            },function(err){})

            //歌曲详情获取
            axios.get("https://autumnfish.cn/song/detail?ids="+musicId)
                .then(function(response){
                    that.musicCover = response.data.songs[0].al.picUrl;
                },function(err){})


            //歌曲评论获取
            axios.get("https://autumnfish.cn/comment/hot?type=0&id="+musicId)
                .then(function(response){
                    that.hotComments = response.data.hotComments;
                },function(err){})
        },

        play : function() {
            this.isPlaying= true;
        },

        pause : function() {
            this.isPlaying = false;
        },
        //播放mv
        playMv : function(mvid) {
            this.pause();
            var that = this;
            axios.get("https://autumnfish.cn/mv/url?id="+mvid)
                .then(function(response) {
                  // console.log(response);
                   //console.log(response.data.data.url);
                   that.isShow = true;
                   that.mvUrl = response.data.data.url;
                   console.log(response.data.data.st);

                },function(err) {})
            
        },

        hide : function() {
            let videoplay = document.getElementById("video");
            let hide = document.getElementById("hide");
            if(hide) {
                hide.onclick = function() {
                    videoplay.pause();
                }
            }
            this.isShow = false;

        },
    }
})

