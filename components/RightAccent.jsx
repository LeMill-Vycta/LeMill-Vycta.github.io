const RightAccent = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[52vw] max-w-[680px] select-none overflow-hidden"
    >
      <div className="absolute -right-20 top-[12%] h-64 w-64 rounded-full bg-accent/20 blur-[100px] md:h-80 md:w-80" />
      <div className="absolute right-[10%] top-[45%] h-56 w-56 rounded-full bg-cyan-400/15 blur-[95px] md:h-72 md:w-72" />
    </div>
  );
};

export default RightAccent;
