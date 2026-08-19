import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analytics Internship</h4>
                <h5>Practical Experience</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Hands-on exposure to practical analytics workflows, data preparation,
              visualization and business-focused reporting. Detailed company and date
              information can be added to the timeline without changing the layout.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Project-Based Learning</h4>
                <h5>Data Analytics Portfolio</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Built practical projects using SQL/MySQL, Python, Power BI, Excel,
              Power Query, DAX and data modeling across e-commerce and retail datasets.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Continuous Development</h4>
                <h5>Data Analyst / BI</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Continuing to strengthen analytical SQL, dashboard design, data cleaning,
              visualization and business intelligence skills through new projects and
              hands-on practice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
