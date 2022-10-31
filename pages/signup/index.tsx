import { FunctionComponent, useEffect, useState, ChangeEvent } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const SmallButton = dynamic(import("../../components/Button/SmallButton"), {
  ssr: false,
});
const StepperComponent = dynamic(import("../../components/Stepper/Stepper"), {
  ssr: false,
});
const DialogComponent = dynamic(
  import("../../components/SignUp/DialogComponent"),
  {
    ssr: false,
  }
);
const OutlineWhiteButton = dynamic(
  import("../../components/Button/OutlineWhiteButton"),
  {
    ssr: false,
  }
);
const StepOne = dynamic(import("../../components/SignUp/StepOne"), {
  ssr: false,
});
const StepTwo = dynamic(import("../../components/SignUp/StepTwo"), {
  ssr: false,
});
const StepThree = dynamic(import("../../components/SignUp/StepThree"), {
  ssr: false,
});
const StepFour = dynamic(import("../../components/SignUp/StepFour"), {
  ssr: false,
});
const StepFive = dynamic(import("../../components/SignUp/StepFive"), {
  ssr: false,
});
const StepSix = dynamic(import("../../components/SignUp/StepSix"), {
  ssr: false,
});

const SignUp: FunctionComponent = () => {
  const [signUp, setSignUp] = useState(false);
  const [image, setImage] = useState("/images/signup.svg");
  const [activeStep, setActiveStep] = useState(0);
  const [showPopUp, setShowPopUp] = useState(false);
  const router = useRouter();
  const [language, setLanguage] = useState<string>(router.locale || "en");
  const changeLanguageHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
    router.push(router.pathname, router.pathname, {
      locale: e.target.value,
    });
  };

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

  let width = 0;

  if (typeof window !== "undefined") {
    width = window.innerWidth;
  }

  const [screenWidth, setScreenWidth] = useState(width);

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    if (activeStep <= 5 && signUp) {
      setImage(steps[activeStep].image);
    }
    window.addEventListener("resize", updateScreenWidth);
    return () => window.removeEventListener("resize", updateScreenWidth);
  }, [activeStep]);
  return (
    <Box className="h-screen flex items-center flex-col md:flex-row">
      {showPopUp && (
        <DialogComponent
          text="Successfully Sign Up"
          open={showPopUp}
          setOpen={setShowPopUp}
        />
      )}
      <Box className="w-full flex items-center mb-0 sm:mb-2 sm:mt-2 md:hidden px-6">
        <Box className="w-full flex">
          <img
            alt="logo"
            src="/images/nn-logo.svg"
            width="80px"
            className="md:hidden -ml-4"
          />
        </Box>
        <Box className="flex md:hidden mr-4">
          <select
            className="select"
            value={language}
            onChange={changeLanguageHandler}
          >
            <option value="en">Eng</option>
            <option value="my">မြန်မာ</option>
          </select>
        </Box>
        <Box className={` ${signUp ? "hidden" : "flex"} md:hidden `}>
          <svg
            width="80"
            height="41"
            viewBox="0 0 73 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setSignUp(!signUp)}
          >
            <path
              d="M0 0.5H66.1813L73 15.9286L66.1813 30.5H0V0.5Z"
              fill="#3B8CF7"
            />
            <path
              d="M10.6215 15.614C10.6215 14.662 10.8362 13.808 11.2655 13.052C11.6949 12.2867 12.2782 11.6893 13.0155 11.26C13.7622 10.8307 14.5882 10.616 15.4935 10.616C16.5575 10.616 17.4862 10.8727 18.2795 11.386C19.0729 11.8993 19.6515 12.6273 20.0155 13.57H18.4895C18.2189 12.982 17.8269 12.5293 17.3135 12.212C16.8095 11.8947 16.2029 11.736 15.4935 11.736C14.8122 11.736 14.2009 11.8947 13.6595 12.212C13.1182 12.5293 12.6935 12.982 12.3855 13.57C12.0775 14.1487 11.9235 14.83 11.9235 15.614C11.9235 16.3887 12.0775 17.07 12.3855 17.658C12.6935 18.2367 13.1182 18.6847 13.6595 19.002C14.2009 19.3193 14.8122 19.478 15.4935 19.478C16.2029 19.478 16.8095 19.324 17.3135 19.016C17.8269 18.6987 18.2189 18.246 18.4895 17.658H20.0155C19.6515 18.5913 19.0729 19.3147 18.2795 19.828C17.4862 20.332 16.5575 20.584 15.4935 20.584C14.5882 20.584 13.7622 20.374 13.0155 19.954C12.2782 19.5247 11.6949 18.932 11.2655 18.176C10.8362 17.42 10.6215 16.566 10.6215 15.614ZM23.186 14.074C23.41 13.6353 23.7273 13.2947 24.138 13.052C24.558 12.8093 25.0667 12.688 25.664 12.688V14.004H25.328C23.9 14.004 23.186 14.7787 23.186 16.328V20.5H21.912V12.828H23.186V14.074ZM34.1346 16.37C34.1346 16.6127 34.1206 16.8693 34.0926 17.14H27.9606C28.0073 17.896 28.264 18.4887 28.7306 18.918C29.2066 19.338 29.7806 19.548 30.4526 19.548C31.0033 19.548 31.4606 19.422 31.8246 19.17C32.198 18.9087 32.4593 18.5633 32.6086 18.134H33.9806C33.7753 18.8713 33.3646 19.4733 32.7486 19.94C32.1326 20.3973 31.3673 20.626 30.4526 20.626C29.7246 20.626 29.0713 20.4627 28.4926 20.136C27.9233 19.8093 27.4753 19.3473 27.1486 18.75C26.822 18.1433 26.6586 17.4433 26.6586 16.65C26.6586 15.8567 26.8173 15.1613 27.1346 14.564C27.452 13.9667 27.8953 13.5093 28.4646 13.192C29.0433 12.8653 29.706 12.702 30.4526 12.702C31.1806 12.702 31.8246 12.8607 32.3846 13.178C32.9446 13.4953 33.374 13.934 33.6726 14.494C33.9806 15.0447 34.1346 15.67 34.1346 16.37ZM32.8186 16.104C32.8186 15.6187 32.7113 15.2033 32.4966 14.858C32.282 14.5033 31.988 14.2373 31.6146 14.06C31.2506 13.8733 30.8446 13.78 30.3966 13.78C29.7526 13.78 29.202 13.9853 28.7446 14.396C28.2966 14.8067 28.04 15.376 27.9746 16.104H32.8186ZM35.3403 16.636C35.3403 15.852 35.4989 15.166 35.8163 14.578C36.1336 13.9807 36.5676 13.5187 37.1183 13.192C37.6783 12.8653 38.2989 12.702 38.9803 12.702C39.6523 12.702 40.2356 12.8467 40.7303 13.136C41.2249 13.4253 41.5936 13.7893 41.8363 14.228V12.828H43.1243V20.5H41.8363V19.072C41.5843 19.52 41.2063 19.8933 40.7023 20.192C40.2076 20.4813 39.6289 20.626 38.9663 20.626C38.2849 20.626 37.6689 20.458 37.1183 20.122C36.5676 19.786 36.1336 19.3147 35.8163 18.708C35.4989 18.1013 35.3403 17.4107 35.3403 16.636ZM41.8363 16.65C41.8363 16.0713 41.7196 15.5673 41.4863 15.138C41.2529 14.7087 40.9356 14.382 40.5343 14.158C40.1423 13.9247 39.7083 13.808 39.2323 13.808C38.7563 13.808 38.3223 13.92 37.9303 14.144C37.5383 14.368 37.2256 14.6947 36.9923 15.124C36.7589 15.5533 36.6423 16.0573 36.6423 16.636C36.6423 17.224 36.7589 17.7373 36.9923 18.176C37.2256 18.6053 37.5383 18.9367 37.9303 19.17C38.3223 19.394 38.7563 19.506 39.2323 19.506C39.7083 19.506 40.1423 19.394 40.5343 19.17C40.9356 18.9367 41.2529 18.6053 41.4863 18.176C41.7196 17.7373 41.8363 17.2287 41.8363 16.65ZM46.8312 13.878V18.4C46.8312 18.7733 46.9106 19.0393 47.0692 19.198C47.2279 19.3473 47.5032 19.422 47.8952 19.422H48.8332V20.5H47.6852C46.9759 20.5 46.4439 20.3367 46.0892 20.01C45.7346 19.6833 45.5572 19.1467 45.5572 18.4V13.878H44.5632V12.828H45.5572V10.896H46.8312V12.828H48.8332V13.878H46.8312ZM57.3768 16.37C57.3768 16.6127 57.3628 16.8693 57.3348 17.14H51.2028C51.2495 17.896 51.5062 18.4887 51.9728 18.918C52.4488 19.338 53.0228 19.548 53.6948 19.548C54.2455 19.548 54.7028 19.422 55.0668 19.17C55.4402 18.9087 55.7015 18.5633 55.8508 18.134H57.2228C57.0175 18.8713 56.6068 19.4733 55.9908 19.94C55.3748 20.3973 54.6095 20.626 53.6948 20.626C52.9668 20.626 52.3135 20.4627 51.7348 20.136C51.1655 19.8093 50.7175 19.3473 50.3908 18.75C50.0642 18.1433 49.9008 17.4433 49.9008 16.65C49.9008 15.8567 50.0595 15.1613 50.3768 14.564C50.6942 13.9667 51.1375 13.5093 51.7068 13.192C52.2855 12.8653 52.9482 12.702 53.6948 12.702C54.4228 12.702 55.0668 12.8607 55.6268 13.178C56.1868 13.4953 56.6162 13.934 56.9148 14.494C57.2228 15.0447 57.3768 15.67 57.3768 16.37ZM56.0608 16.104C56.0608 15.6187 55.9535 15.2033 55.7388 14.858C55.5242 14.5033 55.2302 14.2373 54.8568 14.06C54.4928 13.8733 54.0868 13.78 53.6388 13.78C52.9948 13.78 52.4442 13.9853 51.9868 14.396C51.5388 14.8067 51.2822 15.376 51.2168 16.104H56.0608Z"
              fill="white"
            />
          </svg>
        </Box>
      </Box>

      <Box
        width={{ lg: "40%", md: "30%", sm: "100%" }}
        className="flex justify-center items-center md:bg-[#F6F9FE] h-screen w-full py-4"
        flex={{ sm: 1, xs: signUp ? 0 : 0.5 }}
        // flex={{ xs: 0 }}
      >
        <Box
          display={{ sm: "block", xs: signUp ? "none" : "block" }}
          height={{ xl: "300px", lg: "300px", sm: "250px", xs: "200px" }}
          width={{ xl: "300px", lg: "300px", sm: "250px", xs: "200px" }}
        >
          <Image src={image} height={300} width={300} />
        </Box>
      </Box>

      {!signUp ? (
        <Box
          className="flex flex-col items-center bg-white px-6 sm:px-8 md:px-6 lg:px-20"
          flex={1}
          justifyContent={{ sm: "center", xs: "flex-start" }}
        >
          <Box className="w-full flex items-center mb-0 sm:mb-8 mt-8 sm:mt-0">
            <Box className="w-full flex">
              <img
                alt="logo"
                className="hidden md:block -ml-4"
                style={{ height: "50px" }}
                src="/images/logo.svg"
              />
            </Box>
          </Box>
          <Typography className="md:my-6 mb-6 text-center md:text-left text-[1.15rem] sm:text-[1.3rem] text-[#737373] font-semibold w-full">
            Welcome to Su Connect
          </Typography>
          <Typography
            fontSize={{ md: "16px", base: "14px" }}
            className="text-[#737373]  mb-4 sm:mb-6"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue.
          </Typography>
          <Box
            mt={{ md: 8, sm: 4, xs: 2 }}
            className="w-full flex justify-end items-center gap-4"
          >
            <OutlineWhiteButton
              text="Login"
              customHeight="40px"
              customWidth="70px"
              onClickHandler={() => login()}
            />

            <SmallButton
              text="Sign Up"
              customHeight="40px"
              customFontSize="15px"
              onClickHandler={() => {
                setSignUp(!signUp);
                setImage("/images/Step1.svg");
              }}
            />
          </Box>
          <Box className="w-full flex justify-between items-center mb-4 mt-20 lg:mt-32 ">
            <Typography className="cursor-pointer text-[#3B8CF7] text-sm mr-4 sm:text-[0.9rem]">
              Privacy Policy
            </Typography>
            <Typography className="cursor-pointer text-[#3B8CF7] text-sm mr-4 sm:text-[0.9rem]">
              Terms of Service
            </Typography>
            <Typography className="cursor-pointer text-[#3B8CF7] text-sm sm:text-[0.9rem]">
              Cookies Settings
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box
          // className="bg-white -mt-4 md:mt-0 w-full sm:px-8"
          // flex={1}
          // height="100%"
          className=" w-full flex flex-col items-center bg-white px-4 sm:px-8 md:px-6 lg:px-20"
          justifyContent={{ sm: "center", xs: "flex-start" }}
          flex={1}
        >
          <StepperComponent
            {...{
              steps,
              activeStep,
              setActiveStep,
              maxWidth: "100%",
              marginY: "50px",
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default SignUp;
