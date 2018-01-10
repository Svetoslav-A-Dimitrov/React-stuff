/**
 * Created by zlatii on 16/11/2017.
 */
const host = 'http://localhost:5000/';

function register(name, email, password) {
   return fetch(`${host}auth/signup`,{
        method: 'POST',
        headers:{
            'content-type' : 'application/json'
        },
        body:JSON.stringify({
            name,
            email,
            password
        })
    })
       .then(data=>  data.json())
}

function login(email, password) {
  return fetch(`${host}auth/login`,{
        method: 'POST',
        headers:{
            'content-type' : 'application/json'
        },
        body:JSON.stringify({
            email,
            password
        })
    })
        .then(data=>  data.json())
}

function addExpense(year, month, date, name, category, cost) {
    // "plan/{year}/{month}/expense"
    return fetch(`${host}plan/${year}/${month}/expense`,{
        method: 'POST',
        headers:{
            'content-type' : 'application/json',
            'Authorization': 'bearer ' + localStorage.getItem('authToken')
        },
        body:JSON.stringify({
                "date": date,
                "name": name,
                "category": category,
                "amount": cost
            }
        )
    })
        .then(data=>  data.json())
}
function getYearBalance(year) {
    // "plan/{year}" "
    return fetch(`${host}plan/${year}`,{
        headers:{
            'content-type' : 'application/json',
            'Authorization': 'bearer ' + localStorage.getItem('authToken')
        }
    })
        .then(data=>  data.json())
}

function getExpenses(year, month) {
    // GET http://localhost:5000/plan/:year/:month
    return fetch(`${host}plan/${year}/${month}`,{
        headers:{
            'content-type' : 'application/json',
            'Authorization': 'bearer ' + localStorage.getItem('authToken')
        }
    })
        .then(data=>  data.json())
}

function setBalance(year,month,income, budget) {
    //POST http://localhost:5000/plan/:year/:month
    return fetch(`${host}plan/${year}/${month}`,{
        method: 'POST',
        headers:{
            'content-type' : 'application/json',
            'Authorization': 'bearer ' + localStorage.getItem('authToken')
        },
        body:JSON.stringify(
            {
                income,
                budget
            })

    })
        .then(data=>  data.json())
}

function removeExpense(id) {
   // DELETE http://localhost:5000/plan/expense/:expenseId
    return fetch(`${host}plan/expense/${id}`,{
        method: 'DELETE',
        headers:{
            'content-type' : 'application/json',
            'Authorization': 'bearer ' + localStorage.getItem('authToken')
        }
    })
        .then(data=>  data.json())
}



export  {
    register,
    login,
    addExpense,
    getYearBalance,
    getExpenses,
    setBalance,
    removeExpense
}