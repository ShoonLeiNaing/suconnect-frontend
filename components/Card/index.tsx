import { FunctionComponent }  from "react";

export interface CardProps {
    title: string,
    text: string,
    type?: string,
    textColor?: string,
    backgroundColor?: string,
    iconTitleColor?: string,
}

const Card: FunctionComponent<CardProps> = ({
    title,
    text,
    type,
    backgroundColor,
    textColor,
    iconTitleColor,
}) => {
  return (
    <div>
      {type === "normal" &&
        <div
          className="w-fit p-8 flex"
          style={{ background: backgroundColor, color: textColor }}
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="24" fill="white"/>
            <path d="M9.3335 16V37.3333L18.6668 32L29.3335 37.3333L38.6668 32V10.6667L29.3335 16L18.6668 10.6667L9.3335 16Z" stroke={iconTitleColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.6665 10.6667V32" stroke={iconTitleColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M29.3335 16V37.3333" stroke={iconTitleColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="w-80 pl-4">
            <h3 className="text-2xl mb-3 font-semibold" style={{ color: iconTitleColor}}>{title}</h3>
            <p className="text-lg">{text}</p>
          </div>
        </div>
      }
      {type === "focus" &&
        <div
          className="w-fit p-8 flex rounded-3xl hover:shadow-lg"
          style={{ background: backgroundColor, color: textColor }}
        >
          <svg width="66" height="43" viewBox="0 0 66 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.72156 4.69688C2.3561 2.70611 3.78149 0 6.19554 0H47.4746C49.0836 0 50.5943 0.774351 51.5338 2.08065L64.2403 19.7484C64.9929 20.7949 64.9929 22.2051 64.2403 23.2516L51.5338 40.9194C50.5943 42.2256 49.0836 43 47.4746 43H6.19554C3.78149 43 2.35611 40.2939 3.72156 38.3031L11.3671 27.1563C13.705 23.7478 13.705 19.2522 11.3671 15.8437L3.72156 4.69688Z" fill="white"/>
            <g clipPath="url(#clip0_262_1705)">
            <path d="M22.9165 15.75V31.0833L29.3332 27.25L36.6665 31.0833L43.0832 27.25V11.9167L36.6665 15.75L29.3332 11.9167L22.9165 15.75Z" stroke={backgroundColor} strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M29.3335 11.9167V27.25" stroke={backgroundColor} strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M36.6665 15.75V31.0833" stroke={backgroundColor} strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_262_1705">
            <rect width="22" height="23" fill="white" transform="translate(22 10)"/>
            </clipPath>
            </defs>
          </svg>
          <div className="w-60 pl-4">
            <h3 className="text-2xl mb-3 font-semibold">{title}</h3>
            <p className="text-lg">{text}</p>
          </div>
        </div>
        }
    </div>
  );
};

Card.defaultProps = {
    type: "normal",
    backgroundColor: "#FFFFFF",
    textColor: "#737373",
    iconTitleColor: "#737373"
  };

export default Card;
