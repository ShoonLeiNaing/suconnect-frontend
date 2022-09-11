// import { createStyles, makeStyles } from "@mui/material";
import { styled } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { FunctionComponent, useState } from "react";
import { colors } from "../../data/constant";
import { courseData } from "../../data/testData";

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
}

const DataTable: FunctionComponent<IProps> = ({ columns, data }) => {
  const [pageSize, setPageSize] = useState<number>(8);

  return (
    <div style={{ height: "685px", width: "100%", margin: "30px 0" }}>
      <BootstrapDataGrid
        rowHeight={70}
        headerHeight={70}
        rows={data}
        columns={columns}
        pageSize={pageSize}
        checkboxSelection
        onCellClick={handleCellClick}
        onRowClick={handleRowClick}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[8, 10, 20]}
        pagination
      />
    </div>
  );
};

export default DataTable;
