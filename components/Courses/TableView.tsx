import { Box, Checkbox, Chip } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import { RiFilterFill } from "react-icons/ri";
// import { BiDotsVerticalRounded } from "react-icons/bi";
import { colors } from "../../data/constant";
import { courseData } from "../../data/testData";
// import MenuComponent from "../MenuButton";
import FloatButton from "../IconButton/FloatButton";
// import { byCategory } from "../../data/testData";

interface Columns {
  title: string;
  onClickHandler?: any;
}
interface IProps {
  columns: Columns[];
}

const TableView: FunctionComponent<IProps> = ({ columns }) => {
  return (
    <Box sx={{ width: "100%" }}>
      {/* <table className="table-view-table-container" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th className="w-8">
              <Checkbox />
            </th>
            {columns?.map((col, index) => (
              <th
                key={col.title}
                style={{
                  color: colors.primaryColors.lightblue.lightblue1,
                  padding: "20px",
                }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  {col.title}

                  {col.onClickHandler && (
                    <FloatButton
                      icon={<RiFilterFill />}
                      onClickHandler={col.onClickHandler}
                    />
                  )}
                </Box>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="table-body">
          {courseData?.map((data) => (
            <tr key={data.course} className="table-row">
              <td className="w-8">
                <Checkbox />
              </td>
              <td className="table-row-column">{data.date}</td>
              <td className="table-row-column">{data.course}</td>
              <td className="table-row-column">
                <Chip
                  label={data.position}
                  sx={{ borderRadius: "0", backgroundColor: "pink" }}
                />
              </td>
              <td className="table-row-column">{data.category}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </Box>
  );
};

export default TableView;
