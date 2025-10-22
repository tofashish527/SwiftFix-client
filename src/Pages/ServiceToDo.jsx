
import Swal from "sweetalert2";
import UseAuth from "../hooks/UseAuth";
import { useEffect, useState } from "react";
import axios from "axios";


const ServiceToDo = () => {
   // const {serviceId}=useParams()
     const { user } = UseAuth(); // get logged-in user
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3001/booking/provider?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setApplications(data));
    }
  }, [user]);

   const handleStatusChange = (e, app_id) => {
    axios
      .patch(`http://localhost:3001/booking/${app_id}`, {
        status: e.target.value,
      })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Application status updated',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => console.log(error));
  };
  return (
      <div className="p-4 mt-20 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Applications for Your Services</h2>
      {applications.length === 0 ? (
        <p>No applications yet.</p>
      ) : (
        <ul className="space-y-2">
          {applications.map((app) => (
            <li key={app._id} className="border p-4 rounded shadow">
              <p><strong>Service:</strong> {app.serviceName}</p>
              <p><strong>Applicant:</strong> {app.serviceImage}</p>
              <p><strong>Status:</strong> <select
                    onChange={(e) => handleStatusChange(e, app._id)}
                    defaultValue={app.serviceStatus}
                    className="select select-bordered w-full max-w-xs"
                  >
                    <option>Pending</option>
                    <option>Working</option>
                    <option>Completed</option>
                  </select></p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceToDo;
