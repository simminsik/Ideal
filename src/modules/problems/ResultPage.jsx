import AppLayout from "../../app/AppLayout.jsx";
import Button from "../../components/ui/Button.jsx";

export default function ResultPage() {
  return (
    <AppLayout showMenu={false}>
      <div className="rounded-2xl border bg-white p-6">
        <div className="mb-6 text-center text-xl font-bold">현재 등급, 점수 바, 채점 횟수, 소요 시간</div>
        <div className="grid place-items-center">
          <div className="h-40 w-full max-w-2xl rounded-lg bg-neutral-50" />
        </div>
        <div className="mt-6 flex justify-center">
          <a href="/problems/auth"><Button>다른 문제 풀기</Button></a>
        </div>
      </div>
    </AppLayout>
  );
}