// src/modules/auth/LoginPage.jsx
import { useState } from "react";
import AppLayout from "../../app/AppLayout.jsx";
import Input from "../../components/ui/Input.jsx";
import Button from "../../components/ui/Button.jsx";

export default function LoginPage() {
  const [mode, setMode] = useState("login"); // "login" | "signup"

  return (
    <AppLayout showMenu={false}>
      <div className="mx-auto mt-6 w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        {/* 탭 */}
        <div className="mb-6 grid grid-cols-2 rounded-lg border border-neutral-200 p-1">
          <button
            className={`rounded-md py-2 text-sm font-semibold transition ${mode === "login" ? "bg-neutral-900 text-white" : "text-neutral-700 hover:bg-neutral-50"}`}
            onClick={() => setMode("login")}
          >
            로그인
          </button>
          <button
            className={`rounded-md py-2 text-sm font-semibold transition ${mode === "signup" ? "bg-neutral-900 text-white" : "text-neutral-700 hover:bg-neutral-50"}`}
            onClick={() => setMode("signup")}
          >
            회원가입
          </button>
        </div>

        {mode === "login" ? <LoginForm /> : <SignupForm />}
      </div>
    </AppLayout>
  );
}

function LoginForm() {
  async function onSubmit(e) {
    e.preventDefault();
    alert("로그인 (데모)");
  }
  return (
    <>
      <h1 className="mb-4 text-center text-xl font-bold">로그인</h1>
      <form className="space-y-3" onSubmit={onSubmit}>
        <Input type="email" placeholder="이메일" required />
        <Input type="password" placeholder="비밀번호" required />
        <Button variant="solid" className="w-full" type="submit">로그인</Button>
      </form>
      <div className="mt-4 text-center text-sm text-neutral-600">
        아직 계정이 없나요? <a className="text-neutral-900 underline" href="#" onClick={(e)=>{e.preventDefault();}}>회원가입 탭을 눌러주세요</a>
      </div>
    </>
  );
}

function SignupForm() {
  async function onSubmit(e) {
    e.preventDefault();
    alert("회원가입 (데모)");
  }
  return (
    <>
      <h1 className="mb-4 text-center text-xl font-bold">회원가입</h1>
      <form className="space-y-3" onSubmit={onSubmit}>
        <Input type="text" placeholder="이름" required />
        <Input type="email" placeholder="이메일" required />
        <Input type="password" placeholder="비밀번호" required />
        <Button variant="solid" className="w-full" type="submit">회원가입</Button>
      </form>
      <div className="mt-4 text-center text-sm text-neutral-600">
        이미 계정이 있나요? <a className="text-neutral-900 underline" href="#" onClick={(e)=>{e.preventDefault();}}>로그인 탭을 눌러주세요</a>
      </div>
    </>
  );
}
