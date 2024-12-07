const passwordBox=document.querySelector('input')
const length=12
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase="abcdefghijklmnopqrstuvwxyz"
const number="1234567890"
const symbol="~!@#$%^&*()_+/?><"
const altChars=upperCase+lowerCase+length+number
// console.log(password)
const Generate=()=>{
    let password=""
    password=upperCase[Math.floor(Math.random())*upperCase.length]
    password=lowerCase[Math.floor(Math.random())*upperCase.length]
    password=number[Math.floor(Math.random())*upperCase.length]
    password=symbol[Math.floor(Math.random())*upperCase.length]
    while(length>password   .length){
        password += altChars[Math.floor(Math.random()*altChars.length)]
    }
    passwordBox.value=password
}


// password.addEventListener("click",passwordGenrator)