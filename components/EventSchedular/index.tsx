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
import { Box, Grid, IconButton } from "@mui/material";
// import { appointments } from "../../data/date";
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
      //   startDate: new Date(2022, 8, 18, 14, 10),
      //   endDate: new Date(2022, 8, 18, 15, 30),
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

  const Header = ({ children, appointmentData, ...restProps }) => (
    <AppointmentTooltip.Header {...restProps} appointmentData={appointmentData}>
      <IconButton
        /* eslint-disable-next-line no-alert */
        onClick={() => alert(JSON.stringify(appointmentData))}
        // className={classes.commandButton}
        size="large"
      >
        hehe
      </IconButton>
    </AppointmentTooltip.Header>
  );

  const Content = ({ children, appointmentData, ...restProps }) => (
    <AppointmentTooltip.Content
      {...restProps}
      appointmentData={appointmentData}
    >
      {console.log({ appointmentData })}
      <Grid container alignItems="center" backgroundColor="red">
        {appointmentData.title}

        {/* <StyledGrid item xs={2} className={classes.textCenter}>
          <StyledRoom className={classes.icon} />
        </StyledGrid>
        <Grid item xs={10}>
          <span>{appointmentData.location}</span>
        </Grid> */}
      </Grid>
    </AppointmentTooltip.Content>
  );

  const Appointment = ({ children, style, data, ...restProps }) => (
    <Appointments.Appointment
      {...restProps}
      style={{
        ...style,
        backgroundColor: data.color,
        paddingLeft: "18px",
      }}
    >
      <Box position="absolute" left={0} margin="4px">
        <FaGraduationCap fontSize="16px" />
      </Box>
      {children}
    </Appointments.Appointment>
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
          <Appointments appointmentComponent={Appointment} />
          <AppointmentTooltip
            headerComponent={Header}
            contentComponent={Content}

            // commandButtonComponent={CommandButton}
            // showCloseButton
          />
        </Scheduler>
      </Paper>
    </Box>
  );
};

export default EventSchedular;
