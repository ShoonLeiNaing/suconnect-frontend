import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./feature.module.css";
import ArrowButton from "../Button/ArrowButton";
import { colors } from "../../data/constant";

const Card: FunctionComponent = () => {
  return (
    <>
      <div className={styles.bg_img_one}>
        <Box
          width={{
            xl: "180px",
            lg: "150px",
            md: "120px",
            sm: "100px",
            xs: "100px",
          }}
        >
          <Image
            height={150}
            width={150}
            src="/images/greencardicon.svg"
            alt="icon"
          />
        </Box>
        <div className={styles.card_text_one}>
          <Typography fontSize={{ lg: "20px", md: "18px" }} fontWeight="bold">
            Monthly Payroll
          </Typography>
          <Typography
            fontSize={{ lg: "16px", xs: "14px" }}
            my={{ xl: 3, md: 2, xs: 1 }}
          >
            The distribution of algal species has been fairly well studied since
            the founding of
          </Typography>
          <ArrowButton
            textColor={colors.secondaryColors.green.green1}
            buttonColor="white"
          />
        </div>
      </div>
      <div className={styles.bg_img_two}>
        <Box
          width={{
            xl: "180px",
            lg: "150px",
            md: "120px",
            sm: "100px",
            xs: "100px",
          }}
        >
          <Image
            height={150}
            width={150}
            src="/images/pinkcardicon.svg"
            alt="icon"
          />
        </Box>{" "}
        <div className={styles.card_text_two}>
          <Typography fontSize={{ lg: "20px", md: "18px" }} fontWeight="bold">
            Calendar Scheduling
          </Typography>

          <Typography
            fontSize={{ lg: "16px", xs: "14px" }}
            my={{ xl: 3, md: 2, xs: 1 }}
          >
            The distribution of algal species has been fairly well studied since
            the founding of
          </Typography>
          <ArrowButton
            textColor={colors.primaryColors.pink.pink1}
            buttonColor="white"
          />
        </div>
      </div>
      <div className={styles.bg_img_three}>
        <Box
          width={{
            xl: "180px",
            lg: "150px",
            md: "120px",
            sm: "100px",
            xs: "100px",
          }}
        >
          <Image
            height={150}
            width={150}
            src="/images/orangecardicon.svg"
            alt="icon"
          />
        </Box>
        <div className={styles.card_text_one}>
          <Typography fontSize={{ lg: "20px", md: "18px" }} fontWeight="bold">
            Staff Management
          </Typography>

          <Typography
            fontSize={{ lg: "16px", xs: "14px" }}
            my={{ xl: 3, md: 2, xs: 1 }}
          >
            The distribution of algal species has been fairly well studied since
            the founding of
          </Typography>
          <ArrowButton
            textColor={colors.secondaryColors.orange.orange1}
            buttonColor="white"
          />
        </div>
      </div>
      <div className={styles.bg_img_four} style={{ zIndex: 2 }}>
        <Box
          width={{
            xl: "180px",
            lg: "150px",
            md: "120px",
            sm: "100px",
            xs: "100px",
          }}
        >
          <Image
            height={150}
            width={150}
            src="/images/bluecardicon.svg"
            alt="icon"
          />
        </Box>
        <div className={styles.card_text_one}>
          <Typography fontSize={{ lg: "20px", md: "18px" }} fontWeight="bold">
            Data Dump{" "}
          </Typography>

          <Typography
            fontSize={{ lg: "16px", xs: "14px" }}
            my={{ xl: 3, md: 2, xs: 1 }}
          >
            The distribution of algal species has been fairly well studied since
            the founding of
          </Typography>
          <ArrowButton
            textColor={colors.primaryColors.lightblue.lightblue1}
            buttonColor="white"
          />
        </div>
      </div>
    </>
  );
};

export default Card;
