import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', number: '4545555' },
    { id: 2, name: 'Román Riquelme', number: '4545555' },
    { id: 3, name: 'Guillermo Barros Schellotto', number: '4545555' },
    { id: 4, name: 'Antonio Barijho', number: '4545555' },
    { id: 4, name: 'Marcelo Delgado', number: '4545555' },
    { id: 4, name: 'Martín Palermo', number: '4545555' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };

    const repetedName = persons.find(
      //metodo find para buscar la 1er coincidencia en el array
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
    setNewNumber('');
  };

  const handleInputName = (e) => {
    return setNewName(e.target.value);
  };

  const handleInputNumber = (e) => {
    return setNewNumber(e.target.value);
  };

  //input search
  const handleFilter = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const arrFilter = search === '' 
  ? persons 
  : persons.filter((person)=>person.name.toLowerCase().includes(search.toLowerCase()))


  console.log('impri', arrFilter);
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter like in google
        <input type="text" placeholder="searching..." onChange={handleFilter} />
      </div>
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
