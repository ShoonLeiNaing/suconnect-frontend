import { FunctionComponent, useState } from "react";
import Link from 'next/link'
import { Box, Button, Typography } from "@mui/material";
import { RiFilterFill } from "react-icons/ri";
import {FaUserAlt, FaSitemap} from "react-icons/fa";
import InputLabel from "../../components/Input/InputLabel";
import DynamicInput from '../../components/Input/DynamicInput';
import DataTable from "../../components/DataTable";
import FilterSideBar from "../../components/FilterSideBar/FilterSideBar";
import FilterValueList from "../../components/FilterSideBar/FilterValueList";
import SearchInput from "../../components/SearchInput";
import MenuComponent from "../../components/MenuButton";

interface DepartmentDetailProps {
    
}

const memberColumns = [
    { field: 'date', headerName: 'Date', width: 200 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'position', headerName: 'Position', width: 200 },
    { field: 'column1', headerName: 'Column1', width: 200 },
    { field: 'column2', headerName: 'Column2', width: 200 },
    { field: 'column3', headerName: 'Column3', width: 200 },
    { field: 'column4', headerName: 'Column4', width: 200 }, 
];

const departmentColumns = [
    { field: 'date', headerName: 'Date', width: 200 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'description', headerName: 'Description', width: 200 },
    { field: 'code', headerName: 'Code', width: 200 },
    { field: 'column2', headerName: 'Column2', width: 200 },
    { 
        field: 'members', 
        headerName: 'Members', 
        width: 200, 
        renderCell: (cellValues: any) => {
            return <Box className="flex items-center justify-center gap-2">
                    <FaUserAlt />
                    <Typography>
                        {cellValues.value}
                    </Typography>
                </Box>;
        },
    },
    { 
        field: 'detail', 
        headerName: '', 
        width: 200, 
        renderCell: (cellValues: any) => {
            return <Link href={cellValues.value || "/"}>
                        <a className="text-[#3B8CF7]">View details</a>
                    </Link>
        },
    },
];

const memberData = [
    {id:1 , date: "01/02/2022", name: "Guru", position: "God's Father", column1: "lorem", column2: "lorem", column3: "lorem", column4: "lorem"},
    {id:2 , date: "01/02/2022", name: "Guru", position: "God's Father", column1: "lorem", column2: "lorem", column3: "lorem", column4: "lorem"},
    {id:3 , date: "01/02/2022", name: "Guru", position: "God's Father", column1: "lorem", column2: "lorem", column3: "lorem", column4: "lorem"},
    {id:4 , date: "01/02/2022", name: "Guru", position: "God's Father", column1: "lorem", column2: "lorem", column3: "lorem", column4: "lorem"},
    {id:5 , date: "01/02/2022", name: "Guru", position: "God's Father", column1: "lorem", column2: "lorem", column3: "lorem", column4: "lorem"},
    {id:6 , date: "01/02/2022", name: "Guru", position: "God's Father", column1: "lorem", column2: "lorem", column3: "lorem", column4: "lorem"},
    {id:7 , date: "01/02/2022", name: "Guru", position: "God's Father", column1: "lorem", column2: "lorem", column3: "lorem", column4: "lorem"},
    {id:8 , date: "01/02/2022", name: "Guru", position: "God's Father", column1: "lorem", column2: "lorem", column3: "lorem", column4: "lorem"},
    {id:9 , date: "01/02/2022", name: "Guru", position: "God's Father", column1: "lorem", column2: "lorem", column3: "lorem", column4: "lorem"},
    {id:10 , date: "01/02/2022", name: "Guru", position: "God's Father", column1: "lorem", column2: "lorem", column3: "lorem", column4: "lorem"},
];

