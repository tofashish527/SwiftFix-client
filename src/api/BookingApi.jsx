export const myBookingPromise=(email)=>{
    return fetch(`https://swift-fix-server-side.vercel.app/booking?email=${email}`).then(res=>res.json())
}