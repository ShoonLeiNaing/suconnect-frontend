import { Box, Typography, ListItem } from "@mui/material";
import { useState, FunctionComponent } from "react";
import InputLabel from "../Input/InputLabel";
import SmallButton from "../Button/SmallButton";
import { colors } from "../../data/constant";
import PasswordInput from "./PasswordInput";

const ResetPasswordForm: FunctionComponent = () => {
  const [edit, setEdit] = useState(true);
  const [save, setSave] = useState(false);

  return (
    <Box className="w-1/2 p-8 mb-8">
      <Typography className="text-lg font-semibold">Reset Password</Typography>
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
      <Box className="pb-0 mb-0">
        <InputLabel label="Current Password" />
      </Box>
      <PasswordInput />
      <Box className="pb-0 mb-0">
        <InputLabel label="New Password" />
      </Box>
      <PasswordInput />

      <Box className="pb-0 mb-0">
        <InputLabel label="Confirm New Password" />
      </Box>
      <PasswordInput />

      <Box className="flex justify-end mt-4 mb-4 mr-10">
        <SmallButton
          text="Cancel"
          bgColor="white"
          customPaddingY="0.5rem"
          customPaddingX="2rem"
          color={colors.black.black1}
          customFontSize="15px"
          onClickHandler={() => setEdit(!edit)}
        />
        <SmallButton
          text="Save Changes"
          customPaddingY="0.5rem"
          customFontSize="15px"
          onClickHandler={() => setSave(!save)}
        />
      </Box>
    </Box>
  );
};

export default ResetPasswordForm;
