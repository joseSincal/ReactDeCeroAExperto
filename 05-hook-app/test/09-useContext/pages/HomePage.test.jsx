const { render, screen } = require("@testing-library/react");
const { HomePage } = require("../../../src/09-useContext/pages/HomePage");
const {
    UserContext,
} = require("../../../src/09-useContext/context/UserContext");

describe("Pruebas en <HomePage />", () => {
    const user = {
        id: 1,
        name: "Jose",
    };

    test("debe de mostrar el componente sin el usuario", () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText("pre"); //aria-label="pre"
        expect(preTag.innerHTML).toBe("null");
        // screen.debug();
    });

    test("debe de mostrar el componente CON el usuario", () => {
        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText("pre");
        expect(JSON.parse(preTag.innerHTML)).toEqual(user);
    });
});
