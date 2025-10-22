export const serviceCreatedByPromise=email=>{
    return fetch(`http://localhost:3001/services?email=${email}`)
    .then(res=>res.json())
}