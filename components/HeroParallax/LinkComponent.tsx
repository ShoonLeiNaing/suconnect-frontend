import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./heroParallax.module.css";

interface IProps {
  text?: string;
  next?: boolean;
}

const LinkComponent: FunctionComponent<IProps> = ({ text, next }) => {
  if (next) {
    return (
      <Box width={107} height={72}>
        <svg
          width="107"
          height="72"
          viewBox="0 0 107 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4299 15.5663C5.97824 8.92235 10.74 0 18.7375 0H75.8324C79.0894 0 82.1424 1.58625 84.0148 4.25135L102.281 30.2514C104.705 33.7007 104.705 38.2993 102.281 41.7486L84.0148 67.7487C82.1424 70.4138 79.0894 72 75.8323 72H18.7375C10.74 72 5.97823 63.0777 10.4299 56.4337L20.3915 41.5663C22.648 38.1985 22.648 33.8015 20.3915 30.4337L10.4299 15.5663Z"
            fill="#FF7FEB"
          />
          <circle cx="56" cy="36" r="15" fill="white" />
          <path
            d="M56.1362 36.1363H51.4789M56.1362 40.7936V36.1363V40.7936ZM56.1362 36.1363V31.479V36.1363ZM56.1362 36.1363H60.7935H56.1362Z"
            stroke="#FF7FEB"
            strokeWidth="1.16779"
            strokeLinecap="round"
          />
        </svg>
      </Box>
    );
  }
  return (
    <Box width={107} height={72}>
    <svg
      width="107"
      height="72"
      viewBox="0 0 107 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.108 15.5664C6.65627 8.92244 11.418 0 19.4156 0H76.5119C79.7689 0 82.8219 1.58621 84.6943 4.25128L102.961 30.2513C105.385 33.7007 105.385 38.2993 102.961 41.7487L84.6943 67.7487C82.8219 70.4138 79.769 72 76.5119 72H19.4156C11.418 72 6.65627 63.0776 11.108 56.4336L21.0697 41.5664C23.3263 38.1985 23.3263 33.8015 21.0697 30.4336L11.108 15.5664Z"
        fill="#FFADE8"
      />
      <circle cx="54" cy="25" r="15" fill="white" />
      <g clipPath="url(#clip0_627_6867)">
        <path
          d="M48.085 22.1878V30.4021L51.6787 28.3486L55.7859 30.4021L59.3796 28.3486V20.1343L55.7859 22.1878L51.6787 20.1343L48.085 22.1878Z"
          stroke="#FF7FEB"
          strokeWidth="1.43281"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M51.6787 20.1343V28.3486"
          stroke="#FF7FEB"
          strokeWidth="1.43281"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M55.7858 22.1877V30.402"
          stroke="#FF7FEB"
          strokeWidth="1.43281"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_627_6867">
          <rect
            width="12.3214"
            height="12.3214"
            fill="white"
            transform="translate(47.5715 19.1074)"
          />
        </clipPath>
      </defs>
      <foreignObject x="35" y="42" width="90%" height="100%">
        <p className={styles.link_btn_text}>{text}</p>
      </foreignObject>
    </svg>
    </Box>
  );
};

LinkComponent.defaultProps = {
  next: false,
};
export default LinkComponent;
