var app = new Vue({
    el : "#mask",
    data : {
        imgArr : [
            "../picture/0.png",
            "../picture/1.png",
            "../picture/2.png",
            "../picture/3.png"
        ],
        index : 0
    },
    methods : {
        prev : function() {
            this.index--;
        },
        
        next : function() {
            this.index++;
        }
    }
})