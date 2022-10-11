/* eslint-disable camelcase */

import { FunctionComponent, useState, SyntheticEvent } from "react";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  styled,
  Input,
} from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InputLabel from "../Input/InputLabel";
import StaticInput from "../Input/StaticInput";
import CardStatus from "../Banking/CardStatus";
import AccordionEditComponent from "./edit";
import SmallButton from "../Button/SmallButton";
import styles from "./accordion.module.css";
import OutlineWhiteButton from "../Button/OutlineWhiteButton";

const AddressSchema = Yup.object().shape({
  house_number: Yup.string().required("House number is required"),
  street_name: Yup.string().required("Street name is required"),
  township: Yup.string().required("Township is required"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
  postal_code: Yup.string().required("Postal code is required"),
});

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
  postal_code: string;
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
    setEdit(true);
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
    save_name: "" || data?.save_name,
    is_primary: false || data?.is_primary,
    account: 1 || data?.account,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AddressSchema}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
      }}
    >
      {({ handleSubmit, values, handleChange, errors, touched }) => (
        <form onSubmit={handleSubmit}>
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
                    {initialValues?.save_name}
                  </Typography>
                ) : (
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    id="save_name"
                    name="save_name"
                    className={styles.card_title}
                    value={values.save_name}
                    onChange={handleChange}
                  />
                )}
              </Box>
            </AccordionSummary>
            <AccordionDetails className="bg-white justify-between px-6 rounded-b-2xl">
              {!edit && !isNew ? (
                <Box className="flex justify-between  px-6">
                  <Box className="flex flex-col">
                    <Box className="mt-4">
                      <InputLabel label="House Number" />
                      <StaticInput
                        isLocked
                        value={initialValues?.house_number}
                        maxWidth="300px"
                      />
                    </Box>
                    <Box className="my-4">
                      <InputLabel label="City" />
                      <StaticInput
                        isLocked
                        value={initialValues?.city}
                        maxWidth="300px"
                      />
                    </Box>
                  </Box>
                  <Box className="flex flex-col mx-12">
                    <Box className="mt-4">
                      <InputLabel label="Street Name" />
                      <StaticInput
                        isLocked
                        value={initialValues?.street_name}
                        maxWidth="300px"
                      />
                    </Box>
                    <Box className="my-4">
                      <InputLabel label="Country" />
                      <StaticInput
                        isLocked
                        value={initialValues?.country}
                        maxWidth="300px"
                      />
                    </Box>
                  </Box>
                  <Box className="flex flex-col">
                    <Box className="mt-4">
                      <InputLabel label="Township" />
                      <StaticInput
                        isLocked
                        value={initialValues?.township}
                        maxWidth="300px"
                      />
                    </Box>
                    <Box className="my-4">
                      <InputLabel label="Postal Code" />
                      <StaticInput
                        isLocked
                        value={initialValues?.postal_code}
                        maxWidth="300px"
                      />
                    </Box>
                  </Box>
                </Box>
              ) : (
                <AccordionEditComponent
                  {...{
                    setAdd,
                    edit,
                    setEdit,
                    values,
                    handleChange,
                    errors,
                    touched,
                  }}
                />
              )}

              <Box className="flex-col px-6">
                <Box className="flex justify-end mt-4 mb-4 gap-4">
                  {!edit && isNew && (
                    <OutlineWhiteButton
                      text="Cancel"
                      customWidth="80px"
                      onClickHandler={() => {
                        setEdit(!edit);
                        setAdd(false);
                      }}
                    />
                  )}
                  {!edit && isNew ? (
                    <SmallButton
                      text="Create"
                      customHeight="40px"
                      type="submit"
                    />
                  ) : (
                    <SmallButton
                      text="Edit"
                      customHeight="40px"
                      onClickHandler={editAddress}
                    />
                  )}
                </Box>
              </Box>
            </AccordionDetails>
          </BootstrapAccordion>
          {expanded && !isNew && (
            <CardStatus data={data} customDisplay="flex" />
          )}
        </form>
      )}
    </Formik>
  );
};

AccordionComponent.defaultProps = {
  isOpen: false,
  isNew: false,
};
export default AccordionComponent;
