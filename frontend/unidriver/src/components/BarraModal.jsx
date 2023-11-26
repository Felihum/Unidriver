import style from '../styles/BarraModal.module.css';
import fotoPerfil from '../images/perfil.jpeg'

// eslint-disable-next-line react/prop-types
function BarraModal({ isOpen }){
    if(isOpen){
        return(
            <div className={style.bgBarraModal}>
                <div className={style.containerBarraModal}>
                    <div className={style.containerPerfil}>
                        <img src={fotoPerfil} className={style.fotoPerfil} />
                        <p>{localStorage.getItem("name")}</p>
                    </div>
                    <div>
                        <a href="#">Configuração</a>
                    </div>
                    <div>
                        <a href="#">Configuração</a>
                    </div>
                    <div>
                        <a href="#">Configuração</a>
                    </div>
                    <div>
                        <a href="#">Configuração</a>
                    </div>
                </div>
            </div>
        )
    } else{
        <></>
    }
    
}

export default BarraModal;