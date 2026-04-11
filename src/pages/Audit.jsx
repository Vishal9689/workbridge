import AdminNavbar from "../components/AdminNavbar";

function Audit() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">

      <AdminNavbar />

      <div className="p-6">

        <h1 className="text-xl text-yellow-400">
          Auditing Section 📊
        </h1>

        <p className="mt-3 text-slate-400">
          Track payments, tasks & system logs here.
        </p>

      </div>
    </div>
  );
}

export default Audit;