import { Box, Typography } from "@mui/material";
import { FunctionComponent, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { BiErrorCircle } from "react-icons/bi";

interface IProps {
  searchWord: string;
  datas: any;
  onClickHandler?: any;
}

const schedule = [
  {
    date: 28,
    day: "Mon",
    course: "IELTS Day 1",
    time: "8:00 AM to 9:00 AM",
  },
  {
    date: 29,
    day: "Tue",
    course: "IELTS Day 2",
    time: "8:00 AM to 9:00 AM",
  },
  {
    date: 30,
    day: "Wed",
    course: "IELTS Day 3",
    time: "8:00 AM to 9:00 AM",
  },
];

const SearchInstructorComponent: FunctionComponent<IProps> = ({
  searchWord,
  datas,
  onClickHandler,
}) => {
  const [status, setStatus] = useState(false);
  const [changeSearch, setChangeSearch] = useState(searchWord);

  return (
    <Box className="flex flex-col w-full">
      {datas.map((data: any, index: number) =>
        data.name.includes(searchWord) && searchWord ? (
          <Box
            key={index}
            className={`${
              !data.isAvailable && "opacity-50"
            } flex flex-col items-center hover:bg-[#B2D4FF80] rounded-md  p-3 cursor-pointer`}
            onClick={(e) => setChangeSearch(data.name)}
          >
            <Box className="flex  w-full items-center justify-between">
              <Box className="flex flex-start ">
                <Box className="w-10 h-10 flex justify-center mr-4 items-center bg-[#BBBBBB] rounded-full">
                  <Typography className="text-white font-bold">
                    {data.prefix}
                  </Typography>
                </Box>
                <Box className="flex flex-col">
                  <Typography className="text-[#737373]">
                    {data.name}
                  </Typography>
                  <Typography className="text-[#737373] text-sm">
                    {data.email}
                  </Typography>
                </Box>
              </Box>
              <Box
                className={` ${data.isAvailable && "hidden"} flex flex-end`}
                onClick={() => setStatus(!status)}
              >
                <IoIosArrowForward
                  color="black"
                  fontSize="25px"
                  className={`${status && "rotate-90"}`}
                />
              </Box>
            </Box>
            {!data.isAvailable && status && (
              <Box className="flex flex-col w-full">
                <Typography
                  color="red"
                  className="flex flex-start px-14 mt-4 mb-2 items-center text-sm"
                >
                  <BiErrorCircle fontSize={20} /> &nbsp; This lecturer is not
                  available for this course because she already has another
                  courses.
                </Typography>
                <Box>
                  <Box className="flex ml-10 my-2 items-center">
                    {schedule.map((courseData, id) => (
                      <>
                        <Box className="flex flex-col mx-5 text-black items-center">
                          <Typography className="text-sm mb-[0.1rem]">
                            {courseData.date}
                          </Typography>
                          <Typography className="text-sm">
                            {courseData.day}
                          </Typography>
                        </Box>
                        <Box
                          className={`flex flex-col pr-5 ${
                            id + 1 === schedule.length
                              ? "border-none"
                              : "border-r-2"
                          } border-[#BBBBBB] text-black`}
                        >
                          <Typography className="text-sm mb-[0.2rem]">
                            {courseData.course}
                          </Typography>
                          <Typography className="text-sm">
                            {courseData.time}
                          </Typography>
                        </Box>
                      </>
                    ))}
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        ) : (
          ""
        )
      )}
    </Box>
  );
};

export default SearchInstructorComponent;
