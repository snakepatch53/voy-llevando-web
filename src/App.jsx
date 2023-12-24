import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Login from "./views/Login";
// import AnimatedRoutes from "./components/AnimatedRoutes";

import { AnimatePresence } from "framer-motion";
import Paquetes from "./views/Paquetes";
import Users from "./views/Users";
import Alertas from "./views/Alertas";
import AnimateElement from "./components/AnimateElement";

function App() {
    const logued = true;
    if (!logued) return <Login />;

    return (
        <AnimateElement>
            <Router>
                <div className="panel">
                    <Sidebar />
                    <Header />
                    <AnimatePresence>
                        <Routes>
                            <Route path="/" element={<Paquetes />} />
                            <Route path="/paquetes" element={<Paquetes />} />
                            <Route path="/users" element={<Users />} />
                            <Route path="/alertas" element={<Alertas />} />
                        </Routes>
                    </AnimatePresence>
                </div>
            </Router>
        </AnimateElement>
    );
}

export default App;
