import { Box } from "@mui/material";
import { FaGraduationCap } from "react-icons/fa";
import { RiCloseCircleLine } from "react-icons/ri";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { BiCopy } from "react-icons/bi";
import { FiClock } from "react-icons/fi";
import { FunctionComponent } from "react";

interface IProps {
  setSelectedEvent?: any;
  setShowEditForm?: any;
  selectedEvent?: any;
}

const EventDetailComponent: FunctionComponent<IProps> = ({
  setSelectedEvent,
  setShowEditForm,
  selectedEvent,
}) => {
  return (
    <Box className="border rounded-xl p-4 px-8" height="100%">
      <Box
        className="flex justify-between items-center pl-2 mt-2 pb-4"
        sx={{ borderBottom: "1px solid grey" }}
      >
        <Box className="flex items-center gap-4">
          <FaGraduationCap fontSize="26px" />
          IELTS Premium
        </Box>
        <RiCloseCircleLine fontSize="26px" onClick={() => setSelectedEvent()} />
      </Box>
      <Box
        className="flex items-center pl-2 py-4 gap-4"
        sx={{ borderBottom: "1px solid grey" }}
      >
        <FiClock fontSize="26px" />
        Monday, September 19, 2022 &nbsp;&nbsp; 9:00 AM - 10:30 AM
      </Box>
      <Box className="flex items-center gap-8 cursor" paddingY="20px">
        <Box className="flex items-center gap-2">
          <AiFillEdit fontSize="18px" onClick={() => setShowEditForm(true)} />
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
    </Box>
  );
};

export default EventDetailComponent;
