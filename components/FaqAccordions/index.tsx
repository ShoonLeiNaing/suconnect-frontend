import { useState, SyntheticEvent, FunctionComponent } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  styled,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { colors } from "../../data/constant";

interface Question {
  question: string;
  answer: string;
}
interface IProps {
  title: string;
  questions: Question[];
}

const FaqAccordions: FunctionComponent<IProps> = ({ title, questions }) => {
  const BootstrapAccordion = styled(Accordion)({
    boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.07)",
    padding: "10px",
    marginBottom: "12px",
    "&.MuiAccordion-root:before": {
      backgroundColor: "white",
    },
    "&.MuiAccordion-rounded": {
      borderRadius: "10px",
    },
  });

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      <Typography fontSize="18px" marginLeft="10px">
        {title}
      </Typography>
      <Box my={2} mb={4}>
        {questions?.map((question, index) => (
          <BootstrapAccordion
            key={index}
            expanded={expanded === `panel${index + 1}`}
            onChange={handleChange(`panel${index + 1}`)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontSize="16px">{question.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize="15px" color={colors.grey.grey2}>
                {question.answer}
              </Typography>
            </AccordionDetails>
          </BootstrapAccordion>
        ))}
      </Box>
    </>
  );
};

export default FaqAccordions;
