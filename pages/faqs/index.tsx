import { Box } from "@mui/material";
import { useState } from "react";
import BreadcrumbsComponent from "../../components/Breadcrumbs";
import SearchInput from "../../components/DateFilter/SearchInput";
import FaqAccordions from "../../components/FaqAccordions";
import Layout from "../../components/Layout";
import NameTag from "../../components/Profile/NameTag";

const breadCrumbsData = [
  {
    name: "Dashboard",
    link: "/dashboard",
  },
  {
    name: "My Profile",
    link: "/profile",
  },
];

const questions = [
  {
    question: "What is Lorem Ipsum?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.Vestibulum auctor ornare leo, non suscipit magna interdum eu.Vestibulum auctor ornare leo, non suscipit magna interdum eu.Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    question: "What is Lorem Ipsum?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.Vestibulum auctor ornare leo, non suscipit magna interdum eu.Vestibulum auctor ornare leo, non suscipit magna interdum eu.Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    question: "What is Lorem Ipsum?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.Vestibulum auctor ornare leo, non suscipit magna interdum eu.Vestibulum auctor ornare leo, non suscipit magna interdum eu.Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    question: "What is Lorem Ipsum?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.Vestibulum auctor ornare leo, non suscipit magna interdum eu.Vestibulum auctor ornare leo, non suscipit magna interdum eu.Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
];

const FrequentlyAskQuestions = () => {
  const [filterText, setFilterText] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");
  return (
    <Layout>
      <Box color="black" className="container" px={7}>
        <BreadcrumbsComponent
          currentPage="FAQ"
          previousPages={breadCrumbsData}
        />
        <NameTag
          name="Thiha Swan Htet"
          currentPage="Frequently Asked Questions"
        />

        <Box my={3}>
          <SearchInput
            setFilterText={setFilterText}
            setSearchText={setSearchText}
            placeholderText="Topic"
          />
        </Box>

        <FaqAccordions title="General" questions={questions} />
        <FaqAccordions title="Category" questions={questions} />
      </Box>
    </Layout>
  );
};

export default FrequentlyAskQuestions;
