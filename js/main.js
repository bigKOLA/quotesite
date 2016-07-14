	$(function(){  
		//判断是否是移动端
    var MobileUA = (function() {  
        var ua = navigator.userAgent.toLowerCase();  
  
        var mua = {  
            IOS: /ipod|iphone|ipad/.test(ua), //iOS  
            IPHONE: /iphone/.test(ua), //iPhone  
            IPAD: /ipad/.test(ua), //iPad  
            ANDROID: /android/.test(ua), //Android Device  
            WINDOWS: /windows/.test(ua), //Windows Device  
            TOUCH_DEVICE: ('ontouchstart' in window) || /touch/.test(ua), //Touch Device  
            MOBILE: /mobile/.test(ua), //Mobile Device (iPad)  
            ANDROID_TABLET: false, //Android Tablet  
            WINDOWS_TABLET: false, //Windows Tablet  
            TABLET: false, //Tablet (iPad, Android, Windows)  
            SMART_PHONE: false //Smart Phone (iPhone, Android)  
        };  
  
        mua.ANDROID_TABLET = mua.ANDROID && !mua.MOBILE;  
        mua.WINDOWS_TABLET = mua.WINDOWS && /tablet/.test(ua);  
        mua.TABLET = mua.IPAD || mua.ANDROID_TABLET || mua.WINDOWS_TABLET;  
        mua.SMART_PHONE = mua.MOBILE && !mua.TABLET;  
  
        return mua;  
    }());  
  
    if (MobileUA.SMART_PHONE) {  
        // 移动端链接地址  
      
      topNavSticky();
      zmIndexSticky();
     	
    };


    //导航栏固定
    function topNavSticky () {
        var $topNav = $("#topNav");
        var defaultTop = 42;
        $(window).scroll(function(){
            var scroH = $(this).scrollTop();
            if(scroH > defaultTop){
                $topNav.addClass("fixed");
            }else{
                $topNav.removeClass("fixed");
            }

        });
    }

    //字幕索引固定
    function zmIndexSticky(){
        var $zmIndexBox = $(".zm-index-box");
        var $zmIndexBoxFixed = $(".zm-index-box.fixed");
        var defaultTop = $zmIndexBox.offset().top + $zmIndexBox.height() -147;

        $(window).scroll(function(){
            var scroH = $(this).scrollTop();
            if(scroH > defaultTop){
                 console.log(defaultTop);
                $zmIndexBoxFixed.show();
            }else{
                $zmIndexBoxFixed.hide();
            }

        });

    }


});  