import React from "react";
import user1 from "../../assets/user1.jpeg";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/user3.jpg";

const Feedback = () => {
  return (
    <div className="feedback-container">
      <div className="feedback-cards">
        <div className="feedback-card">
          <div className="ratings">
            <i class="ri-star-fill star"></i>
            <i class="ri-star-fill star"></i>
            <i class="ri-star-fill star"></i>
            <i class="ri-star-fill star"></i>
            <i class="ri-star-fill star"></i>
          </div>

          <div className="feedback-content">
            <p>
              <i class="ri-double-quotes-l "></i>
              <i>
                {" "}
                StockFlow transformed our warehouse operations completely. We've
                seen a 40% increase in efficiently and our error rates dropped
                to nearly zero
              </i>
              <i class="ri-double-quotes-r"></i>
            </p>
          </div>
          <div className="feedback-profile">
            <div className="feedback-profile-left">
              <img src={user3} alt="" />
            </div>
            <div className="feedback-profile-right">
              <p>
                <b>Sarah Jonson</b>
              </p>
              <p>Operations Director</p>
              <p style={{ color: "rgb(13, 85, 255)" }}>
                <b>Global Logistics Crop</b>
              </p>
            </div>
          </div>
        </div>

        <div className="feedback-card">
          <div className="ratings">
            <i class="ri-star-fill star"></i>
            <i class="ri-star-fill star"></i>
            <i class="ri-star-fill star"></i>
            <i class="ri-star-fill star"></i>
            <i class="ri-star-fill star"></i>
          </div>

          <div className="feedback-content">
            <p>
              <i class="ri-double-quotes-l"></i>
              StockFlow transformed our warehouse operations completely. We've
              seen a 40% increase in efficiently and our error rates dropped to
              nearly zero
              <i class="ri-double-quotes-r"></i>
            </p>
          </div>
          <div className="feedback-profile">
            <div className="feedback-profile-left">
              <img src={user2} alt="" />
            </div>
            <div className="feedback-profile-right">
              <p>
                <b>Sarah Jonson</b>
              </p>
              <p>Operations Director</p>
              <p style={{ color: "rgb(13, 85, 255)" }}>
                <b>Global Logistics Crop</b>
              </p>
            </div>
          </div>
        </div>

        <div className="feedback-card">
          <div className="ratings">
            <i class="ri-star-fill star"></i>
            <i class="ri-star-fill star"></i>
            <i class="ri-star-fill star"></i>
            <i class="ri-star-fill star"></i>
            <i class="ri-star-fill star"></i>
          </div>

          <div className="feedback-content">
            <p>
              <i class="ri-double-quotes-l"></i>
              StockFlow transformed our warehouse operations completely. We've
              seen a 40% increase in efficiently and our error rates dropped to
              nearly zero
              <i class="ri-double-quotes-r"></i>
            </p>
          </div>
          <div className="feedback-profile">
            <div className="feedback-profile-left">
              <img src={user1} alt="" />
            </div>
            <div className="feedback-profile-right">
              <p>
                <b>Sarah Jonson</b>
              </p>
              <p>Operations Director</p>
              <p style={{ color: "rgb(13, 85, 255)" }}>
                <b>Global Logistics Crop</b>
              </p>
            </div>
          </div>
        </div>

        <div className="feedback-card">
          <div className="ratings">
            <i class="ri-star-fill star"></i>
            <i class="ri-star-fill star"></i>
            <i class="ri-star-fill star"></i>
            <i class="ri-star-fill star"></i>
            <i class="ri-star-fill star"></i>
          </div>

          <div className="feedback-content">
            <p>
              <i class="ri-double-quotes-l"></i>
              StockFlow transformed our warehouse operations completely. We've
              seen a 40% increase in efficiently and our error rates dropped to
              nearly zero
              <i class="ri-double-quotes-r"></i>
            </p>
          </div>
          <div className="feedback-profile">
            <div className="feedback-profile-left">
              <img src={user3} alt="" />
            </div>
            <div className="feedback-profile-right">
              <p>
                <b>Sarah Jonson</b>
              </p>
              <p>Operations Director</p>
              <p style={{ color: "rgb(13, 85, 255)" }}>
                <b>Global Logistics Crop</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
