// Check if text, tweet or url
function checkInputType(inputText) {
  let inputType = "invalid";
  if (inputText.length == 0) {
    return "invalid";
  }
  if(inputText.startsWith("https://") || inputText.startsWith("http://")) {
    return "url";
  } else if (inputText.length <= 140) {
    return "tweet";
  } else {
    return "text";
  }
}

export { checkInputType }
