import React, { useState } from 'react';

const ReviewForm = ({ addReview }) => {
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review.trim() !== '') {
      addReview(review);
      setReview('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write your comment here..."
        rows={4}
        cols={50}
        className="form-control mb-2"
      ></textarea>
      <button type="submit" className="btn btn-primary">Submit comment</button>
    </form>
  );
};

export default ReviewForm;
