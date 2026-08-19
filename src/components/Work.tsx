import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "SWIGGY INSTAMART SALES DASHBOARD",
    category: "POWER BI / BUSINESS INTELLIGENCE",
    description: "Interactive sales dashboard covering sales, orders, ratings, city tiers, shop size, opening year and category performance.",
    tools: "Power BI, Power Query, DAX, Data Modeling",
    image: "https://raw.githubusercontent.com/Keshavv15/Swiggy-Instamart-sales-dashboard/main/swiggy%20instamart%20ss.png",
    link: "https://github.com/Keshavv15/Swiggy-Instamart-sales-dashboard",
  },
  {
    title: "RETAIL SALES PERFORMANCE",
    category: "POWER BI / SALES ANALYTICS",
    description: "Two-page retail dashboard focused on sales, profit, units sold, products, customer type and regional performance.",
    tools: "Power BI, Power Query, DAX, Data Modeling",
    image: "https://raw.githubusercontent.com/Keshavv15/Retail-Sales-Performance-Dashboard/main/sales.jpeg",
    link: "https://github.com/Keshavv15/Retail-Sales-Performance-Dashboard",
  },
  {
    title: "RETAIL BUSINESS INTELLIGENCE",
    category: "POWER BI / BI REPORTING",
    description: "Business intelligence dashboard for sales, profitability, products, regions, categories and deeper sales analysis.",
    tools: "Power BI, Power Query, DAX, Geospatial Analysis",
    image: "https://raw.githubusercontent.com/Keshavv15/Retail-Business-Intelligence-Dashboard/main/Sales_Analysis.jpeg",
    link: "https://github.com/Keshavv15/Retail-Business-Intelligence-Dashboard",
  },
  {
    title: "E-COMMERCE DATA ANALYSIS",
    category: "PYTHON + SQL / DATA ANALYSIS",
    description: "End-to-end e-commerce analysis covering MySQL ingestion, data cleaning, SQL analysis and Python-based business insights.",
    tools: "Python, MySQL, SQL, Pandas, NumPy, Jupyter",
    image: "https://raw.githubusercontent.com/Keshavv15/Retail-Business-Intelligence-Dashboard/main/Deep_Analysis.jpeg",
    link: "https://github.com/Keshavv15/python-sql_ecommerce_project",
  },
];

const Work = () => {
  useGSAP(() => {
    const box = document.getElementsByClassName("work-box");
    if (!box.length) return;

    const setTranslateX = () => {
      const work = document.querySelector(".work-container");
      if (!work) return 0;
      const rectLeft = work.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement?.getBoundingClientRect().width || window.innerWidth;
      const padding = parseInt(window.getComputedStyle(box[0]).padding) / 2;
      return Math.max(0, rect.width * box.length - (rectLeft + parentWidth) + padding);
    };

    const build = () => {
      ScrollTrigger.getById("work")?.kill();
      const distance = setTranslateX();
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: `+=${distance}`,
          scrub: true,
          pin: true,
          id: "work",
          invalidateOnRefresh: true,
        },
      });

      if (distance > 0) {
        timeline.to(".work-flex", { x: -distance, ease: "none" });
      }
    };

    build();
    window.addEventListener("resize", build);
    return () => {
      window.removeEventListener("resize", build);
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>My <span>Work</span></h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={project.title}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{String(index + 1).padStart(2, "0")}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>What I built</h4>
                <p>{project.description}</p>
                <h4 style={{ marginTop: 14 }}>Tools</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
