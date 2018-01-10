/**
 * Created by zlatii on 07/11/2017.
 */
const appId = 'kid_Byb4bbkkG'
const appSecret = 'c37f63eeaedb4e379da4d7d3353e9db9'
const appUrl = 'https://baas.kinvey.com'

const auth = {
    register: (user) => {
        return fetch(`${appUrl}/user/${appId}/`, {
            method: 'POST',
            headers: {
                'Authorization': "Basic " + btoa(appId + ':' + appSecret),
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(data => {
                return data.json()
            })
    },
    login: (user) => {
        return fetch(`${appUrl}/user/${appId}/login`, {
            method: 'POST',
            headers: {
                'Authorization': "Basic " + btoa(appId + ':' + appSecret),
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(data => {
                return data.json()
            })

    },
    listAllPost: () => {
       return fetch(`${appUrl}/appdata/${appId}/posts?query={}&sort={"_kmd.ect": -1}`, {
           method: 'GET',
           headers: {Authorization:'Kinvey ' + localStorage.getItem('token')}
       })
            .then(data=>{
                return data.json()
            })
           .then((posts)=>{
                return posts

           })
    }
}

export default auth