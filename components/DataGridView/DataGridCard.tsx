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
  category?: string;
}

const DataGridCard: FunctionComponent<IProps> = ({
  image,
  title,
  position,
  date,
  index,
  showCategory,
  category,
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
        width: { md: "280px", sm: "260px", xs: "280px" },
        borderRadius: "25px",
        height: { md: "330px", sm: "300px", xs: "300px" },
        boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.07)",
        position: "relative",
      }}
    >
      <CardMedia
        sx={{ height: { md: "230px", sm: "200px", xs: "190px" } }}
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
          label={category}
        />
      )}
      <CardContent
        sx={{
          backgroundColor: colors.white.white2,
          padding: { md: "10px 20px", xs: "8px 10px" },
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
          {date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DataGridCard;
