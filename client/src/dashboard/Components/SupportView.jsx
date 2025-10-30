import React from 'react';

const tickets = [
  {
    id: 'TKT-001',
    name: 'John Doe',
    issue: 'Login Issues',
    priority: 'high',
    status: 'open',
    time: '2 hours ago'
  },
  {
    id: 'TKT-002',
    name: 'Jane Smith',
    issue: 'Inventory Sync Problem',
    priority: 'medium',
    status: 'in-progress',
    time: '5 hours ago'
  },
  {
    id: 'TKT-003',
    name: 'Bob Johnson',
    issue: 'Report Generation Error',
    priority: 'low',
    status: 'resolved',
    time: '1 day ago'
  },
  {
    id: 'TKT-004',
    name: 'Alice Brown',
    issue: 'Unable to print invoice',
    priority: 'high',
    status: 'open',
    time: '30 minutes ago'
  },
  {
    id: 'TKT-005',
    name: 'Charlie Green',
    issue: 'Incorrect order details',
    priority: 'medium',
    status: 'in-progress',
    time: '3 hours ago'
  },
  {
    id: 'TKT-006',
    name: 'Diana Prince',
    issue: 'Stock mismatch in system',
    priority: 'high',
    status: 'open',
    time: '45 minutes ago'
  },
  {
    id: 'TKT-007',
    name: 'Ethan Hunt',
    issue: 'Failed to update product info',
    priority: 'low',
    status: 'resolved',
    time: '2 days ago'
  },
  {
    id: 'TKT-008',
    name: 'Fiona Gallagher',
    issue: 'Broken image link on product page',
    priority: 'medium',
    status: 'in-progress',
    time: '7 hours ago'
  },
  {
    id: 'TKT-009',
    name: 'George King',
    issue: 'Email notifications not received',
    priority: 'low',
    status: 'resolved',
    time: '3 days ago'
  },
  {
    id: 'TKT-010',
    name: 'Hannah Lee',
    issue: 'Access denied to dashboard',
    priority: 'high',
    status: 'open',
    time: '1 hour ago'
  },
  {
    id: 'TKT-011',
    name: 'Ian Malcolm',
    issue: 'Export to CSV not working',
    priority: 'medium',
    status: 'in-progress',
    time: '6 hours ago'
  },
  {
    id: 'TKT-012',
    name: 'Jenny Kim',
    issue: 'Cannot upload documents',
    priority: 'high',
    status: 'open',
    time: '20 minutes ago'
  },
  {
    id: 'TKT-013',
    name: 'Kevin Hart',
    issue: 'System crash during checkout',
    priority: 'high',
    status: 'open',
    time: '1 hour ago'
  },
  {
    id: 'TKT-014',
    name: 'Laura Craft',
    issue: 'Discount not applied correctly',
    priority: 'medium',
    status: 'in-progress',
    time: '4 hours ago'
  },
  {
    id: 'TKT-015',
    name: 'Mike Tyson',
    issue: 'Search functionality slow',
    priority: 'low',
    status: 'resolved',
    time: '1 day ago'
  }
];


const SupportView = () => {
  return (
    <div className="support-view">
      <h1 className="page-title">Support Center</h1>

      <div className="stats-grid">
         {/* Open Tickets */}
  <div className="stat-card">
    <div className="stat-card-title">
      <i className="ri-file-list-2-line"></i>
      <h3>Open Tickets</h3>
    </div>
    <div className="stat-card-count">
      <p>23</p>
      <span className="info">+3 since yesterday</span>
    </div>
  </div>

  {/* Resolved Today */}
  <div className="stat-card">
    <div className="stat-card-title">
      <i className="ri-checkbox-circle-line"></i>
      <h3>Resolved Today</h3>
    </div>
    <div className="stat-card-count">
      <p>18</p>
      <span className="info">94% resolution rate</span>
    </div>
  </div>

  {/* Average Response Time */}
  <div className="stat-card">
    <div className="stat-card-title">
      <i className="ri-time-line"></i>
      <h3>Avg Response Time</h3>
    </div>
    <div className="stat-card-count">
      <p>2.5h</p>
      <span className="info">-30min from yesterday</span>
    </div>
  </div>

  {/* Satisfaction Score */}
  <div className="stat-card">
    <div className="stat-card-title">
      <i className="ri-star-smile-line"></i>
      <h3>Satisfaction Score</h3>
    </div>
    <div className="stat-card-count">
      <p>4.8/5</p>
      <span className="info">Based on 156 reviews</span>
    </div>
  </div>

      </div>

      <div className="main-content">
        <div className="tickets-section">
          <h2>Recent Tickets</h2>
          <p className="subtext">Manage customer support requests</p>

          <div className="ticket-list">
            {tickets.map(ticket => (
              <div className="ticket" key={ticket.id}>
                <div className="icon"><i className="ri-chat-3-line"></i></div>
                <div className="info">
                  <strong>{ticket.id}</strong>
                  <p>{ticket.name}</p>
                </div>
                <div className="issue">
                  <p>{ticket.issue}</p>
                  <span>{ticket.time}</span>
                </div>
                <div className="tags">
                  <span className={`tag ${ticket.priority}`}>{ticket.priority}</span>
                  <span className={`tag ${ticket.status}`}>{ticket.status}</span>
                </div>

                <div className="ticket-action-btns">
                  <button>Staus</button>
                  <button>Resolve</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="extras">
          <div className="contact-box">
            <h3>Contact Information</h3>
            <p>Reach us through the following methods</p>
            <div className="contact-row">
              <i className="ri-phone-line"></i>
              <span>+91 9361757753</span>
            </div>
            <div className="contact-row">
              <i className="ri-mail-line"></i>
              <span>support@stackflow.com</span>
            </div>
            <div className="contact-row">
              <i className="ri-message-2-line"></i>
              <span>Live Chat - 24/7</span>
            </div>
          </div>

          <div className="knowledge-box">
            <h3>Knowledge Base</h3>
            <ul>
              <li>
                <strong>Getting Started Guide</strong>
                <p>Learn the basics of StackFlow Pro</p>
              </li>
              <li>
                <strong>Inventory Management</strong>
                <p>Manage your stock efficiently</p>
              </li>
              <li>
                <strong>Order Processing</strong>
                <p>Step-by-step order management</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportView;
