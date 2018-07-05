import React from 'react';
import Navbar from './DashboardStyle'

const Dashboard = (props)=>{

    return(

        <Navbar>
            <div>Logo</div>

            <button>Week1</button>

            <nav>
                <ul>
                    <li><a href='#'>Dashboard</a></li>
                    <li><a href='#'>Log in</a></li>
                    <li><a href='#'>Log out</a></li>
                </ul>
            </nav>
        </Navbar>

    )
}

export default Dashboard;