const departmentData = [
    {id:1 , date: "01/02/2022", name: "Heaven", description: "very cool", code: "123", column2: "lorem", members: 3},
    {id:2 , date: "01/02/2022", name: "Heaven", description: "very cool", code: "123", column2: "lorem", members: 4},
    {id:3 , date: "01/02/2022", name: "Heaven", description: "very cool", code: "123", column2: "lorem", members: 3},
    {id:4 , date: "01/02/2022", name: "Heaven", description: "very cool", code: "123", column2: "lorem", members: 5},
    {id:5 , date: "01/02/2022", name: "Heaven", description: "very cool", code: "123", column2: "lorem", members: 6},
    {id:6 , date: "01/02/2022", name: "Heaven", description: "very cool", code: "123", column2: "lorem", members: 4},
    {id:7 , date: "01/02/2022", name: "Heaven", description: "very cool", code: "123", column2: "lorem", members: 6},
    {id:8 , date: "01/02/2022", name: "Heaven", description: "very cool", code: "123", column2: "lorem", members: 7},
    {id:9 , date: "01/02/2022", name: "Heaven", description: "very cool", code: "123", column2: "lorem", members: 4},
    {id:10 , date: "01/02/2022", name: "Heaven", description: "very cool", code: "123", column2: "lorem", members: 3},
];
 
const DepartmentDetail: FunctionComponent<DepartmentDetailProps> = () => {
    const [name, setName] = useState("")
    const [code, setCode] = useState("")
    const [description, setDescription] = useState("")
    const [choice, setChoice] = useState("member")
    const [data, setData] = useState<any>(memberData);
    const [page, setPage] = useState<number>(1);
    const [size, setSize] = useState<number>(6);
    const [totalPages, setTotalPages] = useState<number>(10);
    const [searchText, setSearchText] = useState<string>("");
    const [showSideFilter, setShowSideFilter] = useState<boolean>(false);
    const [isListView, setIsListView] = useState<boolean>(false);
    const [filterData, setFilterData] = useState<any>({});
    const [filterValue, setFilterValue] = useState<any>({
        filterTite: "",
        data: [],
        index: null,
        filterParam: "",
    });
    const [loading, setLoading] = useState(false);
    const [departmentsFilterData, setDepartmentsFilterData] = useState<any>("")


    const filterOptions = [
        {
          text: "Parent Department",
          filterParam: "parent_id",
          data: departmentsFilterData,
          onClickHandler: () => {
            setFilterValue({
              title: "Parent Department",
              data: departmentsFilterData,
              index: 0,
              filterParam: "parent_id",
            });
            setShowSideFilter(true);
          },
        },
    ];

    const handleMemberClick = () => {
        setChoice("member")
        setData(memberData)
    }

    const handleDepartmentClick = () => {
        setChoice("department")
        setData(departmentData)
    }

    const getBtnClasses = () => {
        const classes = "bg-[#F6F9FE] text-[#3B8CF7]"
        return classes
    }

    return ( 
        <Box
        className="mx-8 border py-6 px-8 rounded-xl overflow-y-auto flex flex-col gap-3"
        >
            <Box maxWidth="400px">
                <InputLabel
                    label="Department name"
                />
                <DynamicInput 
                    value={name}
                    setValue={setName}
                />
            </Box>
            <Box maxWidth="400px">
                <InputLabel
                    label="Department code"
                />
                <DynamicInput 
                    value={code}
                    setValue={setCode}
                />
            </Box>
            <Box maxWidth="400px">
                <InputLabel
                    label="Description"
                />
                <DynamicInput 
                    value={description}
                    setValue={setDescription}
                    bgColor="#F6F9FE"
                    customWidth="400px"
                    isTextArea
                />
            </Box>
            <Box 
                className="flex gap-10"
            >
                <Button  
                    variant="text" 
                    className={choice === "member"? getBtnClasses(): "text-black"}
                    startIcon={<FaUserAlt />}
                    onClick={handleMemberClick}>
                        Members
                </Button>
                <Button 
                    variant="text" 
                    className={choice === "department"? getBtnClasses(): "text-black"}
                    startIcon={<FaSitemap />}
                    onClick={handleDepartmentClick}>
                        Sub departments
                </Button>
            </Box>
            <Box
            my={2}
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
            </Box>
            <Box
                className="flex justify-between"
            >   
                <Box>
                    <p className="text-black">filter value list here</p>
                </Box>
                <Button variant="contained" className="bg-[#3B8CF7]">
                    + Add{choice === "member" ? " member" : " existing department"}
                </Button>
            </Box>
            <Box>
                <DataTable
                {...{ columns: choice === "member" ? memberColumns: departmentColumns, data, page, setPage, totalPages, size, setSize }}
                />
            </Box>
        </Box>
    );
}
 
export default DepartmentDetail;