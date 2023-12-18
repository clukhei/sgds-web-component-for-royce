import { detectSpiderFiles, retrieveHTMLFromLit, retrieveCSS, mergeHTML} from "../index";
import * as fs from "fs";
import { expect, test, describe } from "vitest";
describe("detectSpiderFiles()", () => {
  const PATH = "@govtechsg/sgds-web-component/components";
  const COMP_FOLDER_PATH = "@govtechsg/sgds-web-component/components/Footer";
  const COMP_FILE_PATH = "@govtechsg/sgds-web-component/components/Footer/sgds-footer.js";
  const WRONG_FILE_PATH = "@govtechsg/sgds-web-component/components/Footer/sgds-footer2.js";
  const WRONG_FILE_PATH_1 = "@govtechsg/sgds-web-component/base/sgds-element.js";
  const BASE_ELEMENT_FILE_PATH = "@govtechsg/sgds-web-component/base/dropdown-element.js";

  test("returns true when path has the specific file path", () => {
    expect(detectSpiderFiles(PATH)).to.equal(false);
    expect(detectSpiderFiles(COMP_FOLDER_PATH)).to.equal(false);
    expect(detectSpiderFiles(WRONG_FILE_PATH)).to.equal(false);
    expect(detectSpiderFiles(COMP_FILE_PATH)).to.equal(true);
    expect(detectSpiderFiles(BASE_ELEMENT_FILE_PATH)).to.equal(true);
    expect(detectSpiderFiles(WRONG_FILE_PATH_1)).to.equal(false);
  });
});

describe("retrieveHTMLFromLit", () => {
  const MOCK_FILE_CONTENT = fs.readFileSync("./src/plugin/rollup-purgecss-spider/mocks/lit-component-file.ts", {
    encoding: "utf8"
  });
  const EXPECTED_HTML_ONE = '<div class="description">${this.description}</div>';
  const EXPECTED_HTML_TWO = '<footer class="sgds footer"></footer>';

  test("given the file contents of Lit file, it returns a string of html", () => {
    expect(retrieveHTMLFromLit(MOCK_FILE_CONTENT)).to.include(EXPECTED_HTML_ONE);
    expect(retrieveHTMLFromLit(MOCK_FILE_CONTENT)).to.include(EXPECTED_HTML_TWO);
    expect(retrieveHTMLFromLit(MOCK_FILE_CONTENT)).to.equal(EXPECTED_HTML_ONE + EXPECTED_HTML_TWO);
  });
});
describe("retrieveCSS", () => {
  const MOCK_FILE_CONTENT = fs.readFileSync("./src/plugin/rollup-purgecss-spider/mocks/sgds-element2.ts", {
    encoding: "utf8"
  });
  const EXPECTED_CSS = '@charset "UTF-8";:root{--sgds-blue:#1f69ff}'

  test("given the file contents of sgds-element css in js file, it returns string of css", () => {
    console.log(retrieveCSS(MOCK_FILE_CONTENT))
    expect(retrieveCSS(MOCK_FILE_CONTENT)).to.equal(EXPECTED_CSS);
  });
});

describe("mergeHTML", () => {
  test("given a javascript Map<string, string>, returns a single string of all values joined together", () => {
    const mockMap = new Map<string, string>()
    mockMap.set("mock-1", "hello world")
    mockMap.set("mock-2", "this is a mock map")
    mockMap.set("mock-3", "joined without any separator")
    expect(mergeHTML(mockMap)).to.equal("hello worldthis is a mock mapjoined without any separator")
  })
})