const { render, screen, fireEvent } = require("@testing-library/react");
const { LoginPage } = require("../../../src/09-useContext/pages/LoginPage");
const {
    UserContext,
} = require("../../../src/09-useContext/context/UserContext");

describe("Pruebas en <LoginPage />", () => {
    test("debe de mostrar el componente sin el usuario", () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText("pre"); //aria-label="pre"
        expect(preTag.innerHTML).toBe("null");
    });

    test("debe de llamar el setUser cuando se hace click en el botón", () => {
        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const button = screen.getByRole("button", {
            name: "Establecer Usuario",
        });
        fireEvent.click(button);

        expect(setUserMock).toHaveBeenCalledWith({
            id: 123,
            name: "José",
            email: "jose@company.com",
        });
    });
});
