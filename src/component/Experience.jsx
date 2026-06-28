import "./../styles/experience.css";

function Experience() {
    return (
        <section id="experience">
            <div className="experienceInner">
                <div className="titleBox">
                    <h1>Every experience leaves something behind.</h1>

                    <div className="beeIcon">
                        <svg viewBox="0 0 120 100" aria-hidden="true">
                            <defs>
                                <linearGradient id="beeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#FFD966" />
                                    <stop offset="55%" stopColor="#FBB902" />
                                    <stop offset="100%" stopColor="#F3A600" />
                                </linearGradient>
                            </defs>
                            <ellipse className="beeWing leftWing" cx="42" cy="35" rx="18" ry="13" />
                            <ellipse className="beeWing rightWing" cx="78" cy="35" rx="18" ry="13" />

                            <ellipse className="beeBody" cx="60" cy="56" rx="22" ry="28" />
                            <path className="beeStripe" d="M42 48 Q60 56 78 48" />
                            <path className="beeStripe" d="M40 60 Q60 68 80 60" />

                            <circle className="beeHead" cx="60" cy="26" r="12" />
                            <path className="beeLine" d="M52 18 Q45 8 38 14" />
                            <path className="beeLine" d="M68 18 Q75 8 82 14" />
                            <circle className="beeDot" cx="38" cy="14" r="3" />
                            <circle className="beeDot" cx="82" cy="14" r="3" />
                        </svg>
                    </div>
                </div>

                <div className="contents">
                    <div className="conBox  fadeUp">
                        <h2 className="subTitle">서비스업 7년</h2>
                        <p className="subCont">
                            같은 자리에서 매일<br />
                            책임을 다하며<br />
                            꾸준함을 배웠습니다.
                        </p>
                        <div className="abilityBox">
                            <span>consistency</span>
                            <span>Responsibility</span>
                            <span>observation</span>
                        </div>
                    </div>

                    <div className="conBox  fadeUp">
                        <h2 className="subTitle">연기 미용</h2>
                        <p className="subCont">
                            사람을 이해하고<br />
                            디테일을 바라보는<br />
                            시야가 넓어졌습니다.
                        </p>
                        <div className="abilityBox">
                            <span>observation</span>
                        </div>
                    </div>

                    <div className="conBox  fadeUp">
                        <h2 className="subTitle">캐나다 · 워킹홀리데이</h2>
                        <p className="subCont">
                            새로운 환경에 도전하며<br />
                            적응력과 용기를<br />
                            키웠습니다.
                        </p>
                        <div className="abilityBox">
                            <span>adaptability</span>
                            <span>challenge</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;