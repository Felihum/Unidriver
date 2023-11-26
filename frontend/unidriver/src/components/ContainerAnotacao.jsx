import style from "../styles/ContainerAnotacao.module.css"

function ContainerAnotacao(){
    return(
        <div className={style.cntAnotacao}>
            <label>Anotações</label>
            <div className={style.arquivosAnotacao}>
                <div className={style.arquivo}>
                    <button>Arquivo</button>
                </div>
                <div className={style.arquivo}>
                    <button>Arquivo</button>
                </div>
                <div className={style.arquivo}>
                    <button>Arquivo</button>
                </div>
                <div className={style.arquivo}>
                    <button>Arquivo</button>
                </div>
                <div className={style.arquivo}>
                    <button>Arquivo</button>
                </div>
            </div>
        </div>
    )
}

export default ContainerAnotacao;