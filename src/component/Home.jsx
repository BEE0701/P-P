import "./../styles/home.css"
import './../styles/reset.css'
import './../styles/variables.css'
function Home() {
    return (
        <section id="home">
            <div className="homeInner">
                <div className="homeWrap">
                    <div className="homeLeft">
                        <div className="homeText">
                            <p>꽃에서 꿀을 모으듯,</p>
                            <h1>
                                작은 <strong>경험</strong>들을 모아<br />
                                하나의 <strong>결과물</strong>로 완성하는
                            </h1>
                            <p>웹 개발자 <span>Bee</span>입니다.</p>
                        </div>

                        <div className="homeKeywords">
                            <div className="keyword"><span></span>Observe</div>
                            <div className="divider"></div>
                            <div className="keyword"><span></span>Build</div>
                            <div className="divider"></div>
                            <div className="keyword"><span></span>Improve</div>
                        </div>
                    </div>


                    <div className="symbol">
                        <svg className="symbolSvg" viewBox="0 0 500 500">
                            <path
                                className="symbolBgPath"
                                d="M250 35
                                    C285 35 305 58 335 75
                                    L405 116
                                    C438 135 455 165 455 202
                                    L455 300
                                    C455 337 438 365 405 384
                                    L335 425
                                    C305 442 285 465 250 465
                                    C215 465 195 442 165 425
                                    L95 384
                                    C62 365 45 337 45 300
                                    L45 202
                                    C45 165 62 135 95 116
                                    L165 75
                                    C195 58 215 35 250 35Z"
                            />

                            <line className="symbolLine" x1="250" y1="145" x2="165" y2="315" />
                            <line className="symbolLine" x1="250" y1="145" x2="340" y2="315" />
                            <line className="symbolLine" x1="165" y1="315" x2="340" y2="315" />
                        </svg>

                        <div className="node nodeTop"></div>
                        <div className="node nodeLeft"></div>
                        <div className="node nodeRight"></div>
                    </div>
                </div>
            </div>

        </section>
    )
};
export default Home;