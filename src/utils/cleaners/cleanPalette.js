/* eslint-disable import/prefer-default-export */
export const cleanPalette = (name, colors) => {
  const cleaned = {
    name,
    color_1: colors[0],
    color_2: colors[1],
    color_3: colors[2],
    color_4: colors[3],
    color_5: colors[4]
  };
  return cleaned;
};
