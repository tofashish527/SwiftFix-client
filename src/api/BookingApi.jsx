export const myBookingPromise=(email)=>{
    return fetch(`http://localhost:3000/booking?email=${email}`).then(res=>res.json())
}