import "./../styles/project.css";
import arrow from "./../assets/images/arrow.png";
import oozy from "./../assets/images/oozy.png";
import zeroWaste from "./../assets/images/zeroWaste.png";
import lotteWorld from "./../assets/images/lotteWorld.png";
import ssgLanders from "./../assets/images/ssgLanders.png";
function Project(){
    return(
        <section id="project">
            <div id="proTitle">
                <h2>My Projects,
                    Made With Purpose.
                </h2>
                <p>사용자의 경험을 관찰하고 가치를 담아 
                    결과물로 만듭니다.
                    4개의 프로젝트가 그 과정의 기록입니다.
                </p>
            </div>
            <div className="proBox  fadeUp">
                <div className="proLeft">
                    <div className="num">01</div>
                    <div className="proName">OOZY COFFEE</div>
                    <div className="proType">Brand Website</div>
                    <div className="boxs">
                        <div>팀 프로젝트</div>
                        <div>가맹 문의</div>
                        <div>Notice</div>
                    </div>
                    <div className="moreView">
                        <p>View Project</p>
                        <img src={arrow} alt="화살표" />
                    </div>
                </div>
                <div className="proRight">
                    <img src={oozy} alt="우지커피 화면" />
                </div>
            </div>
            <div className="proBox  fadeUp">
                <div className="proLeft">
                    <div className="num">02</div>
                    <div className="proName">ZERO WASTE</div>
                    <div className="proType">Campaign Website</div>
                    <div className="boxs">
                        <div>개인 프로젝트</div>
                    </div>
                    <div className="moreView">
                        <p>View Project</p>
                        <img src={arrow} alt="화살표" />
                    </div>
                </div>
                <div className="proRight">
                    <img src={zeroWaste} alt="제로웨이스트 화면" />
                </div>
            </div>
            <div className="proBox  fadeUp">
                <div className="proLeft">
                    <div className="num">03</div>
                    <div className="proName">롯데월드 한국 민속 박물관</div>
                    <div className="proType">Information Website</div>
                    <div className="boxs">
                        <div>개인 프로젝트</div>
                    </div>
                    <div className="moreView">
                        <p>View Project</p>
                        <img src={arrow} alt="화살표" />
                    </div>
                </div>
                <div className="proRight">
                    <img src={lotteWorld} alt="한국민속박물관 화면" />
                </div>
            </div>
            <div className="proBox  fadeUp">
                <div className="proLeft">
                    <div className="num">04</div>
                    <div className="proName">SSG LANDERS</div>
                    <div className="proType">Fan Experience Website</div>
                    <div className="boxs">
                        <div>팀 프로젝트</div>
                        <div>구단 소식</div>
                        <div>History</div>
                    </div>
                    <div className="moreView">
                        <p>View Project</p>
                        <img src={arrow} alt="화살표" />
                    </div>
                </div>
                <div className="proRight">
                    <img src={ssgLanders} alt="쓱 홈페이지 화면" />
                </div>
            </div>
            <div className="contactBox">
                <h3>Let's build something together.</h3>
                <div id="btn">
                    <h3>contact me</h3>
                    <div><img src={arrow} alt="화살표" /></div>  
                </div>   
            </div>
        </section>  
    )
};

export default Project;