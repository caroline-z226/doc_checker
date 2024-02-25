//import React, { useState } from "react";


function user_input_text_submission() {
    var user_text = document.getElementById("user_input_text");
    var read_text = document.getElementById("output_space");

    read_text.innerHTML = parse_word_frequency(word_frequency(user_text.value));
}

// https://stackoverflow.com/questions/30906807/word-frequency-in-javascript
// https://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex
function word_frequency(string_input) {
    string_input = string_input.toLowerCase();
    let words = string_input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').split(/\s/);
    var frequency_map = {};

    words.forEach(function(word) {
        if (!frequency_map[word]) {
            frequency_map[word] = 0;
        }
        frequency_map[word] += 1;
    });

    return frequency_map;
}

// https://stackoverflow.com/questions/38824349/how-to-convert-an-object-to-an-array-of-key-value-pairs-in-javascript
// https://stackoverflow.com/questions/50415200/sort-an-array-of-arrays-in-javascript
function parse_word_frequency(frequency_map) {
    const frequency_array = Object.keys(frequency_map).map((key) => [frequency_map[key], key]);
    let output_string = "";

    frequency_array.sort(function (a, b) {
        if (b[0] == a[0]) {
            return a[1] - b[1];
        }
        return b[0] - a[0];
    });

    for (let i = 0; i < frequency_array.length; i++) {
        output_string += frequency_array[i][1] + ": " + frequency_array[i][0] + "\n";
    }

    return output_string;
}
