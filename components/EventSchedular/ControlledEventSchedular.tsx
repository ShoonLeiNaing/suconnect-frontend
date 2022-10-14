import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  Appointments,
  Toolbar,
  DateNavigator,
  TodayButton,
  MonthView,
  ViewSwitcher,
  AppointmentTooltip,
} from "@devexpress/dx-react-scheduler-material-ui";
import moment from "moment";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Box, styled } from "@mui/material";
import { FaGraduationCap } from "react-icons/fa";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { BiCopy } from "react-icons/bi";
import { appointments } from "../../data/date";

const PREFIX = "Demo";

const classes = {
  button: `${PREFIX}-button`,
};

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  [`&.${classes.button}`]: {
    color: theme.palette.background.default,
    padding: 0,
    background: "black",
  },
}));

const ControlledEventSchedular = () => {
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
        <Box className="flex items-center gap-2">
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

  //   const Appointment = ({ children, ...restProps }: any) => (

  //     <Appointments.Appointment
  //       {...restProps}
  //       style={{
  //         color: "black",
  //         backgroundColor: "#F6F9FE",
  //         paddingLeft: "20px",
  //         borderRadius: "10px",
  //         border: "1px solid rgba(187, 187, 187, 1)",
  //         borderLeft: `10px solid ${children[1].props.data.color}`,
  //       }}
  //     >

  //       <Box position="absolute" left={0} margin="4px">
  //         <FaGraduationCap fontSize="16px" />
  //       </Box>

  //       {children}

  //           </Appointments.Appointment>

  //   );

  const Appointment = ({
    children,
    data,
    toggleVisibility,
    onAppointmentMetaChange,
    ...restProps
  }: any) => (
    <Appointments.Appointment {...restProps}>
      <Box>
        <StyledIconButton
          className={classes.button}
          onClick={({ target }) => {
            toggleVisibility();
            onAppointmentMetaChange({
              target: target.parentElement.parentElement,
              data,
            });
          }}
          size="large"
        >
          <InfoIcon fontSize="small" />
        </StyledIconButton>
        {children}
      </Box>
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

  const [visiblity, setVisiblity] = useState(false);
  const [appointmentMeta, setAppointmentMeta] = useState({
    target: null,
    data: {},
  });

  const toggleVisibility = () => {
    // const { visible: tooltipVisibility } = controlledData.visible;
    setVisiblity(!visiblity);
  };
  const onAppointmentMetaChange = ({ data, target }: any) => {
    // this.setState({ appointmentMeta: { data, target } });
    setAppointmentMeta({ data, target });
  };
  // const myAppointment = myAppointment.bind(appointments);

  // myAppointment(props) {
  //     return (
  //       <Appointment
  //         {...props}
  //         toggleVisibility={toggleVisibility}
  //         onAppointmentMetaChange={onAppointmentMetaChange}
  //       />
  //     );
  //   }

  return (
    <Box pb={4} height="100%" overflow="scroll">
      <Paper>
        <Scheduler data={appointments} height={700}>
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
            toggleVisibility={toggleVisibility}
            onAppointmentMetaChange={onAppointmentMetaChange}
          />
          <AppointmentTooltip
            headerComponent={Header}
            contentComponent={Content}
            // showCloseButton
            // visible={visiblity}
            // onVisibilityChange={toggleVisibility}
            // appointmentMeta={appointmentMeta}
            // onAppointmentMetaChange={onAppointmentMetaChange}
            // showCloseButton
            // showDeleteButton
          />
        </Scheduler>
      </Paper>
    </Box>
  );
};

export default ControlledEventSchedular;
