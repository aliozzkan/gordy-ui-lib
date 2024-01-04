import Values from "values.js";

export const colorTintAndShadeGenerator = (color: string) => {
  function getColors(colorCode: string) {
    const colorValue = new Values(colorCode);
    return colorValue.all(18);
  }

  return getColors(color);
};

export const getColorCssVariables = (
  colorCode: string,
  twColorName: string,
) => {
  const colors = colorTintAndShadeGenerator(colorCode);
  colors.pop();
  const colorClasses = colors.map((_color, index) => {
    if (index === 0) {
      return `--color-${twColorName}-50: ${_color.hexString()};`;
    }

    return `--color-${twColorName}-${index}00: ${_color.hexString()};`;
  });

  return colorClasses.join(" ");
};
