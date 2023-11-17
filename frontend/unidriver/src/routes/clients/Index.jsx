import BarraMaterias from "../../components/BarraMaterias";
import '../../styles/Index.css'

function Index(){
    return(
        <body className="indexBody">
            <div className="wrapper">
                <nav className="header"></nav>
                <BarraMaterias />
            </div>
        </body>
        
    )
}

export default Index;