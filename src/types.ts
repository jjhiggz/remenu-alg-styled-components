type FontFamily = "Sans Serif" | "Roboto" | undefined;

export type Menu = {
  name: string;
  description: string;
  headerFontFamily?: FontFamily;
  headerFontSize?: number;
  descriptionFontFamily?: FontFamily;
  descriptionFontSize?: number;
  sectionHeaderFontFamily?: FontFamily;
  sectionDescriptionFontFamily?: FontFamily;
  sectionHeaderFontSize?: number;
  sectionDescriptionFontSize?: number;
  itemHeaderFontFamily?: FontFamily;
  itemDescriptionFontFamily?: FontFamily;
  sections: Section[];
};

export type Section = {
  name: string;
  description: string;
  headerFontFamily?: FontFamily;
  headerFontSize?: number;
  descriptionFontFamily?: FontFamily;
  descriptionFontSize?: number;
  itemHeaderFontFamily?: FontFamily;
  itemDescriptionFontFamily?: FontFamily;
  items: Item[];
};

export type Item = {
  name: string;
  description: string;
  headerFontFamily?: FontFamily;
  descriptionFontFamily?: FontFamily;
};
