/* eslint-disable react/prop-types */
import style from "../styles/BarraMateria.module.css"

function BarraMaterias({ materias }){

    return(
        <div className={style.containerMaterias} id="div1">
            {
                materias.map((materia) => (
                    <div key={materia.id}>{materia.name}</div>
                ))
            }
        </div>
    )
}

export default BarraMaterias;