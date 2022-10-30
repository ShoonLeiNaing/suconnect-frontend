import { Box, Typography } from "@mui/material";
import { FaPlus } from "react-icons/fa";
import { useState, useEffect } from "react";
import { RiFilterFill } from "react-icons/ri";
import BreadcrumbsComponent from "../../components/Breadcrumbs";
import Layout from "../../components/Layout";
import BankingInfoCard from "../../components/Banking/BankInfoCard";
import { colors } from "../../data/constant";
import NameTag from "../../components/Profile/NameTag";
import SearchInput from "../../components/DateFilter/SearchInput";
import DropDown from "../../components/DateFilter/DropDown";
import { byCategory, byDate } from "../../data/testData";
import MenuComponent from "../../components/MenuButton";
import ChipComponent from "../../components/ChipComponent";
import FilterSideBar from "../../components/FilterSideBar/FilterSideBar";
import { navigation } from "../../data/navigationData";
import { getBankAccountsOfUser } from "../../api/banking/getBankAccountsOfUser";
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

const Banking = ({ bankAccounts }: any) => {
  const [filterText, setFilterText] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");
  const [add, setAdd] = useState(false);
  const [stateUpdate, setStateUpdate] = useState(false);
  const [data, setData] = useState<any>(bankAccounts);

  const newAccountCard = () => {
    if (!add) {
      setAdd(true);
      setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 100);
    } else {
      setAdd(false);
    }
  };

  const [showSideFilter, setShowSideFilter] = useState<boolean>(false);
  const [filterValue, setFilterValue] = useState<any>({
    filterTite: "",
    data: [],
    index: null,
  });

  const filterOptions = [
    {
      text: "Bank Name",
      data: byCategory,
      onClickHandler: () => {
        setFilterValue({ title: "Bank Name", data: byCategory, index: 0 });
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

  const fetchBankAccounts = async () => {
    const res = await getBankAccountsOfUser(1);
    setData(res.data?.bankaccount_set);
  };

  useEffect(() => {
    fetchBankAccounts();
  }, [stateUpdate]);

  const handleDelete = () => {};

  return (
    <Layout hiddenFooter data={navigation} panel="panel3" allowToggle>
      <Box color="black" className="container md:px-14">
        <Box className="px-4 md:px-0">
          <BreadcrumbsComponent
            currentPage="Banking"
            previousPages={breadCrumbsData}
          />
          <Box className="flex justify-between mb-8 mt-2">
            <NameTag
              name="Thiha Swan Htet"
              previousPage="My Profile"
              currentPage="Banking"
              tag="Lorem Ipsum Dolorum"
            />
            <Box
              className="hidden sm:flex items-center my-8 py-2 px-4 text-white cursor-pointer rounded-lg"
              bgcolor={colors.primaryColors.lightblue.lightblue1}
              onClick={() => newAccountCard()}
            >
              <FaPlus />{" "}
              <span className="ml-2" style={{ fontSize: "14px" }}>
                {" "}
                Add new account{" "}
              </span>
            </Box>
          </Box>
          <Box className="flex justify-between items-center sm:mb-8">
            <Box display="flex" gap={2}>
              <SearchInput
                setFilterText={setFilterText}
                setSearchText={setSearchText}
              />

              <MenuComponent
                filterOptions={filterOptions}
                isIcon
                icon={<RiFilterFill />}
              />
            </Box>
            <DropDown setFilterText={setFilterText} individual />
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

          <Box className="flex justify-end ">
            <Box
              className="flex  sm:hidden items-center w-fit my-8 py-2 px-4 text-white cursor-pointer rounded-lg"
              bgcolor={colors.primaryColors.lightblue.lightblue1}
              onClick={() => newAccountCard()}
            >
              <FaPlus />{" "}
              <span className="ml-2" style={{ fontSize: "14px" }}>
                {" "}
                Add new account{" "}
              </span>
            </Box>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" gap={2} mb={4}>
          {/* <Box className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"> */}
          <Box className=" grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 xl:grid-cols-3 items-center gap-2 md:gap-4 xl:gap-12">
            {data?.map((bankAccount: any, index: number) => (
              <BankingInfoCard
                data={bankAccount}
                bgColor={generateColor(index + 1)}
                key={index}
                orderNo={index + 1}
                {...{ stateUpdate, setStateUpdate }}
              />
            ))}

            {add && (
              <BankingInfoCard
                orderNo={data.length + 1}
                bgColor={generateColor(data.length + 1)}
                isNew
                {...{ stateUpdate, setStateUpdate, setAdd }}
              />
            )}
          </Box>
        </Box>
      </Box>
      <FilterSideBar
        open={showSideFilter}
        setShowSideFilter={setShowSideFilter}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        filterOptions={filterOptions}
      />
    </Layout>
  );
};

export async function getServerSideProps() {
  const bankAccounts = await getBankAccountsOfUser(1);
  return {
    props: {
      bankAccounts: bankAccounts?.data?.bankaccount_set,
    },
  };
}

export default Banking;
