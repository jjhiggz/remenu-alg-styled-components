import styled from "styled-components";
import { Section } from "../types";

type SectionProps = { section: Section };

const setProp = (propName: string, value: unknown) => {
  if (propName) {
    return `${propName}: ${value};`;
  }
  return "";
};

export const SectionDiv = styled.div<SectionProps>`
  & > p {
    ${(props) => {
      console.log(
        setProp(
          "font-size",
          props.section.descriptionFontSize + "px !important"
        )
      );
      return setProp(
        "font-size",
        props.section.descriptionFontSize + "px !important"
      );
    }}
  }
`;
// Define the functional component
const SectionComponent = (sectionProps: SectionProps) => {
  return (
    <SectionDiv className="section" {...sectionProps}>
      <h2>{sectionProps.section.name}</h2>
      <p>{sectionProps.section.description}</p>
      <div className="children-container"></div>
    </SectionDiv>
  );
};

// Create a styled component based on the functional component
export const StyledSection = styled(SectionComponent)``;
