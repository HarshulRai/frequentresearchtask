const { stat } = require("fs")

let firstname = document.querySelector('#firstname')
let lastname = document.querySelector("#lastname")
let email = document.querySelector('#email')
let country = document.querySelector('#country')
let state = document.querySelector('#state')
let city = document.querySelector('#city')
let gender =  document.querySelector('#gender')

const saveButton = document.querySelector('#button')
const displayButton = document.querySelector('#displayButton')

saveButton.addEventListener('click', (e)=>{
    e.preventDefault()

    if(firstname.value === ''){
        firstname.placeholder = "Please enter your first name"
        firstname.classList.add('empty')
    }
    else if(lastname.value === ''){
        lastname.placeholder = "Please enter your last name"
        lastname.classList.add('empty')
    }
    else if(email.value === ''){
        email.placeholder = "Please enter your email"
        email.classList.add('empty')
    }
    else if(country.value === ''){
        country.placeholder = "Please enter your country"
        country.classList.add('empty')
    }
    else if(state.value === ''){
        state.placeholder = "Please enter your state"
        state.classList.add('empty')
    }
    else if(city.value === ''){
        city.placeholder = "Please enter your city"
        city.classList.add('empty')
    }
    else if(gender.value === ''){
        gender.placeholder = "Please s[ecify your gender"
        gender.classList.add('empty')
    }
    else if(Agent.value === ''){
        age.placeholder = "Please enter your age"
        age.classList.add('empty')
    }
    else{
        let registerDetails = {
            firstname: firstname.value, lastname: lastname.value, email: email.value, country: country.value, state: state.value, city: city.value, gender: gender.value, age: age.value
        }
        console.log(registerDetails)
        axios.post('http://localhost:3000/', registerDetails)
        .then((res)=>{
            console(res.data.flag)

           
        }).catch(err => console.log(err))
    }
})

