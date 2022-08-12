import { FunctionComponent } from "react";
import { Image } from "@chakra-ui/react";
import styles from "./feature.module.css";
import ArrowButton from "../Button/ArrowButton";
import { colors } from "../../data/constant";

const Card: FunctionComponent = () => {
  return (
    <>
      <div className={styles.bg_img_one}>
        <Image className="w-24" src="/images/greencardicon.svg" alt="icon" />
        <div className={styles.card_text_one}>
          <h3 className="text-2xl font-semibold mb-3">Monthly Payroll</h3>
          <p className="text-base mb-6">
            The distribution of algal species has been fairly well studied since
            the founding of
          </p>
          <ArrowButton
            textColor={colors.secondaryColors.green.green1}
            buttonColor="white"
          />
        </div>
      </div>
      <div className={styles.bg_img_two}>
        <Image className="w-28" src="/images/pinkcardicon.svg" alt="icon" />
        <div className={styles.card_text_two}>
          <h3 className="text-2xl font-semibold mb-3">Calendar Scheduling</h3>
          <p className="text-base mb-6">
            The distribution of algal species has been fairly well studied since
            the founding of
          </p>
          <ArrowButton
            textColor={colors.primaryColors.pink.pink1}
            buttonColor="white"
          />
        </div>
      </div>
      <div className={styles.bg_img_three}>
        <Image className="w-24" src="/images/orangecardicon.svg" alt="icon" />
        <div className={styles.card_text_one}>
          <h3 className="text-2xl font-semibold mb-3">Staff Management</h3>
          <p className="text-base mb-6">
            The distribution of algal species has been fairly well studied since
            the founding of
          </p>
          <ArrowButton
            textColor={colors.secondaryColors.orange.orange1}
            buttonColor="white"
          />
        </div>
      </div>
      <div className={styles.bg_img_four}>
        <Image
          className={styles.icon_four}
          src="/images/bluecardicon.svg"
          alt="icon"
        />
        <div className={styles.card_text_one}>
          <h3 className="text-2xl font-semibold mb-3">Data Dump</h3>
          <p className="text-base mb-6">
            The distribution of algal species has been fairly well studied since
            the founding of
          </p>
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
