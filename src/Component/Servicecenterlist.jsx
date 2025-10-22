// // export default function ServiceCentersList({ filteredLocations }) {
// //   return (
// //     <div className="w-1/3 overflow-y-auto max-h-[600px]">
// //       {filteredLocations.map(loc => (
// //         <div key={loc.id} className="p-4 border-b hover:bg-gray-50">
// //           <h3 className="font-semibold">{loc.name}</h3>
// //           <p className="text-sm">{loc.address}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// export default function ServiceCentersList({ filteredLocations }) {
//   return (
//     <div className="w-full md:w-1/2 lg:w-1/3 max-h-[600px] overflow-y-auto bg-white shadow-md rounded-lg border border-gray-200">
//       <h2 className="text-xl font-bold p-4 border-b bg-gray-100">Service Centers</h2>
//       {filteredLocations.length > 0 ? (
//         filteredLocations.map(loc => (
//           <div
//             key={loc.id}
//             className="p-4 border-b last:border-none hover:bg-gray-50 transition-colors"
//           >
//             <h3 className="text-lg font-semibold text-gray-800">{loc.name}</h3>
//             <p className="text-sm text-gray-600">{loc.address}</p>
//           </div>
//         ))
//       ) : (
//         <div className="p-4 text-gray-500 italic">No service centers found.</div>
//       )}
//     </div>
//   );
// }
