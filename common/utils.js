// Add zero in front of numbers < 10
export function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

export function day(weekdayNum) {
  let weekday = "";
    switch(weekdayNum) {
      case 0:
        weekday = "SUN";
        break;
      case 1:
        weekday = "MON";
        break;
      case 2:
        weekday = "TUE";
        break;
      case 3:
        weekday = "WED";
        break;
      case 4:
        weekday = "THU";
        break;
      case 5:
        weekday = "FRI";
        break;
      case 6:
        weekday = "SAT";
        break;
      default:
        weekday = "ERR";
  }
  return weekday
}

export function month(monthNum) {
  let month = "";
    switch(monthNum) {
      case 0:
        month = "JAN";
        break;
      case 1:
        month = "FEB";
        break;
      case 2:
        month = "MAR";
        break;
      case 3:
        month = "APR";
        break;
      case 4:
        month = "MAY";
        break;
      case 5:
        month = "JUN";
        break;
      case 6:
        month = "JUL";
        break;
      case 7:
        month = "AUG";
        break;
      case 8:
        month = "SEP";
        break;
      case 9:
        month = "OCT";
        break;
      case 10:
        month = "NOV";
        break;
      case 11:
        month = "DEC";
        break;
      default:
        month = "ERR";
  }
  return month
}