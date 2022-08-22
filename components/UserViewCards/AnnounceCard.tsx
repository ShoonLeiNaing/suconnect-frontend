import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FunctionComponent } from "react";

export interface CardProps {
  image: string;
  title: string;
  date: string;
  description: string;
  bgColor: string;
  textColor?: string;
  customWidth?: string;
  customHeight?: string;
  cardHeight?: string;
}

const AnnounceCard: FunctionComponent<CardProps> = ({
  image,
  title,
  date,
  description,
  bgColor,
  textColor,
  customWidth,
  customHeight,
  cardHeight,
}) => {
  return (
    <Card sx={{ width: customWidth, borderRadius: "25px", height: cardHeight }}>
      <CardMedia
        sx={{ height: customHeight }}
        component="img"
        image={image}
        alt="green iguana"
      />
      <CardContent
        sx={{ backgroundColor: bgColor, padding: "20px", height: "100%" }}
      >
        <Typography fontSize="18px" fontWeight={500} color={textColor}>
          {title}
        </Typography>
        <Typography
          gutterBottom
          color={textColor}
          fontSize="13px"
          sx={{ fontWeight: "lighter" }}
        >
          {date}
        </Typography>
        <Typography fontSize="15px" color={textColor} my={1}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

AnnounceCard.defaultProps = {
  customWidth: "320px",
  customHeight: "240px",
  textColor: "#FFFFFF",
};

export default AnnounceCard;
