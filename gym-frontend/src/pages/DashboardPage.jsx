import "../styles/dashboard.css";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatsGrid from "../components/StatsGrid";
import RevenueChart from "../components/RevenueChart";
import InsightsPanel from "../components/InsightsPanel";
import MembersTable from "../components/MembersTable";

export default function DashboardPage() {
    return (
        <div className="app">
            <Sidebar />

            <div className="main">
                <Topbar />

                <div className="content">
                    <StatsGrid />

                    <div className="mid-grid">
                        <RevenueChart />
                        <InsightsPanel />
                    </div>

                    <MembersTable />
                </div>
            </div>
        </div>
    );
}