import Header from "../components/layout/Header.jsx";
import MenuBar from "../components/layout/MenuBar.jsx";

export default function AppLayout({ right, children, showMenu=true }) {
  return (
    <div>
      <Header right={right} />
      {showMenu && <MenuBar />}
      <main className="container py-8">{children}</main>
    </div>
  );
}