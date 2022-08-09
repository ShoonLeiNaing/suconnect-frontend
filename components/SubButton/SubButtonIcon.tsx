interface IProps {
  fill: boolean;
  color: string;
}

const SubButtonIcon = ({ fill, color }: IProps) => {
  if (fill) {
    return (
      <svg
        width="40"
        height="25"
        viewBox="0 0 40 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 0.5H28.3953L39.3173 12.25L28.3953 24H0.5V0.5Z"
          stroke={color}
        />
        <path
          d="M18.4541 8.20312L17.7391 8.80168L21.5291 12.0703H11.4541V12.9297H21.5291L17.7391 16.1837L18.4541 16.7969L23.4541 12.5L18.4541 8.20312Z"
          fill={color}
        />
      </svg>
    );
  }
  return (
    <svg
      width="40"
      height="25"
      viewBox="0 0 40 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0.5H28.6131L40 12.75L28.6131 25H0V0.5Z" fill={color} />
      <path
        d="M18.4541 8.20312L17.7391 8.80168L21.5291 12.0703H11.4541V12.9297H21.5291L17.7391 16.1837L18.4541 16.7969L23.4541 12.5L18.4541 8.20312Z"
        fill="white"
      />
    </svg>
  );
};

export default SubButtonIcon;
