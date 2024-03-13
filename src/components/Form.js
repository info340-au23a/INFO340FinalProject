import React, { useState } from 'react';
import '../index.css'; 
import { getDatabase, ref, push } from 'firebase/database';

function Form(props) {

  const [formData, setFormData] = useState({
    title: '',
    date: '',
    content: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const db = getDatabase();
    const postsRef = ref(db, 'posts');

    push(postsRef, formData)
      .then(() => {
        console.log('Data sent successfully');
        setFormData({
          title: '',
          date: '',
          content: ''
        });
        props.onSubmitSuccess();
      })
      .catch((error) => {
        console.error('Error sending data: ', error);
      });
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
