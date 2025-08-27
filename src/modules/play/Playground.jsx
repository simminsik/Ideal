import AppLayout from "../../app/AppLayout.jsx";

export default function Playground() {
  return (
    <AppLayout showMenu={false}>
      <div className="grid gap-4 md:grid-cols-[200px,1fr]">
        <aside className="rounded-2xl border bg-white p-4">메뉴</aside>
        <div className="space-y-4">
          <div className="rounded-2xl border bg-white p-4 h-72">코드 작성</div>
          <div className="rounded-2xl border bg-white p-4 h-16">컴파일러</div>
        </div>
      </div>
    </AppLayout>
  );
}