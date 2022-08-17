import { Box } from "@mui/material";
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
    <Box bgcolor="white">
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
