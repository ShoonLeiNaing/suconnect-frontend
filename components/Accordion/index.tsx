import { FunctionComponent, useState,  SyntheticEvent} from 'react';
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography, FormControl, Select, MenuItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InputLabel from '../Input/InputLabel';
import StaticInput from '../Input/StaticInput';
import { colors } from '../../data/constant';
import CardStatus from '../Banking/CardStatus';
import AccordionEditComponent from './edit';

interface IProps {
    title: string;
    bgColor: string;
    orderNo: number;
}

const AccordionComponent : FunctionComponent<IProps> = ( {
    title, bgColor, orderNo,
}) => {

  const [expanded, setExpanded] = useState<string | false>('panel1');

  const [edit, setEdit] = useState(false);

  const handleChange =
    (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
         <Accordion expanded={expanded === `panel${orderNo}`} onChange={handleChange(`panel${orderNo}`)} sx={{ backgroundColor: bgColor, borderRadius: "1rem!important"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className='px-8'
        > 
          <Box className='w-full flex justify-between items-center'>
          <Typography className='py-2' fontSize="17px">{title}</Typography>
          
          { !edit && (<Box
                className="my-2 px-3 py-1 mr-4 rounded-md text-sm cursor-pointer"
                sx={{
                  backgroundColor: colors.primaryColors.lightblue.lightblue1,
                  color: colors.white.white1,
                }}
                onClick={ () => {
                  setEdit(!edit);
                  handleChange(`panel${orderNo}`);
                } }
              >
                Edit
              </Box>
          )}
          </Box>
        </AccordionSummary>
      { !edit && (
        <AccordionDetails className='flex bg-white justify-between px-6 rounded-b-2xl'>
            <Box className='flex flex-col'>
                <Box className='mt-4'>
                    <InputLabel label="House Number" />
                    <StaticInput isLocked value="12" maxWidth='300px' />
                </Box>
                <Box className='my-4'>
                    <InputLabel label="City" />
                    <StaticInput isLocked value="Yangon" maxWidth='300px' />
                </Box>
            </Box>
            <Box className='flex flex-col mx-12'>
                <Box className='mt-4'>
                    <InputLabel label="Street Name" />
                    <StaticInput isLocked value="Buddha Street" maxWidth='300px' />
                </Box>
                <Box className='my-4'>
                    <InputLabel label="Country" />
                    <StaticInput isLocked value="Myanmar" maxWidth='300px' />
                </Box>
            </Box>
            <Box className='flex flex-col'>
                <Box className='mt-4'>
                    <InputLabel label="Township" />
                    <StaticInput isLocked value="Bahan" maxWidth='300px' />
                </Box>
                <Box className='my-4'>
                    <InputLabel label="Postal Code" />
                    <StaticInput isLocked value="15011" maxWidth='300px' />
                </Box>
            </Box>
        </AccordionDetails>
      ) }
      { edit && (
        <AccordionEditComponent/>
      )}
         </Accordion>
      <CardStatus createdTime="1/10/2022" updatedTime="2/10/2022" customDisplay='flex' />
    </>
  );
}
export default AccordionComponent;
