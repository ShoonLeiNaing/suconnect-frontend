import { Box, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ChangeEvent, FunctionComponent, useState } from "react";
import { colors } from "../../data/constant";
import Button from "./Button";

interface IProps {
  changeLanguage: boolean;
}
const Navbar: FunctionComponent<IProps> = ({ changeLanguage }: IProps) => {
  // const { locale } = useRouter();
  const router = useRouter();
  const [language, setLanguage] = useState(router.locale);
  const changeLanguageHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
    router.push(router.pathname, router.pathname, {
      locale: e.target.value,
    });
  };
  return (
    <Box
      position="sticky"
      top="0"
      bgColor="white"
      h="70px"
      // w="100%"
      zIndex={100}
      boxShadow="md"
    >
      <Box
        maxW="1600px"
        margin="auto"
        h="70px"
        px={20}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Image h="70%" src="/images/logo.png" />
        <Box
          flex="1"
          cursor="pointer"
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Text
            fontWeight={600}
            color={colors.primaryColors.lightblue.lightblue1}
            mr={6}
          >
            Sign in
          </Text>
          <Button />
          {changeLanguage && (
            <select
              className="select"
              value={language}
              onChange={changeLanguageHandler}
            >
              <option value="en">Eng</option>
              <option value="my">မြန်မာ</option>
            </select>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
