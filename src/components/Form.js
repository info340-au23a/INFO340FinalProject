import { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

/*function Form(prop) {
    const [entryObj, setEntryObj] = useState({
        inputTitle: '',
        inputDate: '',
        inputContent: ''
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEntryObj({ ...entryObj, [name]: value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        
        const newEntry = {
            postTitle: entryObj.inputTitle,
            date: entryObj.inputDate,
            content: entryObj.inputContent,
            // Using Firebase server timestamp
            time: firebase.database.ServerValue.TIMESTAMP,
        };

        const entryRef = firebase.database().ref('entries');

        entryRef.push(newEntry)
            .then(() => {
                // Handle the success case
                console.log('New entry added!');
                // You might want to clear the form or redirect the user
            })
            .catch(error => {
                // Handle any errors
            console.error('Error writing new entry to Firebase database', error);
        });
  };


      const formFields = [
        { id: "inputTitle", name: "inputTitle", type: "text", label: "Post Title", aria: "Entry Title", placeholder: "What do you want to title this post?" },
        { id: "inputDate", name: "inputDate", type: "date", label: "Day", aria: "Date" },
        { id: "inputContent", name: "inputContent", type: "textarea", label: "Any fun story with Fugi?", aria: "Day Description", placeholder: "Tell your story..." }
      ];
    
      return (
        <div>
          <h1>Create an Entry</h1>
          <form onSubmit={handleSubmit}>
            {formFields.map(field => (
              <React.Fragment key={field.id}>
                <label htmlFor={field.id}>{field.label}</label>
                {field.type === 'textarea' ? (
                  <textarea
                    id={field.id}
                    name={field.name}
                    value={entryObj[field.name]}
                    onChange={handleInputChange}
                    aria-label={field.aria}
                    placeholder={field.placeholder}
                  />
                ) : (
                  <input
                    id={field.id}
                    type={field.type}
                    name={field.name}
                    value={entryObj[field.name]}
                    onChange={handleInputChange}
                    aria-label={field.aria}
                    placeholder={field.placeholder}
                  />
                )}
              </React.Fragment>
            ))}
            <button type="submit">Done</button>
            <button type="button" onClick={() => {App.js}}>Home</button>
          </form>
        </div>
      );
    }
    
    export default Form;*/