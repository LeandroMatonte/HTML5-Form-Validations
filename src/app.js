/* eslint-disable */
import "bootstrap";
import "./style.css";

import validator from "validator";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault();

  let error = false;
  let alert = document.querySelector(".alert");
  let inputCard = document.getElementById("InputCard");
  let CvcCard = document.getElementById("CvcCard");
  let Amount = document.getElementById("Amount");
  let Name = document.getElementById("Name");
  let LastName = document.getElementById("LastName");
  let City = document.getElementById("City");
  let State = document.getElementById("State");
  let PostalCode = document.getElementById("PostalCode");
  let Message = document.getElementById("Message");

  //inputCard alert
  if (validator.isEmpty(inputCard.value)) {
    inputCard.style.backgroundColor = "rgb(255, 162, 171)";
    error = true;
  } else {
    inputCard.style.backgroundColor = "white";
    inputCard.value = "";
  }

  //CvcCard alert
  if (validator.isEmpty(CvcCard.value)) {
    CvcCard.style.backgroundColor = "rgb(255, 162, 171)";
    error = true;
  } else {
    CvcCard.style.backgroundColor = "white";
    CvcCard.value = "";
  }

  //Amount alert
  if (validator.isEmpty(Amount.value)) {
    Amount.style.backgroundColor = "rgb(255, 162, 171)";
    error = true;
  } else {
    Amount.style.backgroundColor = "white";
    Amount.value = "";
  }

  //Name alert
  if (validator.isEmpty(Name.value)) {
    Name.style.backgroundColor = "rgb(255, 162, 171)";
    error = true;
  } else {
    Name.style.backgroundColor = "white";
    Name.value = "";
  }

  //LastName alert
  if (validator.isEmpty(LastName.value)) {
    LastName.style.backgroundColor = "rgb(255, 162, 171)";
    error = true;
  } else {
    LastName.style.backgroundColor = "white";
    LastName.value = "";
  }

  //City alert
  if (validator.isEmpty(City.value)) {
    City.style.backgroundColor = "rgb(255, 162, 171)";
    error = true;
  } else {
    City.style.backgroundColor = "white";
    City.value = "";
  }

  //State alert
  if (validator.isEmpty(State.value)) {
    State.style.backgroundColor = "rgb(255, 162, 171)";
    error = true;
  } else {
    State.style.backgroundColor = "white";
    State.value = "";
  }

  //PostalCode alert
  if (validator.isEmpty(PostalCode.value)) {
    PostalCode.style.backgroundColor = "rgb(255, 162, 171)";
    error = true;
  } else {
    PostalCode.style.backgroundColor = "white";
    PostalCode.value = "";
  }

  //Message alert
  if (validator.isEmpty(Message.value)) {
    Message.style.backgroundColor = "rgb(255, 162, 171)";
    error = true;
  } else {
    Message.style.backgroundColor = "white";
    Message.value = "";
  }

  if (error) {
    alert.style.display = "block";
  } else {
    alert.style.display = "none";
  }
});
