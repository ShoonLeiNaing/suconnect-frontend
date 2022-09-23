import { Box, Typography, ListItem } from "@mui/material";
import { useState, FunctionComponent } from "react";
import InputLabel from "../Input/InputLabel";
import SmallButton from "../Button/SmallButton";
import { colors } from "../../data/constant";
import PasswordInput from "../Input/PasswordInput";

const ResetPasswordForm: FunctionComponent = () => {
  const [edit, setEdit] = useState(true);
  const [save, setSave] = useState(false);

  return (
    <Box maxWidth="450px" margin="auto" my={6}>
      <Typography fontSize="20px" fontWeight={600}>
        Reset Password
      </Typography>
      <Box className="text-[15px] font-light tracking-wide my-4">
        <Typography className="text-[15px] font-light mb-1">
          In order to{" "}
          <span className="font-semibold">protect your account</span>, make sure
          your password:
        </Typography>
        <ListItem sx={{ display: "list-item" }} className="pb-0">
          Is longer than 7 characters
        </ListItem>
        <ListItem sx={{ display: "list-item" }} className="pb-0">
          Does not match or significantly contain your username, e.g. do not use
          ‘username123’.
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          Is not a member of this{" "}
          <span className="font-semibold">list of common passwords</span>
        </ListItem>
      </Box>
      <Box>
        <InputLabel label="Current Password" />
        <PasswordInput />
      </Box>
      <Box>
        <InputLabel label="New Password" />
        <PasswordInput />
      </Box>

      <Box>
        <InputLabel label="Confirm New Password" />
        <PasswordInput />
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        maxWidth="412px"
        mt={2}
      >
        <SmallButton
          text="Cancel"
          bgColor="white"
          customPaddingX="2rem"
          color={colors.black.black1}
          customFontSize="15px"
          onClickHandler={() => setEdit(!edit)}
        />
        <SmallButton
          text="Save Changes"
          customHeight="40px"
          customFontSize="15px"
          onClickHandler={() => setSave(!save)}
        />
      </Box>
    </Box>
  );
};

export default ResetPasswordForm;
