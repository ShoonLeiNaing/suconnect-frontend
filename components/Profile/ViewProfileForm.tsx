import { Box, Button, styled, Typography } from "@mui/material";
import { IoLocationSharp } from "react-icons/io5";
import { MdModeEdit } from "react-icons/md";
import { colors } from "../../data/constant";
import InputComponent from "../Input";
import InputLabel from "../Input/InputLabel";
import NoInput from "../Input/NoInput";
import EditButton from "./EditButton";
import styles from "./profile.module.css";

const ViewProfileForm = () => {
  return (
    <Box m={4} display="flex">
      <Box flex="0.5" px={2}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <img
            src="/images/profile.jpeg"
            alt="profile"
            className={styles.profile_img}
          />
          <Typography fontWeight={600} fontSize="18px" mt={3}>
            Thiha Swan Htet
          </Typography>

          <Typography className={styles.profile_tagline}>
            Assistant Teacher / Full-stack Developer
          </Typography>
          <Typography
            className={styles.profile_tagline}
            display="flex"
            alignItems="center"
          >
            <IoLocationSharp fontSize="20px" className="mr-1" /> Yangon, Myanmar
          </Typography>
          <button className={styles.edit_btn} type="submit">
            <MdModeEdit className="mr-1" fontSize="20px" /> Edit Profile
          </button>
          <Box display="flex" alignItems="center" mt={2} mb={5} gap={1}>
            <Box
              className={styles.data_box}
              sx={{ backgroundColor: colors.primaryColors.pink.pink1 }}
            >
              <span> 5 </span>
              <br /> Groups
            </Box>
            <Box
              className={styles.data_box}
              sx={{ backgroundColor: colors.secondaryColors.orange.orange1 }}
            >
              <span> 7 </span> <br /> Classes
            </Box>
            <Box
              className={styles.data_box}
              sx={{ backgroundColor: colors.secondaryColors.red.red1 }}
            >
              <span> 2 </span> <br /> Departments
            </Box>
          </Box>

          <Box mb={3}>
            <InputLabel label="Bio" />
            <InputComponent
              isLocked
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sed adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sed adipiscing "
              isTextArea
            />
          </Box>
        </Box>
      </Box>
      <Box flex="0.5" px={2}>
        <Box mb={3}>
          <InputLabel label="Email" />
          <InputComponent isLocked value="ThihaSwanHtet@gmail.com" />
        </Box>
        <Box mb={3}>
          <Box display="flex" maxWidth="345px" justifyContent="space-between">
            <InputLabel label="Address" />
            <EditButton />
          </Box>
          <InputComponent
            isLocked
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sed adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sed adipiscing "
            isTextArea
          />
        </Box>
        <Box mb={3}>
          <InputLabel label="Primary Contact" />
          <InputComponent isLocked value="ThihaSwanHtet@gmail.com" />
        </Box>
        <Box mb={3}>
          <InputLabel label="Secondary Contact" />
          <NoInput />
        </Box>
        <Box mb={3}>
          <InputLabel label="Date of Birth" />
          <InputComponent isLocked value="01 / 12 / 2002" />
        </Box>
      </Box>
    </Box>
  );
};

export default ViewProfileForm;
