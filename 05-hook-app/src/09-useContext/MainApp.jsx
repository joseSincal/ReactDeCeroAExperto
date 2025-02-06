import { Navigate, Route, Routes } from "react-router";
import { AboutPage, HomePage, LoginPage } from "./pages";
import { NavBar } from "./components/NavBar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
    return (
        <UserProvider>
            <NavBar />
            <hr />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="about" element={<AboutPage />} />
                {/* <Route path="/*" element={<LoginPage />} /> */}
                <Route path="/*" element={<Navigate to="/about" />} />
            </Routes>
        </UserProvider>
    );
};
