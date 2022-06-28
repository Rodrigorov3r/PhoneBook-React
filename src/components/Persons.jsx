import React from 'react';

const Persons = ({ persons }) => {
  return (
    <>
      <h2>Numbers</h2>
      <div>
        {persons.map((item) => (
          <p key={item.id}>
            {item.name}: {item.number}
          </p>
        ))}
      </div>
    </>
  );
};

export default Persons;
