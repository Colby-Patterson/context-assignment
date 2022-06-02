import React, { useState } from "react";

export const UserContext = React.createContext()

const UserProvider = (props) => {
  let [user, setUser] = useState(null)

  return (
    <UserContext.Provider value={{user: user}}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider