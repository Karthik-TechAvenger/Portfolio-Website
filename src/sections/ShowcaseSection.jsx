import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1 = useRef(null);
  const project2 = useRef(null);
  const project3 = useRef(null);

  useGSAP(() => {
    const projectList = [project1.current, project2.current, project3.current];

    projectList.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: (index + 1) * 0.3,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);
  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div className="first-project-wrapper" ref={project1}>
            <div className="image-wrapper">
              <img src="/images/educate.png" alt="AI-Saas" />
            </div>
            <div className="text-content">
              <h2>
                AI-Powered LMS Teaching SaaS - Personalize your learning
                journey.
              </h2>
              <p className="text-white-50 md:text-xl">
                Empowering personalized learning through voice-based AI
                tutoring. This app helps users learn any subject in their own
                way and at their own pace, powered by intelligent voice agents.
                Built with a secure, scalable full-stack architecture.
              </p>
            </div>
          </div>
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/ML.webp" alt="Web-cam Email alert system" />
              </div>
              <h2>Web-cam Email Alert System using OpenCV</h2>
            </div>
            <div className="project" ref={project3}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img
                  src="/images/BalanceSheet.png"
                  alt="Balance Sheet Analyzer"
                />
              </div>
              <h2>
                A Balance Sheet Analyzer for helping Charted Accountants to
                generate P&L statements,Tax Estimations,TDL without going
                through the Balance Sheet with help of NLP and AI.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
