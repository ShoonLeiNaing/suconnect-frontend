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
  data: any[];
  panel?: string;
}

const Layout: FunctionComponent<IProps> = ({
  children,
  changeLanguage,
  showSideNav,
  allowToggle,
  hiddenFooter,
  data,
  panel,
}: IProps) => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  return (
    <Box bgcolor="white">
      {isLogin ? (
        <Box display="flex">
          {showSideNav && (
            <SideBarNav panel={panel} data={data} allowToggle={allowToggle} />
          )}
          <Box width="100%">
            <LoginNavbar
              changeLanguage={changeLanguage}
              showSideNav={showSideNav}
            />
            <Box margin="auto">{children}</Box>
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
  allowToggle: false,
  hiddenFooter: false,
};

export default Layout;
