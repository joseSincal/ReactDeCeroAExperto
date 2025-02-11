import { render, screen } from "@testing-library/react";
import { PrivateRoute } from "../../src/router/PrivateRoute";
import { AuthContext } from "../../src/auth";
import { MemoryRouter } from "react-router";

describe("Prueba en el <PrivateRoute />", () => {
    test("Debe de mostrar el children si esta autenticado", () => {
        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                id: "1234ds",
                name: "#jefecin",
            },
        };
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={["/search?q=batman"]}>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText("Ruta privada")).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith(
            "lastPath",
            "/search?q=batman"
        );
    });
});
