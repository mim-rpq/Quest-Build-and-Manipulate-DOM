function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber =parseFloat(inputValue)
    return inputValueNumber;
}


function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
}



function showSectionById(id){
    document.getElementById('history-container').classList.add('hidden');
    document.getElementById('donation-container').classList.add('hidden');
    document.getElementById('modal-container').classList.add('hidden');
    document.getElementById('backdrop-container').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden')

}