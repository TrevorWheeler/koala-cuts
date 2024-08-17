/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import colors from "vuetify/util/colors";
// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#1E5736",
          background: "#FFFFFF",
          // secondary: colors.red.lighten4,
        },
      },
      dark: {
        dark: true,
        colors: {
          //   background: "#0D2E41",
          background: "#1E1E1E",
          // primary: colors.red.darken1,
          // secondary: colors.red.lighten4,
        },
      },
    },
  },
});
