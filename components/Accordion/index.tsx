import {
  FunctionComponent,
  useState,
  SyntheticEvent,
  useCallback,
} from "react";
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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InputLabel from "../Input/InputLabel";
import StaticInput from "../Input/StaticInput";
import CardStatus from "../Banking/CardStatus";
import AccordionEditComponent from "./edit";
import SmallButton from "../Button/SmallButton";
import styles from "./accordion.module.css";

interface IProps {
  title: string;
  bgColor: string;
  orderNo: number;
  isOpen?: boolean;
  isNew?: boolean;
}

const AccordionComponent: FunctionComponent<IProps> = ({
  title,
  bgColor,
  orderNo,
  isOpen,
  isNew,
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

  const [cardTitle, setCardTitle] = useState(title);

  const updateTitle = (event: any) => {
    setCardTitle(event.target.value);
  };

  const handleChange =
    (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const editAddress = () => {
    setEdit(!edit);
    handleChange(`panel${orderNo}`);
  };

  return (
    <>
      <BootstrapAccordion
        expanded={expanded === `panel${orderNo}`}
        onChange={handleChange(`panel${orderNo}`)}
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
                {cardTitle}
              </Typography>
            ) : (
              <FormControl variant="standard">
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
                    <StaticInput isLocked value="12" maxWidth="300px" />
                  </Box>
                  <Box className="my-4">
                    <InputLabel label="City" />
                    <StaticInput isLocked value="Yangon" maxWidth="300px" />
                  </Box>
                </Box>
                <Box className="flex flex-col mx-12">
                  <Box className="mt-4">
                    <InputLabel label="Street Name" />
                    <StaticInput
                      isLocked
                      value="Buddha Street"
                      maxWidth="300px"
                    />
                  </Box>
                  <Box className="my-4">
                    <InputLabel label="Country" />
                    <StaticInput isLocked value="Myanmar" maxWidth="300px" />
                  </Box>
                </Box>
                <Box className="flex flex-col">
                  <Box className="mt-4">
                    <InputLabel label="Township" />
                    <StaticInput isLocked value="Bahan" maxWidth="300px" />
                  </Box>
                  <Box className="my-4">
                    <InputLabel label="Postal Code" />
                    <StaticInput isLocked value="15011" maxWidth="300px" />
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
            <AccordionEditComponent edit={edit} setEdit={setEdit} />
          )}
        </AccordionDetails>

        {/* {edit && <p>hehe</p>} */}

        {/* {edit && <AccordionEditComponent orderNo={orderNo} />} */}
      </BootstrapAccordion>
      {expanded && (
        <CardStatus
          createdTime="1/10/2022"
          updatedTime="2/10/2022"
          customDisplay="flex"
        />
      )}
    </>
  );
};

AccordionComponent.defaultProps = {
  isOpen: false,
  isNew: false,
};
export default AccordionComponent;
