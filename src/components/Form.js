import React, { useState } from 'react';
import '../index.css';

function Form() {
  // Define formData state with useState hook
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    content: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Update formData state
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Here, you would typically send formData to your server or process it as needed
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title" className="form-label">Post Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="What do you want to title this post?"
          className="form-input"
        />

        <label htmlFor="date" className="form-label">Day</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          placeholder="mm/dd/yyyy"
          className="form-input"
        />

        <label htmlFor="content" className="form-label">How's your fungi going on?</label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleInputChange}
          rows="4"
          className="form-textarea"
        ></textarea>

        <button type="submit" className="form-button">Generate</button>
      </form>
    </div>
  );
}

export default Form;
