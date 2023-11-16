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
                    <a href="#">Forgot password?</a>
                </div>

                <button type="submit" className="btnLogin">Login</button>
            
                <div className="cadastro-link">
                    <p>Não possui uma conta? <a href="#">Cadastro</a></p>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;