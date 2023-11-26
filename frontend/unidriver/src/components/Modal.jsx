import axios from 'axios';
import style from '../styles/Modal.module.css'
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function Modal({ isOpen, setOpen }){

    function postarMateria(nome){
        axios.post("http://localhost:5000/subjects", {
            id: 10,
            name: nome,
            idUser: localStorage.getItem("id")
        })
        setOpen(false)
    }

    const[nomeMateria, setNomeMateria] = useState();

    if(isOpen){
        return(
            <div className={style.bgModal}>
                <div className={style.containerModal}>
                    <button onClick={() => setOpen(!isOpen)} className={style.btnFechar}><i className='bx bx-x'></i></button>
                    <label>Criar nova matéria:</label>
                    <div className={style.inputDiv}>
                        <input type="text" placeholder='Digite o nome da matéria' onChange={(e) => setNomeMateria(e.target.value)}/>
                    </div>
                    <button className={style.btnAdd} onClick={() => postarMateria(nomeMateria)}>Criar</button>
                </div>
            </div>
        )
    } else{
        return <></>;
    }
}

export default Modal;