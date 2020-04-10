import { getMode } from "./formHandler";

test("Test radio button", () => {
  document.body.innerHTML = `
    <input type="radio" id="radio-tweet" name="texttype" value="tweet" checked="checked">
    <label for="tweet">tweet</label><br>
    <input type="radio" id="radio-document" name="texttype" value="document">
    <label for="document">document</label><br>
  `;

  expect(getMode()).toBe("tweet");

  document.body.innerHTML = `
    <input type="radio" id="radio-tweet" name="texttype" value="tweet">
    <label for="tweet">tweet</label><br>
    <input type="radio" id="radio-document" name="texttype" value="document" checked="checked">
    <label for="document">document</label><br>
  `;

  expect(getMode()).toBe("document");

  document.body.innerHTML = `
    <input type="radio" id="radio-tweet" name="texttype" value="tweet" checked="checked">
    <label for="tweet">tweet</label><br>
    <input type="radio" id="radio-document" name="texttype" value="document" checked="checked">
    <label for="document">document</label><br>
  `;

  expect(getMode).toThrow(Error);

})
