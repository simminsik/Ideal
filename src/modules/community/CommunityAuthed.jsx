import AppLayout from "../../app/AppLayout.jsx";
import Card from "../../components/ui/Card.jsx";

export default function CommunityAuthed() {
  return (
    <AppLayout right={<div className='flex items-center gap-2'><a href='/me' className='rounded-lg border px-3 py-2 text-sm'>마이페이지</a><a href='#' className='rounded-lg border px-3 py-2 text-sm'>로그아웃</a></div>}>
      <div className='grid gap-6 md:grid-cols-3'>
        <Card title="공지"><div className="h-48 rounded-lg bg-neutral-50" /></Card>
        <Card title="질문 게시판"><div className="h-48 rounded-lg bg-neutral-50" /></Card>
        <Card title="정보 공유 게시판"><div className="h-48 rounded-lg bg-neutral-50" /></Card>
      </div>
    </AppLayout>
  );
}