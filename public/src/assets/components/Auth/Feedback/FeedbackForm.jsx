import React, { useState } from "react";

export default function FeedbackForm() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => { e.preventDefault(); console.log({ rating, comment }); };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
      <h2 className="text-2xl mb-4">Feedback</h2>
      <input type="number" max="5" min="1" value={rating} onChange={e => setRating(e.target.value)} className="border p-2 w-full mb-2"/>
      <textarea placeholder="Comments" value={comment} onChange={e => setComment(e.target.value)} className="border p-2 w-full mb-2"/>
      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Submit</button>
    </form>
  );
}
