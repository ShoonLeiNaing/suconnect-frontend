import { Box, Grid } from "@mui/material";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";
import { teamData } from "../../data/data";
import SubTitle from "../SubTitle";
import Tagline from "../SubTitle/Tagline";
import Card from "./card";

const MeetDevTeam: FunctionComponent = () => {
  return (
    <Box
      paddingBottom="4rem"
      paddingTop={{ lg: "4rem" }}
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

      <Grid container rowSpacing={{ sm: 4, xs: 2 }}>
        {teamData?.map((item) => (
          <Grid key={item.name} item xl={4} lg={4} md={4} sm={4} xs={6}>
            <Card data={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MeetDevTeam;
