// src/modules/collab/CollabPage.jsx
import { useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import AppLayout from "../../app/AppLayout.jsx";
import Button from "../../components/ui/Button.jsx";
import Input from "../../components/ui/Input.jsx";
// 올바른 경로 (모두 modules 폴더 안에 있음)
import FileTree from "./FileTree.jsx";
import UserAvatars from "./UserAvatars.jsx";
import ChatPanel from "./ChatPanel.jsx";
import CollabEditor from "./CollabEditor.jsx";

export default function CollabPage() {
  const { roomId: rid } = useParams();
  const roomId = rid || "demo";

  // 데모 파일들
  const [files, setFiles] = useState([
    { id: "main.js", name: "main.js", lang: "javascript", content: `// main.js
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("CodingLive"));
` },
    { id: "utils.js", name: "utils.js", lang: "javascript", content: `// utils.js
export const sum = (a, b) => a + b;` },
    { id: "style.css", name: "style.css", lang: "css", content: `/* style.css */
body { font-family: system-ui; }` },
  ]);

  const [activeId, setActiveId] = useState(files[0].id);
  const activeFile = useMemo(() => files.find(f => f.id === activeId), [files, activeId]);

  const [users] = useState([
    { id: "u1", name: "민식", color: "#111" },
    { id: "u2", name: "게스트", color: "#6b7280" },
  ]);

  const [chatLogs, setChatLogs] = useState([
    { id: 1, user: "민식", text: "방 생성 완료!" },
    { id: 2, user: "게스트", text: "코드 같이 보죠 :)" },
  ]);

  const [full, setFull] = useState(true); // 에디터 확대 토글

  function updateActiveFileContent(next) {
    setFiles(prev =>
      prev.map(f => (f.id === activeId ? { ...f, content: next } : f))
    );
  }

  function renameActiveFile(name) {
    if (!name.trim()) return;
    setFiles(prev =>
      prev.map(f => (f.id === activeId ? { ...f, name, id: name } : f))
    );
    setActiveId(name);
  }

  function createFile(name = "newFile.js") {
    if (files.some(f => f.id === name)) return;
    setFiles(prev => [...prev, { id: name, name, lang: guessLang(name), content: "" }]);
    setActiveId(name);
  }

  function deleteActiveFile() {
    if (files.length <= 1) return;
    const idx = files.findIndex(f => f.id === activeId);
    const next = files.filter(f => f.id !== activeId);
    setFiles(next);
    setActiveId(next[Math.max(0, idx - 1)].id);
  }

  return (
    <AppLayout showMenu={false}>
      {/* 상단 바 */}
      <div className="mb-2 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <a href="/" className="rounded bg-neutral-200 px-3 py-2 font-bold">로고</a>
          <div className="rounded border px-3 py-2 text-sm bg-white">
            Room: <span className="font-semibold">{roomId}</span>
          </div>
          <Input
            value={activeFile?.name ?? ""}
            onChange={(e) => renameActiveFile(e.target.value)}
            placeholder="파일명"
            style={{ width: 220 }}
          />
          <Button onClick={() => createFile()}>파일 추가</Button>
          <Button onClick={deleteActiveFile}>파일 삭제</Button>
        </div>
        <div className="flex items-center gap-2">
          <UserAvatars users={users} />
          <Button onClick={() => setFull(v => !v)}>{full ? "축소" : "확대"}</Button>
          <Button variant="solid">공유</Button>
        </div>
      </div>

      {/* 본문: 파일 트리 + 에디터 */}
      <div className="grid gap-4 md:grid-cols-[220px,1fr]">
        <aside className="rounded-2xl border bg-white p-3">
          <div className="mb-2 text-sm font-semibold">파일</div>
          <FileTree
            files={files}
            activeId={activeId}
            onOpen={setActiveId}
            onCreate={(n) => createFile(n)}
          />
        </aside>

        <section className={`rounded-2xl border bg-white p-3 flex flex-col ${full ? "min-h-[76vh]" : "min-h-[55vh]"}`}>
          <div className="mb-2 flex items-center justify-between text-sm text-neutral-500">
            <span>{activeFile?.name}</span>
            <span className="hidden sm:block">
              언어: {activeFile?.lang.toUpperCase()}
            </span>
          </div>

          <CollabEditor
            value={activeFile?.content ?? ""}
            language={activeFile?.lang ?? "plaintext"}
            onChange={updateActiveFileContent}
            full={full}
          />

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <Button onClick={() => formatContent(files, activeId, setFiles)}>포맷</Button>
            <Button>저장</Button>
            <Button variant="solid">실행</Button>
          </div>
        </section>
      </div>

      {/* 채팅 + 활동 */}
      <div className="mt-4 grid gap-3 md:grid-cols-[1fr,320px]">
        <ChatPanel logs={chatLogs} onSend={(msg) => setChatLogs(p => [...p, { id: Date.now(), user: "나", text: msg }])} />
        <aside className="rounded-2xl border bg-white p-3">
          <div className="mb-2 text-sm font-semibold">활동</div>
          <ul className="text-sm list-disc pl-5 space-y-1">
            <li>참가자: {users.map(u => u.name).join(", ")}</li>
            <li>파일: {files.length}개</li>
            <li>메시지: {chatLogs.length}개</li>
          </ul>
        </aside>
      </div>
    </AppLayout>
  );
}

function guessLang(name) {
  if (name.endsWith(".js") || name.endsWith(".ts")) return "javascript";
  if (name.endsWith(".css")) return "css";
  if (name.endsWith(".json")) return "json";
  if (name.endsWith(".html")) return "html";
  return "plaintext";
}

function formatContent(files, activeId, setFiles) {
  // 데모용 포맷: 앞뒤 공백 정리
  setFiles(prev =>
    prev.map(f => (f.id === activeId ? { ...f, content: f.content.trim() + "\n" } : f))
  );
}
