import React from "react";

const Profile = ({ user }) => {
  if (!user) {
    return (
      <p className="text-center mt-10 text-gray-600">
        Please log in to see your profile.
      </p>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gradient-to-r from-green-100 via-white to-green-50 shadow-lg rounded-2xl border border-green-200">
      <div className="flex flex-col items-center">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg" 
          alt="profile avatar"
          className="w-24 h-24 rounded-full border-4 border-green-400 shadow-md"
        />
        <h2 className="text-2xl font-bold mt-4 text-green-700">
          Welcome, {user.name} 👋
        </h2>
        <p className="text-gray-700 mt-2">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="text-gray-700">
          <strong>Favorite Cuisine:</strong> {user.favoriteCuisine || "Not set yet"}
        </p>
      </div>
    </div>
  );
};

export default Profile;
