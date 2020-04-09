import { checkInputType } from './inputTypeChecker'

function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('inputtext').value;
    let inputType = checkInputType(formText);
    if (!inputType.valid) {
      let resultsDiv = document.getElementById('results');
      resultsDiv.textContent = "Error: Invalid input";
      return;
    }

    console.log("::: Form Submitted :::")
    console.log("Input type", inputType);
    fetch('localhost:8000/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }
