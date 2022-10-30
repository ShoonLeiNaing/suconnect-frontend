import {Box, Typography, Popper, PopperPlacementType, Fade, Paper } from "@mui/material";
import { FunctionComponent, useState, MouseEvent } from "react";

interface IProps {
    title: string;
    time: string;
    course?: string;
}

const EventComponent :FunctionComponent<IProps> = ( {title, time, course} ) => {

    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState<PopperPlacementType>();
  
    const handleClick = () =>
      (event: MouseEvent) => {
        setOpen(!open);
      };
    
    return(
        <>
        <Popper open={open}  transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>

              <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>


        <Box onClick={handleClick()} className="border flex w-full rounded-lg bg-sky-50">
            <Box className="border-l-8 border-[#3B8CF7]  px-5 py-2 w-full rounded-[0.55rem]" boxShadow="0 5px 15px rgb(0 0 0 / 0.1)">
                <Typography>{title}</Typography> 
                <Typography>{time}</Typography> 
                <Typography>{course}</Typography>
            </Box>
        </Box>
        </>
    )
}

export default EventComponent;