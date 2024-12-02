import React, { useState } from 'react';
import { assets } from '../assets/assets';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Abdelhafidh Salhi",
    image: assets.profile_pic,
    email: 'g.haffasalhi@gmail.com',
    phone: '+21694099925',
    address: {
      line1: "Habib Bourguiba",
      line2: "Commercial Center, Tunis, 1001",
    },
    gender: 'Male',
    dob: "2000-12-01"
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("address")) {
      const [_, field] = name.split(".");
      setUserData(prev => ({
        ...prev,
        address: {
          ...prev.address,
          [field]: value
        }
      }));
    } else {
      setUserData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <div>
      <img src={userData.image} alt="Profile" />

      {isEdit ? (
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleInputChange}
        />
      ) : (
        <p>{userData.name}</p>
      )}

      <hr />

      <div>
        <h3>Contact Information</h3>

        <p>Email:</p>
        <p>{userData.email}</p>

        <p>Phone:</p>
        {isEdit ? (
          <input
            type="tel"
            name="phone"
            value={userData.phone}
            onChange={handleInputChange}
          />
        ) : (
          <p>{userData.phone}</p>
        )}

        <p>Address:</p>
        {isEdit ? (
          <div>
            <input
              type="text"
              name="address.line1"
              value={userData.address.line1}
              onChange={handleInputChange}
              placeholder="Address Line 1"
            />
            <br />
            <input
              type="text"
              name="address.line2"
              value={userData.address.line2}
              onChange={handleInputChange}
              placeholder="Address Line 2"
            />
          </div>
        ) : (
          <p>{userData.address.line1}, {userData.address.line2}</p>
        )}
      </div>

      <button onClick={() => setIsEdit(!isEdit)}>
        {isEdit ? 'Save' : 'Edit'}
      </button>
    </div>
  );
};

export default MyProfile;
