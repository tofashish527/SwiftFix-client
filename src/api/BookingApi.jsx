export const myBookingPromise=(email)=>{
    return fetch(`http://localhost:3001/booking?email=${email}`).then(res=>res.json())
}