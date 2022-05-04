import { ConfigOptions } from "express-handlebars/types";
import { getSourceDir } from "../utilities/util";

export const engineConfigOptions: ConfigOptions = {
  helpers: {
    uppercase(keyword: string) {
      return keyword.toUpperCase();
    },
  },
  defaultLayout: "main",
  extname: ".hbs",
  layoutsDir: getSourceDir + "\\views\\layouts",
  partialsDir: getSourceDir + "\\views\\partials",
};
