import { Box } from "@mui/material";
import { FunctionComponent, useState } from "react";
import BreadcrumbsComponent from "../../../components/Breadcrumbs";
import SearchInput from "../../../components/DateFilter/SearchInput";
import AddGroups from "../../../components/Group/AddData/add-group";
import AddMembers from "../../../components/Group/AddData/add-member";
import Layout from "../../../components/Layout";
import { navigation } from "../../../data/navigationData";

interface IProps {
  addMember: boolean;
  addGroup: boolean;
}

const breadCrumbsData = [
  {
    name: "Dashboard",
    link: "/dashboard",
  },
  {
    name: "My Profile",
    link: "/profile",
  },
];

const AddMemberGroupScreen: FunctionComponent<IProps> = ({
  addMember,
  addGroup,
}) => {
  return (
    <Box>
      <Box color="black" className="container" px={7}>
        <BreadcrumbsComponent
          currentPage="Schedule"
          previousPages={breadCrumbsData}
        />

        <Box my={3}>
          {addMember && <AddMembers />}
          {addGroup && <AddGroups />}
        </Box>
      </Box>
    </Box>
  );
};

export default AddMemberGroupScreen;
