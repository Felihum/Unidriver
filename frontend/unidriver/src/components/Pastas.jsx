import style from "../styles/Pastas.module.css"

function Pastas(){
    return(
        <div className={style.containerGeral}>
            <label>Pastas</label>
            <div className={style.pastasContainer}>
                <div className={style.pasta}>
                    <button>Pasta</button>
                </div>
                <div className={style.pasta}>
                    <button>Pasta</button>
                </div>
                <div className={style.pasta}>
                    <button>Pasta</button>
                </div>
                <div className={style.pasta}>
                    <button>Pasta</button>
                </div>
                <div className={style.pasta}>
                    <button>Pasta</button>
                </div>
            </div>
        </div>
    )
}

export default Pastas;