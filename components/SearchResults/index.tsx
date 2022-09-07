import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { FunctionComponent, useState } from "react";
import { FaClock } from "react-icons/fa";
import { Today } from "@mui/icons-material";
import { colors } from "../../data/constant";
import EventComponent from "./EventComponent";
import IndicatorLine from "./IndicatorLine";
import CalendarStatusBar from "./StatusBar";

const SearchResultsComponent: FunctionComponent = () => {
  const [select, setSelect] = useState(false);
  const [id, setId] = useState<number | false>();

  return (
    <Box>
      <Typography className="my-4 font-semibold text-gray-500 text-lg tracking-wide text-center">
        Showing results for{" "}
        <span className="font-semibold text-black">&quot;sprint&quot;</span>
      </Typography>
      <Box className={`flex ${id ? " " : "items-center"}`}>
        <Box className="my-6 w-fit px-8 py-8 border rounded-l-xl inline-block">
          <Typography className="text-base px-1"> Events </Typography>
          <Typography className="mt-4 mb-2 font-semibold text-gray-500 text-sm px-1">
            August 2022
          </Typography>
          <EventComponent
            date="23"
            day="Tue"
            title="sprint meeting for Web Dev Team"
            detailTime="9:00 AM - 10:30AM"
            type="Work Calendar"
            onClickHandler={() => setId(1)}
          />
          <IndicatorLine show />
          <EventComponent
            date="30"
            day="Tue"
            title="sprint meeting for Web Dev Team"
            detailTime="9:00 AM - 10:30AM"
            type="Home Calendar"
            onClickHandler={() => setId(2)}
          />
          <Typography className="my-2 mt-6 font-semibold text-gray-500 text-sm px-1">
            September 2022
          </Typography>
          <EventComponent
            date="06"
            day="Tue"
            title="sprint meeting for Web Dev Team"
            detailTime="9:00 AM - 10:30AM"
            type="Work Calendar"
            onClickHandler={() => setId(3)}
          />
          <EventComponent
            date="13"
            day="Tue"
            title="sprint meeting for Web Dev Team"
            detailTime="9:00 AM - 10:30AM"
            type="Home Calendar"
            onClickHandler={() => setId(4)}
          />
        </Box>
        {!id ? (
          <Box className="w-1/2 flex flex-col justify-center">
            <Image width="100" height="100" src="/images/calendar.svg" />
            <Typography className="my-4 text-center">
              {" "}
              Select an event to view details{" "}
            </Typography>
          </Box>
        ) : (
          <Box className="mx-8 my-6 border px-4 h-fit w-1/2">
            {id === 1 && (
              <>
                <Typography className="text-[0.94rem] text-[#333333] py-4 border-b">
                  <Today fontSize="small" />{" "}
                  <span className="ml-[0.3rem]">
                    sprint Meeting for Web Dev Team
                  </span>
                </Typography>
                <Typography className="text-[0.94rem] text-[#333333] py-4 border-b flex items-center">
                  {" "}
                  <FaClock fontSize="medium" />{" "}
                  <span className="ml-3 mr-4">Tuesday 23/08/2022</span> 9:00 AM
                  - 10:30 AM{" "}
                </Typography>
                <CalendarStatusBar
                  type="Work Calendar"
                  dotColor="#FFD233"
                  detailView
                />
              </>
            )}
            {id === 2 && (
              <>
                <Typography className="text-[0.94rem] text-[#333333] py-4 border-b">
                  <Today fontSize="small" />{" "}
                  <span className="ml-[0.3rem]">
                    sprint Meeting for Web Dev Team
                  </span>
                </Typography>
                <Typography className="text-[0.94rem] text-[#333333] py-4 border-b flex items-center">
                  {" "}
                  <FaClock fontSize="medium" />{" "}
                  <span className="ml-3 mr-4">Tuesday 30/08/2022</span> 9:00 AM
                  - 10:30 AM{" "}
                </Typography>
                <CalendarStatusBar
                  type="Home Calendar"
                  dotColor="#47F09F"
                  detailView
                />
              </>
            )}
            {id === 3 && (
              <>
                <Typography className="text-[0.94rem] text-[#333333] py-4 border-b">
                  <Today fontSize="small" />{" "}
                  <span className="ml-[0.3rem]">
                    sprint Meeting for Web Dev Team
                  </span>
                </Typography>
                <Typography className="text-[0.94rem] text-[#333333] py-4 border-b flex items-center">
                  {" "}
                  <FaClock fontSize="medium" />{" "}
                  <span className="ml-3 mr-4">Tuesday 06/09/2022</span> 9:00 AM
                  - 10:30 AM{" "}
                </Typography>
                <CalendarStatusBar
                  type="Work Calendar"
                  dotColor="#FFD233"
                  detailView
                />
              </>
            )}
            {id === 4 && (
              <>
                <Typography className="text-[0.94rem] text-[#333333] py-4 border-b">
                  <Today fontSize="small" />{" "}
                  <span className="ml-[0.3rem]">
                    sprint Meeting for Web Dev Team
                  </span>
                </Typography>
                <Typography className="text-[0.94rem] text-[#333333] py-4 border-b flex items-center">
                  {" "}
                  <FaClock fontSize="medium" />{" "}
                  <span className="ml-3 mr-4">Tuesday 13/09/2022</span> 9:00 AM
                  - 10:30 AM{" "}
                </Typography>
                <CalendarStatusBar
                  type="Home Calendar"
                  dotColor="#47F09F"
                  detailView
                />
              </>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SearchResultsComponent;
