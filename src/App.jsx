import React, { useState } from 'react'
function App() {
  const [users, setUsers] = useState([])


  React.useEffect(() => {
    getMovies()
  }, [])

  const getMovies = async () => {


    const apiUserGetall = "https://jsonplaceholder.typicode.com/users"
    console.log(apiUserGetall)

    await fetch(apiUserGetall)
      .then(response => response.json())
      .then(data => {
        setUsers(data)
      }
      )
      .catch((err) => {
        console.log(err)
      })


  }

  return (

    <>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-3 text-left">Name</th>
            <th className="border border-gray-300 p-3 text-left">Username</th>
            <th className="border border-gray-300 p-3 text-left">Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map((item, index) => (
            <tr key={item.id || index} className="hover:bg-gray-50">
              <td className="border border-gray-300 p-3">{item.name}</td>
              <td className="border border-gray-300 p-3">{item.username}</td>
              <td className="border border-gray-300 p-3">{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>


    </>

  )
}

export default App 


{/*import { useState } from 'react';

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <div>
      <h1>My favorite color is {color}!</h1>

      <button onClick={() => setColor("blue")}>
        Blue
      </button>

      <button onClick={() => setColor("green")}>
        Green
      </button>

      <button onClick={() => setColor("red")}>
        Red
      </button>
    </div>
  );
}

export default FavoriteColor;*/}
