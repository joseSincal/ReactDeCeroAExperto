const { render, screen } = require("@testing-library/react");
const { PublicRoute } = require("../../src/router/PublicRoute");
const { AuthContext } = require("../../src/auth");
const { MemoryRouter } = require("react-router");
const { Routes } = require("react-router");
const { Route } = require("react-router");

describe("Pruebas en <PublicRoute />", () => {
    test("Debe de mostrar el children sino esta autenticado", () => {
        const contextValue = {
            logged: false,
        };
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByText("Ruta publica")).toBeTruthy();
    });

    test("Debe de navegar si esta autenticado", () => {
        const contextValue = {
            logged: true,
            user: {
                name: "Strider",
                id: "ABC123",
            },
        };
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={["/login"]}>
                    <Routes>
                        <Route
                            path="login"
                            element={
                                <PublicRoute>
                                    <h1>Ruta publica</h1>
                                </PublicRoute>
                            }
                        />
                        <Route path="/*" element={<h1>Pagina Marvel</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        screen.debug();

        expect(screen.getByText("Pagina Marvel")).toBeTruthy();
    });
});
