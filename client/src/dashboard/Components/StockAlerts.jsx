import React, { useState } from 'react';

const initialAlerts = [
  { id: 1, product: 'Wireless Mouse', stock: 3 },
  { id: 2, product: 'USB-C Cable', stock: 1 },
  { id: 3, product: 'Laptop Stand', stock: 2 }
];

const StockAlerts = () => {
  const [alerts, setAlerts] = useState(initialAlerts);

  const handleDismiss = (id) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  const handleReorder = (product) => {
    alert(`Reorder request sent for: ${product}`);
  };

  return (
    <div className="alerts-container">
      <h2><i class="ri-megaphone-line"></i> Real-Time Stock Alerts</h2>
      {alerts.length === 0 ? (
        <p className="no-alerts">No active stock alerts</p>
      ) : (
        alerts.map(alert => (
          <div className="alert-card" key={alert.id}>
            <div className="alert-info">
              <span className="alert-icon">❗</span>
              <div>
                <p className="product-name">{alert.product}</p>
                <p className="stock-warning">Only {alert.stock} left in stock</p>
              </div>
            </div>
            <div className="alert-actions">
              <button className="reorder-btn" onClick={() => handleReorder(alert.product)}>
                <i class="ri-shopping-cart-line"></i> Reorder
              </button>
              <button className="close-btn" onClick={() => handleDismiss(alert.id)}>
                &times;
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default StockAlerts;
