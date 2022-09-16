/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */
import { Box, Input, Select, Typography } from "@mui/material";
import { FunctionComponent, useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { colors } from "../../data/constant";
import FloatButton from "../IconButton/FloatButton";
import styles from "./paginator.module.css";

interface IProps {
  page: number;
  setPage: any;
  totalPages: number;
  item?: string;
  size: number;
  setSize: any;
}

const Paginator: FunctionComponent<IProps> = ({
  page,
  setPage,
  totalPages,
  item,
  size,
  setSize,
}) => {
  // const debouncedFilter = _.debounce((pageNum: number) => {
  //   setPage(pageNum);
  // }, 200);
  const changePageInput = (e: any) => {
    // debouncedFilter(e.target.value);
    if (e.target.value < 1) {
      setPage(1);
    } else {
      setPage(parseInt(e.target.value, 10));
    }
  };

  const changeSizeHandler = (e: any) => {
    setSize(parseInt(e.target.value, 10));
  };
  return (
    <Box display="flex" alignItems="center" justifyContent="flex-end">
      {/* <Typography color={colors.grey.grey2} fontSize="14px">
        1 - 8 0f 200
      </Typography> */}
      <Box
        display="flex"
        alignItems="center"
        gap={1}
        color={colors.black.black2}
      >
        <Box display="flex" alignItems="center" fontSize="12px">
          Show {item} :
          <Box
            width="50px"
            border="1px solid #BBBBBB"
            borderRadius="10px"
            p="3px 5px"
            marginX={1}
            zIndex={1000}
          >
            <select
              className={styles.select}
              defaultValue={size}
              onChange={(e) => changeSizeHandler(e)}
            >
              <option value={6}>6</option>
              <option value={9}>9</option>
              <option value={12}>12</option>
            </select>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" fontSize="12px">
          Page
          <Box
            width="45px"
            border="1px solid #BBBBBB"
            borderRadius="10px"
            p="3px 5px"
            marginX={1}
            zIndex={1000}
          >
            <input
              value={page}
              type="number"
              // onChange={(e) => setCurrentPage(parseInt(e.target.value, 10))}
              onChange={(e) => changePageInput(e)}
              className={styles.input}
              min="1"
              max={totalPages}
            />
          </Box>
          of {totalPages}
        </Box>
        <Box display="flex" gap={1} zIndex={1000}>
          <FloatButton
            icon={<MdOutlineKeyboardArrowLeft fontSize="20px" />}
            onClickHandler={() => {
              if (page !== 1) {
                setPage(page - 1);
              }
            }}
            disable={page === 1}
          />
          <FloatButton
            icon={<MdOutlineKeyboardArrowRight fontSize="20px" />}
            onClickHandler={() => {
              if (page !== totalPages) {
                setPage(page + 1);
              }
            }}
            disable={page === totalPages}
          />
          {/* <img
            src="/images/leftpagination.svg"
            alt="left"
            onClick={() => setPage(page - 1)}
          />
          <img
            src="/images/rightpagination.svg"
            alt="right"
            onClick={() => setPage(page + 1)}
          /> */}
        </Box>
      </Box>
    </Box>
  );
};

Paginator.defaultProps = {
  item: "rows",
};

export default Paginator;
