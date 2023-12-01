import BarraMaterias from "../../components/BarraMaterias";
import Modal from "../../components/Modal";
import BarraModal from "../../components/BarraModal"
import '../../styles/Index.css'
import axios from "axios"
import { useState, useEffect } from "react";
import ContainerAnotacao from "../../components/ContainerAnotacao";
import Pastas from "../../components/Pastas";

function Index(){
    let [openModal, setOpenModal] = useState(false);
    let [openBarra, setOpenBarra] = useState(false);

    let[materias, setMaterias] = useState([]);

    let lista = []

    const getMaterias = async () => {
        try{
            const response = await axios.get("http://localhost:5000/subjects");

            const data = response.data;

            data.forEach(materia => {
                if(materia.idUser == localStorage.getItem("id")){
                    lista.push(materia)
                }
            })
            setMaterias(lista)
        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getMaterias()
    }, [])

    return(
        <div className="indexBody">
            <div className="wrapper">    
                <BarraModal isOpen={openBarra} setOpen={setOpenBarra}/>
                
                <div className="containerGeral">
                    <Modal isOpen={openModal} setOpen={setOpenModal}/>
                    
                    <div className="containerAuxConteudo">
                        
                        <div className="barraLateral">
                            
                            <div className="cntModalConfig">
                                <button style={!openBarra ? {color: "#ffffff"} : {color: "white"}} onClick={() => setOpenBarra(!openBarra)} className="btnConfig" id="btn"><i className='bx bx-menu'></i></button>
                            </div>
                            
                            <BarraMaterias materias={materias} />
                            
                            <div className="containerBtnAdd">
                                <button onClick={() => { setOpenModal(true) }}>+</button>
                            </div>
                        
                        </div>

                        <div className="conteudo">
                            <ContainerAnotacao />
                            <Pastas />
                        </div>

                    </div>
                
                </div>
            
            </div>
        
        </div>
        
    )
}

export default Index;