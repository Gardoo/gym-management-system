export default function InsightsPanel() {
    return (
        <div className="card">
            <div className="card-title">Quick Insights</div>

            <div className="insights">
                <div className="insight-card ic-cyan">
                    <div className="insight-lbl">Peak Hours</div>
                    <div className="insight-val c1">5PM – 8PM</div>
                </div>

                <div className="insight-card ic-green">
                    <div className="insight-lbl">Best Selling Plan</div>
                    <div className="insight-val c2">Premium Plan</div>
                </div>

                <div className="insight-card ic-purple">
                    <div className="insight-lbl">New Members</div>
                    <div className="insight-val c3">+54 Joined</div>
                </div>
            </div>
        </div>
    );
}