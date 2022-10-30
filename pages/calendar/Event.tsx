import { Box, Typography } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import EventComponent from "../../components/SearchResults/EventComponent";
import IndicatorLine from "../../components/SearchResults/IndicatorLine";
import { colors } from "../../data/constant";

const displayTime = [
  {
    timeValue: "24:00",
    defaultPrefix: "12 AM",
  },
  {
    timeValue: "1:00",
    defaultPrefix: "1 AM",
  },
  {
    timeValue: "2:00",
    defaultPrefix: "2 AM",
  },
  {
    timeValue: "3:00",
    defaultPrefix: "3 AM",
  },
  {
    timeValue: "4:00",
    defaultPrefix: "4 AM",
  },
  {
    timeValue: "5:00",
    defaultPrefix: "5 AM",
  },
  {
    timeValue: "6:00",
    defaultPrefix: "6 AM",
  },
  {
    timeValue: "7:00",
    defaultPrefix: "7 AM",
  },
  {
    timeValue: "8:00",
    defaultPrefix: "8 AM",
  },
  {
    timeValue: "9:00",
    defaultPrefix: "9 AM",
  },
  {
    timeValue: "10:00",
    defaultPrefix: "10 AM",
  },
  {
    timeValue: "11:00",
    defaultPrefix: "11 AM",
  },
  {
    timeValue: "12:00",
    defaultPrefix: "12 PM",
  },

  {
    timeValue: "13:00",
    defaultPrefix: "1 PM",
  },
  {
    timeValue: "14:00",
    defaultPrefix: "2 PM",
  },
  {
    timeValue: "15:00",
    defaultPrefix: "3 PM",
  },
  {
    timeValue: "16:00",
    defaultPrefix: "4 PM",
  },
  {
    timeValue: "17:00",
    defaultPrefix: "5 PM",
  },
  {
    timeValue: "18:00",
    defaultPrefix: "6 PM",
  },
  {
    timeValue: "19:00",
    defaultPrefix: "7 PM",
  },
  {
    timeValue: "20:00",
    defaultPrefix: "8 PM",
  },
  {
    timeValue: "21:00",
    defaultPrefix: "9 PM",
  },
  {
    timeValue: "22:00",
    defaultPrefix: "10 PM",
  },
  {
    timeValue: "23:00",
    defaultPrefix: "11 PM",
  },
];

const events = [
  {
    id: 1,
    end: "6:00",
    date: "2021-09-15",
    start: "4:00",
    title: "Event 1",
    course: "Course name",
  },
  {
    id: 2,
    date: "2021-09-15",
    end: "9:00",
    start: "8:00",
    title: "Event 2",
    course: "Course name",
  },
  {
    id: 3,
    date: "2021-09-15",
    end: "9:00",
    start: "8:00",
    title: "Event 3",
    course: "Course name",
  },
  {
    id: 4,
    date: "2021-09-15",
    end: "12:00",
    start: "11:00",
    title: "Event 4",
    course: "Course name",
  },
  {
    id: 5,
    date: "2021-09-15",
    end: "18:00",
    start: "20:00",
    title: "Event 5",
    course: "Course name",
  },
];

const Schedule: FunctionComponent = () => {
  const [eventData, setEventData] = useState(true);

  const getData = (e: any) => {
    const filteredEvents = events.filter(
      (event) => event.start === e.timeValue || event.end === e.timeValue
    );
    return filteredEvents.map((event) => (
      <EventComponent
        title={event.title}
        time={e.defaultPrefix}
        // course={event.course}
      />
    ));

    //   });
    // return filteredEvents.map( (event) => event.title);
  };

  const [date, setDate] = useState(new Date());

  function updateTime() {
    setDate(new Date());
  }
  useEffect(() => {
    setInterval(updateTime, 1000);
  }, []);

  const hours = date.getHours();
  const showHour = displayTime[hours].defaultPrefix;

  return (
    <Box
      className="my-6 overflow-y-auto overflow-x-hidden"
      sx={{ maxHeight: "calc(100vh - 70px)" }}
    >
      {displayTime.map((data, index) => (
        <Box key={index} className="flex relative items-center py-4 px-6">
          <Typography className="inline-block w-14 mr-2 z-[1]">
            {data.defaultPrefix}
          </Typography>
          {/* { events.map( (event) => (
                    <Box key={index}>
                        <> ({event.start === data.timeValue || event.end === data.timeValue  ? data.defaultPrefix : ""})</>
                          
                    </Box>
                 )) */}
          {showHour === data.defaultPrefix ? (
            <Box className="left-20 absolute w-full z-[2]">
              <IndicatorLine
                show
                color={colors.secondaryColors.orange.orange1}
              />
            </Box>
          ) : (
            <Box className="absolute left-20 w-full h-[0.1rem] bg-gray-100" />
          )}
          <Box
            className={` ${
              eventData ? "flex" : "hidden"
            } w-full justify-evenly z-[1]`}
          >
            {getData(data)}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Schedule;
