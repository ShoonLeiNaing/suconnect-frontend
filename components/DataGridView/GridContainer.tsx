/* eslint-disable consistent-return, array-callback-return, no-nested-ternary */

import { Grid, Skeleton } from "@mui/material";
import { FunctionComponent } from "react";
import DataGridCard from "./DataGridCard";

interface IProps {
  showCategory?: boolean;
  data: any;
  type: string;
  loading: boolean;
}

const GridContainer: FunctionComponent<IProps> = ({
  showCategory,
  data,
  type,
  loading,
}) => {
  return (
    <Grid container gap={3} justifyContent="center">
      {!loading && data ? (
        data?.map((card: any, index: number) => (
          <Grid item key={index} xs={3}>
            <DataGridCard
              showCategory={showCategory || false}
              index={index}
              title={card.name}
              position={type === "course" ? `Code - ${card.code}` : "jeje"}
              date={
                type === "course" ? `Start Date - ${card.start_date}` : "jeje"
              }
              image="/images/viewcard.svg"
            />
          </Grid>
        ))
      ) : loading ? (
        [0, 1, 2, 3, 4, 5]?.map((card: any, index: number) => (
          <Grid item key={index} xs={3}>
            <Skeleton
              variant="rounded"
              sx={{ width: "280px", borderRadius: "25px", height: "330px" }}
            />
          </Grid>
        ))
      ) : (
        <p>no data</p>
      )}
    </Grid>
  );
};

GridContainer.defaultProps = {
  showCategory: false,
};
export default GridContainer;
