// import React, { use } from 'react';
// import { Link } from 'react-router';

// const Servicelist = ({serviceCreatedByPromise}) => {
//     const service=use(serviceCreatedByPromise);
//     return (
//          <div className="max-w-6xl mx-auto px-4 py-8">
//      {service.length==0 && <h2 className="text-2xl font-semibold mb-4 text-center">You Havn't Posted Any Job Yet.</h2>}
//       <h2 className="text-2xl font-bold mb-6 text-center">
//         Jobs Created By You: <span className="text-blue-600">{service.length}</span>
//       </h2>

//       {service.length>0 && <div className="overflow-x-auto rounded-xl shadow border">
//         <table className="table w-full table-zebra">
//           <thead className="bg-gray-100 text-gray-800">
//             <tr>
//               <th>#</th>
//               <th>Title</th>
//               <th>Deadline</th>
//               <th>Applicants</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {service.map((job, index) => (
//               <tr key={job._id}>
//                 <td className="font-medium">{index + 1}</td>
//                 <td className="font-semibold">{job.title}</td>
//                 <td>{job.deadline || "N/A"}</td>
//                 <td>{job.applicationCount || 0}</td>
//                 <td>
//                   <Link
//                     to={`/applications/${job._id}`}
//                     className="btn btn-sm btn-outline btn-primary"
//                   >
//                     View Applications
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
// }
//     </div>
//     );
// };

// export default Servicelist;