import { FunctionComponent } from "react";
import { Image, Icon } from "@chakra-ui/react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
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
    <div>
      <div
        className="flex justify-between items-center py-6 mt-8 px-16"
        style={{ background: backgroundColor, color: textColor }}
      >
        <div className="flex flex-col">
          <Image className="w-40" src="/images/logo.png" alt="logo" />
          <p className="text-md mt-4 mb-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <div className="flex">
            <Image h="29px" w="23px" src="/images/map.svg" />
            <p className="text-sm ml-4 mb-4 lg:mt-[-0.1rem]">
              129, Myo Ma Market, Zabuthiri Township,
              <br />
              Naypyidaw, Myanmar. 15011
            </p>
          </div>
          <div className="flex">
            <a className="flex" href="tel:0912345678">
              <Image h="31px" w="31px" src="/images/phone.svg" />
              <p className="text-sm  ml-2 mb-4 ">(270) 555-0117</p>
            </a>
          </div>
          <div className="flex mt-2">
            <a className="flex" href="emailto:info@example.com">
              <Image h="32px" w="32px" src="/images/email.svg" />
              <p className="text-sm ml-2 mb-8 mt-1">info@example.com</p>
            </a>
          </div>
          <div className="flex">
            <a href="#index" className="mr-4">
              <Icon as={FaFacebookF} color="#FFFFFF" fontSize="23px" />
            </a>
            <a href="#index" className="mr-4">
              <Icon as={FaInstagram} color="#FFFFFF" fontSize="24px" />
            </a>
            <a href="#index" className="mr-4">
              <Icon as={FaTwitter} color="#FFFFFF" fontSize="24px" />
            </a>
            <a href="#index">
              <Icon as={FaLinkedin} color="#FFFFFF" fontSize="24px" />
            </a>
          </div>
        </div>
        <div className="flex flex-col mt-8">
          <h4
            className="text-xl mb-6 font-semibold"
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
        <div className="flex flex-col mt-8">
          <h4
            className="text-xl mb-6 font-semibold"
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
            className="font-semibold text-xl mb-4"
            style={{ color: titleColor }}
          >
            Follow Us
          </h4>
          <a
            className="flex items-center mb-4 mt-[0.3rem]"
            href="emailto:info@example.com"
          >
            <Icon as={FaFacebookF} color="#FFFFFF" fontSize="18px" />
            <p className="text-sm ml-2 lg:mt-[-0.1rem]">Facebook</p>
          </a>
          <a className="flex mb-4 items-center" href="emailto:info@example.com">
            <Icon as={FaInstagram} color="#FFFFFF" fontSize="20px" />
            <p className="text-sm ml-2 lg:mt-[-0.1rem]">Instagram</p>
          </a>
          <a className="flex mb-4 items-center" href="emailto:info@example.com">
            <Icon as={FaTwitter} color="#FFFFFF" fontSize="20px" />
            <p className="text-sm ml-2 lg:mt-[-0.1rem]">Twitter</p>
          </a>
          <a className="flex mb-4 items-center" href="emailto:info@example.com">
            <Icon as={FaLinkedin} color="#FFFFFF" fontSize="20px" />
            <p className="text-sm ml-2 lg:mt-[-0.1rem]">LinkedIn</p>
          </a>
        </div>
      </div>
      <div
        className="flex justify-between items-center py-8 lg:px-16 border-t border-[#252525]"
        style={{ background: backgroundColor, color: textColor }}
      >
        <p className="text-sm text-[#9C9C9C]">
          &copy;2022, All rights reserved.
        </p>
        <div className="flex flex-end">
          <a href="#index" className="text-sm mr-6">
            Privacy Policy
          </a>
          <a href="#index" className="text-sm mr-6">
            Terms of Service
          </a>
          <a href="#index" className="text-sm">
            Cookies Settings
          </a>
        </div>
      </div>
    </div>
  );
};

Footer.defaultProps = {
  backgroundColor: "#303030",
  textColor: "#FFFFFF",
  titleColor: "#3B8CF7",
};

export default Footer;
