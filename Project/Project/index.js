document.getElementById('showCalendar').addEventListener('click', function() {
    var iframe = document.createElement('iframe');
    iframe.src = "https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=YOUR_TIME_ZONE"; // Replace with your calendar embed URL
    iframe.style.border = 0;
    iframe.width = 800;
    iframe.height = 600;
    iframe.frameborder = 0;
    iframe.scrolling = "no";

    document.getElementById('calendarContainer').appendChild(iframe);
});


function display_login(){
    var poupUser=document.getElementsByClassName("popup-user")[0];
    
    poupUser.style.display='block';
    setTimeout(function(){
        poupUser.classList.add('show');
    },50);

}