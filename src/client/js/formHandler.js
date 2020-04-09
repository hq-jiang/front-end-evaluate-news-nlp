import { checkInputType } from './inputTypeChecker'

function handleSubmit(event) {
  event.preventDefault();
  let resultsDiv = document.getElementById('results');
  resultsDiv.textContent = "";

  let formText = document.getElementById('inputtext').value;
  // Input text
  let inputType = checkInputType(formText);
  if (!inputType.valid) {
    resultsDiv.textContent = 'Error: Invalid input';
    return;
  }

  let mode = document.getElementById('radiodocument')
  console.log(formText);
  console.log(inputType.textType);
  // Fill data with input
  let data = {
    textType: inputType.textType,
    mode: getMode(),
    content: formText
  };

  console.log('::: Form Submitted :::');
  console.log('Input type', inputType);
  fetch('/aylien', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(function(res) {
    document.getElementById('results').innerHTML = `
      <p>
        polariy: ${res.polarity} <br>
        polarity_confidence: ${res.polarity_confidence} <br>
        subjectivity: ${res.subjectivity} <br>
        subjectivity_confidence: ${res.subjectivity_confidence} <br>
        text: <br>
        ${res.text}
      </p>
    `;
  })
}

function getMode() {
  let radioTweet = document.getElementById('radio-tweet');
  let radioDocument = document.getElementById('radio-document');
  if (radioTweet.checked && !radioDocument.checked) {
    return "tweet";
  } else if (!radioTweet.checked && radioDocument.checked) {
    return "document";
  } else {
    console.error("Something is wrong with the radio buttons");
    return "error";
  }
}

export { handleSubmit }
