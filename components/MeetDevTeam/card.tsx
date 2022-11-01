import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";
import { FunctionComponent } from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

interface CardProps {
  image: string;
  name: string;
  bgColor: string;
  position: string;
  facebookLink?: string;
  linkedInLink?: string;
  githubLink?: string;
}

const Card: FunctionComponent<CardProps> = ({
  image,
  name,
  bgColor,
  position,
  facebookLink,
  linkedInLink,
  githubLink,
}) => {
  return (
    <Box className="flex flex-col justify-center items-center">
      <Box className="relative flex justify-center items-center">
        <svg
          viewBox="0 0 268 239"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-80 h-[10.5rem] sm:h-[6.5rem] md:h-[10rem] lg:h-[14rem] xl:h-[14.5rem] absolute top-11"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M143.87 12.2587C180.639 10.0405 222.416 -12.9197 250.167 11.2689C278.169 35.6758 264.926 80.3024 264.516 117.416C264.114 153.854 274.249 196.091 247.85 221.249C221.634 246.233 179.686 237.899 143.87 232.391C114.558 227.884 90.77 212.074 67.6413 193.537C40.1749 171.523 4.10768 152.392 0.417085 117.416C-3.4426 80.8378 19.9934 45.1292 49.6849 23.3639C76.1771 3.94397 111.066 14.2378 143.87 12.2587Z"
            fill={bgColor}
          />
        </svg>

        <Box className="w-[150px] sm:w-[100px] md:w-[150px] lg:w-[200px]">
          <Image src={image} width={200} height={280} />
        </Box>
      </Box>

      <Typography
        fontWeight="bold"
        fontSize={{ md: "18px", sm: "16px" }}
        marginTop="1rem"
        color="#333333"
      >
        {name}
      </Typography>
      <Typography
        fontSize={{ md: "16px", xs: "14px" }}
        marginTop="0.3rem"
        textAlign="center"
        color="#3B8CF7"
      >
        {position}
      </Typography>
      <Box className="flex gap-x-4 mt-4 text-3xl">
        <Link href={facebookLink}>
          <FaFacebook className="text-[#3B8CF7]" />
        </Link>
        <Link href={githubLink}>
          <FaGithub className="text-[#3B8CF7]" />
        </Link>
        <Link href={linkedInLink}>
          <FaLinkedin className="text-[#3B8CF7]" />
        </Link>
      </Box>
    </Box>
  );
};

export default Card;
