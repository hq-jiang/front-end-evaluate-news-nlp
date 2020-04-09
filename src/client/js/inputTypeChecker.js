// Check if text, tweet or url
function checkInputType(inputText) {

  if (inputText.length == 0) {
    return {textType: "", valid: false};
  }
  if(inputText.startsWith("https://") || inputText.startsWith("http://")) {
    return {textType: "url", valid: true};
  } else {
    return {textType: "text", valid: true};
  }
}

export { checkInputType }
