//import React, { useState } from "react";


function user_input_text_submission() {
    var user_text = document.getElementById("user_input_text");
    var read_text = document.getElementById("output_space");
    read_text.innerHTML = user_text.value;
}
