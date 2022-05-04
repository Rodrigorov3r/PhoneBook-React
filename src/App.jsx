import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ id: 1, name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newObject = {
      id: persons.length + 1,
      name: newName,
    };

    const repetedName = persons.find( //metodo find para buscar la 1er coincidencia en el array
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    if (repetedName) {
      alert(`${newName} already exists bro!`);
      newName('');
      return;
    }

    //console.log(persons.length + 1);
    setPersons(persons.concat(newObject));
    setNewName('');
  };

  const handleInputChange = (e) => {
    return setNewName(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name:
          <input value={newName} onChange={handleInputChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
