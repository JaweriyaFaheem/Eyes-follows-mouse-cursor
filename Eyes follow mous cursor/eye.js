//Salacting the eye div
let eye_ref = document.querySelectorAll(".eye");

//mousemove for devices with mouse and touchmouve for touchscreen devices
let events = ["mousemove", "touchmove"];

//Check for touch screen
function IisTouchDevice(){
    try{
        document.createEvent("TouchEvent");
        return true;
    }
    catch(e){
        return false;
    }
}

//Same functin for both evnets
events.forEach((eventType) => {
    document.body.addEventListener(eventType, (event) => {
        eye_ref.forEach((eye) => {
            /*getBoundingClientRect() method returns the postion relative the viewport */
            let eyeX = eye.getBoundingClientRect().left + eye.clientWidth / 2;
            let eyeY = eye.getBoundingClientRect().top + eye.clientHeight / 2;
            

            /*ClientX and ClientY return the postion of clients cursor from top left of the screen */
            var x = !IisTouchDevice() ? event.clientX : event.touches[0].clientX;
            var y = !IisTouchDevice() ? event.clientY : event.touches[0].cleintY;
       

        
        /*
        Subtract x position of mouse from x position of eye and y position of mouse from y posotion of eye.
        Use atan2(returns angle in redians)
        */

        let radian = Math.atan2(x - eyeX, y-eyeY);
        //Convert Radians to Degrees
        let rotationDegrees = radian * (180 / Math.PI) * -1 + 180;
        //Rotate the eye
        eye.style.transform = "rotate(" + rotationDegrees + "deg)";

       });
    });
});