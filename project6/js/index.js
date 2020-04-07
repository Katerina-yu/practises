var app = new Vue({
    el : "#todoapp",

    data : {
        img_src : "../picture/remove.png",
        undoList : [
            
        ],
        inputValue : " ",
        
        doneList : [
            
        ]

    },

    methods : {
        add : function() {
            if(this.inputValue.trim() == ""){
                alert("内容不能为空！");
            } else {
                this.undoList.push(this.inputValue);
                this.inputValue = "";
            }
        },

        
        undoRemove : function(index) {
            this.undoList.splice(index,1);
        },

        doneRemove : function(index) {
            this.doneList.splice(index,1);
        },
        


        done : function(index) {
            this.doneList.push(this.undoList[index]);
            this.undoRemove(index);
            
        },

        undo : function(index) {
            this.undoList.push(this.doneList[index]);
            this.doneRemove(index);
            
            
        },

        clear : function() {
            if(confirm("点击确定将删除您记录的所有内容")) {
                this.undoList = [];
                this.doneList = [];
            } else {
                
            }

        }
    }
})

$(document).ready(function(){
    $("#footerimg").mouseenter(function () { 
        $("#footerimg").css("content","url(../picture/clear_hover.png)");
        $("#footerp").css("color","#e74c3c");
    });
    $("#footerimg").mouseout(function () { 
        $("#footerimg").css("content","url(../picture/clear.png)");
        $("#footerp").css("color","grey");
    });
    
});
