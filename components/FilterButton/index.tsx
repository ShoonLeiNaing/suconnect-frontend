import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { colors } from "../../data/constant";

interface IProps {
  outline?: boolean;
  color: string;
  title: string;
  data: string[];
}

const FilterButton: FunctionComponent<IProps> = ({
  outline,
  color,
  title,
  data,
}) => {
  return (
    <Menu>
      <MenuButton
        borderRadius="10px"
        color={color}
        backgroundColor={outline ? colors.white.white1 : colors.white.white2}
        as={Button}
        rightIcon={<IoMdArrowDropdown />}
        py="0"
        px="3"
        border={outline ? `1px solid ${color}` : "none"}
      >
        {title}
      </MenuButton>
      <MenuList>
        {data?.map((item) => (
          <MenuItem key={item} px="5">
            {item}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default FilterButton;
