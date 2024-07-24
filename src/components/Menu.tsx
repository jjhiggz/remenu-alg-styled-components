import styled from "styled-components";
import { Menu } from "../types";
import { SectionDiv, StyledSection } from "./Section";
import { s } from "../utils";

type MenuProps = { menu: Menu };

const MenuDiv = styled.div<MenuProps>`
  h1 {
    ${(p) => s.fontFamily(p.menu.headerFontFamily)}
  }

  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;

  & > p {
    ${(p) => s.fontSize(p.menu.descriptionFontSize)}
  }

  ${SectionDiv} > p {
    ${(p) => s.fontSize(p.menu.sectionDescriptionFontSize)}
  }
`;
// Define the functional component
const MenuComponent = (menuProps: MenuProps) => {
  return (
    <MenuDiv className="menu" {...menuProps}>
      <h1>{menuProps.menu.name}</h1>
      <p>{menuProps.menu.description}</p>
      <div className="children-container">
        {menuProps.menu.sections.map((section) => (
          <StyledSection section={section} />
        ))}
      </div>
    </MenuDiv>
  );
};

// Create a styled component based on the functional component
export const StyledMenu = styled(MenuComponent)``;
