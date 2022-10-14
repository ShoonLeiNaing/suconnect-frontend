import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { FiAlertCircle } from "react-icons/fi";
import { colors } from "../../data/constant";
import SmallButton from "../Button/SmallButton";

interface IProps {
  reminderText: string;
  color?: string;
}

const ReminderAlert: FunctionComponent<IProps> = ({ reminderText, color }) => {
  return (
    <Box
      sx={{ backgroundColor: colors.white.white2 }}
      borderRadius="10px"
      padding={2}
      display="flex"
      alignItems="center"
    >
      <FiAlertCircle fontSize="24px" style={{ color: colors.black.black2 }} />
      <Typography mx={1} fontSize="14px" flex="1" color={colors.black.black2}>
        {reminderText}
      </Typography>
      <Typography
        fontSize="14px"
        mr={2}
        color={colors.grey.grey2}
        className="cursor"
      >
        cancel
      </Typography>
      <SmallButton type="submit" text="Save" />
    </Box>
  );
};

ReminderAlert.defaultProps = {
  color: colors.primaryColors.lightblue.lightblue1,
};
export default ReminderAlert;
