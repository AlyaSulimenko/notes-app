const updateInfo = function (note) {
  const momentOfUpdate = note.updatedAt;
  const now = new Date();
  const currentMoment = now.getTime();
  const timeSince = (currentMoment - momentOfUpdate) / 1000;
  const secondsAgo = Math.round(timeSince);
  const minutesAgo = Math.round(secondsAgo / 60);
  const hoursAgo = Math.round(minutesAgo / 60);
  const daysAgo = Math.round(hoursAgo / 24);
  const monthsAgo = Math.round(daysAgo / 30);
  const yearsAgo = Math.round(monthsAgo / 12);
  if (timeSince < 0 && timeSince < 60) {
    return `Last updated ${secondsAgo} seconds ago`;
  } else if (timeSince >= 60 && timeSince < 120) {
    return `Last updated 1 minute ${Math.round((timeSince - 60) / 60)} ago`;
  } else if (timeSince >= 120 && timeSince < 3600) {
    return `Last updated ${minutesAgo} minutes ago`;
  } else if (timeSince >= 3600 && timeSince < 7200) {
    return `Last updated 1 hour ${Math.round(
      (timeSince - 3600) / 60
    )} minutes ago`;
  } else if (timeSince >= 7200 && timeSince < 86400) {
    return `Last updated more than ${hoursAgo} hours ago`;
  } else if (timeSince >= 86400 && timeSince < 172800) {
    return `Last updated 1 day & ${Math.round(
      (timeSince - 86400) / 3600
    )} hours ago`;
  } else if (timeSince >= 172800 && timeSince < 2592000) {
    return `Last updated ${daysAgo} days ago`;
  } else if (timeSince >= 2592000 && timeSince < 5184000) {
    return `Last updated more that 1 month ago`;
  } else if (timeSince >= 5184000 && timeSince < 31104000) {
    return `Last updated approximately ${monthsAgo} months ago`;
  } else if (timeSince >= 31104000 && timeSince < 62208000) {
    return `Last updated approximately 1 year & ${Math.round(
      (timeSince - 5184000) / 2600000
    )} months ago`;
  } else if (timeSince >= 62208000) {
    return `Last updated more than ${yearsAgo} years ago`;
  }
};
