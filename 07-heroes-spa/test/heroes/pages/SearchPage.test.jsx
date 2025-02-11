import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { SearchPage } from "../../../src/heroes";

const mockedUseNavigate = jest.fn();

jest.mock("react-router", () => ({
    ...jest.requireActual("react-router"),
    useNavigate: () => mockedUseNavigate,
}));

describe("Pruebas en <SearchPage />", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("Debe de mostrarse correctamente con valores por defecto", () => {
        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );

        expect(container).toMatchSnapshot();
    });

    test("debe de mostrar Batman y el input con el valor del queryString", () => {
        render(
            <MemoryRouter initialEntries={["/search?q=batman"]}>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole("textbox");
        expect(input.value).toBe("batman");

        const img = screen.getByRole("img");
        expect(img.src).toContain("heroes/dc-batman.jpg");

        const alertDanger = screen.getByLabelText("alert-danger");
        expect(alertDanger.style.display).toBe("none");
    });

    test("Debe de mostrar un error sino se encuentra el hero (batman1223)", () => {
        render(
            <MemoryRouter initialEntries={["/search?q=batman1223"]}>
                <SearchPage />
            </MemoryRouter>
        );

        const alertDanger = screen.getByLabelText("alert-danger");
        expect(alertDanger.style.display).toBe("");
    });

    test("Debe de llamar el navigate a la pantalla nueva", () => {
        const inputValue = 'superman';
        render(
            <MemoryRouter initialEntries={["/search?q=batman"]}>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form", { name: "search-form" });

        fireEvent.change(input, {
            target: { name: "searchText", value: inputValue },
        });
        form.submit();

        expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`);
    });
});
