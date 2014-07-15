$(document).ready(function(){
    $(document).keydown(function(e){
        var code=window.event.keyCode || window.event.which;

        switch(code){
            case 37:
        		movePrev();
        		break;
        	case 39:
        		moveNext();
        		break;
        	case 38:
        		moveUp();
        		break;
        	case 40:
        		moveDown();
        		break;
            case 13:
                showNum();
                break;

        }
    });
    var elsList = document.getElementById('box').getElementsByTagName('li');
    var eleW = elsList[0].offsetWidth;
    var boxW = document.getElementById('box').offsetWidth;
    var column = Math.floor(boxW/eleW);
    var rows = Math.ceil(elsList.length/column)
    var len = elsList.length

    var movePrev = function(){
        var index = $("li.curr").prevAll().length;
        if(index == 0) 
        	$("li").removeClass('curr').eq(len-1).addClass('curr'); 
        else 
        	$("li").removeClass('curr').eq(index-1).addClass('curr');
    }
     
    var moveNext = function(){
        var index = $("li.curr").prevAll().length;
        if(index == $("li").length-1) 
        	$("li").removeClass('curr').eq(0).addClass('curr');
        else 
        	$("li").removeClass('curr').eq(index+1).addClass('curr');
    }
    var moveUp = function(){
    	var index = $("li.curr").prevAll().length;
    	if (index >= column) 
    		$("li").removeClass('curr').eq(index-column).addClass('curr'); 
    	else if(index==0 && len==rows*column)
    		$("li").removeClass('curr').eq(len-1).addClass('curr');
        else if ((column > index) && (index > ((len-1) % column)+1))
            $("li").removeClass('curr').eq(index+(rows-2)*column-1).addClass('curr');
        else
            $("li").removeClass('curr').eq(index+(rows-1)*column-1).addClass('curr');
    }
    var moveDown = function(){
    	var index = $("li.curr").prevAll().length;
    	if (index<= (len-1-column))
    		$("li").removeClass('curr').eq(index+column).addClass('curr');
        else if ((index + 1)== (rows*column) || ((len != rows*column) && (index+1)==((rows-1)*column)))
          $("li").removeClass('curr').eq(0).addClass('curr');
        else if (((index + column) >= len) && (index<=(rows-1)*column-1))
            $("li").removeClass('curr').eq(index+1-(rows-2)*column).addClass('curr');
    	else
    		$("li").removeClass('curr').eq(index+1-(rows-1)*column).addClass('curr');
    }
    var showNum = function(){
        var index = $("li.curr").prevAll().length; 
        if (elsList[index].className === "curr")
            elsList[index].style.fontSize="23px";
    }

});
