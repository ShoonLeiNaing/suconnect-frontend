import { Box } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

interface IProps {
  children: any;
  changeLanguage?: boolean;
}

const Layout: FunctionComponent<IProps> = ({
  children,
  changeLanguage,
}: IProps) => {
  return (
    <Box>
      <Navbar changeLanguage={changeLanguage} />
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
};

Layout.defaultProps = {
  changeLanguage: false,
};

export default Layout;
