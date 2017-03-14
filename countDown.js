function updateTimer(starttime){
  var time = new Date() - starttime;
  return {
    'days':Math.floor(time/(1000*60*60*24)),
    'hours':Math.floor((time/(1000*60*60)%24)),
    'minutes':Math.floor((time/(1000*60))%60),
    'seconds':Math.floor((time/(1000))%60),
    'total':time
  };
}

function animateClock(span){
  span.className = 'turn';
  setTimeout(function(){
    span.className = '';
  },700);
}


function startTimer(id, deadline){
  var timeIntervel = setInterval(function(){
    var clock = document.getElementById(id);
    var timer = updateTimer(deadline);
    clock.innerHTML = '<span>'+timer.days+'</span>'+
                      '<span>'+timer.hours+'</span>'+
                      '<span>'+timer.minutes+'</span>'+
                      '<span>'+timer.seconds+'</span>';
    if (timer.total < 1) {
      clearInterval(timeIntervel);
      clock.innerHTML = '<span>0</span><span>0</span><span>0</span><span>0</span>';
    }

    var spans = clock.getElementsByTagName('span');
    animateClock(spans[3]);
    if(timer.seconds == 59){
      animateClock(spans[2]);
      if(timer.minutes == 59){
        animateClock(spans[1]);
        if(timer.hours == 23){
          animateClock(spans[0]);
        }
      }
    }

  },1000);
}

window.onload = function(){
  var deadline = new Date("February 01, 2017 10:00:00");
  startTimer("clock",deadline);
};
