 $(document).ready(function () {


        function megaHoverOver() {
            $(this).find(".sub").stop().fadeTo('fast', 1).show();

            //Calculate width of all ul's
            (function ($) {
                jQuery.fn.calcSubWidth = function () {
                    rowWidth = 0;
                    //Calculate row
                    $(this).find("ul").each(function () {
                        rowWidth += $(this).width();
                    });
                };
            })(jQuery);

            if ($(this).find(".row").length > 0) { //If row exists...
                var biggestRow = 0;
                //Calculate each row
                $(this).find(".row").each(function () {
                    $(this).calcSubWidth();
                    //Find biggest row
                    if (rowWidth > biggestRow) {
                        biggestRow = rowWidth;
                    }
                });
                //Set width
                $(this).find(".sub").css({ 'width': biggestRow });
                $(this).find(".row:last").css({ 'margin': '0' });

            } else { //If row does not exist...

                $(this).calcSubWidth();
                //Set Width
                $(this).find(".sub").css({ 'width': rowWidth });

            }
        }

        function megaHoverOut() {
            $(this).find(".sub").stop().fadeTo('fast', 0, function () {
                $(this).hide();
            });
        }


        var config = {
            sensitivity: 2, // number = sensitivity threshold (must be 1 or higher)    
            interval: 1, // number = milliseconds for onMouseOver polling interval    
            over: megaHoverOver, // function = onMouseOver callback (REQUIRED)    
            timeout: 1, // number = milliseconds delay before onMouseOut    
            out: megaHoverOut // function = onMouseOut callback (REQUIRED)    
        };

        $("ul#topnav li .sub").css({ 'opacity': '0' });
        $("ul#topnav li").hoverIntent(config);



    });


    $(document).ready(function () {
        //$('a').attr('target', '_blank');

        $('.tabs li').mousemove(function () {
            //最右边的tab不进行任何操作                             
            if ($(this).hasClass('tab-r')) {
                return;
            };
            //添加当前激活的状态
            $(this).siblings().removeClass('active').end()
            .addClass('active');
            //切换tab     
            if ($(this).hasClass('tab-0')) {
                $('.list').hide();
                $('.dairyPopular').show();
                //也可以写成$(this).parent().nextAll('ul:eq(0)').show();,这样的好处是不必制定特定的class类
            } else if ($(this).hasClass('tab-1')) {
                $('.list').hide();
                $('.weeklyPopular').show();
                //也可以写成$(this).parent().nextAll('ul:eq(1)').show();,这样的好处是不必制定特定的class类
            } else if ($(this).hasClass('tab-2')) {
                $('.list').hide();
                $('.exhibitionnews').show();
                //也可以写成$(this).parent().nextAll('ul:eq(1)').show();,这样的好处是不必制定特定的class类
            } else if ($(this).hasClass('tab-3')) {
                $('.list').hide();
                $('.guidenews').show();
                //也可以写成$(this).parent().nextAll('ul:eq(1)').show();,这样的好处是不必制定特定的class类
            };
        });



        $('.mtabs li').mousemove(function () {
            //最右边的tab不进行任何操作                             
            if ($(this).hasClass('tab-r')) {
                return;
            };
            //添加当前激活的状态
            $(this).siblings().removeClass('active').end()
            .addClass('active');
            //切换tab     
            if ($(this).hasClass('mtab-0')) {
                $('.mlist').hide();
                $('.industry').show();
                //也可以写成$(this).parent().nextAll('ul:eq(0)').show();,这样的好处是不必制定特定的class类
            } else if ($(this).hasClass('mtab-1')) {
                $('.mlist').hide();
                $('.country').show();
                //也可以写成$(this).parent().nextAll('ul:eq(1)').show();,这样的好处是不必制定特定的class类
            } else if ($(this).hasClass('mtab-2')) {
                $('.mlist').hide();
                $('.year').show();
                //也可以写成$(this).parent().nextAll('ul:eq(1)').show();,这样的好处是不必制定特定的class类
            };
        });



    });
    $(document).ready(function () {
        $(".select_box input").click(function () {
            var thisinput = $(this);
            var thisul = $(this).parent().find("ul");
            if (thisul.css("display") == "none") {
                if (thisul.height() > 200) { thisul.css({ height: "200" + "px", "overflow-y": "scroll" }) };
                thisul.fadeIn("100");
                thisul.hover(function () { }, function () { thisul.fadeOut("100"); })
                thisul.find("li").click(function () { thisinput.val($(this).text()); thisul.fadeOut("100"); }).hover(function () { $(this).addClass("hover"); }, function () { $(this).removeClass("hover"); });
            }
            else {
                thisul.fadeOut("fast");
            }
        })
        $("#submit").click(function () {
            var endinfo = "";
            $(".select_box input:text").each(function (i) {
                endinfo = endinfo + (i + 1) + ":" + $(this).val() + ";\n";
            })
            alert(endinfo);
        })
    });

    function AutoScroll(obj) {
        $(obj).find("ul:first").animate({
            marginTop: "-25px"//和上面的height一致.marginTop属性设置元素的上外边距。也就是初始显示位置在行的最下方
        }, 800, function () {
            $(this).css({ marginTop: "0px" }).find("li:first").appendTo(this); //之后显示的位置在最上方
        });
    }
    $(function () {
        $t = setInterval('AutoScroll(".scrolltxt")', 2000)//滚动轮显时间间隔，单位毫秒，下同
        //其中setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。这里调用AutoScroll滚动函数
        $(".table").hover(function () { clearInterval($t); }, function () { $t = setInterval('AutoScroll(".scrolltxt")', 2000); });
        //clearInterval() 方法可取消由 setInterval() 设置的 timeout。clearInterval() 方法的参数必须是由 setInterval() 返回的 ID 值,本例入$t。
    })


    $(function () {

        //初始化表单
        AjaxOnSubmit("email_form", "btnSubmit", "/Tools/Submit_json.ashx?action=email");
    });
