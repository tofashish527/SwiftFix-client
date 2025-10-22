import axios from 'axios';
import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContext';
import { useLoaderData, useNavigate } from 'react-router';
import { Helmet } from 'react-helmet';

const UpdateService = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const service = useLoaderData();
  const { _id, serviceName, serviceImage, serviceArea, servicePrice, serviceDescription } = service;

  const handleUpdateService = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedData = Object.fromEntries(formData.entries());

    try {
      const res = await axios.put(`http://localhost:3001/services/${_id}`, updatedData);

      if (res.data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Service updated successfully!',
          timer: 1500,
          showConfirmButton: false
        });
        navigate('/manageservices');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Update failed',
          text: res.data.message,
        });
      }
    } catch (err) {
      console.error('Error updating service:', err);
      Swal.fire({
        icon: 'error',
        title: 'Error updating service',
        text: 'Something went wrong. Please try again.',
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-indigo-50 mb-10 rounded-xl shadow-md mt-30">
      <Helmet>
        <title>SwiftFix | Update Service</title>
      </Helmet>
      <h1 className="text-3xl font-bold mb-6 text-center">Update Service</h1>

      <form onSubmit={handleUpdateService} className="space-y-6">
        <fieldset className="border rounded-md p-4">
          <legend className="text-lg font-semibold mb-2">Service Information</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium">Service Name</label>
              <input type="text" name="serviceName" defaultValue={serviceName} className="input input-bordered w-full" required />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Image URL</label>
              <input type="text" name="imageUrl" defaultValue={serviceImage} className="input input-bordered w-full" required />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Price</label>
              <input type="number" name="price" defaultValue={servicePrice} className="input input-bordered w-full" required />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Area</label>
              <input type="text" name="area" defaultValue={serviceArea} className="input input-bordered w-full" required />
            </div>
          </div>
          <label className="block mb-1 mt-2 text-sm font-medium">Description</label>
          <textarea name="description" defaultValue={serviceDescription} className="textarea textarea-bordered w-full" rows={4} required />
        </fieldset>

        <fieldset className="border rounded-md p-4">
          <legend className="text-lg font-semibold mb-1">Provider Info</legend>
          <div className="mb-2">
            <label className="block mb-1 text-sm font-medium">Provider Image URL</label>
            <input type="text" name='ProviderURL' value={user?.photoURL || ''} readOnly className="input input-bordered w-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium">Provider Name</label>
              <input type="text" name='ProviderName' value={user?.displayName || ''} readOnly className="input input-bordered w-full" />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Provider Email</label>
              <input type="email" name='ProviderEmail' value={user?.email || ''} readOnly className="input input-bordered w-full" />
            </div>
          </div>
        </fieldset>

        <div className="text-center">
          <input type="submit" value="Update Service" className="btn btn-primary w-full md:w-1/2 mt-4" />
        </div>
      </form>
    </div>
  );
};

export default UpdateService;
