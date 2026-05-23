export default function RevenueChart() {
    const data = [42, 56, 72, 50, 85, 66, 92];

    return (
        <div className="card">
            <div className="card-head">
                <div>
                    <div className="card-title">Revenue Analytics</div>
                    <div className="card-sub">
                        Monthly gym revenue overview
                    </div>
                </div>

                <button className="export-btn">Export</button>
            </div>

            <div className="chart-wrap">
                {data.map((height, index) => (
                    <div className="bar-group" key={index}>
                        <div
                            className="bar"
                            style={{ height: `${height}%` }}
                        ></div>

                        <div className="bar-lbl">
                            {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"][index]}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}