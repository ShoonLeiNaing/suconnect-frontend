import { Box } from "@mui/material";
import { FunctionComponent, useState } from "react";
import BreadcrumbsComponent from "../../../components/Breadcrumbs";
import SearchInput from "../../../components/DateFilter/SearchInput";
import AddDepartments from "../../../components/Department/AddData/add-department";
import AddMembers from "../../../components/Department/AddData/add-member";
import Layout from "../../../components/Layout";
import { navigation } from "../../../data/navigationData";

interface IProps {
  addMember: boolean;
  addDepartment: boolean;
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

const AddMemberDepartmentScreen: FunctionComponent<IProps> = ({
  addMember,
  addDepartment,
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
          {addDepartment && <AddDepartments />}
        </Box>
      </Box>
    </Box>
  );
};

export default AddMemberDepartmentScreen;
