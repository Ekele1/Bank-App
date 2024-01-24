import { useNavigate } from "react-router-dom"
import "./admin.css"

const Admin =()=>{
    const navigate = useNavigate()
    const allUser = JSON.parse(localStorage.getItem("allAcountUsers"))
    return(
        <div className="adminwrap">
            <div className="nav" onClick={()=> navigate("/home")}><h3>GO BACK HOME</h3></div>
            <div className="adminpage">
                <div className="adminbody">
                    <div className="adminbodytop">
                        <div className="adminfunction">
                            <h1>All Transactions</h1>
                            <h3>1.1k</h3>
                        </div>
                        <div className="adminfunction">
                            <h1>Pending</h1>
                            <h3>100</h3>
                        </div>
                        <div className="adminfunction">
                            <h1>Failed</h1>
                            <h3>50</h3>
                        </div>
                        <div className="adminfunction">
                            <h1>Sucessful</h1>
                            <h3>950</h3>
                        </div>
                    </div>
                    <div className="adminbodybottom">
                        <div className="headers">
                            <h1>ACCOUNT NAME</h1>
                            <h1>ACCOUNT NUMBER</h1>
                            <h1>AMMOUNT</h1>
                            <h1>TIME</h1>
                            <h1>STATUS</h1>
                        </div>
                        {
                            allUser?.map((e)=>(
                                <div className="details">
                            <div className="ekele">{e.lastName} {e.firstName}</div>
                            <div className="ekele">{e.accountNumber}</div>
                            <div className="ekele">{e.wallet}</div>
                            <div className="ekele">8:40pm 15/01/2024</div>
                            <div className="ekele">Sucessful</div>
                        </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin