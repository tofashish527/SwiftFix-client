export const myBookingPromise=(email)=>{
    return fetch(`https://b11a11-server-side-tofashish527.vercel.app/booking?email=${email}`).then(res=>res.json())
}