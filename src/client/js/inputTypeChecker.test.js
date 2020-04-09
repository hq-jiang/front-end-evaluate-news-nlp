import { checkInputType } from "./inputTypeChecker";

test("Distinguishes between text and url and catches emtpy inputs", () => {
  // Check url input
  let inputText = "https://news.com";
  let result = checkInputType(inputText);
  expect(result.valid).toBe(true);
  expect(result.textType).toBe("url");

  // Check tweets or short text
  inputText = "This is a test for short text";
  result = checkInputType(inputText);
  expect(result.valid).toBe(true);
  expect(result.textType).toBe("text");

  // Check empty strings
  inputText = "";
  result = checkInputType(inputText);
  expect(result.valid).toBe(false);
  expect(result.textType).toBe("");
})
