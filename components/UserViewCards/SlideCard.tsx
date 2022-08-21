import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { FunctionComponent } from "react";
import { CardProps as Iprops } from "./AnnounceCard";

const SlideCard: FunctionComponent<Iprops> = ({
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
    <Card sx={{ display: 'flex', width: customWidth, borderRadius: "25px"}}>
      <CardMedia
        component="img"
        sx={{ width: "10rem", height: customHeight }}
        image={image}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto', backgroundColor: bgColor, padding: "2rem" }}>
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
    </Box>
  </Card>
  );
};


export default SlideCard;
