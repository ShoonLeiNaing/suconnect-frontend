import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { FunctionComponent, useState } from "react";
import EventComponent from "./EventComponent";
import IndicatorLine from "./IndicatorLine";
import ViewDetailComponent from "./ViewDetailComponent";

interface IProps {
  searchWord: any;
}

const SearchResultsComponent: FunctionComponent<IProps> = ({ searchWord }) => {
  const [select, setSelect] = useState(false);
  const [id, setId] = useState<number | false>();
  const typedWord = searchWord.trim();

  return (
    <Box>
      <Typography className="my-4 font-semibold text-gray-500 text-lg tracking-wide text-center">
        Showing results for { }
        <span className="font-semibold text-black">
          &quot;{typedWord}&quot;
        </span>
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
            keyword={typedWord}
            title="sprint meeting for Web Dev Team"
            detailTime="9:00 AM - 10:30 AM"
            type="Work Calendar"
            onClickHandler={() => setId(1)}
          />
          <IndicatorLine show />
          <EventComponent
            date="30"
            keyword={typedWord}
            day="Tue"
            title="sprint meeting for Web Dev Team"
            detailTime="9:00 AM - 10:30 AM"
            type="Home Calendar"
            onClickHandler={() => setId(2)}
          />
          <Typography className="my-2 mt-6 font-semibold text-gray-500 text-sm px-1">
            September 2022
          </Typography>
          <EventComponent
            date="06"
            day="Tue"
            keyword={typedWord}
            title="sprint meeting for Web Dev Team"
            detailTime="9:00 AM - 10:30 AM"
            type="Work Calendar"
            onClickHandler={() => setId(3)}
          />
          <EventComponent
            date="13"
            day="Tue"
            keyword={typedWord}
            title="sprint meeting for Web Dev Team"
            detailTime="9:00 AM - 10:30 AM"
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
              <ViewDetailComponent
                date="23/08/2022"
                day="Tuesday"
                title="sprint meeting for Web Dev Team"
                time="9:00 AM - 10:30 AM"
                type="Work Calendar"
              />
            )}
            {id === 2 && (
              <ViewDetailComponent
                date="30/08/2022"
                day="Tuesday"
                title="sprint meeting for Web Dev Team"
                time="9:00 AM - 10:30 AM"
                type="Home Calendar"
              />
            )}
            {id === 3 && (
              <ViewDetailComponent
                date="06/09/2022"
                day="Tuesday"
                title="sprint meeting for Web Dev Team"
                time="9:00 AM - 10:30 AM"
                type="Work Calendar"
              />
            )}
            {id === 4 && (
              <ViewDetailComponent
                date="13/09/2022"
                day="Tuesday"
                title="sprint meeting for Web Dev Team"
                time="9:00 AM - 10:30 AM"
                type="Home Calendar"
              />
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SearchResultsComponent;
