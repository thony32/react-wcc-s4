import Pizza from "./Pizza";

export default function Base() {
    return (
        <div>
            Base
            <div className="grid grid-cols-2">
                <div>

                </div>
                <div>
                    <Pizza />
                </div>
            </div>
        </div>
    )
}
