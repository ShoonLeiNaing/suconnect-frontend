/* eslint-disable array-callback-return */

export const getFilterParams = (values: any) => {
  const filterParms: any = [];
  Object.entries(values).map(([key, value]: any) => {
    if (key.includes("date")) {
      if (value.range) {
        filterParms.push({
          field_name: key,
          operator: "gte",
          value: value.startDate,
        });
        filterParms.push({
          field_name: key,
          operator: "lte",
          value: value.endDate,
        });
      } else {
        filterParms.push({
          field_name: key,
          operator: value.operator,
          value: value.date,
        });
      }
    } else {
      const idsArray = value.map((val: any) => {
        return parseInt(val.id, 10);
      });
      filterParms.push({
        field_name: key,
        operator: "in",
        value: idsArray.toString(),
      });
    }
  });
  return filterParms;
};
