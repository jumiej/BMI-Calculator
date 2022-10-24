
let loginName = document.getElementById("name");
let Email = document.getElementById("email");
let PhnNum = document.getElementById("phn");
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let age = document.getElementById("age")
let gender = document.getElementById("gender");

// let submit = () =>{

//     alert("Hello " + loginName.value + " " + "Your email is " + Email.value + " " + "with phone number " + PhnNum.value +"." + " " +"You are " + " " + height.value + "cm" + " " + "by height" +" "   + "and " + weight.value + "kg" + " " +"by weight.")
// }

let button = document.getElementById("btn");

button.addEventListener('click', (e) => {
    e.preventDefault()
    
    if (loginName.value) {
        document.getElementById("name_error").innerHTML = "";
        
    }else {
        document.getElementById("name_error").innerHTML = "please provide a valid name";
    }
    
    
    if (Email.value === '') {
        document.getElementById("email_error").innerHTML = "please provide a valid email";
    }else {
        document.getElementById("email_error").innerHTML = ""; 
    } 

    if (PhnNum.value.length !== 11) {
        document.getElementById("phn_error").innerHTML = "please provide a valid phone Number";
    }else {
        document.getElementById("phn_error").innerHTML = ""; 
    } 

    if (gender.value === '') {
        document.getElementById("gender_error").innerHTML = "please provide a valid gender";
    }else {
        document.getElementById("gender_error").innerHTML = ""; 
    } 

    if (age.value === '' || isNaN(age.value)) {
        document.getElementById("age_error").innerHTML = "please provide a valid age";
    }else {
        document.getElementById("age_error").innerHTML = ""; 
    } 


    if (height.value === '' || isNaN(height.value)) {
        document.getElementById("height_error").innerHTML = "please provide a valid height";
    }else {
        document.getElementById("heigt_error").innerHTML = "";
    }  
    
    if (weight.value ==='' || isNaN(weight.value)) {
        document.getElementById("weight_error").innerHTML = "please provide a valid weight";
    }else {
        document.getElementById("weight_error").innerHTML = "";
    }    
})


 