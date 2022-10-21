/* eslint-disable camelcase */

import { useState, FunctionComponent } from "react";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import InputLabel from "../Input/InputLabel";
import { colors } from "../../data/constant";
import CardStatus from "./CardStatus";
import StaticInput from "../Input/StaticInput";
import styles from "./banking.module.css";
import BankingInfoEditCard from "./BankInfoEditCard";
import SmallButton from "../Button/SmallButton";
import { createBankAccount } from "../../api/banking/create";
import { updateBankAccount } from "../../api/banking/update";
import OutlineWhiteButton from "../Button/OutlineWhiteButton";

const BankAccountSchema = Yup.object().shape({
  owner_name: Yup.string().required("Bank account name is required"),
  bank_type: Yup.string().required("Bank type is required"),
  number: Yup.number()
    .typeError("Bank account number must be a number")
    .required("Bank account number is required"),
});

interface IProps {
  data?: any;
  bgColor: string;
  stateUpdate?: boolean;
  setStateUpdate?: any;
  orderNo: number;
  setAdd?: any;
  isNew?: boolean;
}

interface BankAccount {
  owner_name: string;
  bank_type: string;
  number: number;
  save_name?: string;
  is_primary?: boolean;
  account?: number;
}

const BankingInfoCard: FunctionComponent<IProps> = ({
  bgColor,
  data,
  stateUpdate,
  setStateUpdate,
  orderNo,
  setAdd,
  isNew,
}) => {
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  const BootstrapInput = styled(InputBase)(() => ({
    "& .MuiInputBase-input": {
      paddingLeft: "16px",
    },
  }));

  const initialValues: BankAccount = {
    owner_name: "" || data?.owner_name,
    bank_type: "" || data?.bank_type,
    number: null || data?.number,
    save_name: data?.save_name || `My Account ${orderNo}`,
    is_primary: false || data?.is_primary,
    account: 1 || data?.account,
  };

  return (
    <Box>
      <Toaster />
      <Formik
        initialValues={initialValues}
        validationSchema={BankAccountSchema}
        onSubmit={async (values, actions) => {
          setLoading(true);
          if (isNew) {
            const res = await createBankAccount(1, values);
            if (res.code === "ERR_BAD_REQUEST") {
              toast.error("Something went wrong", {
                position: "top-right",
                className: "hot-toast",
              });
            } else {
              setAdd(false);
              toast.success("Bank Acccount created successfully", {
                position: "top-right",
                className: "hot-toast",
              });
              setStateUpdate(!stateUpdate);
            }
          } else {
            const res = await updateBankAccount(data?.id, values);
            if (res.code === "ERR_BAD_REQUEST") {
              toast.error("Something went wrong", {
                position: "top-right",
                className: "hot-toast",
              });
            } else {
              setEdit(false);
              toast.success("Bank Acccount updated successfully", {
                position: "top-right",
                className: "hot-toast",
              });
              setStateUpdate(!stateUpdate);
            }
          }
          setLoading(false);
        }}
      >
        {({ handleSubmit, values, handleChange, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <Box className="flex flex-col">
              {!edit && !isNew ? (
                <Box width="340px" className="rounded-xl shadow-lg mb-4">
                  <Box
                    sx={{ backgroundColor: bgColor }}
                    className="flex p-6 rounded-t-xl justify-between items-center text-white py-6"
                  >
                    <Typography fontSize="17px" color={colors.black.black2}>
                      {values?.save_name}
                    </Typography>
                  </Box>
                  <Box className="bg-white p-4 mb-4 rounded-b-xl">
                    <Box mb={3}>
                      <InputLabel label="Bank Account Name" />
                      <StaticInput isLocked value={values?.owner_name} />
                    </Box>
                    <Box mb={3}>
                      <InputLabel label="Bank Type" />
                      <FormControl
                        disabled
                        sx={{
                          backgroundColor: colors.white.white2,
                          color: colors.black.black1,
                        }}
                        className={styles.form_control}
                      >
                        <Select
                          value={values?.bank_type}
                          input={<BootstrapInput />}
                          className={styles.select_box}
                        >
                          <MenuItem value="KBZ">KBZ</MenuItem>
                          <MenuItem value="AYA">AYA</MenuItem>
                          <MenuItem value="CB">CB</MenuItem>
                          <MenuItem value="UAB">UAB</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                    <Box mb={3}>
                      <InputLabel label="Bank Account Number" />
                      <StaticInput isLocked value={values?.number} />
                    </Box>

                    <Box className="flex justify-end mt-4">
                      <SmallButton
                        text="Edit"
                        customHeight="40px"
                        customFontSize="15px"
                        onClickHandler={() => {
                          setEdit(true);
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              ) : (
                <BankingInfoEditCard
                  {...{
                    bgColor,
                    edit,
                    setEdit,
                    setAdd,
                    values,
                    handleChange,
                    errors,
                    touched,
                    stateUpdate,
                    setStateUpdate,
                    isNew,
                    loading,
                  }}
                />
              )}
            </Box>
            {!setAdd && !isNew && <CardStatus data={data} />}
          </form>
        )}
      </Formik>
    </Box>
  );
};
BankingInfoCard.defaultProps = {
  isNew: false,
};
export default BankingInfoCard;
