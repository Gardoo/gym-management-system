export default function Header() {
    return (
        <div className="topbar">
            <div className="topbar-left">
                <h1>Dashboard</h1>
                <p>Saturday, May 23, 2026 · All metrics are live</p>
            </div>

            <div className="topbar-right">

                <div className="search">
                    <input type="text" placeholder="Search members..." />
                </div>

                <div className="topbar-avatar">
                    EC
                </div>

            </div>
        </div>
    );
}