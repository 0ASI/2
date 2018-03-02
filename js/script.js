$(document).ready(function(){

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    $('body').scrollspy({target: ".navbar", offset: 110});   

    $("body a").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var fromTop = 109;

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top  - fromTop
            }, 800, function(){

            });
        }  
    });

    $(".btn-groups .btn").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });

    $(window).resize(function () {
        var viewportWidth = $(window).width();
        if (viewportWidth < 768) {
            $("#aboutus2").removeClass("img-responsive");

        }
        else
        {   
            $("#aboutus2").addClass("img-responsive");
        }
    });

    ! function (d) {
        var c = "portfilter";
        var b = function (e) {
            this.$element = d(e);
            this.stuff = d("[data-tag]");
            this.target = this.$element.data("target") || ""
        };
        b.prototype.filter = function (g) {
            var e = []
            , f = this.target;
            this.stuff.fadeOut( 300, "linear").promise().done(function () {
                d(this).each(function () {
                    if (d(this).data("tag") == f || f == "all") {
                        e.push(this)
                    }
                });
                d(e).show()
            })
        };
        var a = d.fn[c];
        d.fn[c] = function (e) {
            return this.each(function () {
                var g = d(this)
                , f = g.data(c);
                if (!f) {
                    g.data(c, (f = new b(this)))
                }
                if (e == "filter") {
                    f.filter()
                }
            })
        };
        d.fn[c].defaults = {};
        d.fn[c].Constructor = b;
        d.fn[c].noConflict = function () {
            d.fn[c] = a;
            return this
        };
        d(document).on("click.portfilter.data-api", "[data-toggle^=portfilter]", function (f) {
            d(this).portfilter("filter")
        })
    }(window.jQuery);


    (function animatedArrow () {
        $(".arrow-up").animate({bottom:"20px"},900, function () {
            $(this).animate({bottom:"-10px"},900, function () {
                animatedArrow();
            });
        });
    })();

    $(".arrow-up").click(function () {
        $("html,body").animate({
            scrollTop:0
        },800); 
    });

    $('.thumbnail').hover(
        function(){
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
        }
    ); 

    lightbox.option({

        'disableScrolling': true,

    })

    $('.map-container')
        .click(function(){
        $(this).find('iframe').addClass('clicked')})
        .mouseleave(function(){
        $(this).find('iframe').removeClass('clicked')});

});
