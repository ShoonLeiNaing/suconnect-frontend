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
    <Box display="flex" alignItems="center" justifyContent={{xs: "center", md: "left"}}>
      <Typography
        fontWeight={600}
        fontSize={{
          xl: "22px",
          lg: "20px",
          md: "18px",
        }}
        color="grey"
        sx={{ zIndex: 2 }}
      >
        {title}
      </Typography>
      {/* {icon && <Icon ml={4} fontSize="28px" color={color} as={icon} />} */}
    </Box>
  );
};

export default SubTitle;
