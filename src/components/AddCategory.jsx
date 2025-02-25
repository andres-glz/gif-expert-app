import { useState } from 'react'


export function AddCategory({onNewCategory}) {
    const [inputValue, setInputValue] = useState('')

    const onInputChance = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
      event.preventDefault();
      if (inputValue.trim().length <= 1) return;
      onNewCategory(inputValue.trim());
      setInputValue('');
    }
  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input 
          type="text" 
          placeholder="Buscar gifs"
          value={inputValue}
          onChange={ (event) => onInputChance(event)}
        />
      </form>
  )
}
