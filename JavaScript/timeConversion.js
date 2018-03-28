// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
//
// Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.
//
// Function Description
//
// Complete the timeConversion function described below to return the converted timestring.
//
// timeConversion(string: s)
// Parameters:
// s: time string to convert
// Returns: string representing time in 24 hour format
// Raw Input Format
//
// A single string  containing a time in -hour clock format (i.e.:  or ), where  and .
//
// Sample Input 0
//
// 07:05:45PM
// Sample Output 0
//
// 19:05:45

function timeConversion(s) {
    let periodOfDay = s[s.length-2];
    let convertTime = s.slice(0,8);
    let time_arr = convertTime.split(":");
    if(periodOfDay === "A"){
      if (time_arr[0]==="12") {
        time_arr[0] = "00";
        return time_arr.join(":");
      }else {
        return s.slice(0,8);
      }
    }else{
      if (time_arr[0]==="12") {
        return time_arr.join(":");
      }else {
        let hours = parseInt(time_arr[0]);
        let timeNow = hours + 12;
        time_arr[0] = timeNow.toString();
        return time_arr.join(":");
      }
    }
}
