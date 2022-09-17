import { FunctionComponent, useState } from "react";
import { Box, Typography, FormControlLabel, Checkbox } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

import PasswordInput from "../../components/ResetPasswordForm/PasswordInput";
import InputLabel from "../../components/Input/InputLabel";
import DynamicInput from "../../components/Input/DynamicInput";
import SmallButton from "../../components/Button/SmallButton";

const Login: FunctionComponent = () => {
  const [mail, setMail] = useState("");
  const [login, setLogin] = useState(false);
  const router = useRouter();
  const signup = () => {
    router.push("/signup");
  };

  return (
    <Box className="h-screen flex items-center">
      <Box className="flex justify-center items-center bg-[#F6F9FE] h-screen w-1/2">
        <Image src="/images/login.svg" height={450} width={450} />
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
          Login to dashboard
        </Typography>
        <Box className="w-full flex flex-col border py-8 px-10 rounded-xl">
          <Box className="mb-6">
            <Typography className="text-[#737373] text-[0.9rem] mb-1 font-semibold">
              Mail
            </Typography>
            <DynamicInput value={mail} setValue={setMail} maxWidth="500px" />
          </Box>
          <Box className="flex justify-between">
            <Typography className="text-[#737373] text-[0.9rem]">
              Password
            </Typography>
            <Typography className="cursor-pointer text-[#3B8CF7] text-sm">
              Forgot Password ?
            </Typography>
          </Box>
          <PasswordInput />
          <Box className="-ml-2">
            <Checkbox className="text-[#3B8CF7]" />
            <Typography className="inline-block text-[0.9rem] text-[#737373]">
              Remember login
            </Typography>
          </Box>
        </Box>
        <Box className="w-full flex justify-between items-center mt-8">
          <Typography className="text-[#737373]">
            If you have no account,{" "}
            <a href="#" className="text-[#3B8CF7]">
              sign up here.
            </a>
          </Typography>
          <SmallButton
            text="Login"
            customHeight="40px"
            customFontSize="15px"
            onClickHandler={() => signup()}
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

export default Login;
