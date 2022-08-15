import { FunctionComponent } from "react";

interface IProps {
  fill: boolean;
  color: string;
}

const SubButtonIcon: FunctionComponent<IProps> = ({ fill, color }) => {
  if (fill) {
    return (
      <svg
        width="33"
        height="22"
        viewBox="0 0 33 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 0.5H23.3753L32.3425 11L23.3753 21.5H0.5V0.5Z"
          fill="white"
        />
        <path d="M15.2252 7.21872L14.6353 7.74545L17.7621 10.6218H9.4502V11.3781H17.7621L14.6353 14.2416L15.2252 14.7812L19.3502 11L15.2252 7.21872Z" />
      </svg>
    );
  }
  return (
    <svg
      width="33"
      height="22"
      viewBox="0 0 33 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 0.5H23.3753L32.3425 11L23.3753 21.5H0.5V0.5Z"
        fill="white"
      />
      <path
        d="M15.2252 7.21872L14.6353 7.74545L17.7621 10.6218H9.4502V11.3781H17.7621L14.6353 14.2416L15.2252 14.7812L19.3502 11L15.2252 7.21872Z"
        fill={color}
      />
    </svg>
  );
};

export default SubButtonIcon;
