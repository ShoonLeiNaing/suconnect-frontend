import { Box } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

interface IProps {
  children: any;
}

const Layout: FunctionComponent<IProps> = ({ children }: IProps) => {
  return (
    <Box>
      <Navbar />
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
