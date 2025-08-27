export default function ProblemList({ items = [], compact=false }) {
  if (!items.length) return <div className="h-64 rounded-lg bg-neutral-50" />;
  return (
    <ul className="space-y-3">
      {items.map((p) => (
        <li key={p.id} className="flex items-center justify-between">
          <a href={`#/problems/${p.id}`} className="font-medium hover:underline">{p.title}</a>
          <span className="rounded-md bg-neutral-100 px-2 py-1 text-xs text-neutral-600">#{p.id}</span>
        </li>
      ))}
    </ul>
  );
}