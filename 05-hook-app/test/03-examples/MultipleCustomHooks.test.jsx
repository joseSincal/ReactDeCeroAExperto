const { render, screen, fireEvent } = require("@testing-library/react");
const {
    MultipleCustomHooks,
} = require("../../src/03-examples/MultipleCustomHooks");
const { useFetch } = require("../../src/hooks/useFetch");
const { useCounter } = require("../../src/hooks/useCounter");

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("Pruebas en <MultipleCustomHooks />", () => {
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({ counter: 1, increment: mockIncrement });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("debe de mostrar el componente por defecto", () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
        });

        render(<MultipleCustomHooks />);

        expect(screen.getByText("Cargando"));
        expect(screen.getByText("Información de Pokémon"));

        const nextButton = screen.getByRole("button", { name: "Siguiente" });
        expect(nextButton.disabled).toBeFalsy();
    });

    test("debe de mostrar un Pokemon", () => {
        useFetch.mockReturnValue({
            data: {
                name: "pikachu",
                sprites: {
                    front_default: "https://pokeapi.co/api/v2/pokemon/25/default",
                    front_shiny: "https://pokeapi.co/api/v2/pokemon/25/shiny",
                },
            },
            isLoading: false,
            hasError: null,
        });
        render(<MultipleCustomHooks />);

        expect(screen.getByText("#1 - pikachu")).toBeTruthy();
    });

    test("debe de llamar la funcion de incrementar", () => {
        useFetch.mockReturnValue({
            data: {
                name: "pikachu",
                sprites: {
                    front_default: "https://pokeapi.co/api/v2/pokemon/25/default",
                    front_shiny: "https://pokeapi.co/api/v2/pokemon/25/shiny",
                },
            },
            isLoading: false,
            hasError: null,
        });

        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole("button", { name: "Siguiente" });
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();
    });
});
