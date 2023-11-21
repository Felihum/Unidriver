import LoginForm from '../../components/LoginForm';
import '../../styles/Login.css';
import { useState, useEffect } from 'react';

function Login() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then((resp)=>resp.json())
    .then((data)=>{
      setUsers(data)
    })
    .catch((error) => console.log(error))
  }, []);

  //console.log(users)

  return (
    <div className='clientBody'>
      <div>
          <LoginForm users={users}/>
      </div>
    </div>
  );
}

export default Login