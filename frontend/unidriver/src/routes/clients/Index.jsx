import BarraMaterias from "../../components/BarraMaterias";
import NavBar from "../../components/NavBar";
import Modal from "../../components/Modal";
import BarraModal from "../../components/BarraModal"
import '../../styles/Index.css'
import { useState } from "react";

function Index(){

    let [openModal, setOpenModal] = useState(false);
    let [openBarra, setOpenBarra] = useState(false);

    return(
        <body className="indexBody">
            <div className="wrapper">
                <button style={!openBarra ? {color: "#ffffff"} : {color: "black"}} onClick={() => setOpenBarra(!openBarra)} className="btnConfig" id="btn"><i className='bx bx-menu'></i></button>
                <BarraModal isOpen={openBarra} setOpen={setOpenBarra}/>
                <Modal isOpen={openModal} setOpen={setOpenModal}/>
                <NavBar />
                <div className="containerBtnAdd">
                    <button onClick={() => setOpenModal(!openModal)}>+</button>
                </div>
                <BarraMaterias />
                
            </div>
        </body>
        
    )
}

export default Index;