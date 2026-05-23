export default function MembersTable() {
    return (
        <div className="members-card">
            <div className="card-head">
                <div>
                    <div className="card-title">Recent Members</div>
                    <div className="card-sub">
                        Latest registered gym members
                    </div>
                </div>

                <button className="view-all-btn">
                    View all members →
                </button>
            </div>

            <div className="table-wrap">
                <table>
                    <thead>
                    <tr>
                        <th>Member</th>
                        <th>Plan</th>
                        <th>Status</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>John Carter</td>
                        <td>Premium</td>
                        <td>Active</td>
                    </tr>

                    <tr>
                        <td>Sarah Lee</td>
                        <td>Basic</td>
                        <td>Pending</td>
                    </tr>

                    <tr>
                        <td>Michael Cruz</td>
                        <td>VIP</td>
                        <td>Active</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}