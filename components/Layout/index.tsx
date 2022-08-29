import { Box } from "@mui/material";
import { FunctionComponent, useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import LoginNavbar from "../Navbar/LoginNavbar";
import SideBarNav from "../Navbar/SideBarNav";

interface IProps {
  children: any;
  changeLanguage?: boolean;
  showSideNav?: boolean;
  allowToggle?: boolean;
  hiddenFooter?: boolean;
}

const Layout: FunctionComponent<IProps> = ({
  children,
  changeLanguage,
  showSideNav,
  allowToggle,
  hiddenFooter,
}: IProps) => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  return (
    <Box bgcolor="white">
      {isLogin ? (
        <Box display="flex">
          {showSideNav && <SideBarNav allowToggle={allowToggle} />}
          <Box width="100%">
            <LoginNavbar
              changeLanguage={changeLanguage}
              showSideNav={showSideNav}
            />
            <Box maxWidth="1400px" margin="auto">
              {children}
            </Box>
          </Box>
        </Box>
      ) : (
        <Box>
          <Navbar changeLanguage={changeLanguage} />
          <Box>{children}</Box>
        </Box>
      )}
      {hiddenFooter ? "" : <Footer />}
    </Box>
  );
};

Layout.defaultProps = {
  changeLanguage: false,
  showSideNav: true,
  allowToggle: true,
  hiddenFooter: false,
};

export default Layout;
