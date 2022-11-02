/* eslint-disable consistent-return, array-callback-return, no-nested-ternary */

import { Box, Grid, Skeleton } from "@mui/material";
import moment from "moment";
import { FunctionComponent } from "react";
import { BsBoxArrowDownRight } from "react-icons/bs";
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
    // <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center" alignItems="center">
    <Box className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 xl:grid-cols-3 items-center gap-2 md:gap-4 xl:gap-12">
      {!loading && data ? (
        data?.map((card: any, index: number) => (
          // <Grid item key={index} xs={12} sm={4} md={4}>
          <Box className="flex justify-center items-center">
            <DataGridCard
              showCategory={showCategory || false}
              index={index}
              title={card.name}
              position={
                type === "course"
                  ? `Code - ${card.code}`
                  : card.parent_id
                  ? `Parent - ${card.parent_id}`
                  : "parent group"
              }
              date={
                type === "course"
                  ? `Start Date - ${card.start_date}`
                  : `created at - ${moment(card.created_at).format(
                      "YYYY-MM-DD"
                    )}`
              }
              image="/images/viewcard.svg"
            />
          </Box>
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
    </Box>
  );
};

GridContainer.defaultProps = {
  showCategory: false,
};
export default GridContainer;
