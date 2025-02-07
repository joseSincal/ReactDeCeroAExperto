const { render, screen } = require("@testing-library/react");
const { TodoApp } = require("../../src/08-useReducer/TodoApp");
const { useTodos } = require("../../src/08-useReducer/hooks/useTodos");

jest.mock("../../src/08-useReducer/hooks/useTodos");

describe("Pruebas en <TodoApp />", () => {
    useTodos.mockReturnValue({
        todos: [
            {
                id: 1,
                description: "Todo #1",
                done: false,
            },
            {
                id: 2,
                description: "Todo #2",
                done: true,
            },
        ],
        todosCount: 2,
        pendingTodosCount: 1,
        handleNewTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
    });

    test("debe de mostrar el componente correctamente", () => {
        render(<TodoApp />);

        expect(screen.getByText("Todo #1")).toBeTruthy();
        expect(screen.getByText("Todo #2")).toBeTruthy();
        expect(screen.getByRole("textbox")).toBeTruthy();
    });
});
