/* eslint-disable camelcase */

import { FunctionComponent, useState, SyntheticEvent } from "react";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  styled,
  FormControl,
  Input,
} from "@mui/material";
import { Formik, FormikProvider, useFormik } from "formik";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InputLabel from "../Input/InputLabel";
import StaticInput from "../Input/StaticInput";
import CardStatus from "../Banking/CardStatus";
import AccordionEditComponent from "./edit";
import SmallButton from "../Button/SmallButton";
import styles from "./accordion.module.css";

interface IProps {
  data?: any;
  bgColor: string;
  orderNo: number;
  isOpen?: boolean;
  isNew?: boolean;
  setAdd?: any;
}

interface Address {
  house_number: string;
  block_number?: string;
  street_name: string;
  township: string;
  city: string;
  country: string;
  postal_code: number | null;
  save_name?: string;
  is_primary?: boolean;
  account?: number;
}

const AccordionComponent: FunctionComponent<IProps> = ({
  data,
  bgColor,
  orderNo,
  isOpen,
  isNew,
  setAdd,
}) => {
  const BootstrapAccordion = styled(Accordion)({
    boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.07)",
    marginBottom: "12px",
    "&.MuiAccordion-root:before": {
      backgroundColor: "white",
    },
    "&.MuiAccordion-rounded": {
      borderRadius: "13px",
    },
  });

  const [edit, setEdit] = useState(false);
  const [expanded, setExpanded] = useState<string | false>(
    isOpen || isNew ? `panel${orderNo}` : ""
  );
  const [cardTitle, setCardTitle] = useState(data?.save_name);
  const updateTitle = (event: any) => {
    setCardTitle(event.target.value);
  };

  const handleChangeAccordionPanel =
    (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const editAddress = () => {
    setEdit(!edit);
    handleChangeAccordionPanel(`panel${orderNo}`);
  };

  const initialValues: Address = {
    house_number: "" || data?.house_number,
    block_number: "" || data?.block_number,
    street_name: "" || data?.street_name,
    township: "" || data?.township,
    city: "" || data?.city,
    country: "" || data?.country,
    postal_code: null || data?.postal_code,
    save_name: "" || data?.save_name || data?.save_name,
    is_primary: false || data?.is_primary,
    account: 1 || data?.account,
  };

  const formik = useFormik({
    initialValues,
    onSubmit: () => {},
  });

  const { errors, touched, values, handleChange, handleSubmit, setFieldValue } =
    formik;
  console.log({ values });

  return (
    <FormikProvider value={formik}>
      <BootstrapAccordion
        expanded={expanded === `panel${orderNo}`}
        onChange={handleChangeAccordionPanel(`panel${orderNo}`)}
        sx={{ backgroundColor: bgColor, borderRadius: "1rem!important" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={` px-12 ${edit || isNew ? "py-2" : ""}`}
        >
          <Box className="w-full flex justify-between items-center">
            {!edit && !isNew ? (
              <Typography className="py-3" fontSize="16px">
                {values?.save_name}
              </Typography>
            ) : (
              <FormControl
                variant="standard"
                onClick={(e) => e.stopPropagation()}
              >
                <Input
                  className={styles.card_title}
                  value={cardTitle}
                  onChange={updateTitle}
                />
              </FormControl>
            )}
          </Box>
        </AccordionSummary>
        <AccordionDetails className="bg-white justify-between px-6 rounded-b-2xl">
          {!edit && !isNew ? (
            <>
              <Box className="flex justify-between  px-6">
                <Box className="flex flex-col">
                  <Box className="mt-4">
                    <InputLabel label="House Number" />
                    <StaticInput
                      isLocked
                      value={values?.house_number}
                      maxWidth="300px"
                    />
                  </Box>
                  <Box className="my-4">
                    <InputLabel label="City" />
                    <StaticInput
                      isLocked
                      value={values?.city}
                      maxWidth="300px"
                    />
                  </Box>
                </Box>
                <Box className="flex flex-col mx-12">
                  <Box className="mt-4">
                    <InputLabel label="Street Name" />
                    <StaticInput
                      isLocked
                      value={values?.street_name}
                      maxWidth="300px"
                    />
                  </Box>
                  <Box className="my-4">
                    <InputLabel label="Country" />
                    <StaticInput
                      isLocked
                      value={values?.country}
                      maxWidth="300px"
                    />
                  </Box>
                </Box>
                <Box className="flex flex-col">
                  <Box className="mt-4">
                    <InputLabel label="Township" />
                    <StaticInput
                      isLocked
                      value={values?.township}
                      maxWidth="300px"
                    />
                  </Box>
                  <Box className="my-4">
                    <InputLabel label="Postal Code" />
                    <StaticInput
                      isLocked
                      value={values?.postal_code}
                      maxWidth="300px"
                    />
                  </Box>
                </Box>
              </Box>
              <Box className="flex-col px-6">
                <Box className="flex justify-end mt-4 mb-4">
                  <SmallButton
                    text="Edit"
                    customPaddingY="18px"
                    customFontSize="15px"
                    onClickHandler={editAddress}
                  />
                </Box>
              </Box>
            </>
          ) : (
            <AccordionEditComponent
              {...{ setAdd, edit, setEdit, values, handleChange }}
            />
          )}
        </AccordionDetails>

        {/* {edit && <p>hehe</p>} */}

        {/* {edit && <AccordionEditComponent orderNo={orderNo} />} */}
      </BootstrapAccordion>
      {expanded && !isNew && <CardStatus data={data} customDisplay="flex" />}
    </FormikProvider>
  );
};

AccordionComponent.defaultProps = {
  isOpen: false,
  isNew: false,
};
export default AccordionComponent;
