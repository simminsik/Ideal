// src/modules/collab/ChatPanel.jsx
import { useState } from "react";
import Button from "../../components/ui/Button.jsx";
import Input from "../../components/ui/Input.jsx";

export default function ChatPanel({ logs = [], onSend }) {
  const [text, setText] = useState("");

  function handleSend() {
    const trimmed = text.trim();
    if (!trimmed) return;
    onSend?.(trimmed);
    setText("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="flex h-full flex-col rounded-xl border border-neutral-200 bg-white">
      <div className="flex items-center justify-between border-b border-neutral-200 p-3">
        <h3 className="text-sm font-semibold">채팅</h3>
      </div>

      <div className="flex-1 space-y-2 overflow-auto p-3">
        {logs.length === 0 && (
          <div className="text-center text-sm text-neutral-500">메시지가 없습니다.</div>
        )}
        {logs.map((m) => (
          <div key={m.id} className="text-sm">
            <span className="font-semibold">{m.user}:</span>{" "}
            <span className="whitespace-pre-wrap">{m.text}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-2 border-t border-neutral-200 p-3">
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="메시지를 입력하세요…"
        />
        <Button variant="solid" onClick={handleSend}>
          전송
        </Button>
      </div>
    </div>
  );
}
