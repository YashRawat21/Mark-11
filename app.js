var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#check-number");
var outputBox = document.querySelector("#output-box");

function checkBirthDateIsLucky(){

    var dob = dateOfBirth.value;
    var sum = calculateSum(dob);                
    compareValues(sum,luckyNumber.value);

}

function compareValues(sum,luckyNumber){
    if(sum % luckyNumber === 0){
        outputBox.innerHTML=`Your Birthday Is <span class="text">Lucky</span><span class="emoji">😉</span>`;
        // alert('yes')


    }else{
        outputBox.innerHTML=`Your Birthday Is <span class="text">Not Lucky</span><span class="emoji">😔</span>`;
        // alert('no')
    }

}
function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let index=0 ; index < dob.length ; index++){
        sum = sum + Number(dob[index]);
    }
    return sum;
}

checkButton.addEventListener("click" , checkBirthDateIsLucky);