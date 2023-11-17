function BarraMaterias(){
    function addMateria(){
        const div1 = document.getElementById("div1");

        const divChild = document.createElement("div");

        const conteudo = document.createTextNode("Materia");

        divChild.appendChild(conteudo)

        div1.appendChild(divChild)
    }

    return(
        <div className="containerMaterias" id="div1">
            
            <button onClick={addMateria} className="btnAdd">+</button>
        </div>
    )
}

export default BarraMaterias;