/* eslint-disable no-nested-ternary */

import moment from "moment";
import { AiFillHome } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const generateEvents = (events: any) => {
  const generatedEvents = events.map((event: any, index: number) => {
    const date = event.date.split("-");
    const startTime = event.time_from.split(":");
    const endTime = event.time_to.split(":");
    const eventType =
      event.classification === 10
        ? "Lecture Day"
        : event.classification === 9
        ? "Holiday"
        : "Others";
    return {
      id: event.id,
      day: daysOfWeek[
        moment(new Date(date[0], date[1], date[2])).subtract(1, "months").day()
      ],
      icon:
        event?.classification === 10 ? (
          <FaGraduationCap fontSize="16px" />
        ) : (
          <AiFillHome fontSize="16px" />
        ),
      classification: event.classification,
      course: event.course,
      title: `${eventType} ${event.classification === 10 ? index + 1 : ""}`,
      color: event.classification === 10 ? "pink" : "blue",
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
