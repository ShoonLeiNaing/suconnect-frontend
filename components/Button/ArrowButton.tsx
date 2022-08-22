import { FunctionComponent } from "react";
import styles from "./button.module.css";

interface IProps {
  textColor?: string;
  buttonColor: string;
}

const ArrowButton: FunctionComponent<IProps> = ({ textColor, buttonColor }) => {
  return (
    <svg
      className={styles.btn_animate}
      width="127"
      height="30"
      viewBox="0 0 127 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M91.8365 30L0.000587904 30L0.000589118 15L0.000590332 2.62743e-06L91.8365 1.12972e-05L101.601 15L91.8365 30Z"
        fill={buttonColor}
      />{" "}
      <foreignObject x="10" y="4" width="90%" height="100%">
        <p className={styles.arrow_btn_text} style={{ color: textColor }}>
          See Details
        </p>
      </foreignObject>
      <path
        d="M96.0439 0H117.505L127 15L117.505 30H96.0439L106.363 15L96.0439 0Z"
        fill={buttonColor}
      />
    </svg>
  );
};

ArrowButton.defaultProps = {
  textColor: "#FFFFFF",
};

export default ArrowButton;
