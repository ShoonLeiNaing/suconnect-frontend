import {
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useState, ChangeEvent, MouseEvent, FunctionComponent } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface State {
  password: string;
  showPassword: boolean;
}

const PasswordInput: FunctionComponent = () => {
  const [values, setValues] = useState<State>({
    password: "",
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <FormControl
      sx={{ m: 1, width: "100%" }}
      className="mt-1 mb-4 ml-0"
      variant="outlined"
    >
      <OutlinedInput
        type={values.showPassword ? "text" : "password"}
        value={values.password}
        onChange={handleChange("password")}
        className="rounded-xl"
        sx={{ maxWidth: "500px", outline: "none" }}
        endAdornment={
          <InputAdornment position="end" className="p-2">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default PasswordInput;
