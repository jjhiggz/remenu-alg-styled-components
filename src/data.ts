import { Menu } from "./types";

export const data: Menu = {
  name: "Main Menu",
  description: "This is the main menu",
  descriptionFontSize: 20,
  sectionDescriptionFontSize: 15,
  headerFontFamily: "Roboto",
  sections: [
    {
      name: "section 1",
      description: "section 1 description my boyyyy",
      headerFontFamily: "Sans Serif",
      descriptionFontSize: 22,
      items: [
        {
          name: "s1i1",
          description: "lorem ipsum my homie",
        },
        {
          name: "s1i2",
          description: "lorem ipsum my homie",
        },
        {
          name: "s1i3",
          description: "lorem ipsum my homie",
        },
      ],
    },
    {
      name: "section 2",
      description: "section 2 description my boyyyy",
      items: [],
    },
    {
      name: "section 3",
      description: "section 3 description my boyyyy",
      items: [],
    },
  ],
};
