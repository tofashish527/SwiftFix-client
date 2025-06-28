export const serviceCreatedByPromise=email=>{
    return fetch(`https://swift-fix-server-side.vercel.app/services?email=${email}`)
    .then(res=>res.json())
}