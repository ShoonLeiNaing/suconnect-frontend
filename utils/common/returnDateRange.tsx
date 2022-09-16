import moment from "moment";

export const returnDateRange = (range: string) => {
  switch (range) {
    case "Today":
      return {
        value: "Today",
        operator: "exact",
        date: moment(Date.now()).format("YYYY-MM-DD"),
      };
    case "Yesterday":
      return {
        value: "Yesterday",
        operator: "exact",
        date: moment(Date.now()).subtract(1, "days").format("YYYY-MM-DD"),
      };
    case "Last 7 days":
      return {
        value: "Last 7 days",
        range: true,
        startDate: moment(Date.now()).subtract(7, "days").format("YYYY-MM-DD"),
        endDate: moment(Date.now()).format("YYYY-MM-DD"),
      };
    case "Last 30 days": {
      return {
        value: "Last 30 days",
        range: true,
        startDate: moment(Date.now()).subtract(30, "days").format("YYYY-MM-DD"),
        endDate: moment(Date.now()).format("YYYY-MM-DD"),
      };
    }
    case "This month": {
      return {
        value: "This month",
        range: true,
        endDate: moment().endOf("month").format("YYYY-MM-DD"),
        startDate: moment().startOf("month").format("YYYY-MM-DD"),
      };
    }
    case "Last month": {
      const tdy = moment(Date.now()).date();
      return {
        range: true,
        value: "Last month",
        startDate: moment()
          .subtract(1, "month")
          .startOf("month")
          .format("YYYY-MM-DD"),
        endDate: moment()
          .subtract(1, "month")
          .endOf("month")
          .format("YYYY-MM-DD"),
      };
    }
    default:
      return {};
  }
};
