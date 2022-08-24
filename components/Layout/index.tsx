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
}

const Layout: FunctionComponent<IProps> = ({
  children,
  changeLanguage,
  showSideNav,
}: IProps) => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  return (
    <Box bgcolor="white">
      {isLogin ? (
        <Box display="flex">
          {showSideNav && <SideBarNav />}
          <Box width="100%">
            <LoginNavbar
              changeLanguage={changeLanguage}
              showSideNav={showSideNav}
            />
            <Box>{children}</Box>
          </Box>
        </Box>
      ) : (
        <Box>
          <Navbar changeLanguage={changeLanguage} />
          <Box>{children}</Box>
        </Box>
      )}
      <Footer />
    </Box>
  );
};

Layout.defaultProps = {
  changeLanguage: false,
  showSideNav: true,
};

export default Layout;
