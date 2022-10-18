/* eslint-disable camelcase, no-nested-ternary */

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
import toast, { Toaster } from "react-hot-toast";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InputLabel from "../Input/InputLabel";
import StaticInput from "../Input/StaticInput";
import CardStatus from "../Banking/CardStatus";
import AccordionEditComponent from "./edit";
import SmallButton from "../Button/SmallButton";
import styles from "./accordion.module.css";
import OutlineWhiteButton from "../Button/OutlineWhiteButton";
import { createAddress } from "../../api/address/create";
import { editAddress } from "../../api/address/edit";

const AddressSchema = Yup.object().shape({
  house_number: Yup.string().required("House number is required"),
  street_name: Yup.string().required("Street name is required"),
  township: Yup.string().required("Township is required"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
  postal_code: Yup.number()
    .typeError("Postal code should be a number")
    .required("Postal code is required"),
});

interface IProps {
  data?: any;
  bgColor: string;
  orderNo: number;
  isOpen?: boolean;
  isNew?: boolean;
  setAdd?: any;
  stateUpdate?: boolean;
  setStateUpdate?: any;
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
  stateUpdate,
  setStateUpdate,
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
  const [loading, setLoading] = useState(false);
  const [errorMessages, setErrorMessages] = useState<any>([]);

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

  const clickEdit = () => {
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
    save_name: data?.save_name || `address${orderNo}`,
    is_primary: false || data?.is_primary,
    account: 1 || data?.account,
  };

  return (
    <>
      <Toaster />
      <Formik
        initialValues={initialValues}
        validationSchema={AddressSchema}
        onSubmit={async (values, actions) => {
          setLoading(true);
          if (isNew) {
            const res = await createAddress(1, values);
            if (res.code === "ERR_BAD_REQUEST") {
              toast.error("Something went wrong", {
                position: "top-right",
                className: "hot-toast",
              });
            } else {
              setAdd(false);
              toast.success("Address created successfully", {
                position: "top-right",
                className: "hot-toast",
              });
              setStateUpdate(!stateUpdate);
            }
          } else {
            const res = await editAddress(data?.id, values);
            if (res.code === "ERR_BAD_REQUEST") {
              toast.error("Something went wrong", {
                position: "top-right",
                className: "hot-toast",
              });
            } else {
              setEdit(false);
              toast.success("Address edited successfully", {
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
                      stateUpdate,
                      setStateUpdate,
                    }}
                  />
                )}

                <Box className="flex-col px-6">
                  <Box className="flex justify-end mt-4 mb-4 gap-4">
                    {/* {!edit && isNew && (
                      <OutlineWhiteButton
                        text="Cancel"
                        customWidth="80px"
                        onClickHandler={() => {
                          setEdit(!edit);
                          setAdd(false);
                        }}
                      />
                    )} */}
                    {!edit && isNew ? (
                      <>
                        <OutlineWhiteButton
                          text="Cancel"
                          customWidth="80px"
                          onClickHandler={() => {
                            setEdit(!edit);
                            setAdd(false);
                          }}
                        />
                        <SmallButton
                          text="Create"
                          customHeight="40px"
                          type="submit"
                          loading={loading}
                        />
                      </>
                    ) : edit ? (
                      <>
                        <OutlineWhiteButton
                          text="Cancel"
                          customWidth="80px"
                          onClickHandler={() => {
                            setEdit(!edit);
                          }}
                        />
                        <SmallButton
                          text="Save"
                          customHeight="40px"
                          type="submit"
                          loading={loading}
                        />
                      </>
                    ) : (
                      <SmallButton
                        text="Edit"
                        customHeight="40px"
                        onClickHandler={clickEdit}
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
    </>
  );
};

AccordionComponent.defaultProps = {
  isOpen: false,
  isNew: false,
};
export default AccordionComponent;
