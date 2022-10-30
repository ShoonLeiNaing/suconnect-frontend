import { Icon, Box } from "@mui/material";
import Image from "next/image";
import { FunctionComponent } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

export interface FooterProps {
  backgroundColor?: string;
  textColor?: string;
  titleColor?: string;
}

const Footer: FunctionComponent<FooterProps> = ({
  backgroundColor,
  textColor,
  titleColor,
}) => {
  return (
    <Box display="flex" flexDirection="column">
      <Box sx={{ backgroundColor, width: "100%", position: "relative" }}>
        <Box
          className="max-w-screen-2xl py-4 md:py-8 px-4 lg:px-16 md:px-8 sm:px-6 m-auto"
          display="flex"
          flexDirection="row"
          flexWrap={{ xs: "wrap" }}
          justifyContent="space-between"
          alignItems={{ xs: "left", sm: "center" }}
        >
          <Box
            width={{ md: "fit-content", sm: "100%" }}
            className="flex flex-col mr-10 "
          >
            <Image
              height={50}
              width={180}
              // className="w-40"
              src="/images/logo.svg"
              alt="logo"
              layout="fixed"
            />
            <p className="text-[.95rem] lg:text-base mt-4 mb-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <div className="flex">
              <Image height={18} width={20} src="/images/map.svg" />
              <p className="text-sm ml-4 lg:mt-[-0.1rem]">
                129, Myo Ma Market, Zabuthiri Township,
                <br />
                Naypyidaw, Myanmar. 15011
              </p>
            </div>
            <div className="flex mt-2">
              <a className="flex" href="tel:0912345678">
                <Image height={24} width={24} src="/images/phone.svg" />
                <p className="text-sm  ml-2">(270) 555-0117</p>
              </a>
            </div>
            <div className="flex mt-2">
              <a className="flex" href="emailto:info@example.com">
                <Image height={30} width={24} src="/images/email.svg" />
                <p className="text-sm ml-2 mt-1">info@example.com</p>
              </a>
            </div>
            <div className="flex mt-4">
              <a href="#index" className="mr-4">
                <FaFacebookF size="23px" />
                {/* <Icon as={FaFacebookF} fontSize="23px" /> */}
              </a>
              <a href="#index" className="mr-4">
                <FaInstagram size="24px" />
                {/* <Icon as={FaInstagram} fontSize="24px" /> */}
              </a>
              <a href="#index" className="mr-4">
                <FaTwitter size="24px" />
                {/* <Icon as={FaTwitter} fontSize="24px" /> */}
              </a>
              <a href="#index">
                <FaLinkedin size="24px" />
                {/* <Icon as={FaLinkedin} fontSize="24px" /> */}
              </a>
            </div>
          </Box>
          <div className="flex flex-col mt-8 mr-10">
            <h4
              className="text-[1.05rem] sm:text-[.95rem] md:text-[1.05rem] lg:text-[1.1rem] mb-6 font-semibold"
              style={{ color: titleColor }}
            >
              Column One
            </h4>
            <a href="#index" className="text-sm mb-4">
              Link One
            </a>
            <a href="#index" className="text-sm mb-4">
              Link One
            </a>
            <a href="#index" className="text-sm mb-4">
              Link One
            </a>
            <a href="#index" className="text-sm mb-4">
              Link One
            </a>
          </div>
          <div className="flex flex-col mt-8 mr-10">
            <h4
              className="text-[1.05rem] sm:text-[.95rem] md:text-[1.05rem] lg:text-[1.1rem] mb-6 font-semibold"
              style={{ color: titleColor }}
            >
              Column Two
            </h4>
            <a href="#index" className="text-sm mb-4">
              Link One
            </a>
            <a href="#index" className="text-sm mb-4">
              Link One
            </a>
            <a href="#index" className="text-sm mb-4">
              Link One
            </a>
            <a href="#index" className="text-sm mb-4">
              Link One
            </a>
          </div>
          <div className="flex flex-col mt-8">
            <h4
              className="font-semibold text-[1.05rem] sm:text-[.95rem] md:text-[1.05rem] lg:text-[1.1rem] mb-4"
              style={{ color: titleColor }}
            >
              Follow Us
            </h4>
            <a
              className="flex items-center mb-4 mt-[0.3rem]"
              href="emailto:info@example.com"
            >
              <FaFacebook size="18px" />
              <p className="text-sm ml-2 lg:mt-[-0.1rem]">Facebook</p>
            </a>
            <a
              className="flex mb-4 items-center"
              href="emailto:info@example.com"
            >
              <FaInstagram size="20px" />
              <p className="text-sm ml-2 lg:mt-[-0.1rem]">Instagram</p>
            </a>
            <a
              className="flex mb-4 items-center"
              href="emailto:info@example.com"
            >
              <FaTwitter size="20px" />
              <p className="text-sm ml-2 lg:mt-[-0.1rem]">Twitter</p>
            </a>
            <a
              className="flex mb-4 items-center"
              href="emailto:info@example.com"
            >
              <FaLinkedin size="20px" />
              <p className="text-sm ml-2 lg:mt-[-0.1rem]">LinkedIn</p>
            </a>
          </div>
        </Box>
      </Box>
      <Box
        sx={{
          background: backgroundColor,
          color: textColor,
          width: "100%",
        }}
      >
        <div className="max-w-screen-2xl m-auto flex justify-between items-center py-4 px-6 sm:px-12 lg:px-16 border-t border-[#252525]">
          <p className="text-sm text-[#9C9C9C]">
            &copy;2022, All rights reserved.
          </p>
          <div className="flex flex-end">
            <a href="#index" className="text-sm mr-2 sm:mr-6">
              Privacy Policy
            </a>
            <a href="#index" className="text-sm mr-2 sm:mr-6">
              Terms of Service
            </a>
            <a href="#index" className="text-sm">
              Cookies Settings
            </a>
          </div>
        </div>
      </Box>
    </Box>
  );
};

Footer.defaultProps = {
  backgroundColor: "#303030",
  textColor: "#FFFFFF",
  titleColor: "#3B8CF7",
};

export default Footer;
