/* eslint-disable */

import { Grid } from "@mui/material";
import { FunctionComponent } from "react";
import DataGridCard from "./DataGridCard";

interface IProps {
  showCategory?: boolean;
  data: any;
}

const GridContainer: FunctionComponent<IProps> = ({ showCategory, data }) => {
  return (
    <Grid container gap={3} columnGap={5} justifyContent="center">
      {data &&
        data.map((card: any, index: number) => {
          if (index < 6) {
            return (
              <Grid item key={card}>
                <DataGridCard
                  showCategory={showCategory || false}
                  index={index}
                  title={card.name}
                  position="Student"
                  date="01/02/2022"
                  image="/images/viewcard.svg"
                />
              </Grid>
            );
          }
        })}
    </Grid>
  );
};

GridContainer.defaultProps = {
  showCategory: false,
};
export default GridContainer;
