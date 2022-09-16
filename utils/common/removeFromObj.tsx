export const removeFromObject = (objectValue: any, keyValue: string) => {
  const newOptions = Object.keys(objectValue).reduce(
    (accumulator: any, key) => {
      if (key !== keyValue) {
        accumulator[key] = objectValue[key];
      }
      return accumulator;
    },
    {}
  );
  return newOptions;
};
