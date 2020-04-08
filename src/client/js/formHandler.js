import { checkInputType } from './inputTypeChecker'

function handleSubmit(event) {
    alert("Form Submitted");
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    let inputType = checkInputType(formText);

    console.log("::: Form Submitted :::")
    console.log("Input type", inputType);
    // fetch('/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })
}

export { handleSubmit }
