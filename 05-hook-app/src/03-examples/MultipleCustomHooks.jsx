import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
    useFetch();
    return <div>MultipleCustomHook</div>;
};
