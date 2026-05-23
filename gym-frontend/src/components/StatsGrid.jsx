export default function StatsGrid() {
    return (
        <div className="stats-grid">
            <div className="stat-card">
                <div className="stat-val">320</div>
                <div className="stat-lbl">Active Members</div>
            </div>

            <div className="stat-card">
                <div className="stat-val">1,240</div>
                <div className="stat-lbl">Total Users</div>
            </div>

            <div className="stat-card">
                <div className="stat-val">$12,400</div>
                <div className="stat-lbl">Revenue</div>
            </div>

            <div className="stat-card">
                <div className="stat-val">540</div>
                <div className="stat-lbl">Subscriptions</div>
            </div>
        </div>
    );
}