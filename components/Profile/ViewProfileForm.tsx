import { Box, Button, styled, Typography } from "@mui/material";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import { MdModeEdit } from "react-icons/md";
import { colors } from "../../data/constant";
import StaticInput from "../Input/StaticInput";
import InputLabel from "../Input/InputLabel";
import NoInput from "../Input/NoInput";
import styles from "./profile.module.css";
import OutlineWhiteButton from "../Button/OutlineWhiteButton";

const ViewProfileForm = () => {
  return (
    <Box
      m={4}
      className="flex flex-col md:flex-row justify-center items-center"
    >
      <Box className="w-full md:px-4">
        <Box display="flex" flexDirection="column" alignItems="center">
          <img
            src="/images/profile.jpeg"
            alt="profile"
            className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full"
          />
          <Typography
            fontWeight={600}
            className="text-[1.1rem] md:text-lg mt-3"
          >
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
          <Link href="/update-profile">
            <a>
              <button className={styles.edit_btn} type="submit">
                <MdModeEdit className="mr-1" fontSize="20px" /> Edit Profile
              </button>
            </a>
          </Link>
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

          <Box mb={3} className={styles.input_boxes}>
            <InputLabel label="Bio" />
            <StaticInput
              isLocked
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sed adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sed adipiscing "
              isTextArea
            />
          </Box>
        </Box>
      </Box>
      <Box className="w-full md:px-4 flex flex-col justify-center items-center lg:jusitfy-start lg:items-start md:mb-16">
        <Box mb={3} className={styles.input_boxes}>
          <InputLabel label="Email" />
          <StaticInput isLocked value="ThihaSwanHtet@gmail.com" />
        </Box>
        <Box mb={3} className={styles.input_boxes}>
          <Box
            display="flex"
            maxWidth="345px"
            alignItems="center"
            justifyContent="space-between"
          >
            <InputLabel label="Address" />
            <OutlineWhiteButton text="edit" />
          </Box>
          <StaticInput
            isLocked
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sed adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sed adipiscing "
            isTextArea
          />
        </Box>
        <Box mb={3} className={styles.input_boxes}>
          <InputLabel label="Primary Contact" />
          <StaticInput isLocked value="ThihaSwanHtet@gmail.com" />
        </Box>
        <Box mb={3} className={styles.input_boxes}>
          <InputLabel label="Secondary Contact" />
          {/* <NoInput /> */}
          <StaticInput isLocked value="-" />
        </Box>
        <Box mb={3} className={styles.input_boxes}>
          <InputLabel label="Date of Birth" />
          <StaticInput isLocked value="01 / 12 / 2002" />
        </Box>
      </Box>
    </Box>
  );
};

export default ViewProfileForm;
