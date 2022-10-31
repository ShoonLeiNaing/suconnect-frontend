import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import dynamic from "next/dynamic";

const AddDepartments = dynamic(
  import("../../../components/Department/AddData/add-department"),
  {
    ssr: false,
  }
);
const AddMembers = dynamic(
  import("../../../components/Department/AddData/add-member"),
  {
    ssr: false,
  }
);
const BreadcrumbsComponent = dynamic(
  import("../../../components/Breadcrumbs"),
  {
    ssr: false,
  }
);

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
