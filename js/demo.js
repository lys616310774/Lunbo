    var index=0;
    var picArr=document.getElementsByClassName("pic")[0].getElementsByTagName("li");
    var picLen=picArr.length; 
    var picList=document.getElementsByClassName("pic");   
    var wraps=document.getElementsByClassName("wrap");

//图片变换函数
function change(dex){ 
    var pics=picList[dex].getElementsByTagName("li");
    for(var i=0;i<pics.length;i++){
            wraps[i].className="wrap wt";
            pics[i].className="pt";       
    }
    wraps[dex].className="wrap";
    pics[dex].className="pt pn";       
}

//clear计时器
function autoChangeAgain(){
    autoChange=setInterval(function(){
        if(index<picLen-1){
            index++;
        }
        else{
            index=0;
        }
        change(index);
    },3000);
}

//左右箭頭控制
var prev=document.getElementById("prev");
  prev.onmouseover = function(){ 
    //滑入清除定时器
    clearInterval(autoChange);
  };
  prev.onclick = function(){ 
    //根据index进行上一个图片处理
    index = (index > 0) ? (--index) : (picLen - 1);
    change(index);
  };
  prev.onmouseout = function(){ 
    //滑出则重置定时器
    autoChangeAgain();
  };

var next=document.getElementById("next");
  next.onmouseover = function(){ 
    clearInterval(autoChange);
  };
  next.onclick = function(){ 
    index = (index < picLen-1) ? (++index) : 0;
    change(index);
  };
  next.onmouseout = function(){ 
    autoChangeAgain();
  };

