import { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import FormAddNew from './components/FormAddNew';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then((response) => {
      console.log(response.data);
      setPersons(response.data);
    });
  }, []);

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
  //filtro de busqueda
  const arrFilter =
    search === ''
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(search.toLowerCase())
        );

  //array a mostrar en pantalla
  const showFilter = (() =>
    arrFilter.map((filtro) => <p key={filtro.id}>{filtro.name}</p>))();

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        handleFilter={handleFilter}
        search={search}
        showFilter={showFilter}
      />
      <FormAddNew
        handleSubmit={handleSubmit}
        newName={newName}
        handleInputName={handleInputName}
        newNumber={newNumber}
        handleInputNumber={handleInputNumber}
      />
      <Persons persons={persons} />
    </div>
  );
};

export default App;
