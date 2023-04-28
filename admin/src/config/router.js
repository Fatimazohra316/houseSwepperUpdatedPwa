import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation, NavLink } from "react-router-dom";

import Chat from "../screen/chat";
import Historyy from "../screen/history";
import Home from "../screen/home";
import Services from "../screen/service";
import homeimage from "../images/home.png";
import serviceimage from "../images/hand.png";
import chatimage from "../images/chat.png";
import historyimage from "../images/history.png";
import houseSweep from '../images/housesweep.png'
import InnerService from "../screen/innerService";
import ChatInner from "../screen/innerChat";




function AppRouter() {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    return (
        <div className="routerPage">
          <div className="routerPageFirstDiv">
          <div className="navbars">
                <div>
                    <img className="houseSweep" src={houseSweep}/>
                </div>
                <ul className="routerList">
                    <li>
                        <NavLink className={splitLocation[1] === "" ? "active" : "service"} to="/"><img src={homeimage}/><span>Home</span></NavLink>

                    </li>
                    <li>
                        <NavLink  className={splitLocation[1] === "services" ? "active" : "service"}  to="services"><img src={serviceimage}/><span>Service</span></NavLink>

                    </li>
                    <li>
                        <NavLink className={splitLocation[1] === "history" ? "active" : "service"}  to="history"><img src={chatimage}/><span>History</span></NavLink>

                    </li>
                    <li>
                        <NavLink className={splitLocation[1] === "chat" ? "active" : "service"} to="chat"><img src={historyimage}/><span>Chat Support</span></NavLink>

                    </li>
                  
                </ul>
              <button className="actives">Log Out</button>
            </div>
            
            <Routes className="page-routes">
               
                <Route path="/" element={<Home />} />
                <Route path="services" element={<Services />} />
                <Route path="chat" element={<Chat />} />
                <Route path="history" element={<Historyy />} />
                <Route path="innerservice" element={<InnerService />} />
                <Route path="innerchat" element={<ChatInner/>}/>
                

            </Routes>
        </div>
      
          </div>
    )
}


export default AppRouter;