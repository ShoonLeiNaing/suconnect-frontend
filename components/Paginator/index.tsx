import { Box, Input, Typography } from "@mui/material";
import { useState } from "react";
import { colors } from "../../data/constant";
import styles from "./paginator.module.css";

const Paginator = () => {
  const [page, setPage] = useState<string>("1");
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Typography color={colors.grey.grey2} fontSize="14px">
        1 - 8 0f 200
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        gap={1}
        color={colors.black.black2}
      >
        <Box display="flex" alignItems="center" fontSize="14px">
          Page
          <Box
            width="45px"
            border="1px solid #BBBBBB"
            borderRadius="10px"
            p="3px 8px"
            marginX={1}
          >
            <input
              value={page}
              onChange={(e) => setPage(e.target.value)}
              className={styles.input}
            />
          </Box>
          of 200
        </Box>
        <Box display="flex" gap={1}>
          <img src="/images/leftpagination.svg" alt="left" />
          <img src="/images/rightpagination.svg" alt="right" />
        </Box>
      </Box>
    </Box>
  );
};

export default Paginator;
