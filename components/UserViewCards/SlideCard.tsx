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
  cardHeight,
}) => {
  return (
    <Card
      sx={{
        display: "flex",
        width: customWidth,
        borderRadius: "25px",
        height: cardHeight,
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: "10rem", height: customHeight }}
        image={image}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent
          sx={{ flex: "1 0 auto", backgroundColor: bgColor, padding: "24px" }}
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
          <Typography
            my={1}
            fontSize="15px"
            color={textColor}
            overflow="hidden"
          >
            {description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default SlideCard;
