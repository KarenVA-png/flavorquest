import React from "react";
const Profile = ({ user }) => {
  if (!user) {
    return <p className="text-center mt-10">Please log in to see your profile.</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Welcome, {user.name} 👋</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Favorite Cuisine:</strong> {user.favoriteCuisine || "Not set yet"}</p>
    </div>
  );
};

export default Profile;
