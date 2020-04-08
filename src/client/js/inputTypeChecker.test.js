import {checkInputType} from "./inputTypeChecker";

test("Recognizes Urls", () => {
  // Check url input
  let inputText = "https://news.com";
  expect(checkInputType(inputText)).toBe("url");

  // Check empty strings
  inputText = "";
  expect(checkInputType(inputText)).toBe("invalid");

  // Check tweets or short text
  inputText = "This is a test for short text";
  expect(checkInputType(inputText)).toBe("tweet");

  // Check for long text
  inputText = `This is a test for a looooong text, very loooong, more than
    140 characters, muuuch longer than a tweet could be. This is a test for a
    looooong text, very loooong, more than 140 characters, muuuch longer than a
    tweet could be.This is a test for a looooong text, very loooong, more than
    140 characters, muuuch longer than a tweet could be. This is a test for a
    looooong text, very loooong, more than 140 characters, muuuch longer than a
    tweet could be.`;
  expect(checkInputType(inputText)).toBe("text");
})
