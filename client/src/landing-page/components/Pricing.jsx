import React from "react";

const pricingPlans = [
  {
    title: "Inventory Management",
    price: "$99/month",
    features: [
      "Real-time stock tracking",
      "Automated reorder points",
      "Multi-location management",
      "Barcode/RFID integration",
    ],
    para:"Complete control over your stock levels with automated reordering and cycle counting.",
    icon:<i class="ri-box-3-line"></i>,
    buttonText: "Get Started",
    popular: false,
  },
  {
    title: "Analytics & Reporting",
    price: "$199/month",
    features: [
      "Custom dashboards",
      "Predictive analytics",
      "Performance KPIs",
      "Automated reports",
    ],
     para:"Data driven insights to optimize your warehouse performance and decission-making.",
    icon:<i class="ri-bar-chart-2-line"></i>,
    buttonText: "Get Started",
    popular: true,
  },
  {
    title: "Process Automation",
    price: "$299/month",
    features: [
      "Workflow automation",
      "Smart routing",
      "Exception handling",
      "Integration APIs",
    ],
     para:"Streamline workflows with intelligent automation and reduce manual errors.",
    icon:<i class="ri-settings-2-line"></i>,
    buttonText: "Get Started",
    popular: false,
  },
  {
    title: "Premium Support",
    price: "$499/month",
    features: [
      "24/7 phone support",
      "Dedicated account manager",
      "Priority troubleshooting",
      "Training sessions",
    ],
     para:"Dedicated support team with 24/7 availability and personalized assistance.",
    icon:<i class="ri-customer-service-line"></i>,
    buttonText: "Get Started",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <div className="pricing-container">
      <div className="cards">
        {pricingPlans.map((plan, index) => (
          <div key={index} className={`card ${plan.popular ? "popular" : ""}`}>
            {plan.popular && <span className="badge">Most Popular</span>}

            <div className="pricing-icon-box">
                <div className="pricing-icon">
             {plan.icon}
            </div>
            </div>

            <p className="pricing-para">{plan.para}</p>
            <h3>{plan.title}</h3>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>
                  {" "}
                  <i
                    class="ri-checkbox-circle-line check"
                    style={{ color: " rgb(44, 245, 44)", fontSize: "20px" }}
                  ></i>{" "}
                  {feature}
                </li>
              ))}
            </ul>
            <p className="price">
              Starting at <strong>{plan.price}</strong>
            </p>
            <button className={`btn ${plan.popular ? "primary" : "secondary"}`}>
              {plan.buttonText} →
            </button>
          </div>
        ))}
      </div>
      <div className="pricing-footer">
        <p>Need a custom solution? We’ve got you covered.</p>
        <button className="sales-btn">Contact Sales Team</button>
      </div>
    </div>
  );
};

export default Pricing;
