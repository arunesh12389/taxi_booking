import React from 'react'


export const UserDataContext = React.createContext();

const UserContext = ({children}) => {

    const [user, setuser] = useState({
        email:'',
        fullName:{
            firstName: '',
            lastName: ''
        }
    })


  return (
    <div>
        <UserDataContext.Provider>
            {children}
        </UserDataContext.Provider>
    </div>
  )
}

export default UserContext