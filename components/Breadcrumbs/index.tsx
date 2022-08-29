import { Breadcrumbs, Link, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";

interface Links {
  name: string;
  link: string;
}

interface IProps {
  currentPage: string;
  previousPages: Links[];
}

const BreadcrumbsComponent: FunctionComponent<IProps> = ({
  currentPage,
  previousPages,
}) => {
  return (
    <Breadcrumbs
      // my={2}
      aria-label="breadcrumb"
      color={colors.grey.grey2}
      sx={{ marginY: "20px" }}
    >
      {previousPages?.map((item) => (
        <Link
          key={item.name}
          underline="hover"
          // color="inherit"
          color={colors.grey.grey2}
          href={item.link}
        >
          {item.name}
        </Link>
      ))}

      <Typography color={colors.primaryColors.lightblue.lightblue1}>
        {currentPage}
      </Typography>
    </Breadcrumbs>
  );
};

export default BreadcrumbsComponent;
