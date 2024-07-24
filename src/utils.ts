export const s = {
  fontFamily: (value: string | undefined) =>
    value ? `font-family: ${value};` : "",
  fontSize: (value: number | undefined) =>
    value ? `font-size: ${value}px;` : "",
};
