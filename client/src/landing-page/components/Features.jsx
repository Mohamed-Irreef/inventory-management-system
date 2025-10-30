import React from 'react'

const Features = () => {
  return (
    <div className='feature-box'>
        <div className="feature-card">
            <div className="feature-icon">
                <i class="ri-box-3-line"></i>
            </div>
            <h4>Inventory Management</h4>
            <p>Real-time inventory tracking with automated alerts and smart replenishment suggestions.</p>
        </div>

        <div className="feature-card">
            <div className="feature-icon">
                <i class="ri-truck-line"></i>
            </div>
            <h4>Fleet Management</h4>
            <p>Optimize delivery routes, track vehicles, and manage driver schedules efficiently.</p>
        </div>

        <div className="feature-card">
            <div className="feature-icon">
                <i class="ri-bar-chart-2-line"></i>
            </div>
            <h4>Analytics Dashboard</h4>
            <p>Advanced reporting and analysis with AI-powered insights for better decission making.</p>
        </div>

        <div className="feature-card">
            <div className="feature-icon">
                <i class="ri-shield-keyhole-line"></i>
            </div>
            <h4>Security & Compliance</h4>
            <p>Enterprise grade security with full audit trails and regulatory compliance features.</p>
        </div>
        <div className="feature-card">
            <div className="feature-icon">
                <i class="ri-rocket-line"></i>
            </div>
            <h4>Automated Workflows</h4>
            <p>Streamline operations with intelligent automation and workflow optimization.</p>
        </div>
        <div className="feature-card">
            <div className="feature-icon">
                <i class="ri-map-pin-line"></i>
            </div>
            <h4>IMulti-Location Support</h4>
            <p>Manage multiple warehouse and distribution centers from as single platform.</p>
        </div>
    </div>
  )
}

export default Features