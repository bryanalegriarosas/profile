import { aliases, fa } from "vuetify/iconsets/fa";
import { mdi } from "vuetify/iconsets/mdi";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { VCalendar } from 'vuetify/labs/VCalendar'

const light = {
  dark: false,
  colors: {
    primary: "#4A74EA",
    secondary: "#192252",
    info: "#0091D8",
    error: "#DB2424",
    success: "#479B36",
    warning: "#CFC331",
    grey: "#F7F7F7",
    blueGrey: "#EFF3FA",
    blueGreyText: "#929CB5",
    borderLine: "#A9B4CDB3"
  },
  typography: {
    fontFamily: "Outfit, sans-serif",
  },
};

export const Vuetify = createVuetify({
  components: {
    ...components,
    VCalendar,
  },
  directives,
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
      mdi,
    },
  },
  theme: {
    defaultTheme: "light",
    themes: {
      light,
    },
  },
  defaults: {
    VBtn: {
      rounded: 10,
      elevation: 0,
      class: "custom-transform-class font-weight-bold text-none",
    },
    VTextField: {
      variant: "outlined",
      density: "compact",
    },
    VSelect: {
      variant: "outlined",
      density: "compact",
    },
    VTextarea: {
      variant: "outlined",
      density: "compact",
    },
  },
});
