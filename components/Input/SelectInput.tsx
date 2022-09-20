import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./input.module.css";
import { colors } from "../../data/constant";

interface SelectInputProps {
    value: string
    setValue: any
    maxWidth?: string
    options?: string[]
}

const svg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%237ab84e'><polygon points='0,0 100,0 50,50'/></svg>"

const SelectInput: FunctionComponent<SelectInputProps> = ({
    value,
    setValue,
    maxWidth,
    options
}) => {
    return ( 
        <Box
        color={colors.grey.grey2}
        maxWidth={maxWidth}
        height="55px"
        paddingX={2}
        borderRadius="15px"
        border="none"
        className={styles.select_box} 
        >
            <select 
            name="countries" 
            id="countries"  
            >
                <option>Myanmar</option>
                <option>Singapore</option>
                <option>Indonesia</option>
            </select>
        </Box>
     );
}

SelectInput.defaultProps = {
    maxWidth: "350px",
  };
 
export default SelectInput;