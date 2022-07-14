import React, { createContext, useContext, useState } from 'react';

// Context provee una forma de pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel.


const StateContext = createContext();

// The option is open o close, we initial all close

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
}

// La propiedad children nos ayuda a pasar contenido, elementos, componentes 
// <App> Contenido <h1> Children </h1> <Componente 1 /> </App>
export const ContextProvider = ({children}) => {
  const [activeMenu, setActiveMenu] = useState(true);
  
  return (
    <StateContext.Provider
      // Wherever value you pass through here, they will be pass for all the components inside of emtire aplicatition 
      // is the same activeMenu: activeMenu - activeMenu
      value={{ 
        activeMenu,
        setActiveMenu,
      }}
    >
      {/* You always return children because wherever wrapper the content will be display  */}
      {children}
    </StateContext.Provider>
  )
}

// give me the data from the context using the context and we spcefiy which one 
export const useStateContext = () => useContext(StateContext)