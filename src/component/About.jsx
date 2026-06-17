import "./../styles/about.css";

function About() {
  return (
    <section id="about">
      <div className="aboutInner">
        <div className="textBox  fadeUp">
          <h1>Observation</h1>
          <p>사람을 상대하는 환경에서 무엇이 필요한지 살피는 습관이 생겼습니다.</p>
        </div>

        <div className="textBox  fadeUp">
          <h1>Consistency</h1>
          <p>7년 동안 같은 자리에서 하루하루 반복하며 꾸준함을 배웠습니다.</p>
        </div>

        <div className="textBox  fadeUp">
          <h1>Responsibility</h1>
          <p>맡은 일은 끝까지 완성하는 것을 당연하게 생각합니다.</p>
        </div>

        <div className="textBox  fadeUp">
          <h1>Challenge</h1>
          <p>익숙함에 머무르기보다 새로운 환경을 선택했습니다.</p>
        </div>
      </div>
    </section>
  );
}

export default About;