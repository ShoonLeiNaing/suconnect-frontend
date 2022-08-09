import styles from "./subButton.module.css";

const RemoveButton = () => {
  return (
    <svg
      width="109"
      height="38"
      viewBox="0 0 109 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M88.5894 38.001L0.00526649 38.001L0.00526815 19.001L0.00526981 0.000975828L88.5894 0.000983573L108.005 19.001L88.5894 38.001Z"
        fill="#FF522C"
      />

      <foreignObject x="17" y="6" width="90%" height="100%">
        <p className={styles.btn_text}> Remove</p>
      </foreignObject>
    </svg>
  );
};

export default RemoveButton;
