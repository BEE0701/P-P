import { useEffect } from "react";

function useScrollAnimation() {
  useEffect(() => {

    // fadeUp
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    const fadeElements = document.querySelectorAll(".fadeUp");
    fadeElements.forEach((el) => observer.observe(el));
    
    
    // Home symbol scroll animation
    const symbol = document.querySelector(".symbol")
    const home = document.querySelector("#home");
    const nodeTop = document.querySelector(".nodeTop");
    const nodeLeft = document.querySelector(".nodeLeft");
    const nodeRight = document.querySelector(".nodeRight");
    const lines = document.querySelectorAll(".symbolLine");
    

    const handleScroll = () => {
      if (!home || !symbol || !nodeTop || !nodeLeft || !nodeRight) return;

      const scrollY = window.scrollY;
      const homeTop = home.offsetTop;
      const scrollInHome = scrollY - homeTop;

      const isMobile = window.innerWidth <= 768;

      const assembleDistance = isMobile ? 400 : 700;
const holdDistance = isMobile ? 250 : 1000;
const totalDistance = assembleDistance + holdDistance;
      if (scrollInHome < 0) {
        home.classList.remove("homeFixed", "homeEnd");
      } else if (scrollInHome <= totalDistance) {
        home.classList.add("homeFixed");
        home.classList.remove("homeEnd");
      } else {
        home.classList.remove("homeFixed");
        home.classList.add("homeEnd");
      }

      let progress = scrollInHome / assembleDistance;
      progress = Math.min(Math.max(progress, 0), 1);

      const move = 1 - progress;

      const topStart = isMobile
        ? { x: -80, y: -160 }
        : { x: -520, y: -260 };

      const leftStart = isMobile
        ? { x: -120, y: 120 }
        : { x: -560, y: 260 };

      const rightStart = isMobile
        ? { x: 120, y: -130 }
        : { x: 430, y: -220 };

      nodeTop.style.transform = `translate(${topStart.x * move}px, ${topStart.y * move}px)`;
      nodeLeft.style.transform = `translate(${leftStart.x * move}px, ${leftStart.y * move}px)`;
      nodeRight.style.transform = `translate(${rightStart.x * move}px, ${rightStart.y * move}px)`;

      lines.forEach((line) => {
        line.style.opacity = progress;
        line.style.transform = `scale(${0.2 + progress * 0.8})`;
      });

    };
    const experience = document.querySelector("#experience");
const beeCrawler = document.querySelector(".beeCrawler");

let beeDropped = false;

const dropBee = () => {
  if (!experience || !beeCrawler || beeDropped) return;

  const experienceRect = experience.getBoundingClientRect();
  const beeRect = beeCrawler.getBoundingClientRect();

  const beeTopInSection = beeRect.top - experienceRect.top;

  const dropY =
    experience.offsetHeight - beeTopInSection - beeRect.height - 70;

  beeCrawler.style.setProperty(
    "--beeDropY",
    `${Math.max(dropY, 0)}px`
  );

  beeCrawler.classList.add("drop");
  beeDropped = true;
};

const handleWheel = () => {
  if (!experience || !beeCrawler) return;

  const rect = experience.getBoundingClientRect();

  const isInExperience =
    rect.top < window.innerHeight * 0.75 &&
    rect.bottom > window.innerHeight * 0.25;

  if (isInExperience) {
    dropBee();
  }
};

window.addEventListener("wheel", handleWheel);
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
       observer.disconnect();
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("wheel", handleWheel);
    };
  }, []);

}

export default useScrollAnimation;