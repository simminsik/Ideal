// src/components/collab/FileTree.jsx
import { useState } from "react";
import Input from "../../components/ui/Input.jsx";
import Button from "../../components/ui/Button.jsx";

export default function FileTree({ files, activeId, onOpen, onCreate }) {
  const [newName, setNewName] = useState("");

  return (
    <div className="text-sm">
      <ul className="space-y-1 mb-3">
        {files.map((f) => (
          <li key={f.id}>
            <button
              className={`w-full text-left rounded px-2 py-1 hover:bg-neutral-50 ${activeId === f.id ? "bg-neutral-100 font-semibold" : ""}`}
              onClick={() => onOpen(f.id)}
              title={f.name}
            >
              {iconFor(f.name)} {f.name}
            </button>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2">
        <Input
          placeholder="파일명 (예: new.js)"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <Button onClick={() => { if (!newName.trim()) return; onCreate(newName.trim()); setNewName(""); }}>
          추가
        </Button>
      </div>
    </div>
  );
}

function iconFor(name) {
  if (name.endsWith(".js") || name.endsWith(".ts")) return "📄";
  if (name.endsWith(".css")) return "🎨";
  if (name.endsWith(".json")) return "🧾";
  if (name.endsWith(".html")) return "🌐";
  return "📄";
}
