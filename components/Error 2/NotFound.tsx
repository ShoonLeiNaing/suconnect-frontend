import Image from 'next/image'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import { colors } from '../../data/constant'

const NotFound = () => {
    return ( 
        <Box className="flex items-center justify-center" sx={{
            height: "100vh",
        }}>
            <Box className='flex flex-col items-center' >
                <Typography className="text-black font-semibold text-2xl">
                    <span className='font-[1000] text-5xl'>404</span> Not Found
                </Typography>
                <Typography color={colors.grey.grey2}>
                    it seems that page you are looking for no longer exists.
                </Typography>
                <Image
                src="/images/page-not-found.svg"
                alt="404"
                width={500}
                height={300}
                />
            </Box>
        </Box>
     );
}
 
export default NotFound;