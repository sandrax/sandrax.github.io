// add padding top to show content behind navbar
$(document).ready(function(){
    console.log("plesase")
    // navbar scrolling
    $("#nav-placeholder").load("docs/nav.html", function() {
        console.log($('.navbar').outerHeight());
        $('#home').css('padding-top', $('.navbar').outerHeight() + 'px')
        if ($('.smart-scroll').length > 0) { // check if element exists
            var last_scroll_top = 0;
            $(window).on('scroll', function() {
                scroll_top = $(this).scrollTop();
                if(scroll_top < last_scroll_top) {
                    $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
                }
                else {
                    $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
                }
                last_scroll_top = scroll_top;
            });
        }
    });

    console.log("wtf")
    console.log($('.active'))
    $(".active").text("asdfasd")
    console.log($("#test"));

    $( ".ml-auto .nav-item" ).bind( "click", function(event) {
        event.preventDefault();
        var clickedItem = $( this );
        $( ".ml-auto .nav-item" ).each( function() {
            console.log(clickedItem);
            $( this ).removeClass( "active" );
        });
        clickedItem.addClass( "active" );
    });

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    var d = new Date();
    var day = days[d.getDay()];
    var month = months[d.getMonth()];
    var date = d.getDate(); 
    var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

    const birth = new Date("10/15/1999");
    var diffTime = Math.abs(d - birth)

    var now = day + " " + month + " " + date + " " + time;
    $("#last-login").text("Last login: " + now);

    var online = "67"
    $("#online-since").text("Online for " + diffTime);
});
