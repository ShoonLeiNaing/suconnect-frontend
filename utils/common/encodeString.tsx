export const encodeString = (data: string) => {
  return Buffer.from(data).toString("base64");
};
