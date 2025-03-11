// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

setInterval(function(){
    let currentTime = new Date();

    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let second = currentTime.getSeconds();

    let twelevHour = hour%12;
    let amPm = hour>12 ? "PM" : "AM"


    let displayTime = `${hour} : ${minute} : ${second}`;
    let amPMDisplay = `${twelevHour} : ${minute} : ${second} ${amPm}`;
    console.log(displayTime);
    console.log(amPMDisplay)
},1000)



