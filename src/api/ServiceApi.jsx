export const serviceCreatedByPromise=email=>{
    return fetch(`https://b11a11-server-side-tofashish527.vercel.app/services?email=${email}`)
    .then(res=>res.json())
}