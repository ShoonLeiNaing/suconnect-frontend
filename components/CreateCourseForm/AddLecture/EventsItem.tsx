import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import LongButton from "../../Button/LongButton";
import EventComponent from "../../SearchResults/EventComponent";

interface IProps {
  setSelectedEvent?: any;
  onClickHandler?: any;
  btnText?: string;
}

const EventsItem: FunctionComponent<IProps> = ({
  setSelectedEvent,
  btnText,
  onClickHandler,
}) => {
  return (
    <Box paddingY={2} height="100%">
      <Box height="88%" overflow="scroll">
        <Box>
          <Typography className="px-6 mb-2 font-semibold text-gray-500 text-md">
            August 2022
          </Typography>
          <EventComponent
            keyword=""
            date="23"
            day="Tue"
            title="meeting for Web Dev Team"
            detailTime="9:00 AM - 10:30 AM"
            onClickHandler={() => {
              setSelectedEvent({
                title: "meeting for Web Dev Team",
                date: "Monday, September 19, 2022",
                detailTime: "9:00 AM - 10:30 AM",
              });
            }}
          />
        </Box>
        <Box mt={2}>
          <Typography className="px-6 mb-2 font-semibold text-gray-500 text-md">
            September 2022
          </Typography>
          <EventComponent
            keyword=""
            date="23"
            day="Tue"
            title="meeting for Web Dev Team"
            detailTime="9:00 AM - 10:30 AM"
            onClickHandler={() => {
              setSelectedEvent({
                title: "meeting for Web Dev Team",
                date: "Monday, September 19, 2022",
                detailTime: "9:00 AM - 10:30 AM",
              });
            }}
          />
          <EventComponent
            keyword=""
            date="23"
            day="Tue"
            title="meeting for Web Dev Team"
            detailTime="9:00 AM - 10:30 AM"
            onClickHandler={() => {
              setSelectedEvent({
                title: "meeting for Web Dev Team",
                date: "Monday, September 19, 2022",
                detailTime: "9:00 AM - 10:30 AM",
              });
            }}
          />
        </Box>{" "}
        <Box mt={2}>
          <Typography className="px-6 mb-2 font-semibold text-gray-500 text-md">
            September 2022
          </Typography>
          <EventComponent
            keyword=""
            date="23"
            day="Tue"
            title="meeting for Web Dev Team"
            detailTime="9:00 AM - 10:30 AM"
            onClickHandler={() => {
              setSelectedEvent({
                title: "meeting for Web Dev Team",
                date: "Monday, September 19, 2022",
                detailTime: "9:00 AM - 10:30 AM",
              });
            }}
          />
          <EventComponent
            keyword=""
            date="23"
            day="Tue"
            title="meeting for Web Dev Team"
            detailTime="9:00 AM - 10:30 AM"
            onClickHandler={() => {
              setSelectedEvent({
                title: "meeting for Web Dev Team",
                date: "Monday, September 19, 2022",
                detailTime: "9:00 AM - 10:30 AM",
              });
            }}
          />
        </Box>{" "}
        <Box mt={2}>
          <Typography className="px-6 mb-2 font-semibold text-gray-500 text-md">
            September 2022
          </Typography>
          <EventComponent
            keyword=""
            date="23"
            day="Tue"
            title="meeting for Web Dev Team"
            detailTime="9:00 AM - 10:30 AM"
            onClickHandler={() => {
              setSelectedEvent({
                title: "meeting for Web Dev Team",
                date: "Monday, September 19, 2022",
                detailTime: "9:00 AM - 10:30 AM",
              });
            }}
          />
          <EventComponent
            keyword=""
            date="23"
            day="Tue"
            title="meeting for Web Dev Team"
            detailTime="9:00 AM - 10:30 AM"
            onClickHandler={() => {
              setSelectedEvent({
                title: "meeting for Web Dev Team",
                date: "Monday, September 19, 2022",
                detailTime: "9:00 AM - 10:30 AM",
              });
            }}
          />
        </Box>{" "}
        <Box mt={2}>
          <Typography className="px-6 mb-2 font-semibold text-gray-500 text-md">
            September 2022
          </Typography>
          <EventComponent
            keyword=""
            date="23"
            day="Tue"
            title="meeting for Web Dev Team"
            detailTime="9:00 AM - 10:30 AM"
            onClickHandler={() => {
              setSelectedEvent({
                title: "meeting for Web Dev Team",
                date: "Monday, September 19, 2022",
                detailTime: "9:00 AM - 10:30 AM",
              });
            }}
          />
          <EventComponent
            keyword=""
            date="23"
            day="Tue"
            title="meeting for Web Dev Team"
            detailTime="9:00 AM - 10:30 AM"
            onClickHandler={() => {
              setSelectedEvent({
                title: "meeting for Web Dev Team",
                date: "Monday, September 19, 2022",
                detailTime: "9:00 AM - 10:30 AM",
              });
            }}
          />
        </Box>
        <Box mt={2}>
          <Typography className="px-6 mb-2 font-semibold text-gray-500 text-md">
            September 2022
          </Typography>
          <EventComponent
            keyword=""
            date="23"
            day="Tue"
            title="meeting for Web Dev Team"
            detailTime="9:00 AM - 10:30 AM"
            onClickHandler={() => {
              setSelectedEvent({
                title: "meeting for Web Dev Team",
                date: "Monday, September 19, 2022",
                detailTime: "9:00 AM - 10:30 AM",
              });
            }}
          />
          <EventComponent
            keyword=""
            date="23"
            day="Tue"
            title="meeting for Web Dev Team"
            detailTime="9:00 AM - 10:30 AM"
            onClickHandler={() => {
              setSelectedEvent({
                title: "meeting for Web Dev Team",
                date: "Monday, September 19, 2022",
                detailTime: "9:00 AM - 10:30 AM",
              });
            }}
          />
        </Box>
      </Box>
      <Box
        padding={2}
        paddingBottom={4}
        width="100%"
        display="flex"
        justifyContent="center"
      >
        <LongButton
          onClickHandler={onClickHandler}
          text={btnText || "Add new"}
          customWidth="100%"
        />
      </Box>
    </Box>
  );
};

export default EventsItem;
