// src/components/collab/CollabEditor.jsx
// 지금은 textarea 기반. 이후 Monaco/CodeMirror로 교체 가능.
export default function CollabEditor({ value, onChange, language = "plaintext", full = true }) {
  return (
    <textarea
      className={`flex-1 ${full ? "min-h-[60vh]" : "min-h-[40vh]"} w-full resize-none rounded-lg border p-3 font-mono text-sm leading-relaxed outline-none focus:border-neutral-900`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      spellCheck="false"
      aria-label={`코드 에디터 (${language})`}
    />
  );
}
