import { Grid } from "@mui/material";
import CourseCard from "./CourseCard";

const CourseContainer = () => {
  return (
    <Grid container gap={3} columnGap={5} justifyContent="center">
      {[1, 2, 3, 4, 5, 6].map((card, index) => (
        <Grid item key={card}>
          <CourseCard
            index={index}
            title="Course Name"
            position="Student"
            date="01/02/2022"
            image="/images/viewcard.svg"
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CourseContainer;
