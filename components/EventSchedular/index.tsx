// @ts-nocheck

import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  WeekView,
  Appointments,
  Toolbar,
  DateNavigator,
  TodayButton,
  MonthView,
  ViewSwitcher,
  AppointmentTooltip,
} from "@devexpress/dx-react-scheduler-material-ui";
import moment from "moment";
import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { FaGraduationCap } from "react-icons/fa";

interface IProps {
  events?: any;
}

const EventSchedular: FunctionComponent<IProps> = ({ events }) => {
  const appointments = events.map((event: any) => {
    const date = event.date.split("-");
    const startTime = event.time_from.split(":");
    const endTime = event.time_to.split(":");
    return {
      id: event.id,
      classification: event.classification,
      course: event.course,
      title: `${event.course} - ${event.classification}`,
      color: "pink",
      startDate: new Date(
        date[0],
        date[1],
        date[2],
        startTime[0],
        startTime[1],
        startTime[2]
      ),
      endDate: new Date(
        date[0],
        date[1],
        date[2],
        endTime[0],
        endTime[1],
        endTime[2]
      ),
    };
  });

  const Header = ({ children, appointmentData, ...restProps }: any) => (
    <AppointmentTooltip.Header
      {...restProps}
      appointmentData={appointmentData}
      style={{
        backgroundColor: "#333333",
        color: "white",
        paddingTop: "20px",
      }}
    />
  );

  const Content = ({ children, appointmentData, ...restProps }: any) => (
    <AppointmentTooltip.Content
      {...restProps}
      style={{
        backgroundColor: "#333333",
        color: "white",
        paddingBottom: "20px",
      }}
      appointmentData={appointmentData}
    />
  );

  const Appointment = ({ children, ...restProps }: any) => (
    <Appointments.Appointment
      {...restProps}
      style={{
        color: "black",
        backgroundColor: "#F6F9FE",
        paddingLeft: "20px",
        borderRadius: "10px",
        border: "1px solid rgba(187, 187, 187, 1)",
        borderLeft: `10px solid ${children[1].props.data.color}`,
      }}
    >
      <Box position="absolute" left={0} margin="4px">
        <FaGraduationCap fontSize="16px" />
      </Box>
      {children}
    </Appointments.Appointment>
  );

  const AppointmentContent = ({ ...restProps }: any) => (
    <Appointments.AppointmentContent
      style={{
        color: "black",
      }}
      {...restProps}
    />
  );

  return (
    <Box pb={4}>
      <Paper>
        <Scheduler data={appointments} height={700}>
          <ViewState
            defaultCurrentDate={moment().format("YYYY-MM-DD")}
            defaultCurrentViewName="Day"
          />

          <DayView startDayHour={6} cellDuration={60} />
          <WeekView startDayHour={6} cellDuration={60} />
          <MonthView />
          <Toolbar />
          <DateNavigator />
          <TodayButton />

          <ViewSwitcher />
          <Appointments
            appointmentComponent={Appointment}
            appointmentContentComponent={AppointmentContent}
          />
          <AppointmentTooltip
            headerComponent={Header}
            contentComponent={Content}
          />
        </Scheduler>
      </Paper>
    </Box>
  );
};

export default EventSchedular;
