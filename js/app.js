const allBox = document.querySelector('.content').children;
const boxWidth = allBox[0].querySelector('.inner').offsetWidth;
const boxHeight = allBox[0].querySelector('.inner').offsetHeight;
const div = document.createElement('div')
    div.style.position = 'absolute'
    div.style.height = boxHeight + 'px';
    div.style.width = boxWidth + 'px';
    div.style.background = 'blue';
    div.style.transition = '1s';
    div.style.left = allBox[0].querySelector('.inner').offsetLeft + 'px';
    div.style.top = allBox[0].querySelector('.inner').offsetTop + 'px';
    document.querySelector('.grid-box').appendChild(div)

    for(i = 0; i < allBox.length; i++) {
        allBox[i].querySelector('.inner').addEventListener('mousemove', function() {
            const height = this.offsetHeight;
            const width = this.offsetWidth;
            const x = this.offsetLeft
            const y = this.offsetTop
            div.style.left = x + 'px';
            div.style.top = y + 'px';
            div.style.width = width + 'px';
            div.style.height = height + 'px';

        })
    }



//-----------------API
function updateClock(){
    var currentTime = new Date ();
    var currentHours = currentTime.getHours ( );
    var currentMinutes = currentTime.getMinutes ( );
    var monthNames = [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ];
    	currentTime.setDate(currentTime.getDate());    
    	currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    	currentHours = ( currentHours == 0 ) ? 12 : currentHours;
    	var currentTimeString = currentHours + ":" + currentMinutes;
    $(".time-cont").html(currentTimeString); 
    $('.date').html(currentTime.getDate() + ' ' + monthNames[currentTime.getMonth()]);
}
$.fn.togglePlaceholder = function(){
    return this.each(function() {
        $(this)
        .data("holder", $(this).attr("placeholder"))
        .focusin(function(){
            $(this).attr('placeholder','');
        })
        .focusout(function(){
            $(this).attr('placeholder',$(this).data('holder'));
        });
    });
};
$(document).ready(function(){
	setInterval('updateClock()', 200);
           
});