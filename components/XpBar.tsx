export default function XpBar({ into, need }: { into: number; need: number }) {
  const pct = Math.min(100, (into / need) * 100);
  return (
    <div className="w-full h-2.5 rounded-full bg-trackBg overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-500 ease-out"
        style={{ width: `${pct}%`, background: "linear-gradient(90deg,#E8A93A,#E8604C)" }}
      />
    </div>
  );
}