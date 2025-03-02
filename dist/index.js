"use strict";
const form = document.querySelector(".form-submit");
const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const userCountry = document.querySelector("#country");
const userFeedback = document.querySelector("#feedback");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
        userName: userName.value,
        userEmail: userEmail.value,
        userCountry: userCountry.value,
        userFeedback: userFeedback.value,
    };
    console.log(data);
});
