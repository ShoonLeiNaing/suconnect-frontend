import { FunctionComponent } from "react";
import { colors } from "../../data/constant";
import SubTitle from "../SubTitle";
import Tagline from "../SubTitle/Tagline";
import Card from "./card";

const Feature: FunctionComponent = () => {
  return (
    <div className="my-16">
      <SubTitle
        title="By Features"
        icon
        color={colors.secondaryColors.green.green1}
      />
      <Tagline text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac ultrices nunc commodo nunc consequat." />
      <div className="grid grid-cols-2 gap-10 my-8 px-4">
        <Card />
      </div>
    </div>
  );
};

export default Feature;
