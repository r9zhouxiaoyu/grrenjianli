/**
 * Created by ������С���� on 2017/6/12.
 */
var my=new Swiper(".swiper-container",{
    direction: 'vertical',

    onInit: function(swiper){ //Swiper2.x�ĳ�ʼ����onFirstInit
        swiperAnimateCache(swiper); //���ض���Ԫ��
        swiperAnimate(swiper); //��ʼ����ɿ�ʼ����
    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper); //ÿ��slide�л�����ʱҲ���е�ǰslide����
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