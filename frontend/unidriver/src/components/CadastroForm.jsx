import { Link } from "react-router-dom";

function CadastroForm(){
    return (
        <div className="login-form">
            <h1>Cadastro</h1>
            <form>
                <div className="input-box">
                    <input type="text" placeholder="email"/>
                    <i className='bx bxs-user'></i>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="senha"/>
                    <i className='bx bxs-lock-alt'></i>
                </div>

                <button type="submit" className="btnLogin">Cadastrar</button>
            
                <div className="cadastro-link">
                    <p>Já possui uma conta? <Link to="/">Login</Link></p>
                </div>
            </form>
        </div>
    );
}

export default CadastroForm;
