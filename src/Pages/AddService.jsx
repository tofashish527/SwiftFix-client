import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddService = () => {
    const { user } = useContext(AuthContext);
    const handleAddService=e=>{
          e.preventDefault();
    const form = e.target;
    const formdata = new FormData(form);
    const data = Object.fromEntries(formdata.entries());
        console.log(data)
    

     axios.post('http://localhost:3000/services', data)
      .then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Service added successfully!",
            showConfirmButton: false,
            timer: 1500
          });
          form.reset();
        }
      })
      .catch(console.log);
  };
    return (
   
    <div className="max-w-4xl mx-auto p-6 bg-indigo-50 mb-10 rounded-xl shadow-md mt-6">
  <h1 className="text-3xl font-bold mb-6 text-center">Add a New Service</h1>

  <form onSubmit={handleAddService} className="space-y-6">

    {/* Basic Info */}
    <fieldset className="border rounded-md p-4">
      <legend className="text-lg font-semibold mb-2">Service Information</legend>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 text-sm font-medium" htmlFor="serviceName">Service Name</label>
          <input type="text" id="serviceName" name="serviceName" placeholder="Service Name" className="input input-bordered w-full" required />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium" htmlFor="imageUrl">Image URL of the Service</label>
          <input type="text" id="imageUrl" name="imageUrl" placeholder="Image URL" className="input input-bordered w-full" required />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium" htmlFor="price">Price</label>
          <input type="number"  id="price" name="price" placeholder="Price" className="input input-bordered w-full" required />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium" htmlFor="area">Service Area</label>
          <input type="text" id="area" name="area" placeholder="Service Area" className="input input-bordered w-full" required />
        </div>
      </div>
       <label className="block mb-1 mt-2 text-sm font-medium" htmlFor="description">Service Description</label>
      <textarea
        id="description"
        name="description"
        placeholder="Write a detailed description of the service"
        className="textarea textarea-bordered w-full"
        rows={4}
        required
      />
    </fieldset>

    {/* Provider Info */}
    <fieldset className="border rounded-md p-4">
      <legend className="text-lg font-semibold mb-1">Service Provider Info</legend>
       <div className="mb-2">
        <label className="block mb-1 text-sm font-medium" htmlFor="providerPhoto">Provider Image URL</label>
        <input type="text" name='ProviderURL' id="providerPhoto" value={user?.photoURL || ''} readOnly className="input input-bordered w-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 text-sm font-medium" htmlFor="providerName">Provider Name</label>
          <input type="text" id="providerName" name='ProviderName' value={user?.displayName || ''} readOnly className="input input-bordered w-full" />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium" htmlFor="providerEmail">Provider Email</label>
          <input type="email" id="providerEmail" name='ProviderEmail' value={user?.email || ''} readOnly className="input input-bordered w-full" />
        </div>
      </div>
    </fieldset>

    {/* Submit */}
    <div className="text-center">
      <input type="submit" value="Add Service" className="btn btn-primary hover:bg-violet-300 hover:text-black w-full md:w-1/2 mt-4" />
    </div>
  </form>
</div>

    );
};

export default AddService;