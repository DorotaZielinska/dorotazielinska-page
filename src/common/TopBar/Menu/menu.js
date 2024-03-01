import { SidebarData } from "./sidebarData";
import {
  NavigationMenuItems,
  NavigationMenuList,
  StyledMenu,
  StyledNavLink,
} from "./styled";

export const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <NavigationMenuList>
        {SidebarData.map((item, index) => (
          <NavigationMenuItems key={index}>
            <StyledNavLink to={item.path}>
              {item.icon}
              <span>{item.title}</span>
            </StyledNavLink>
          </NavigationMenuItems>
        ))}
      </NavigationMenuList>
    </StyledMenu>
  );
};
