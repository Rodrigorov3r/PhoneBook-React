import React from 'react';

const FormAddNew = ({
  handleSubmit,
  newName,
  handleInputName,
  newNumber,
  handleInputNumber,
}) => {
  return (
    <>
      <h2>add a new one</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name:
          <input value={newName} onChange={handleInputName} />
        </div>
        <div>
          number:
          <input value={newNumber} onChange={handleInputNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default FormAddNew;
