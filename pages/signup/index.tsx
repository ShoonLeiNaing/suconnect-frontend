import { FunctionComponent, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import SmallButton from "../../components/Button/SmallButton";
import StepFive from "../../components/SignUp/StepFive";
import StepFour from "../../components/SignUp/StepFour";
import StepOne from "../../components/SignUp/StepOne";
import StepperComponent from "../../components/Stepper/Stepper";
import StepSix from "../../components/SignUp/StepSix";
import StepThree from "../../components/SignUp/StepThree";
import StepTwo from "../../components/SignUp/StepTwo";
import DialogComponent from "../../components/SignUp/DialogComponent";
import OutlineWhiteButton from "../../components/Button/OutlineWhiteButton";

const SignUp: FunctionComponent = () => {
  const [signup, setSignUp] = useState(false);
  const [image, setImage] = useState("/images/signup.svg");
  const [activeStep, setActiveStep] = useState(0);
  const [showPopUp, setShowPopUp] = useState(false);
  const router = useRouter();
  const login = () => {
    router.push("/login");
  };

  const handleNext = () => {
    if (activeStep === 5) {
      setShowPopUp(true);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const steps = [
    {
      title: "Register",
      image: "/images/Step1.svg",
      component: (
        <StepOne
          {...{
            handleNext,
            handleBack: () => {
              setSignUp(false);
              setImage("/images/signup.svg");
            },
          }}
        />
      ),
    },
    {
      title: "Profile",
      image: "/images/Step2.svg",
      component: <StepTwo {...{ handleNext, handleBack }} />,
    },
    {
      title: "Contact",
      image: "/images/Step3.svg",
      component: <StepThree {...{ handleNext, handleBack }} />,
    },
    {
      title: "Address",
      image: "/images/Step4.svg",
      component: <StepFour {...{ handleNext, handleBack }} />,
    },
    {
      title: "Bank Detail",
      image: "/images/Step5.svg",
      component: <StepFive {...{ handleNext, handleBack }} />,
    },
    {
      title: "Review",
      image: "/images/Step6.svg",
      component: <StepSix {...{ handleNext, handleBack }} />,
    },
  ];

  useEffect(() => {
    if (activeStep <= 5 && signup) {
      setImage(steps[activeStep].image);
    }
  }, [activeStep]);
  return (
    <Box className="h-screen flex items-center">
      {showPopUp && (
        <DialogComponent
          text="Successfully Sign Up"
          open={showPopUp}
          setOpen={setShowPopUp}
        />
      )}
      <Box
        className="flex justify-center items-center bg-[#F6F9FE] h-screen w-1/2"
        flex={1}
      >
        <Image src={image} height={450} width={450} />
      </Box>
      {!signup ? (
        <Box
          className="flex flex-col justify-center items-center bg-white  px-24"
          flex={1}
        >
          <Box className="w-full mb-8">
            <img
              alt="logo"
              className="-ml-4"
              style={{ height: "50px" }}
              src="/images/logo.svg"
            />
          </Box>
          <Typography className="my-6 text-[1.3rem] text-[#737373] font-semibold w-full">
            Welcome to Su Connect
          </Typography>
          <Typography className="text-[#737373] leading-7 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue.
          </Typography>
          <Box className="w-full flex justify-end items-center mt-8">
            <OutlineWhiteButton
              text="Login"
              customHeight="40px"
              onClickHandler={() => login()}
            />
            {/* <SmallButton
              text="Login"
              customHeight="40px"
              bgColor="white"
              color="#737373"
              customMarginX="1rem"
              customFontSize="15px"
              customBorder="1px solid #BBBBBB"
              onClickHandler={() => login()}
            /> */}
            <SmallButton
              text="Sign Up"
              customHeight="40px"
              customFontSize="15px"
              onClickHandler={() => {
                setSignUp(!signup);
                setImage("/images/Step1.svg");
              }}
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
      ) : (
        <Box
          className="bg-white"
          flex={1}
          height="100%"
          // display="flex"
          // flexDirection="column"
          // alignItems="center"
          // justifyContent="center"
        >
          <StepperComponent
            {...{
              steps,
              activeStep,
              setActiveStep,
              width: "600px",
              marginY: "50px",
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default SignUp;
