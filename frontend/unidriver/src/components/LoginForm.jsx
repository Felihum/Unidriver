import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useState } from "react";

function LoginForm(){
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const navigate = useNavigate();

    function logar(e){
        e.preventDefault()

        if(email != "" && senha != ""){
            console.log(email)
            navigate("index");
        } else{
            console.log("Falha no login!");
            console.log(email)
            console.log(senha)
        }
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
                    <label><input type="checkbox"/>Remember me</label>
                    <Link to="forgot">Forgot password?</Link>
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
