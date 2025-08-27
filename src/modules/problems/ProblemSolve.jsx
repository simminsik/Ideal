import AppLayout from "../../app/AppLayout.jsx";
import Button from "../../components/ui/Button.jsx";

export default function ProblemSolve() {
  return (
    <AppLayout showMenu={false}>
      <button onClick={() => history.back()} className="mb-4 rounded border px-3 py-1 text-sm">← 돌아가기</button>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-1 rounded-2xl border bg-white p-4">
          <div className="h-[420px] rounded-lg bg-neutral-50" />
          <div className="mt-3 h-12 rounded-lg bg-neutral-100 grid place-items-center">문제 채점</div>
        </div>
        <div className="md:col-span-2 rounded-2xl border bg-white p-4">
          <div className="h-[360px] rounded-lg bg-neutral-50" />
          <div className="mt-3 flex justify-end gap-2">
            <Button>디버깅</Button>
            <Button variant="solid">제출</Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}