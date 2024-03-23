import { useSignal } from "@preact/signals-react";
function Counter() {
    const count = useSignal(0);
    return (
        <div className="flex items-center gap-2">
            <button
                className="bg-red-600 px-5 py-1 rounded-md"
                onClick={() => {
                    count.value = count.value + 1;
                }}
                type="button"
                aria-label="button to incresease"
            >
                +
            </button>
            <span>{count}</span>
            <button
                className="bg-red-600 px-5 py-1 rounded-md"
                onClick={() => {
                    count.value = count.value - 1;
                }}
                type="button"
                aria-label="button to decrease"
            >
                -
            </button>
        </div>
    );
}

export default Counter;
