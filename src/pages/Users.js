import axios from "axios"
import { useEffect, useState } from "react"

function Users() {
  let [users, setUsers] = useState([])
  let [loading, setLoading] = useState(true)

  useEffect(()=>{
    getUsers()
  }, [])

  const renderUsers = ()=>{
    return users.map((user)=>{
      return (
        <div key={user.id}>
          <p>{user.id}</p>
          <p>{user.email}</p>
        </div>
      )
    })
  }

  const getUsers = async()=>{
    setLoading(true)
    let result = await axios.get("https://reqres.in/api/users?delay=3")
    setLoading(false)
    setUsers(result.data.data)
  }


  return (
    <>
    <p>Users</p>
    {renderUsers()}
    </>
  )
}

export default Users