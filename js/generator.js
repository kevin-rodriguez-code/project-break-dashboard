const may = ['A', 'B','C','D', 'E' ,'F','G', 'H' ,'I','J', 'K' ,'L','M', 'N','O', 'P' ,'Q', 'R', 'S', 'T' ,'U', 'V', 'W', 'X', 'Y', 'Z']
const min = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const simb = ['!', '@', '#', '$', '%', '^', '&', '*', '()', '-', '_', '=', '+']

const input = document.getElementById('input')
const btn = document.getElementById('btn')
const password = document.getElementById('password')

const mayminnumsimb = [...may, ...min, ...num, ...simb];
let generatedpassword = '';
const PasswordGenerate = () => {
    let generatedpassword = '';
    generatedpassword += may [Math.floor(Math.random() * may.length)];
    generatedpassword += min [Math.floor(Math.random() * min.length)];
    generatedpassword += num [Math.floor(Math.random() * num.length)];
    generatedpassword += simb [Math.floor(Math.random() * simb.length)];
    for(let i = 4 ; i < input.value; i++){
       generatedpassword += mayminnumsimb [Math.floor(Math.random() * mayminnumsimb.length)]
    }
    return generatedpassword
} 

console.log(generatedpassword)

btn.addEventListener('click', () => {
    if(input.value <12 || input.value > 50 ){password.innerHTML =`<p class="error">Introduce mínimo 12 caracteres y máximo 50</p>`}
    else{const generatedpassword = PasswordGenerate();
    password.innerHTML = generatedpassword;
    console.log(generatedpassword);}
    
});





 