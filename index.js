'usestrict';
function sayIt(translator) {
    let phrase = translator('Hello');
    alert(phrase);
}

function hawaiianTranslator(word) {
    if (word === 'Hello') return 'Aloha';
    if (word === 'Goodbye') return 'Aloha';
}

sayIt(hawaiianTranslator); // Aloha
