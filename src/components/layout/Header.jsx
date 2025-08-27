export default function Header({ right = null }) {
  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white/85 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <div className="w-24" />
        <a href="/" className="rounded-xl bg-neutral-100 px-6 py-3 text-xl font-extrabold">LiveCoder</a>
        <div className="flex min-w-[6rem] items-center justify-end gap-2">{right}</div>
      </div>
    </header>
  );
}