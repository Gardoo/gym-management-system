import { FiBell, FiMessageCircle, FiSearch } from "react-icons/fi";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbar-left">
                <h1>Dashboard</h1>
                <p>Saturday, May 23, 2026 · All metrics are live</p>
            </div>

            <div className="topbar-right">
                <div className="search">
                    <FiSearch />
                    <input type="text" placeholder="Search members, plans…" />
                </div>

                <div className="icon-btn">
                    <FiBell />
                    <span className="badge">3</span>
                </div>

                <div className="icon-btn">
                    <FiMessageCircle />
                </div>

                <div className="topbar-avatar">EC</div>
            </div>
        </div>
    );
}