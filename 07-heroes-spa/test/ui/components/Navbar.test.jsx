import { render, screen, fireEvent } from "@testing-library/react";
import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/ui";
import { MemoryRouter } from "react-router";

const mockedUseNavigate = jest.fn();

jest.mock("react-router", () => ({
    ...jest.requireActual("react-router"),
    useNavigate: () => mockedUseNavigate,
}));

describe("Pruebas en <Navbar />", () => {
    const contextValue = {
        logged: true,
        user: {
            name: "Juan",
            id: "123d",
        },
        logout: jest.fn(),
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("Debe mostrar el nombre del usuario", () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText("Juan")).toBeTruthy();
    });

    test("Debe de llamar el logout y navigate cuando se hace click en el botón", () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutBtn = screen.getByRole("button", { name: "Logout" });
        fireEvent.click(logoutBtn);

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {
            replace: true,
        });
    });
});
