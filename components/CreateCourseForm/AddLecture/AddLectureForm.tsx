/* eslint-disable no-nested-ternary */
import { Box } from "@mui/material";
import { useState, FunctionComponent, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { RiFilterFill } from "react-icons/ri";
import { getEventsOfCourse } from "../../../api/events/getEventsOfCourse";
import { colors } from "../../../data/constant";
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
  const [searchText, setSearchText] = useState("");
  const [course, setCourse] = useState<any>();
  const [showAddEvent, setShowAddEvent] = useState<boolean>(false);
  const [showEditEvent, setShowEditEvent] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<any>();
  const [stateUpdate, setStateUpdate] = useState<boolean>(false);
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const res = await getEventsOfCourse(36);
    setCourse(res?.data);
    setEvents(res?.data?.event_set);
  };

  const clickEditEventHandler = (event: any) => {
    setShowEditEvent(true);
    setSelectedEvent(event);
  };

  useEffect(() => {
    fetchEvents();
  }, [stateUpdate]);

  return showAddEvent ? (
    <LectureEventForm
      {...{ setShowForm: setShowAddEvent, course, stateUpdate, setStateUpdate }}
    />
  ) : showEditEvent ? (
    <LectureEventForm
      {...{ setShowForm: setShowEditEvent, selectedEvent, setSelectedEvent }}
    />
  ) : (
    <>
      <Toaster />
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
                setShowAddEvent,
                selectedEvent,
                setSelectedEvent,
              }}
            />
          </Box>
        </Box>
        {selectedEvent ? (
          <Box paddingLeft={3} height="90%" width="100%" mt="61px">
            <EventDetailComponent
              {...{ setSelectedEvent, setShowEditForm: setShowEditEvent }}
            />
          </Box>
        ) : (
          <Box paddingLeft={3}>
            <DynamicEventSchedular
              {...{ events, courseName: course?.name, clickEditEventHandler }}
            />
          </Box>
        )}
      </Box>
      <Box className=" my-3 flex justify-end">
        <PaginationButton {...{ handleNext, handleBack }} />
      </Box>
    </>
  );
};

export default AddLectureForm;
