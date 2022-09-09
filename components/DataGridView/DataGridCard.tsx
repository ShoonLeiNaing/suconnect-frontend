/* eslint-disable no-nested-ternary */

import { Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";

interface IProps {
  image: string;
  title: string;
  position: string;
  date: string;
  index: number;
  showCategory: boolean;
}

const DataGridCard: FunctionComponent<IProps> = ({
  image,
  title,
  position,
  date,
  index,
  showCategory,
}) => {
  const color =
    index === 0 || index === 3
      ? colors.primaryColors.yellow.yellow3
      : index === 1 || index === 4
      ? colors.primaryColors.pink.pink3
      : colors.secondaryColors.green.green2;
  return (
    <Card
      sx={{
        width: "280px",
        borderRadius: "25px",
        height: "330px",
        marginBottom: "15px",
        boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.07)",
        position: "relative",
      }}
    >
      <CardMedia
        sx={{ height: "230px" }}
        component="img"
        image={image}
        alt="green iguana"
      />
      {showCategory && (
        <Chip
          sx={{
            color: colors.grey.grey2,
            backgroundColor: color,
            borderRadius: "0",
            position: "absolute",
            bottom: "0",
            marginBottom: "115px",
            marginLeft: "20px",
          }}
          label="course cate"
        />
      )}
      <CardContent
        sx={{
          backgroundColor: colors.white.white2,
          padding: "10px 20px",
          height: "100%",
          color: colors.primaryColors.lightblue.lightblue1,
        }}
      >
        <Typography fontSize="17px" fontWeight={500}>
          {title}
        </Typography>
        <Typography gutterBottom fontSize="13px" sx={{ fontWeight: "lighter" }}>
          {position}
        </Typography>
        <Typography
          fontSize="13px"
          my="10px"
          fontWeight="light"
          color={colors.grey.grey1}
        >
          Assigned date : {date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DataGridCard;
