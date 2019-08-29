import { rem, darken, lighten } from "polished";

const defaultThemeConfig = {
  dark: true,
  maxWidth: rem(1200),
  base: '#343434',
  primary: '#777799',
  text: '#E0E1E2'
};

function makeVariations(name, theme) {
  const variations = {};
  variations[name] = theme[name];
  const variation = theme.dark ? lighten : darken;
  variations[`${name}Lv1`] = variation(0.075, theme[name]);
  variations[`${name}Lv2`] = variation(0.125, theme[name]);
  variations[`${name}Lv3`] = variation(0.2, theme[name]);
  return variations;
};

function makeTheme(themeConfig = {}) {
  const theme = { ...defaultThemeConfig, ...themeConfig };
  return {
    ...theme,
    ...makeVariations('primary', theme),
    ...makeVariations('base', theme),
    ...makeVariations('text', theme)
  };
}

export default makeTheme;