
export const gigasecond = (time) => {
  return new Date(time.setSeconds(time.getSeconds() + 1000000000))
};
