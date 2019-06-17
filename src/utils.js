import moment from 'moment-timezone';

// #### day
// format('dddd')

// #### day and time
// format('dddd h:mm a')

// #### Date
// format('MMMM Do, YYYY')
export function displayTime(time, timeZone) {
  const utc = moment.unix(time).utc();
  return moment.tz(utc, timeZone);
}

export function displayIcon(icon) {
  switch (icon) {
    case "clear-day":
      return "sun";
    case "clear-night":
      return "moon";
    case "rain":
      return "cloud-rain";
    case "snow":
    case "sleet":
      return "snowflake";
    case "wind":
      return "wind";
    case "fog":
      return "smog";
    case "cloudy":
      return "cloud";
    case "partly-cloudy-day":
      return "cloud-sun";
    case "partly-cloudy-night":
      return "cloud-moon";
    default:
      return "cloud-sun";
  }
}

export function getAverage(min, max) {
  return ((min + max) / 2).toFixed(0);
}

export function decimalToPercent(num) {
  return (num * 100).toFixed(0);
}