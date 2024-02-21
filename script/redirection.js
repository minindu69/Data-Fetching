// import response object
import { responseObject } from "./fetchData.js";

const overlay = document.getElementById("overlay");
const content = document.getElementById("content");
const email = document.getElementById("email");

console.log(responseObject);
console.log("nextline in redirection");

// load data
if(responseObject.status){
    console.log("Data loaded!");
    overlay.remove();
    content.classList.add("show");
    email.focus();
}else{
    console.log("Error Occured!");
    //pop-up error
}

