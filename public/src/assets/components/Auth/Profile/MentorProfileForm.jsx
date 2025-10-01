import React, { useState } from "react";

export default function MentorProfileForm() {
  const [profile, setProfile] = useState({
    expertise: "",
    subjects: "",
    achievements: "",
  });

  const handleChange = (e) => setProfile({ ...profile, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); console.log(profile); };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
      <h2 className="text-2xl mb-4">Mentor Profile</h2>
      <input name="expertise" placeholder="Expertise" onChange={handleChange} className="border p-2 w-full mb-2"/>
      <input name="subjects" placeholder="Subjects" onChange={handleChange} className="border p-2 w-full mb-2"/>
      <textarea name="achievements" placeholder="Achievements" onChange={handleChange} className="border p-2 w-full mb-2"/>
      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Save</button>
    </form>
  );
}
