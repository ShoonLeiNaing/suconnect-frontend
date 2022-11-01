import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";
import SubTitle from "../SubTitle";
import Tagline from "../SubTitle/Tagline";
import Card from "./card";

const MeetDevTeam: FunctionComponent = () => {
  return (
    <Box
      paddingY="4rem"
      className="inner-container"
      display={{ xs: "flex", md: "block" }}
      alignItems="center"
      flexDirection="column"
    >
      <SubTitle
        title="Meet Developer Team"
        icon
        color={colors.primaryColors.pink.pink1}
      />
      <Tagline text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac ultrices nunc commodo nunc consequat." />
      <Box className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-x-4 gap-y-8 w-full relative">
        <Card
          image="/images/devprofile.png"
          name="Thiha Swan Htet"
          bgColor="#B3D4FF"
          position="Team Lead / Senior Backend Developer"
          facebookLink="#"
          githubLink="#"
          linkedInLink="#"
        />
        <Card
          image="/images/devprofile.png"
          name="Shoon Lei Naing"
          bgColor="#FFE4F8"
          position="Senior Frontend Developer"
          facebookLink="#"
          githubLink="#"
          linkedInLink="#"
        />
        <Card
          image="/images/devprofile.png"
          name="Thon Dary Lwin"
          bgColor="#FFF3C9"
          position="Senior UI/UX Designer"
          facebookLink="#"
          githubLink="#"
          linkedInLink="#"
        />
        <Card
          image="/images/devprofile.png"
          name="Hein Htet Nyi"
          bgColor="#D4FCF0"
          position="Junior Backend Developer"
          facebookLink="#"
          githubLink="#"
          linkedInLink="#"
        />
        <Card
          image="/images/devprofile.png"
          name="Min Khant Kyaw"
          bgColor="#FFF3C9"
          position="Junior Frontend Developer"
          facebookLink="#"
          githubLink="#"
          linkedInLink="#"
        />
        <Card
          image="/images/devprofile.png"
          name="Kyi Sin Hsu Thar"
          bgColor="#FFCFCF"
          position="Junior UI/UX Designer"
          facebookLink="#"
          githubLink="#"
          linkedInLink="#"
        />
      </Box>
    </Box>
  );
};

export default MeetDevTeam;
