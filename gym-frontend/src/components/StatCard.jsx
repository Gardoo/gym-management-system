export default function StatCard({ title, value, growth }) {
    return (
        <div className="stat-card">

            <div className="stat-top">
        <span className="stat-badge">
          {growth}
        </span>
            </div>

            <div className="stat-val">
                {value}
            </div>

            <div className="stat-lbl">
                {title}
            </div>

        </div>
    );
}