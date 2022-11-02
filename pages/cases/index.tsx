/* eslint-disable no-nested-ternary */

import { Box, Chip } from "@mui/material";
import { useState } from "react";
import { BiRefresh } from "react-icons/bi";
import { RiFilterFill } from "react-icons/ri";
import dynamic from "next/dynamic";
import { byCategory, byDate, byPosition } from "../../data/testData";
import { navigation } from "../../data/navigationData";

const Layout = dynamic(import("../../components/Layout"), { ssr: false });
const BreadcrumbsComponent = dynamic(import("../../components/Breadcrumbs"), {
  ssr: false,
});
const SearchInput = dynamic(import("../../components/DateFilter/SearchInput"), {
  ssr: false,
});
const MenuComponent = dynamic(import("../../components/MenuButton"), {
  ssr: false,
});
const NameTag = dynamic(import("../../components/Profile/NameTag"), {
  ssr: false,
});
const IconButton = dynamic(import("../../components/IconButton"), {
  ssr: false,
});
const FilterSideBar = dynamic(
  import("../../components/FilterSideBar/FilterSideBar"),
  {
    ssr: false,
  }
);
const ActionsMenu = dynamic(import("../../components/DataTable/ActionsMenu"), {
  ssr: false,
});

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

const handleDelete = () => {};

const columns = [
  {
    field: "no",
    headerName: "No.",
    width: 95,
  },
  { field: "date", headerName: "Date", minWidth: 170 },
  { field: "name", headerName: "Name", minWidth: 170 },

  {
    field: "status",
    headerName: "Status",
    flex: 1,
    minWidth: 170,
    filterable: false,
    renderCell: (cellValues: any) => {
      return (
        <Chip
          label={cellValues.value}
          sx={{
            borderRadius: "10px",
            backgroundColor:
              cellValues.value === "approved"
                ? "#00D097"
                : cellValues.value === "declined"
                ? "#F65160"
                : "#FFD84C",
            color: "white",
          }}
        />
      );
    },
  },
  {
    field: "bank",
    headerName: "Bank",
    flex: 1,
    minWidth: 100,
    filterable: false,
  },
  {
    field: "amount",
    headerName: "Amount",
    flex: 1,
    minWidth: 200,
  },
  {
    width: 90,
    field: "id",
    headerName: "More",
    sortable: false,
    filterable: false,

    renderCell: (cellValues: any) => {
      return <ActionsMenu />;
    },
  },
];

const Cases = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [showSideFilter, setShowSideFilter] = useState<boolean>(false);

  const [filterValue, setFilterValue] = useState<any>({
    filterTite: "",
    data: [],
    index: null,
  });

  const filterOptions = [
    {
      text: "Status",
      data: byCategory,
      onClickHandler: () => {
        setFilterValue({ title: "Status", data: byCategory, index: 0 });
        setShowSideFilter(true);
      },
    },

    {
      text: "Approval Date",
      data: byPosition,
      onClickHandler: () => {
        setFilterValue({
          title: "Approval Date",
          data: byDate,
          index: 1,
          date: true,
        });
        setShowSideFilter(true);
      },
    },
    {
      text: "Bank",
      data: byDate,
      onClickHandler: () => {
        setFilterValue({ title: "Bank", data: byDate, index: 2 });
        setShowSideFilter(true);
      },
    },
  ];

  return (
    <Layout allowToggle={false} hiddenFooter data={navigation} panel="panel3">
      <Box color="black" className="container" px={6}>
        <BreadcrumbsComponent
          currentPage="Cases"
          previousPages={breadCrumbsData}
        />
        <NameTag name="Thiha Swan Htet" currentPage="Cases" />
        <Box
          my={4}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box display="flex" gap={2}>
            <SearchInput
              searchText={searchText}
              setSearchText={setSearchText}
            />

            <MenuComponent
              filterOptions={filterOptions}
              isIcon
              icon={<RiFilterFill />}
            />
          </Box>
          <IconButton
            onClickHandler={handleDelete}
            icon={<BiRefresh fontSize="26px" />}
          />
        </Box>

        <FilterSideBar
          open={showSideFilter}
          setShowSideFilter={setShowSideFilter}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
          filterOptions={filterOptions}
        />

        {/* <Box>
          <FilterValueList filterOptions={filterOptions} />
          <DataTable columns={columns} data={casesData} />
        </Box> */}
      </Box>
    </Layout>
  );
};

export default Cases;
