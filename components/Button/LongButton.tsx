import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";
import styles from "./button.module.css";

interface IProps {
  color?: string;
  text: string;
  onClickHandler?: any;
}

const LongButton: FunctionComponent<IProps> = ({
  color,
  text,
  onClickHandler,
}) => {
  return (
    <Box
      width="260px"
      height="50px"
      borderRadius="15px"
      sx={{ backgroundColor: color }}
      color="white"
      onClick={() => onClickHandler()}
    >
      <button type="submit" className={styles.long_button}>
        {text}
      </button>
    </Box>
  );
};

LongButton.defaultProps = {
  color: colors.primaryColors.lightblue.lightblue1,
};

export default LongButton;
