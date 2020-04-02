var app = new Vue({
    el : "#app",
    data : {
        num : 1
    },
    methods : {
        add : function() {
            if(this.num<10) {
                this.num++;
            } else {
                alert("别点啦，不能再多啦！");
            }  
        },
        sub : function() {
            if(this.num>0) {
                this.num--;
            } else {
                alert("别点啦，不能再少啦！");
            }
        }
    }
})