import { userData, userModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<userModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<userData>({
    id: 1,
    name: "",
    username: "",
    email: "",
    address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
            lat: "",
            lng: ""
        }
    },
    phone: "",
    website: "",
    company: {
        name: "",
        catchPhrase: "",
        bs: ""
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="id" className="block text-gray-700 font-medium mb-2">User ID</label>
            <input
              type="number"
              id="id"
              name="id"
              value={user.id}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
            <input
              id="username"
              name="username"
              value={user.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post content"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post content"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
            <input
              id="phone"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post content"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="website" className="block text-gray-700 font-medium mb-2">Website</label>
            <input
              id="website"
              name="website"
              value={user.website}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter website URL"
            />
          </div>

          {/* Address Section */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <div className="space-y-2">
              <div>
                <label htmlFor="street" className="block text-gray-700 font-medium mb-1">Street</label>
                <input
                  id="street"
                  name="street"
                  value={user.address.street}
                  onChange={(e) => {
                    const { value } = e.target;
                    setUser((prev) => ({
                      ...prev,
                      address: { ...prev.address, street: value }
                    }));
                  }}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter street address"
                />
              </div>
              <div>
                <label htmlFor="suite" className="block text-gray-700 font-medium mb-1">Suite/Apt</label>
                <input
                  id="suite"
                  name="suite"
                  value={user.address.suite}
                  onChange={(e) => {
                    const { value } = e.target;
                    setUser((prev) => ({
                      ...prev,
                      address: { ...prev.address, suite: value }
                    }));
                  }}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter suite or apartment number"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-gray-700 font-medium mb-1">City</label>
                <input
                  id="city"
                  name="city"
                  value={user.address.city}
                  onChange={(e) => {
                    const { value } = e.target;
                    setUser((prev) => ({
                      ...prev,
                      address: { ...prev.address, city: value }
                    }));
                  }}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter city"
                />
              </div>
              <div>
                <label htmlFor="zipcode" className="block text-gray-700 font-medium mb-1">Zipcode</label>
                <input
                  id="zipcode"
                  name="zipcode"
                  value={user.address.zipcode}
                  onChange={(e) => {
                    const { value } = e.target;
                    setUser((prev) => ({
                      ...prev,
                      address: { ...prev.address, zipcode: value }
                    }));
                  }}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter zipcode"
                />
              </div>
              <div>
                <label htmlFor="lat" className="block text-gray-700 font-medium mb-1">Latitude</label>
                <input
                  id="lat"
                  name="lat"
                  value={user.address.geo.lat}
                  onChange={(e) => {
                    const { value } = e.target;
                    setUser((prev) => ({
                      ...prev,
                      address: {
                        ...prev.address,
                        geo: { ...prev.address.geo, lat: value }
                      }
                    }));
                  }}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter latitude"
                />
              </div>
              <div>
                <label htmlFor="lng" className="block text-gray-700 font-medium mb-1">Longitude</label>
                <input
                  id="lng"
                  name="lng"
                  value={user.address.geo.lng}
                  onChange={(e) => {
                    const { value } = e.target;
                    setUser((prev) => ({
                      ...prev,
                      address: {
                        ...prev.address,
                        geo: { ...prev.address.geo, lng: value }
                      }
                    }));
                  }}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter longitude"
                />
              </div>
            </div>
          </div>

          {/* Company Section */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <div className="space-y-2">
              <div>
                <label htmlFor="companyName" className="block text-gray-700 font-medium mb-1">Company Name</label>
                <input
                  id="companyName"
                  name="companyName"
                  value={user.company.name}
                  onChange={(e) => {
                    const { value } = e.target;
                    setUser((prev) => ({
                      ...prev,
                      company: { ...prev.company, name: value }
                    }));
                  }}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter company name"
                />
              </div>
              <div>
                <label htmlFor="catchPhrase" className="block text-gray-700 font-medium mb-1">Catch Phrase</label>
                <input
                  id="catchPhrase"
                  name="catchPhrase"
                  value={user.company.catchPhrase}
                  onChange={(e) => {
                    const { value } = e.target;
                    setUser((prev) => ({
                      ...prev,
                      company: { ...prev.company, catchPhrase: value }
                    }));
                  }}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter company catch phrase"
                />
              </div>
              <div>
                <label htmlFor="bs" className="block text-gray-700 font-medium mb-1">Business Slogan</label>
                <input
                  id="bs"
                  name="bs"
                  value={user.company.bs}
                  onChange={(e) => {
                    const { value } = e.target;
                    setUser((prev) => ({
                      ...prev,
                      company: { ...prev.company, bs: value }
                    }));
                  }}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter business slogan"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none">
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;