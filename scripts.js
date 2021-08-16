const dateOfBirth = document.querySelector("#date_of_birth");
const luckyNumber = document.querySelector("#lucky_number");
const checkNumber = document.querySelector("#check_number");
const result = document.querySelector(".result");

checkNumber.addEventListener("click", checkBirthdayIsLucky);

function checkBirthdayIsLucky(){
    const dob = dateOfBirth.value;
    const num = luckyNumber.value;

    const sum = calculateSum(dob);
    if(dob&&num){
        compareValues(sum,num);
    }else{
        result.innerHTML = "Fill all the fields ☝";
    } 
}

function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let i = 0; i < dob.length; i++){
        sum += Number(dob.charAt(i));
    }
    return sum;
}

function compareValues(sum, num){
    if(sum%num === 0){
        result.innerHTML = "Your Birthday is Lucky 🥳";
    }else{
        result.innerHTML = "Your Birthday is not Lucky 😑";
    }  
}