import { colors } from "../../data/constant";

export const generateColor = (index: number) => {
  if (index % 5 === 0) {
    return colors.secondaryColors.red.red1;
  } else if (index % 4 === 0) {
    return colors.secondaryColors.orange.orange1;
  } else if (index % 3 === 0) {
    return colors.secondaryColors.green.green1;
  } else if (index % 2 === 0) {
    return colors.primaryColors.pink.pink1;
  } else {
    return colors.primaryColors.yellow.yellow1;
  }
};
