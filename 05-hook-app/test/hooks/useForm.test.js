import { renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";
import { act } from "@testing-library/react";

describe("Pruebas en useForm", () => {
    const initialForm = {
        name: "Jose",
        email: "jose@company.com",
    };

    test("debe de regresar los valores por defecto", () => {
        const { result } = renderHook(() => useForm(initialForm));

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        });
    });

    test("debe de cambiar el valor del formulario (cambiar name)", () => {
        const newName = "Juan";
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;

        const event = {
            target: {
                name: "name",
                value: newName,
            },
        };

        act(() => {
            onInputChange(event);
        });

        expect(result.current.name).toBe(newName);
        expect(result.current.formState.name).toBe(newName);
    });

    test("debe de realizar el reset del formulario", () => {
        const newName = "Juan";
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;

        const event = {
            target: {
                name: "name",
                value: newName,
            },
        };

        act(() => {
            onInputChange(event);
            onResetForm();
        });

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);
    });
});
