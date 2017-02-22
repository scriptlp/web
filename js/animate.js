    $(document).ready(function(){
       var _index = 0;
   	   var time;//定时器

       //方块点击切换
   	   $(".banner_bar .imgNum a").click(function(){
           
           $(this).addClass('active').siblings().removeClass('active');
           _index = $(this).index()
           $(".banner_bar .imgBox li").eq(_index).fadeIn().siblings().fadeOut();
           
   	   });

   	   //左右按钮显示
   	   $(".banner_bar").hover(function(){

   	   	   $(".banner_bar .prev").show();
   	   	   $(".banner_bar .next").show();
   	   	   clearInterval(time);
           
   	   },function(){

   	   	   $(".banner_bar .prev").hide();
   	   	   $(".banner_bar .next").hide();
   	   	   time = setInterval(autoShow,1500);
           
   	   });

   	   //左边按钮切换
   	   $(".banner_bar .prev").click(function(){
   	   	  _index--;
   	   	  if(_index < 0){
   	   	  	_index = 3;
   	   	  }
   	   	  animate(_index);
   	   });

   	   //右边按钮切换
   	   $(".banner_bar .next").click(function(){
   	   	   autoShow();
   	   });


   	   //点击按钮切换图片
   	   function animate(_index){
   	   	  $(".banner_bar .imgNum a").eq(_index).addClass("active").siblings().removeClass("active");
   	   	  $(".banner_bar .imgBox li").eq(_index).fadeIn().siblings().fadeOut();
   	   }

   	   //自动轮播
   	    function autoShow(){
             _index++;
             if(_index>3){
                _index = 0;
             }
             animate(_index);
         }
          //定时器
          time = setInterval(autoShow,1500);
         

         /*鼠标悬停在弹出列表的效果*/
         $(".shopClass_show li").hover(function(){

         	$(this).addClass("hover");

         },function(){

         	$(this).removeClass("hover");
         
         });
         
    });
   	   
