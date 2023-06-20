import React from 'react';
import './Form.css'; // File CSS untuk styling

const Form = ({ setHasil, setName, setBirthdate, setUniversity, setMajor }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data yang di-submit, misalnya kirim ke server
    setHasil(true);
  };

  return (
    <div className="FormMainContainer">
      <div className="form-container">
        <h2>Form Input</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nama:</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="birthdate">Tanggal Lahir:</label>
          <input
            type="date"
            id="birthdate"
            onChange={(e) => setBirthdate(e.target.value)}
            required
          />

          <label htmlFor="university">PTN:</label>
          <input
            type="text"
            id="university"
            onChange={(e) => setUniversity(e.target.value)}
            required
          />

          <label htmlFor="major">Program Studi:</label>
          <input
            type="text"
            id="major"
            onChange={(e) => setMajor(e.target.value)}
            required
          />

          <button id='tombolawal' type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
