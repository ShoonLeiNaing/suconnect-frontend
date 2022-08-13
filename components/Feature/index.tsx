import { FunctionComponent } from "react";
import Card from "./card";

const Feature: FunctionComponent = () => {
  return (
    <div>
      <div className="grid grid-cols-2 px-32 gap-10 my-16">
        <Card />
      </div>
    </div>
  );
};

export default Feature;
