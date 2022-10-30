// @ts-nocheck

import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import { FunctionComponent } from "react";
import {
  Scheduler,
  Appointments,
  Toolbar,
  DateNavigator,
  MonthView,
  AppointmentTooltip,
} from "@devexpress/dx-react-scheduler-material-ui";
import moment from "moment";
import { Box } from "@mui/material";
import { FaGraduationCap } from "react-icons/fa";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { BiCopy } from "react-icons/bi";
import { generateEvents } from "../../utils/common/generateEvents";

interface IProps {
  events: any;
  clickEditEventHandler: any;
  courseName: string;
}

const DynamicEventSchedular: FunctionComponent<IProps> = ({
  events,
  clickEditEventHandler,
  courseName,
}) => {
  const modifiedEvents = generateEvents(events);
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
    >
      <Box
        className="flex items-center gap-6 cursor"
        paddingY="15px"
        paddingX="20px"
      >
        <Box
          className="flex items-center gap-2"
          onClick={() => clickEditEventHandler(appointmentData)}
        >
          <AiFillEdit fontSize="18px" />
          Edit
        </Box>
        <Box className="flex items-center gap-2">
          <AiFillDelete fontSize="18px" />
          Delete
        </Box>
        <Box className="flex items-center gap-2">
          <BiCopy fontSize="18px" />
          Duplicate
        </Box>
      </Box>
    </AppointmentTooltip.Content>
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
    <Box pb={4} height="100%" overflow="scroll">
      <Paper>
        <Scheduler data={modifiedEvents} height={700}>
          <ViewState
            defaultCurrentDate={moment().format("YYYY-MM-DD")}
            defaultCurrentViewName="Month"
          />

          <MonthView />
          <Toolbar />
          <DateNavigator />

          <Appointments
            appointmentComponent={Appointment}
            appointmentContentComponent={AppointmentContent}
          />
          <AppointmentTooltip
            headerComponent={Header}
            contentComponent={Content}
            // showCloseButton
            // showDeleteButton
          />
        </Scheduler>
      </Paper>
    </Box>
  );
};

export default DynamicEventSchedular;
