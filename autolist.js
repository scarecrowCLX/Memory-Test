$(document).ready(function(){
	$('button').click(function(){
    var arr = $('ul li').toArray();
    var len = arr.length;
    $('ul li').each(function(i){
    	var rand = parseInt(Math.random()*len);
        $('ul').append($('ul li').eq(rand));
    });
    $("li").removeClass('curr').eq(0).addClass('curr');
    $("li").css({"font-size":"23px"});         
   	setTimeout(function() {
   		$("li").css({"font-size":"0"});
   	}, 10000);
   	clearTimeout();
  })
})
