/**
 * Created by zlatii on 15/11/2017.
 */
function register(name, email, password) {
   return fetch('http://localhost:5000/auth/signup',{
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    })
         .then(data=> {return data.json()})
}


function login(email, password) {
   return fetch('http://localhost:5000/auth/login',{
        method: 'POST',
        headers:{
           'Content-Type' : 'application/json'
       },
       body: JSON.stringify({
           email,
           password
       })
    })
        .then(data=> {return data.json()})
}

function create(furniture) {
    console.log(furniture)
    return fetch('http://localhost:5000/furniture/create/',{
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json',
            'Authorization': 'bearer ' + localStorage.getItem('authToken')
        },
        body: JSON.stringify(furniture)
    })
        .then(data=> {return data.json()})
}

function details(id) {
    return fetch(`http://localhost:5000/furniture/details/${id}`, {
        headers:{
            'Content-Type' : 'application/json',
            'Authorization': 'bearer ' + localStorage.getItem('authToken')
        },
    })
       .then(data=> {return data.json()})
}

function getFurnitures(page) {
    if(!page) page = 1
    let query = '?page=' + page
    return fetch(`http://localhost:5000/furniture/all${query}`)
        .then(data=> {return data.json()})
}

function profile() {
    return fetch(`http://localhost:5000/furniture/mine`,{
        headers:{
            'Content-Type' : 'application/json',
            'Authorization': 'bearer ' + localStorage.getItem('authToken')
        },
    })
        .then(data=> {return data.json()})
}

function search(searchString) {
    return fetch(`http://localhost:5000/furniture/all?search=${searchString}`, {})
        .then(data=> {return data.json()})
}

function remove(id) {
    return fetch(`http://localhost:5000/furniture/delete/${id}`, {
        method:'POST',
        headers:{
            'Content-Type' : 'application/json',
            'Authorization': 'bearer ' + localStorage.getItem('authToken')
        },
    })
        .then(data=> {return data.json()})
}

export  {register, login, details, create, getFurnitures, search, profile, remove}