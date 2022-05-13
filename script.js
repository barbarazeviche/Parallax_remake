let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
//.to(".text", 2,{x:500})//(grab the file, add duration,and what do we want to do:we want to change the osition of x to 500)
//.fromTo(".text", {opacity:0}, {opacity:1, duration:3})//opacity starts at 0, ends at 1, for the duration of 3sec
//.to(".content-images", 2,{opacity:0},"-=2");//last param makes it start at the same time as first one,-2 sec, so same as .text
.to(".horseRider", 3, {y:-300})//.horseRider moves up 300
.to(".horseDrinking", 3, {y:-200}, "-=3")//.horseDrinking moves up 200
.fromTo(".bg1",{y:-50},{y:0, duration:3},"-=3" )//moves background from y -50 to y 0, the same duration as rest (3)
.to(".content", 3, {top:"0%"}, "-=3")//after setting Pin to element section, we want the .content(images of mountains) to move all the way to the top (0%) of section at the same time as animation , so -=3
.fromTo(".content-images",{opacity:0}, {opacity:1, duration:3})
.fromTo(".text",{opacity:0}, {opacity:1, duration:3})

let scene = new ScrollMagic.Scene({//we create a new scene, an animation
  triggerElement:"section",//when do we want it to start? meaning here immediatly in this case
  duration:"300%",//at what speed you want the animations to be activated
  triggerHook:0 //where do you want to start hooking on the html, we want it to start in the first element, meaning zero
  //if we wanted it to start once  we hit the second element, then we should put value 1, and so on for whole the elements html, can have 0.5
})

.setTween(timeline)//hook up the animation to scene
.addTo(controller)
//now we want to pin page
.setPin("section")