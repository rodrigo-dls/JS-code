'use strict';
const form = document.getElementById("nameForm");
const input = document.getElementById("nameInput");
const nameList = document.getElementById("nameList");
const escapeContainer = document.getElementById("escapeContainer");

form.addEventListener("submit", function (event){
  event.preventDefault(); // Stop the default function of the Submit button

  const newName = input.value.trim();

  if(newName === ""){
    return;
  }

  const li = document.createElement("li");
  li.textContent = newName;

  nameList.appendChild(li);

  if (newName.toLocaleLowerCase() === "hacker"){
    document.body.classList.remove("blue");
    document.body.classList.add("red");

    alert("YOU HAVE BEEN HACKED! HEHEHE");

    const escapeButton = document.createElement("button");
    escapeButton.id = "escapeButton";
    escapeButton.textContent = "Press to escape!";


    escapeButton.addEventListener("click", function(evt){
      location.href = "exercise_in_class.html"


    })
  escapeContainer.appendChild(escapeButton);
  }

});