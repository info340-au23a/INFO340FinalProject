import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, set, push } from 'firebase/database';
import Form from './Form';
import '../index.css';

const Community = () => {
  const [entries, setEntries] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    const entriesRef = ref(db, 'entries/');
    onValue(entriesRef, (snapshot) => {
      const data = snapshot.val();
      const entriesList = data ? Object.values(data) : [];
      setEntries(entriesList);
    });
  }, []);

  const handleSubmitSuccess = () => {
    setShowForm(false);
  };

  const handleCreatePostClick = () => {
    setShowForm(true);
  };

  return (
    <div>
      <h2>Community</h2>
      {!showForm && (
        <button onClick={handleCreatePostClick} className="form-button">
          Create New Post
        </button>
      )}
      {showForm && <Form onSubmitSuccess={handleSubmitSuccess} />}
      <section>
        {entries.map((entry, index) => (
          <article key={index} className="entry">
            <h3>{entry.title}</h3>
            <p>Date: {entry.date}</p>
            <p>{entry.content}</p>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Community;
