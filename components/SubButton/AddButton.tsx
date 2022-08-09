import styles from "./subButton.module.css";

interface IProps {
  color?: string;
}

const AddButton = ({ color }: IProps) => {
  return (
    <svg
      width="78"
      height="38"
      viewBox="0 0 78 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M60.2767 38L0.000471632 38L0.000473293 19L0.000474954 1.88864e-06L60.2767 7.15816e-06L78 19L60.2767 38Z"
        fill={color}
      />
      <foreignObject x="17" y="6" width="90%" height="100%">
        <p className={styles.btn_text}>Add</p>
      </foreignObject>
    </svg>
  );
};

export default AddButton;
