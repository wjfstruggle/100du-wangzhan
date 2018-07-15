$(function(){

    (function(){
        var oLi = $("#menu li"),
    oText = $("#search").find(".form .text"),
    arrText = [
        '例如：荷棠鱼坊烧鱼 或 樱花日本料理',
        '例如：昌平区育新站龙旗广场2号楼609室',
        '例如：万达影院双人情侣券',
        '例如：东莞出事了，大老虎是谁？',
        '例如：北京初春降雪，天气变幻莫测'
    ],
    iNow = 0;
    oText.val(arrText[iNow]);
    oLi.each( function( index ){
        $( this ).click( function(){
            oLi.attr("class","gradient");
            $( this ).attr("class","active");
            iNow = index;
            oText.val(arrText[iNow]);
        });
    });

    //失去焦点
    oText.focus( function(){
        if( oText.val() == arrText[iNow])
        {
            oText.val("");
        }
    });
    oText.blur(function(){
        if( oText.val() == "")
        {
            oText.val(arrText[iNow]);
        }
    });
    })();

    //下载区按钮
    (function(){

       var oDiv = $(".update"),
       btnUp = $("#updateUpBtn"),
       btnDown = $("#updateDownBtn"),
       iSpeed = 0,//速度
       iH = 0,
       oUl = $(".update").find("ul"),
       str = "",
       timer = null,
       arrDate = [
           { 'name':'萱萱', 'time':4, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/' },
			{ 'name':'畅畅', 'time':5, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
			{ 'name':'萱萱', 'time':6, 'title':'国台办回应王郁琦', 'url':'http://www.miaov.com/2013/#about' },
			{ 'name':'畅畅', 'time':7, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/#message' },
			{ 'name':'萱萱', 'time':8, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/' },
			{ 'name':'畅畅', 'time':9, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
			{ 'name':'萱萱', 'time':10, 'title':'国台办回应王郁琦', 'url':'http://www.miaov.com/2013/#about' },
			{ 'name':'畅畅', 'time':11, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/#message' }
       ];
       for( var i = 0; i < arrDate.length;i++)
       {
           str += "<li><a href="+arrDate[i].url+"><strong>"+arrDate[i].name+"</strong> <span>"+arrDate[i].time+"分钟前</span>"+arrDate[i].title+"</a></li>";
       }
       iH = oUl.find("li").height();
       oUl.html(str);

       btnUp.click(function(){
           doMove(-1);
       });
       btnDown.click(function(){
           doMove(1);
       });
       timer = setInterval(function(){
           doMove(-1);
       },2000);
        oDiv.hover(function(){
            clearInterval( timer );
        } ,autoPlay);
       
       function autoPlay(){ 
           clearInterval(timer);
            timer = setInterval(function () {
            doMove(-1)
    }, 3000);
       }
       autoPlay();
       function doMove( index ){
           iSpeed += index;
           if(Math.abs(iSpeed)  > arrDate.length-1)
           {
               iSpeed = 0;
           }
           if( iSpeed > 0){
               iSpeed = -(arrDate.length - 1);
           }
           oUl.stop().animate({"top": iSpeed*iH},2000);
       }
    })();

    /* 选项卡 */
    ( function(){
        var oLi = $(".options").find(".tabNav1 li"),
        oA = $(".tabNav1"),
        oCon = $(".con").find(".tabCon1");
        oCon.hide().eq(0).show();
        oLi.each(function( index ){

            $(this).click(function(){

                oLi.removeClass("active").addClass("gradient");
                $(this).removeClass("gradient").addClass("active");

                oA.find("a").attr("class" , "triangle_down_gray");
                $(this).find("a").attr("class" , "triangle_down_red");

                oCon.hide().eq(index).show();
            });
                });
    })();

    ( function(){
        var oLi = $(".tabNav2 li"),
        oA = $(".tabNav2"),
        oCon = $(".con").find(".tabCon2");
        oCon.hide().eq(0).show();
        oLi.each(function( index ){

            $(this).click(function(){

                oLi.removeClass("active").addClass("gradient");
                $(this).removeClass("gradient").addClass("active");

                oA.find("a").attr("class" , "triangle_down_gray");
                $(this).find("a").attr("class" , "triangle_down_red");
                
                oCon.hide().eq(index).show();
            });
                });
    })();

     ( function(){
        var oLi = $(".tabNav4 li"),
        oA = $(".tabNav4"),
        oCon = $(".tabCon4");
        oCon.hide().eq(0).show();
        oLi.each(function( index ){

            $(this).click(function(){

                oLi.removeClass("active").addClass("gradient");
                $(this).removeClass("gradient").addClass("active");

                oA.find("a").attr("class" , "triangle_down_gray");
                $(this).find("a").attr("class" , "triangle_down_red");
                
                oCon.hide().eq(index).show();
            });
                });
    })();

    ( function(){
        var oLi = $(".tabNav3 li"),
        oA = $(".tabNav3"),
        oCon = $(".tabCon3");
        oCon.hide().eq(0).show();
        oLi.each(function( index ){

            $(this).click(function(){

                oLi.removeClass("active").addClass("gradient");
                $(this).removeClass("gradient").addClass("active");

                oA.find("a").attr("class" , "triangle_down_gray");
                $(this).find("a").attr("class" , "triangle_down_red");
                
                oCon.hide().eq(index).show();
            });
                });
    })();

    /* 日历 */
    ( function(){
        var textDate = $(".calendar").find(".img"),
         oSpan = $(".calendar").find(" h3 span"),
         oImg = $(".today_info").find("img"),
         oStrong = $(".today_info").find("strong"),
         oP = $(".today_info").find("p"), 
         today_info = $(".today_info");
         textDate.hover(function( index ){

            var iLeft = $( this ).parent().position().left + 50;
            var iTop = $( this ).parent().position().top - 35,
            index = $( this ).parent().index()%oSpan.size();
            today_info.show().css({"left":iLeft , "top":iTop});

            //console.log(textDate.parent().position().top); 176px
            //console.log(textDate.parent().position().left);  235px
            //console.log(index);
            oP.text($( this ).attr( "info" )); 
            oStrong.text(oSpan.eq(index).text());
        },function(){
             today_info.hide();
        });
    })();

    /* BBS */
    (function(){
        var oLi = $(".bbs").find("li");
        oLi.each(function(){
            oLi.mouseover( function(){
                oLi.attr("class" , "");
                $(this).attr("class", "active");
            });
        });
    })();

    /* 图片轮播 */
    (function(){
        var oDiv = $(".fade"),
            oUlli = oDiv.find("ul li"),
            oOlli = oDiv.find("ol li"),
            oP = oDiv.find("p"),
            str = [
                "爸爸去哪儿啦~", "人像摄影中的光影感", "娇柔妩媚、美艳大方"
            ],
            iSpeed = 0,
            timer = null;
            startMove();
            timer = setInterval(function(){
                iSpeed ++;
                iSpeed%=str.length;
                startMove();
            },2000);

            function startMove(){
                oUlli.each(function(index) {
                    if( index != iSpeed )
                {
                    oUlli.eq(index).fadeOut().css("zIndex" , 1);
                    oOlli.eq(index).removeClass("active");
                }
                else
                {
                    oUlli.eq(index).fadeIn().css("zIndex" , 2);
                    oOlli.eq(index).addClass("active");
                }
                });
                oP.text(str[iSpeed]);
            }
    })();

});