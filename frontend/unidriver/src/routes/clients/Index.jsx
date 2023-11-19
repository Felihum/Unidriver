import BarraMaterias from "../../components/BarraMaterias";
import NavBar from "../../components/NavBar";
import Modal from "../../components/Modal";
import '../../styles/Index.css'
import { useState } from "react";


function Index(){

    let [open, setOpen] = useState(false);

    return(
        <body className="indexBody">
            <div className="wrapper">
                <Modal isOpen={open} setOpen={setOpen}/>
                <NavBar />
                <div className="containerBtnAdd">
                    <button onClick={() => setOpen(true)}>+</button>
                </div>
                <BarraMaterias />
                
            </div>
        </body>
        
    )
}

export default Index;