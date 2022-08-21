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
}) => {
  return (
    <Card sx={{ width: customWidth, borderRadius: "25px" }}>
        <CardMedia sx={{ height: customHeight }}
          component="img"
          image={image}
          alt="green iguana"
        />
        <CardContent sx={{ backgroundColor: bgColor, padding: "1.2rem 2rem" }}>
          <Typography variant="h5" component="div" color={textColor}>
            {title}
          </Typography>
          <Typography variant="subtitle1" gutterBottom color={textColor} sx={{ fontWeight: "lighter"}}>
            {date}
          </Typography>
          <Typography variant="body1" color={textColor}>
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
