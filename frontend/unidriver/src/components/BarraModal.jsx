import style from '../styles/BarraModal.module.css';

// eslint-disable-next-line react/prop-types
function BarraModal({ isOpen }){
    if(isOpen){
        return(
            <div className={style.bgBarraModal}>
                <div className={style.containerBarraModal}>
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