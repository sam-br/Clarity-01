import clock from "clock";
import { me as appbit } from "appbit";
import { HeartRateSensor } from "heart-rate";
import { BodyPresenceSensor } from "body-presence";
import { today } from "user-activity";
import { battery } from "power";
import { charger } from "power";
import document from "document";
import * as util from "../common/utils";

// Update the clock every minute
clock.granularity = "minutes";
// Update the <text> elements every tick with the current time
clock.ontick = (evt) => {
  
  let tday = evt.date;
  
  let hours = util.zeroPad(tday.getHours()).toString();  
  let mins = util.zeroPad(tday.getMinutes()).toString();
  
  let weekday = util.day(tday.getDay());
  let monthdayNum = util.zeroPad(tday.getDate()).toString();
  let month = util.month(tday.getMonth());
  
  document.getElementById("h1").text = hours.slice(0,1);
  document.getElementById("h2").text = hours.slice(1,2);  
  document.getElementById("m1").text = mins.slice(0,1);
  document.getElementById("m2").text = mins.slice(1,2);
  
  document.getElementById("day1").text = weekday.slice(0,1);
  document.getElementById("day2").text = weekday.slice(1,2);
  document.getElementById("day3").text = weekday.slice(2,3);
  
  document.getElementById("md1").text = monthdayNum.slice(0,1);
  document.getElementById("md2").text = monthdayNum.slice(1,2);
  
  document.getElementById("mon1").text = month.slice(0,1);
  document.getElementById("mon2").text = month.slice(1,2);
  document.getElementById("mon3").text = month.slice(2,3);
  
  document.getElementById("steps").text = today.adjusted.steps;
  
  const distan = (today.adjusted.distance*0.00062137).toString()
  const distslice = distan.slice(1,2)
  
  if (distslice == ".") {
    document.getElementById("distance").text = distan.slice(0,3)
  } else {
    document.getElementById("distance").text = distan.slice(0,2)
  }
  
  console.log(`distance is: ` + document.getElementById("distance").text)
  
  if (battery.chargeLevel > 66) {
    document.getElementById("timeColon1").style.fill = "lime";
  } else if (battery.chargeLevel > 33) {
    document.getElementById("timeColon1").style.fill = "orange";    
  } else {
    document.getElementById("timeColon1").style.fill = "red";
  }    
  
  console.log(weekday + ` ` + monthdayNum + ` ` + month + `, ` + hours + `:` + mins);
  console.log(`charge: ` + battery.chargeLevel + ` | charging: ` + charger.connected)
}

const bodyPresence = new BodyPresenceSensor();
const heart = new HeartRateSensor();

bodyPresence.addEventListener("reading", () => {

  console.log(`body present: ` + bodyPresence.present);
  
  if (bodyPresence.present == true) {
    heart.addEventListener("reading", () => {
    console.log(`Current heart rate: ${heart.heartRate}`);
    document.getElementById("heart").text = heart.heartRate;
    });
    heart.start();
  } else {
    heart.stop()
    document.getElementById("heart").text = "na";
  }
});
bodyPresence.start();
