export default function NewsList({ items = [] }) {
  if (!items.length) return <div className="h-64 rounded-lg bg-neutral-50" />;
  return (
    <ul className="space-y-3">
      {items.map((n, i) => (
        <li key={i} className="group">
          <a href="#" className="flex items-center justify-between">
            <span className="truncate group-hover:underline">{n.title}</span>
            <time className="shrink-0 text-xs text-neutral-500">{n.date}</time>
          </a>
        </li>
      ))}
    </ul>
  );
}