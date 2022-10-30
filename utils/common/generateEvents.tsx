import moment from "moment";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const generateEvents = (events: any) => {
  const generatedEvents = events.map((event: any, index: number) => {
    const date = event.date.split("-");
    const startTime = event.time_from.split(":");
    const endTime = event.time_to.split(":");
    const eventType = event.classification === 10 && "Lecture Day";
    return {
      id: event.id,
      day: daysOfWeek[
        moment(new Date(date[0], date[1], date[2])).subtract(1, "months").day()
      ],
      classification: event.classification,
      course: event.course,
      title: `${eventType} ${index}`,
      color: "pink",
      startDate: new Date(
        date[0],
        date[1] - 1,
        date[2],
        startTime[0],
        startTime[1],
        startTime[2]
      ),
      endDate: new Date(
        date[0],
        date[1] - 1,
        date[2],
        endTime[0],
        endTime[1],
        endTime[2]
      ),
    };
  });
  console.log({ generatedEvents });
  return generatedEvents;
};
