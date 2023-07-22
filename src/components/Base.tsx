import Pizza from "./Pizza";
import Chef from "./Chef";

export default function Base() {
  return (
    <div>
      <div className="flex p-16 justify-between">
        <Chef />
        <Pizza />
      </div>
    </div>
  );
}
