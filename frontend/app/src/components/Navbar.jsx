import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav className="w-full bg-[#161F52] text-white p-4 flex justify-between items-center fixed top-0 left-0 z-50">
      <div className="text-3xl font-bold tracking-wide">
        <span>L</span>
        <span className="text-[#F7941D]">o</span>
        <span>go</span>
      </div>

      <div className="flex items-center space-x-4">
        <span className="flex items-center space-x-1">
          <i className="fa fa-phone" />
          <span>06 78 95 24 21</span>
        </span>
        <Link to="/specialiste">
          <button
            id="A"
            className="bg-white text-[#0C1E5B] px-3 py-1 rounded hover:bg-gray-100"
          >
            Devenez spécialiste
          </button>
        </Link>

        {/* ici */}
        {isLoggedIn ? (
          <button
            onClick={logout}
            className="fa fa-sign-out cursor-pointer hover:text-[#F7941D]"
            title="Déconnexion"
          />
        ) : (
          <Link to="/inscription">
            <i className="fa fa-user cursor-pointer" />
          </Link>
        )}
      </div>
    </nav>
  );
}
