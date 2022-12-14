import { Box } from "@mui/material";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { colors } from "../../data/constant";
import { byCategory, byDate } from "../../data/testData";
import { navigation } from "../../data/navigationData";
import { getAddressesOfUser } from "../../api/address/getAddressesOfUser";
import { generateColor } from "../../utils/common/generateColor";

const Layout = dynamic(import("../../components/Layout"), { ssr: false });
const BreadcrumbsComponent = dynamic(import("../../components/Breadcrumbs"), {
  ssr: false,
});
const NameTag = dynamic(import("../../components/Profile/NameTag"), {
  ssr: false,
});
const SearchInput = dynamic(import("../../components/DateFilter/SearchInput"), {
  ssr: false,
});
const AccordionComponent = dynamic(
  import("../../components/AddressAccordion"),
  {
    ssr: false,
  }
);

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
    const res = await getAddressesOfUser(1);
    setData(res.data?.address_set);
  };

  useEffect(() => {
    fetchAddresses();
  }, [stateUpdate]);

  const handleDelete = () => {};

  return (
    <Layout hiddenFooter data={navigation} panel="panel3" allowToggle>
      <Box color="black" className="container md:px-14">
        <Box className="px-4 md:px-0">
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
              className="hidden sm:flex items-center my-4 py-2 px-4 text-white cursor-pointer rounded-lg"
              bgcolor={colors.primaryColors.lightblue.lightblue1}
              onClick={() => newAddressCard()}
            >
              <FaPlus />{" "}
              <span className="ml-2" style={{ fontSize: "14px" }}>
                {" "}
                Add new address{" "}
              </span>
            </Box>
          </Box>
          <Box className="flex justify-between items-center ">
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
          </Box>
          <Box className="flex justify-end my-4">
            <Box
              className="flex sm:hidden w-fit items-center my-4 py-2 px-4 text-white cursor-pointer rounded-lg"
              bgcolor={colors.primaryColors.lightblue.lightblue1}
              onClick={() => newAddressCard()}
            >
              <FaPlus />{" "}
              <span className="ml-2" style={{ fontSize: "14px" }}>
                {" "}
                Add new address{" "}
              </span>
            </Box>
          </Box>
          <Box className="mb-4 flex flex-col md:gap-y-2">
            {data?.map((address: any, index: number) => (
              <AccordionComponent
                key={index}
                data={address}
                isOpen={index === 0}
                orderNo={index + 1}
                bgColor={generateColor(index + 1)}
                {...{ stateUpdate, setStateUpdate }}
              />
            ))}
            {add && (
              <AccordionComponent
                orderNo={data.length + 1}
                bgColor={generateColor(data.length + 1)}
                isNew
                {...{ stateUpdate, setStateUpdate, setAdd }}
              />
            )}
          </Box>
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
