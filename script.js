const generateBtn = document.getElementById('generate')
const password = document.querySelector('.password')
const copyPassword = document.querySelector('.copy')
const checkedInputs = document.querySelectorAll('input[type="checkbox"]')
let passwordLength =
                  document.querySelector('input[type="number"]')

let passwordArrays= {
    lowerCase : 'abcdefghijklmnopqrstuvwxyz',
    upperCase : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers : '0123456789',
    symbols : '!@#$%^&*'
}

generatePassword()

function generatePassword(){
    let passwordString = ''
    let randomPassword = ''
    let length = passwordLength.value
    checkedInputs.forEach(input=>{
        if(input.checked){
            const dataChars = input.getAttribute('data-chars')
            passwordString += passwordArrays[dataChars]
        }
    })
    passwordLength.addEventListener('input', ()=>{length =  password.value})
    for (let index = 0; index <= length ; index++) {
        randomPassword += passwordString[Math.floor(Math.random()* passwordString.length)]
    }
    password.innerText = randomPassword

    copyPassword.addEventListener('click', ()=>{
        navigator.clipboard.writeText(randomPassword);
        alert('Password copied to clipboard')
    })
}
generateBtn.addEventListener('click', ()=>{
    generatePassword()
})
