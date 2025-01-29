import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { authedRouts, unAuthedRouts } from "./Routes/Routes";
import { useSelector } from "react-redux";

function App() {
    // MantineProvider expects a theme object, not createTheme
    const user = useSelector(state => state.user)
    return (
        <div className="App">
            <BrowserRouter>
                <div className="relative bg-mine-shaft-950">
                    <Header />
                    <Routes>
                        {(user?authedRouts:unAuthedRouts).map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                element={route.component}
                            />
                        ))}
                    </Routes>
                    <Footer />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
