/**
 * Created by 孙国庆的小剌剌 on 2017/6/12.
 */
var my=new Swiper(".swiper-container",{
    direction: 'vertical',

    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    }


})



$(".yinyue").tap(
    function(){
        $(this).toggleClass("yilei");

        if($("#audio").get(0).paused){
            $("#audio").get(0).play();
        }
        else{$("#audio").get(0).pause();}


    }
);