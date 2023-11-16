import { Link } from "react-router-dom";

function LoginForm(){
    return (
        <div className="login-form">
            <h1>Login</h1>
            <form>
                <div className="input-box">
                    <input type="text" placeholder="email"/>
                    <i className='bx bxs-user'></i>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="senha"/>
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
