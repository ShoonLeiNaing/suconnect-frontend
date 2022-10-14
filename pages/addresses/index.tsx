import { Box, Typography } from "@mui/material";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { RiFilterFill } from "react-icons/ri";
import BreadcrumbsComponent from "../../components/Breadcrumbs";
import Layout from "../../components/Layout";
import { colors } from "../../data/constant";
import NameTag from "../../components/Profile/NameTag";
import SearchInput from "../../components/DateFilter/SearchInput";
import DropDown from "../../components/DateFilter/DropDown";
import AccordionComponent from "../../components/AddressAccordion";
import { byCategory, byDate } from "../../data/testData";
import MenuComponent from "../../components/MenuButton";
import FilterSideBar from "../../components/FilterSideBar/FilterSideBar";
import ChipComponent from "../../components/ChipComponent";
import { navigation } from "../../data/navigationData";
import { getAddressesOfUser } from "../../api/address/getAddressesOfUser";
import { generateColor } from "../../utils/common/generateColor";

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

const Addresses = ({ addresses }: any) => {
  const [filterText, setFilterText] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");
  const [add, setAdd] = useState(false);
  const [showSideFilter, setShowSideFilter] = useState<boolean>(false);
  const [stateUpdate, setStateUpdate] = useState(false);
  const [data, setData] = useState<any>(addresses);

  const newAddressCard = () => {
    if (!add) {
      setAdd(true);
      setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 100);
    } else {
      setAdd(false);
    }
  };

  const [filterValue, setFilterValue] = useState<any>({
    filterTite: "",
    data: [],
    index: null,
  });

  const filterOptions = [
    {
      text: "Address Type",
      data: byCategory,
      onClickHandler: () => {
        setFilterValue({ title: "Address Type", data: byCategory, index: 0 });
        setShowSideFilter(true);
      },
    },
    {
      text: "Date",
      data: byDate,
      onClickHandler: () => {
        setFilterValue({ title: "Date", data: byDate, index: 2 });
        setShowSideFilter(true);
      },
    },
  ];

  const fetchAddresses = async () => {
    console.log("hehe");

    const res = await getAddressesOfUser(1);
    setData(res.data?.address_set);
  };

  useEffect(() => {
    fetchAddresses();
  }, [stateUpdate]);

  const handleDelete = () => {};

  return (
    <Layout hiddenFooter data={navigation} panel="panel3">
      <Box color="black" className="container" px={6}>
        <BreadcrumbsComponent
          currentPage="Addresses"
          previousPages={breadCrumbsData}
        />
        <Box className="flex justify-between mb-8 mt-2">
          <NameTag
            name="Thiha Swan Htet"
            previousPage="My Profile"
            currentPage="Addresses"
            tag="Lorem Ipsum Dolorum"
          />
          <Box
            className="flex items-center my-4 py-2 px-4 text-white cursor-pointer rounded-lg"
            bgcolor={colors.primaryColors.lightblue.lightblue1}
            onClick={() => newAddressCard()}
          >
            <FaPlus />{" "}
            <span className="ml-2" style={{ fontSize: "14px" }}>
              {" "}
              Add new addresses{" "}
            </span>
          </Box>
        </Box>
        <Box className="flex justify-between items-center mb-8">
          <Box display="flex" gap={2}>
            <SearchInput
              setFilterText={setFilterText}
              setSearchText={setSearchText}
            />
            {/* <MenuComponent
              filterOptions={filterOptions}
              isIcon
              icon={<RiFilterFill />}
            /> */}
          </Box>
          {/* <DropDown setFilterText={setFilterText} individual /> */}
        </Box>
        {/* <Box display="flex" alignItems="center" gap={2} mb={4}>
          {filterOptions.map((option) => (
            <ChipComponent
              key={option.text}
              label={`by ${option.text.toLowerCase()}`}
              handleDelete={handleDelete}
            />
          ))}

          <Typography
            color={colors.secondaryColors.red.red1}
            fontSize="14px"
            className="cursor"
          >
            Clear all
          </Typography>
        </Box> */}
        <Box className="mb-4">
          {data?.map((address: any, index: number) => (
            <AccordionComponent
              key={index}
              data={address}
              isOpen={index === 0}
              orderNo={index + 1}
              bgColor={generateColor(index + 1)}
            />
          ))}
          {add && (
            <AccordionComponent
              orderNo={data.length + 1}
              bgColor={generateColor(data.length + 1)}
              setAdd={setAdd}
              isNew
              {...{ stateUpdate, setStateUpdate }}
            />
          )}
        </Box>
        {/* <FilterSideBar
          open={showSideFilter}
          setShowSideFilter={setShowSideFilter}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
          filterOptions={filterOptions}
        /> */}
      </Box>
    </Layout>
  );
};

export async function getServerSideProps() {
  const addresses = await getAddressesOfUser(1);
  return {
    props: {
      addresses: addresses?.data?.address_set,
    },
  };
}

export default Addresses;
