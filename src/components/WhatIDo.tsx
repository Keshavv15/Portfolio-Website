import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const cards = [
  {
    title: "SQL",
    subtitle: "ANALYZE",
    description:
      "Write analytical queries to explore data, connect relational tables and answer business questions with MySQL.",
    tags: ["MySQL", "Joins", "CTEs", "GROUP BY", "Window Functions", "Aggregations"],
  },
  {
    title: "POWER BI",
    subtitle: "VISUALIZE",
    description:
      "Build interactive business intelligence dashboards with KPIs, slicers, data models and DAX-driven analysis.",
    tags: ["Power BI", "DAX", "Power Query", "KPIs", "Data Modeling", "Reporting"],
  },
  {
    title: "PYTHON",
    subtitle: "TRANSFORM",
    description:
      "Clean, explore and analyze datasets with Python while connecting analytical workflows to MySQL databases.",
    tags: ["Python", "Pandas", "NumPy", "Jupyter", "EDA", "MySQL Connector"],
  },
  {
    title: "BUSINESS INTELLIGENCE",
    subtitle: "INSIGHT",
    description:
      "Turn cleaned data into clear visuals, trends and business-focused insights that support decision making.",
    tags: ["Excel", "Data Cleaning", "Visualization", "KPIs", "Insights", "Business Analysis"],
  },
];

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
            </svg>
          </div>

          {cards.map((card, index) => (
            <div className="what-content what-noTouch" ref={(el) => setRef(el, index)} key={card.title}>
              <div className="what-border1">
                <svg height="100%">
                  <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                  <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                </svg>
              </div>
              <div className="what-corner"></div>
              <div className="what-content-in">
                <h3>{card.title}</h3>
                <h4>{card.subtitle}</h4>
                <p>{card.description}</p>
                <h5>Skillset & tools</h5>
                <div className="what-content-flex">
                  {card.tags.map((tag) => (
                    <div className="what-tags" key={tag}>{tag}</div>
                  ))}
                </div>
                <div className="what-arrow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    Array.from(container.parentElement.children).forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
