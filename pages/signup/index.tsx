import { FunctionComponent, useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import SmallButton from "../../components/Button/SmallButton";
import { colors } from "../../data/constant";

const SignUp: FunctionComponent = () => {
  const [signup, setSignUp] = useState(false);
  const router = useRouter();
  const login = () => {
    router.push("/login");
  };

  return (
    <Box className="h-screen flex items-center">
      <Box className="flex justify-center items-center bg-[#F6F9FE] h-screen w-1/2">
        <Image src="/images/signup.svg" height={450} width={450} />
      </Box>
      <Box className="flex flex-col justify-center items-center bg-white w-1/2 px-24">
        <Box className="w-full mb-12">
          <img
            alt="logo"
            className="ml-0"
            style={{ height: "50px" }}
            src="/images/logo.png"
          />
        </Box>
        <Typography className="my-6 text-[1.3rem] text-[#737373] font-semibold w-full">
          Welcome to Su Connect
        </Typography>
        <Typography className="text-[#737373] leading-7 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue.
        </Typography>
        <Box className="w-full flex justify-end items-center mt-8">
          <SmallButton
            text="Login"
            customHeight="40px"
            bgColor="white"
            color="#737373"
            customMarginX="1rem"
            customFontSize="15px"
            customBorder="1px solid #BBBBBB"
            onClickHandler={() => login()}
          />
          <SmallButton
            text="Sign Up"
            customHeight="40px"
            customFontSize="15px"
            onClickHandler={() => setSignUp(!signup)}
          />
        </Box>
        <Box className="w-full flex justify-between items-center mt-40 ">
          <Typography className="cursor-pointer text-[#3B8CF7] text-[0.9rem]">
            Privacy Policy
          </Typography>
          <Typography className="cursor-pointer text-[#3B8CF7] text-[0.9rem]">
            Terms of Service
          </Typography>
          <Typography className="cursor-pointer text-[#3B8CF7] text-[0.9rem]">
            Cookies Settings
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
