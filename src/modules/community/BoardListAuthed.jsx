import AppLayout from "../../app/AppLayout.jsx";

export default function BoardListAuthed() {
  return (
    <AppLayout right={<div className='flex items-center gap-2'><a href='/me' className='rounded-lg border px-3 py-2 text-sm'>마이페이지</a><a href='#' className='rounded-lg border px-3 py-2 text-sm'>로그아웃</a></div>}>
      <div className="rounded-2xl border bg-white p-4">
        <div className="h-80 rounded-lg bg-neutral-50" />
        <div className="mt-3 grid grid-cols-3 gap-2">
          <a className="rounded border px-3 py-2 text-center text-sm" href="#">내 글</a>
          <a className="rounded border px-3 py-2 text-center text-sm" href="#">글 작성</a>
          <a className="rounded border px-3 py-2 text-center text-sm" href="#">돌아가기</a>
        </div>
      </div>
    </AppLayout>
  );
}