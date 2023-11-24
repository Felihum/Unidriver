/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useState } from "react";

function LoginForm({ users }){
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const navigate = useNavigate();

    const emailInput = document.querySelector("#email");
    const senhaInput = document.querySelector("#senha");
    const remember = document.querySelector("#remember");
    const paragrafoIncorreto = document.querySelector("#paragrafo-incorreto");

    function logar(e){
        e.preventDefault()

        users.map((user) => {
            if(email == user.email){
                if(senha == user.password){
                    if(remember.checked){
                        localStorage.setItem("name", user.name)
                        localStorage.setItem("email", user.email)
                        localStorage.setItem("id", user.id)
                    } else{
                        sessionStorage.setItem("name", user.name)
                        sessionStorage.setItem("email", user.email)
                        sessionStorage.setItem("id", user.id)
                    }
                    console.log(remember.value)
                    navigate("index");
                }
            } else{
                emailInput.value = ""
                senhaInput.value = ""
                setEmail(null)
                setSenha(null)
                paragrafoIncorreto.style.display = "block";
            }
        });
    }

    
    
    return (
        <div className="login-form">
            <h1>Login</h1>
            <form onSubmit={logar}>
                <div className="input-box">
                    <input type="text" id="email" name="email" required placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                    <i className='bx bxs-user'></i>
                </div>
                <div className="input-box">
                    <input type="password" id="senha" name="senha" required placeholder="senha" onChange={(e) => setSenha(e.target.value)}/>
                    <i className='bx bxs-lock-alt'></i>
                </div>
                <div className="remember-forgot">
                    <label><input id="remember" type="checkbox" />Remember me</label>
                    <Link to="forgot">Forgot password?</Link>
                </div>
                <div className="login-incorreto">
                    <p id="paragrafo-incorreto">As credênciais não correspondem.</p>
                </div>

                <button type="submit" className="btnLogin">Login</button>
            
                <div className="cadastro-link">
                    <p>Não possui uma conta? <Link to="cadastro">Cadastro</Link></p>
                </div>
            </form>
        </div>
    );
}


export default LoginForm;
