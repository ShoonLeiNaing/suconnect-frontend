/* eslint-disable no-nested-ternary */
import { Box } from "@mui/material";
import { useState, FunctionComponent, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { RiFilterFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { deleteEvent } from "../../../api/events/delete";
import { getEventsOfCourse } from "../../../api/events/getEventsOfCourse";
import { colors } from "../../../data/constant";
import { selectCourse } from "../../../redux/slices/courseSlice";
import ConfirmationDialog from "../../Dialog/ConfirmationDialog";
import DynamicEventSchedular from "../../EventSchedular/DynamicEventSchedular";
import IconButton from "../../IconButton";
import SearchInput from "../../SearchInput";
import PaginationButton from "../../Stepper/PaginationButton";
import EventDetailComponent from "../EventDetailComponent";
import EventsItem from "./EventsItem";
import LectureEventForm from "./LectureEventForm";

interface IProps {
  handleNext?: any;
  handleBack?: any;
}

const AddLectureForm: FunctionComponent<IProps> = ({
  handleBack,
  handleNext,
}) => {
  const createdCourse: any = useSelector(selectCourse);
  const [searchText, setSearchText] = useState("");
  const [course, setCourse] = useState<any>();
  const [showAddEvent, setShowAddEvent] = useState<boolean>(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] =
    useState<boolean>(false);
  const [showEditEvent, setShowEditEvent] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<any>();
  const [stateUpdate, setStateUpdate] = useState<boolean>(false);
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const res = await getEventsOfCourse(parseInt(createdCourse?.id, 10));
    setCourse(res?.data);
    setEvents(res?.data?.event_set);
  };

  const clickEditEventHandler = (event: any) => {
    setShowEditEvent(true);
    setSelectedEvent(event);
  };

  const clickDeleteEventHandler = (event: any) => {
    setShowDeleteConfirmation(true);
    setSelectedEvent(event);
  };

  const deleteEventHandler = async () => {
    const res = await deleteEvent(selectedEvent?.id);
    if (res.code === "ERR_BAD_REQUEST") {
      toast.error(res?.response?.data?.details[0] || "Something went wrong", {
        position: "top-right",
        className: "hot-toast",
      });
    } else {
      setStateUpdate(!stateUpdate);
      toast.success("Lecture deleted successfully", {
        position: "top-right",
        className: "hot-toast",
      });
      setShowDeleteConfirmation(false);
      setSelectedEvent(null);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [stateUpdate]);

  return showAddEvent ? (
    <LectureEventForm
      {...{ setShowForm: setShowAddEvent, stateUpdate, setStateUpdate }}
    />
  ) : showEditEvent ? (
    <LectureEventForm
      {...{
        setShowForm: setShowEditEvent,
        selectedEvent,
        setSelectedEvent,
        stateUpdate,
        setStateUpdate,
        isEdit: true,
      }}
    />
  ) : (
    <>
      <Toaster />
      <ConfirmationDialog
        {...{
          open: showDeleteConfirmation,
          setOpen: setShowDeleteConfirmation,
          type: "error",
          btnLabel: "Delete",
          handleClose: () => setShowDeleteConfirmation(false),
          color: colors.secondaryColors.red.red1,
          dialogTitle: "Warning!",
          dialogBody: "Are you sure you want to delete this lecture?",
          btnClickHandler: deleteEventHandler,
        }}
      />
      <Box
        className="rounded-xl flex"
        height="77vh"
        color={colors.black.black2}
      >
        <Box width="320px">
          <Box className="flex gap-4">
            <SearchInput
              searchText={searchText}
              setSearchText={setSearchText}
              customWidth="235px"
            />
            <IconButton onClickHandler={() => {}} icon={<RiFilterFill />} />
          </Box>
          <Box className="border rounded-xl mt-4" height="90%">
            <EventsItem
              {...{
                showAddEvent,
                // setShowAddEvent,
                selectedEvent,
                setSelectedEvent,
                btnText: "Add new event",
                onClickHandler: () => setShowAddEvent(true),
              }}
            />
          </Box>
        </Box>
        {/* {selectedEvent ? (
          <Box paddingLeft={3} height="90%" width="100%" mt="61px">
            <EventDetailComponent
              {...{
                setSelectedEvent,
                setShowEditForm: setShowEditEvent,
                selectedEvent,
              }}
            />
          </Box>
        ) : (
          <Box paddingLeft={3}>
            <DynamicEventSchedular
              {...{
                events,
                courseName: course?.name,
                clickEditEventHandler,
                clickDeleteEventHandler,
              }}
            />
          </Box>
        )} */}
        <Box paddingLeft={3}>
          <DynamicEventSchedular
            {...{
              events,
              courseName: course?.name,
              clickEditEventHandler,
              clickDeleteEventHandler,
            }}
          />
        </Box>
      </Box>
      <Box className=" my-3 flex justify-end">
        <PaginationButton {...{ handleNext, handleBack }} />
      </Box>
    </>
  );
};

export default AddLectureForm;
