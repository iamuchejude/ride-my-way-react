import React from 'react';
import DashboardHeader from '../components/Headers/DashboardHeader';
import UserProfile from '../components/Dashboard/UserProfile';
import UserStats from '../components/Dashboard/UserStats';
import UserRecords from '../components/Dashboard/UserRecords';

const Dashboard = () => (
  <div>
    <DashboardHeader />
    <section id="main" className="clear">
      <div className="section-header clear">
        <div className="left">
          <h3>Dashboard</h3>
        </div>
      </div>
      <div className="clear columns">
        <div className="column quarter">
          <UserProfile />
        </div>
        <div className="stats column three-fourth">
          <div className="stats-info clear columns">
            <UserStats />
          </div>
          <div className="rides container clear">
            <UserRecords />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Dashboard;
