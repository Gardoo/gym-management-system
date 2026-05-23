import {
    FiGrid,
    FiUsers,
    FiCreditCard,
    FiBarChart2,
    FiSettings,
    FiCalendar,
} from "react-icons/fi";

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="logo">
                <div className="logo-icon">🏋️</div>

                <div>
                    <div className="logo-text">GymOS</div>
                    <div className="logo-sub">Admin Portal</div>
                </div>
            </div>

            <div className="nav-section">Main</div>

            <div className="nav-item active">
                <FiGrid />
                Dashboard
                <span className="nav-dot"></span>
            </div>

            <div className="nav-item">
                <FiUsers />
                Members
            </div>

            <div className="nav-item">
                <FiCreditCard />
                Subscriptions
            </div>

            <div className="nav-item">
                <FiBarChart2 />
                Revenue
            </div>

            <div className="nav-section" style={{ marginTop: "16px" }}>
                Tools
            </div>

            <div className="nav-item">
                <FiCalendar />
                Schedule
            </div>

            <div className="nav-item">
                <FiSettings />
                Settings
            </div>

            <div className="sidebar-footer">
                <div className="avatar-row">
                    <div className="avatar">EC</div>

                    <div>
                        <div className="avatar-name">Edgardo</div>
                        <div className="avatar-role">Super Admin</div>
                    </div>
                </div>
            </div>
        </aside>
    );
}