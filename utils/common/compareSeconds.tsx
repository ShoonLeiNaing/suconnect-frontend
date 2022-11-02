export const compareSeconds = (timeFrom: any, timeTo: any) => {
  const str1 = timeFrom.split(":");
  const str2 = timeTo.split(":");

  const totalSeconds1 = parseInt(str1[0] * 3600 + str1[1] * 60 + str1[0], 10);
  const totalSeconds2 = parseInt(str2[0] * 3600 + str2[1] * 60 + str2[0], 10);
  if (totalSeconds1 >= totalSeconds2) {
    return false;
  } else {
    return true;
  }
};
