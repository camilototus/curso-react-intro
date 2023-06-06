import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    
    
    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
            
            let parsedItem;
    
            if (!localStorageItem) {
                localStorage.setItem(itemName, JSON.stringify(initialValue));
                parsedItem = initialValue;
              } else {
                parsedItem = JSON.parse(localStorageItem);
                setItem(parsedItem)
              }
    
            setLoading(false)
            } catch(error) {
                setLoading(false)
                setError(error)
            }
        }, 1000)
    }, [])    
  
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return {
        item, 
        saveItem, 
        loading, 
        error
    };
  }

  export { useLocalStorage };

  

// localStorage.removeItem("CAMIELI_V1");

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true},
//   { text: 'Tomar el Curso completo', completed: false},
//   { text: 'Trabajo en un mes', completed: false},
//   { text: 'hacer ejercicios', completed: true}
// ];

// localStorage.setItem('CAMIELI_V1', JSON.stringify(defaultTodos));