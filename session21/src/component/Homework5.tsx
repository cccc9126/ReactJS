export default function Homework5() {
  return (
    <div className="relative w-[300px] h-[200px] bg-sky-200 flex items-center justify-center">
      <span className="text-sky-900 font-semibold">Relative parent</span>
      <div className="absolute bottom-2 left-2 bg-sky-500 text-white px-3 py-1 rounded-md">
        Absolute child
      </div>
    </div>
  );
}
