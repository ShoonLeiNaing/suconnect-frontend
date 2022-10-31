import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import dynamic from "next/dynamic";

const AddGroups = dynamic(
  import("../../../components/Group/AddData/add-group"),
  {
    ssr: false,
  }
);
const AddMembers = dynamic(
  import("../../../components/Group/AddData/add-member"),
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
