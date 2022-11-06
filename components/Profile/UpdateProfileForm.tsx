import { Box, Grid, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { BsCameraFill } from "react-icons/bs";
import { colors } from "../../data/constant";
import StaticInput from "../Input/StaticInput";
import InputLabel from "../Input/InputLabel";
import styles from "./profile.module.css";
import LongButton from "../Button/LongButton";
import DynamicInput from "../Input/DynamicInput";
import DateInput from "../Input/DateInput";
import PhoneNumberInput from "../Input/PhoneNumberInput";
import WordsCount from "../Input/WordsCount";
import ReminderAlert from "../ReminderAlert";
import OutlineWhiteButton from "../Button/OutlineWhiteButton";

const avatars = [
  {
    img: "/images/profile1.png",
  },
  {
    img: "/images/profile2.jpeg",
  },
  {
    img: "/images/profile3.jpg",
  },
  {
    img: "/images/profile1.png",
  },
  {
    img: "/images/profile2.jpeg",
  },
  {
    img: "/images/profile3.jpg",
  },
  {
    img: "/images/profile1.png",
  },
];

const UpdateProfileForm = () => {
  const [profileImg, setProfileImg] = useState("/images/profile.jpeg");
  const [name, setName] = useState("Thiha Swan Htet");
  const [bio, setBio] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sed adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sed adipiscing "
  );
  const [birthDate, setBirthDate] = useState<Date | number>(Date.now());

  const selectProfileImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const profile = URL.createObjectURL(e.target.files[0]);
      setProfileImg(profile);
    }
  };

  return (
    <Box
      my={4}
      mx={2}
      flexWrap={{ lg: "unset", md: "wrap" }}
      className="flex flex-col md:flex-row  justify-center lg:items-start md:items-center"
    >
      <Box className="xl:w-full md:w-50% lg:px-4 sm:px-2">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          // width="100%"
        >
          <Box position="relative">
            <img
              src={profileImg}
              alt="profile"
              className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full"
            />
            <Box position="absolute" bottom={0} right="0" marginBottom="15px">
              <Box
                height="40px"
                width="40px"
                position="relative"
                sx={{
                  backgroundColor: colors.primaryColors.lightblue.lightblue1,
                }}
                className="flex-row"
                color="white"
                borderRadius="100%"
              >
                <input
                  onChange={selectProfileImage}
                  style={{ opacity: "0", position: "absolute", top: "0" }}
                  type="file"
                  accept="image/jpg, image/jpeg, image/png"
                />
                <BsCameraFill size="20px" />
              </Box>
            </Box>
          </Box>
          <Typography
            fontWeight={600}
            className="text-[1.1rem] md:text-lg mt-3"
          >
            Thiha Swan Htet
          </Typography>

          <Typography className={styles.profile_tagline}>
            Assistant Teacher / Full-stack Developer
          </Typography>

          <Box
            flexDirection="column"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography fontWeight={500} fontSize="16px" mt={3}>
              Select Image
            </Typography>
            <Typography
              fontSize="13px"
              color={colors.grey.grey2}
              textAlign="center"
            >
              Choose your profile picture
              <br /> (Can be: jpg, jpeg, png)
            </Typography>
            <Grid
              container
              className="px-4 sm:px-24 md:px-8 lg:px-20 xl:px:24"
              paddingY={2}
              rowGap={2}
              mb={2}
            >
              {avatars.map((avatar) => (
                <Grid
                  key={avatar.img}
                  item
                  xs={3}
                  onClick={() => setProfileImg(avatar.img)}
                >
                  <img
                    className={styles.profile_avatar}
                    src={avatar.img}
                    alt="avatar"
                  />
                </Grid>
              ))}
              <Grid item xs={3} position="relative">
                <img
                  className={styles.profile_avatar}
                  src="/images/upload.svg"
                  alt="avatar"
                />
                <input
                  onChange={selectProfileImage}
                  style={{
                    opacity: "0",
                    position: "absolute",
                    top: "0",
                    width: "45px",
                  }}
                  type="file"
                  accept="image/jpg, image/jpeg, image/png"
                />
              </Grid>
            </Grid>
            <LongButton text="Upload" />
            <br />
          </Box>

          <Box mb={3} className={styles.bio_input}>
            <InputLabel label="Bio" />
            <DynamicInput
              value={bio}
              setValue={setBio}
              isTextArea
              customWidth="100%"
              // maxiWidth={{md:"350px",sm:"100%"}}
              // customWidth="100%"
              customHeight="150px"
            />
            <WordsCount maxCount="250" currentCount={bio.length} />
          </Box>
        </Box>
      </Box>
      <Box className="xl:w-full md:px-4 flex flex-col justify-center items-center lg:jusitfy-start lg:items-start md:mb-16">
        <Box mb={3} className={styles.input_boxes}>
          <InputLabel label="Name" isRequired />
          <DynamicInput value={name} setValue={setName} maxiWidth="350px" />
        </Box>
        <Box mb={3}>
          <InputLabel label="Email" isRequired />
          <StaticInput
            value="ThihaSwanHtet@gmail.com"
            showLock
            maxWidth="350px"
          />
        </Box>

        <Box mb={3} className={styles.input_boxes}>
          <InputLabel label="Primary Contact" />
          <PhoneNumberInput />
        </Box>
        <Box mb={3} className={styles.input_boxes}>
          <InputLabel label="Secondary Contact" isOptional />
          <PhoneNumberInput />
        </Box>
        <Box mb={3} className={styles.input_boxes}>
          <InputLabel label="Date of Birth" />
          <DateInput
            maxWidth="350px"
            customWidth="100%"
            customHeight="18px"
            dateValue={birthDate}
            setDateValue={setBirthDate}
          />
        </Box>
        <Box mb={3} className={styles.input_boxes}>
          <Box maxWidth="350px">
            <Box
              display="flex"
              maxWidth="345px"
              alignItems="center"
              justifyContent="space-between"
            >
              <InputLabel label="Address" />
              <OutlineWhiteButton text="Edit" />
            </Box>
            <StaticInput
              showLock
              isLocked
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sed adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sed adipiscing "
              isTextArea
            />
            <WordsCount maxCount="250" currentCount={bio.length} />
          </Box>
        </Box>
        <Box maxWidth="355px" mt={8} mb={4} width="100%">
          <ReminderAlert reminderText="Save Changes" />
        </Box>
      </Box>
    </Box>
  );
};

export default UpdateProfileForm;
