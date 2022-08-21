import { Box } from "@mui/material";
import { FunctionComponent, useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import LoginNavbar from "../Navbar/LoginNavbar";

interface IProps {
  children: any;
  changeLanguage?: boolean;
}

const Layout: FunctionComponent<IProps> = ({
  children,
  changeLanguage,
}: IProps) => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  return (
    <Box bgcolor="white">
      {isLogin ? (
        <LoginNavbar changeLanguage={changeLanguage} />
      ) : (
        <Navbar changeLanguage={changeLanguage} />
      )}
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
};

Layout.defaultProps = {
  changeLanguage: false,
};

export default Layout;
