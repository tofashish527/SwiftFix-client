import axios from 'axios';
import React, { use } from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const Servicelist = ({serviceCreatedByPromise}) => {
    const service=use(serviceCreatedByPromise);

const handleDelete = (id) => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
  }).then((result) => {
    if (result.isConfirmed) {
      axios.delete(`http://localhost:3000/services/${id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire('Deleted!', 'Your service has been deleted.', 'success').then(() => {
              window.location.reload(); 
            });
          }
        })
        .catch((error) => {
          console.error(error);
          Swal.fire('Error', 'Failed to delete service', 'error');
        });
    }
  });
};

    
    return (
         <div className="max-w-6xl mx-auto px-4 py-8">
     {service.length==0 && <h2 className="text-2xl font-semibold mb-4 text-center">You Havn't Posted Any Servicet.</h2>}
      <h2 className="text-2xl font-bold mb-6 text-center">
        Service Added By You: <span className="text-blue-600">{service.length}</span>
      </h2>

      {service.length>0 && <div className="overflow-x-auto rounded-xl shadow border">
        <table className="table w-full table-zebra">
          <thead className="bg-gray-100 text-gray-800">
            <tr>
              <th>#</th>
              <th>Service Name</th>
              <th>Service Img.</th>
              <th>Area</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {service.map((svc, index) => (
              <tr key={svc._id}>
                <td className="font-medium">{index + 1}</td>
                <td className="font-semibold">{svc.serviceName}</td>
                <td><img
  src={svc.imageUrl || "image"}
  alt="Service"
  className=" object-cover"
/></td>
                <td>{svc.serviceArea}</td>
                <td>{svc.servicePrice}</td>
                   <td className="flex flex-col lg:flex-row gap-2 mt-3">
        <Link to={`/updateservice/${svc._id}`} className="btn btn-outline btn-info btn-xs">
          Edit
        </Link>
        <button onClick={()=>handleDelete(svc._id)} className="btn btn-outline btn-error btn-xs">
          Delete
        </button>
      </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> }

    </div>
    );
};

export default Servicelist;