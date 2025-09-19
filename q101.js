// JavaScript Program to Remove All Whitespaces From a Text

{
    function removeWhitespaces(text) {
        return text.replace(/\s+/g, '');
    }
    let inputText = prompt("Enter a text with whitespaces...");
    if (inputText) {
        let result = removeWhitespaces(inputText);
        console.log("Text after removing whitespaces: " + result);
    } else {
        console.log("Please enter a valid text.");
    }
}