// import { createStyles, makeStyles } from "@mui/material";
import { Box, styled } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { FunctionComponent, useState } from "react";
import { colors } from "../../data/constant";
import { courseData } from "../../data/testData";
import Paginator from "../Paginator";

const handleCellClick = (param: any, event: any) => {
  console.log(param);
  console.log(event);
  if (param.colIndex === 2) {
    event.stopPropagation();
  }
};

const handleRowClick = (param: any, event: any) => {
  console.log("Row:");
  console.log(param);
  console.log(event);
};

const BootstrapDataGrid = styled(DataGrid)({
  // .css-luer2-MuiDataGrid-root .MuiDataGrid-columnHeader
  "& .MuiDataGrid-columnHeader": {
    color: colors.primaryColors.lightblue.lightblue1,
    fontSize: "16px",
    fontWeight: 600,
  },
  "& .MuiDataGrid-menu": {
    fontSize: "10px",
  },
});

interface IProps {
  columns: any;
  data: any;
  page: number;
  setPage: any;
  totalPages: number;
  size: number;
  setSize: any;
}

const DataTable: FunctionComponent<IProps> = ({
  columns,
  data,
  page,
  setPage,
  totalPages,
  size,
  setSize,
}) => {
  // const [pageSize, setPageSize] = useState<number>(9);
  // console.log({ page });

  return (
    <div style={{ height: "545px", width: "100%", margin: "30px 0" }}>
      {data ? (
        <BootstrapDataGrid
          rowHeight={70}
          headerHeight={70}
          rows={data}
          columns={columns}
          pageSize={size}
          checkboxSelection
          onCellClick={handleCellClick}
          onRowClick={handleRowClick}
          hideFooterPagination
        />
      ) : (
        <p style={{ textAlign: "center" }}>no data</p>
      )}
      <Box marginTop={data && "-42px"} px={4}>
        <Paginator
          {...{ page, setPage, totalPages, item: "rows", size, setSize }}
        />
      </Box>
    </div>
  );
};

export default DataTable;
