// import { Box, Icon, Text } from "@chakra-ui/react";
import { Box, Typography, Icon } from "@mui/material";
import { FunctionComponent } from "react";

interface IProps {
  title: string;
  icon?: boolean;
  color?: string;
}
const SubTitle: FunctionComponent<IProps> = ({ title, icon, color }) => {
  return (
    <Box display="flex" alignItems="center">
      <Typography fontWeight={600} fontSize="24px" color="grey">
        {title}
      </Typography>
      {icon && <Icon ml={4} fontSize="28px" color={color} as={icon} />}
    </Box>
  );
};

export default SubTitle;
