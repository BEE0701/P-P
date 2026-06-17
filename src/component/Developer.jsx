import './../styles/developer.css';
import eye from './../assets/images/eye.svg';
import heart from './../assets/images/heart.svg';
import challenge from './../assets/images/challenge.svg'

function Developer() {
  return (
    <section id="developer">
      <div className="developerInner  fadeUp">
        <div className="developerLeft">

          <h1>Turning experiences into products.</h1>

          <p>
            서비스업은 책임감을,<br />
            연기와 미용은 관찰력을,<br />
            캐나다는 도전 정신을 남겼습니다.
            <br /><br />
            그 경험들은 결국 사람의 경험을 더 나은 방향으로
            만들고 싶다는 마음으로 이어졌고,
            <br /><br />
            저는 그 가치들을 사람이 직접 경험할 수 있는
            결과물로 만들고 싶었습니다.
            <br /><br />
            그리고 그 방법으로 웹 개발을 선택했습니다.
          </p>
        </div>

        <div className="developerCenter">
          <div className="valueSymbol">
            <svg viewBox="0 0 160 140" aria-hidden="true">
              <line x1="80" y1="25" x2="35" y2="103" />
              <line x1="80" y1="25" x2="125" y2="103" />
              <line x1="35" y1="103" x2="125" y2="103" />

              <circle cx="80" cy="25" r="26" />
              <circle cx="35" cy="103" r="24" />
              <circle cx="125" cy="103" r="20" />
            </svg>
          </div>
          <p>Web Development</p>
        </div>

        <div className="developerRight">
          <div className="connector"></div>

          <div className="iconBox observe">
            <div className="lineToIcon"></div>
            <div className="iconImg"><img src={eye} alt="눈" /></div>
            <p>Observe</p>
          </div>

          <div className="iconBox build">
            <div className="lineToIcon"></div>
            <div className="iconImg"><img src={heart} alt="하트" /></div>
            <p>Build</p>
          </div>

          <div className="iconBox improve">
            <div className="lineToIcon"></div>
            <div className="iconImg"><img src={challenge} alt="도전" /></div>
            <p>Improve</p>
          </div>
        </div>
        <div className="nextProject">
          <span className="nextLabel">NEXT</span>
          <span className="nextText">Project</span>

          <svg className="scrollIcon" viewBox="0 0 40 78" aria-hidden="true">
            <line x1="20" y1="0" x2="20" y2="24" />
            <rect x="7" y="24" width="26" height="42" rx="13" />
            <line className="scrollWheel" x1="20" y1="34" x2="20" y2="44" />
          </svg>
        </div>
      </div>

    </section>

  );
}

export default Developer;