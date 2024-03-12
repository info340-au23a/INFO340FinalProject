import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import Form from './Form'; 
import '../index.css'; 

const Community = () => {
  const [entries, setEntries] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    const entriesRef = ref(db, 'entries');
    const unsubscribe = onValue(entriesRef, (snapshot) => {
      const data = snapshot.val();
      const entriesList = data ? Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      })) : [];
      setEntries(entriesList);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2>Community</h2>
      {!showForm && (
        <button className="form-button" onClick={() => setShowForm(true)}>
          Create New Post
        </button>
      )}
      {showForm && <Form />}
      <div>
        {entries.map((entry) => (
          <div key={entry.id} className="entry">
            <h3>{entry.postTitle}</h3>
            <p>Date: {entry.date}</p>
            <p>{entry.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;