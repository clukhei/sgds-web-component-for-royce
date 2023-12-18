import * as fs from "fs";
import { promises as pfs } from "fs";
import { PurgeCSS } from "purgecss";
import * as path from "path";
import { Plugin } from "rollup";

const PATH_TO_SGDS_ELEMENT = "./node_modules/@govtechsg/sgds-web-component/base/sgds-element2";
const PATH_TO_SGDS_ELEMENT_CSS = path.resolve(__dirname, `${PATH_TO_SGDS_ELEMENT}.js`);

const PATH_TO_PURGED_SGDS_ELEMENT_CSS = path.resolve(__dirname, `${PATH_TO_SGDS_ELEMENT}_purged.js`);

export default function plugin(): Plugin {
  const sgdsCssInJsFile = fs.readFileSync(PATH_TO_SGDS_ELEMENT_CSS, { encoding: "utf8" });
  const sgdsCss = retrieveCSS(sgdsCssInJsFile);
  const sgdsComponentsMap = new Map<string, string>();

  return {
    name: "rollup-purgecss-spider",
    transform: async (code, id) => {
      if (detectSpiderFiles(id) && !sgdsComponentsMap.has(id)) {
        const spiderFile: string = code;
        const sgdsComponentHTML = retrieveHTMLFromLit(spiderFile);
        sgdsComponentsMap.set(id, sgdsComponentHTML);
      }
    },
    generateBundle: async () => {
      const allHTML = mergeHTML(sgdsComponentsMap);
      const purgedCss = await new PurgeCSS().purge({
        content: [
          {
            raw: allHTML,
            extension: "html"
          }
        ],
        css: [
          {
            raw: sgdsCss
          }
        ]
      });
      const purgedSgdsCssInJsContent = replaceCssInJs(sgdsCssInJsFile, purgedCss[0].css);
      await pfs.writeFile(PATH_TO_PURGED_SGDS_ELEMENT_CSS, purgedSgdsCssInJsContent, { encoding: "utf8" });

      const sgdsElementCode = await pfs.readFile(`${PATH_TO_SGDS_ELEMENT}.js`, { encoding: "utf8" });
      const newSgdsElementCode = sgdsElementCode.replace("sgds-element2.js", "sgds-element2_purged.js");

      await pfs.writeFile(`${PATH_TO_SGDS_ELEMENT}.js`, newSgdsElementCode, { encoding: "utf8" });
    }
  };
}

/**
 * Detect usage of @govtechsg/sgds-web-components components in user application
 * @param path
 * @returns boolean
 */
export const detectSpiderFiles = (path: string): boolean => {
  const spiderFilePathRegex = new RegExp(
    /@govtechsg\/sgds-web-component\/components\/(.+)\/sgds-([a-zA-Z ]*)(-.[a-zA-Z ]*)?.js/
  );
  const spiderBaseFilePathRegex = new RegExp(/@govtechsg\/sgds-web-component\/base\/([a-zA-Z ]*)-element.js/);
  const sgdsElementRegex = new RegExp(/@govtechsg\/sgds-web-component\/base\/sgds-element.js/);
  return spiderFilePathRegex.test(path) || (spiderBaseFilePathRegex.test(path) && !sgdsElementRegex.test(path));
};
/**
 * Merge all HTML saved in Map into a single string
 * @param componentMap
 * @returns string HTML of all components used in the appliciation (saved in Map)
 */
export const mergeHTML = (componentMap: Map<string, string>): string => {
  return Array.from(componentMap.values()).join("");
};
/**
 * Replaces the file contents of a css-in-js file with the purged css
 * @param fileContents
 * @param purgedCss
 * @returns
 */
export const replaceCssInJs = (fileContents: string, purgedCss: string): string => {
  const newFileContents = fileContents.replace(/(?<=css`)(.*?)(?=`;)/gms, purgedCss);
  return newFileContents;
};
/**
 * Takes in fileContents and extract the css code into string
 * @param fileContents
 * @returns string
 */
export const retrieveCSS = (fileContents: string): string => {
  const css = fileContents.match(/`(.*?)`/s)?.[0].replace(/`/g, "");
  return css ? css : "";
};

/**
 * Takes in fileContents and extract the lit-html into html string
 * @param fileContents
 * @returns
 */
export const retrieveHTMLFromLit = (fileContents: string): string => {
  const html = fileContents.match(/(?<=html `)(.*?)(?=`;)/gms)?.join("");
  return html ? html : "";
};

/**
 * Replace the import path of sgds-element2.js in sgds-element.js file
 * @param code
 * @returns
 */
export const transformImportPathIn = (code: string): string => {
  return code.replace("sgds-element2.js", "sgds-element2_purged.js");
};
