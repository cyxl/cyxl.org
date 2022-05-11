import "../css/SkillBar.css";

const SkillBar = () => {
    return (
        <body>
            <div class="container">
                <div class="skill-box">
                    <span class="title">HTML</span>

                    <div class="skill-bar">
                        <span class="skill-per html">
                            <span class="tooltip">90%</span>
                        </span>
                    </div>
                </div>

                <div class="skill-box">
                    <span class="title">CSS</span>

                    <div class="skill-bar">
                        <span class="skill-per css">
                            <span class="tooltip">80%</span>
                        </span>
                    </div>
                </div>
                <div class="skill-box">
                    <span class="title">Python</span>

                    <div class="skill-bar">
                        <span class="skill-per python">
                            <span class="tooltip">65%</span>
                        </span>
                    </div>
                </div>
                <div class="skill-box">
                    <span class="title">C#</span>

                    <div class="skill-bar">
                        <span class="skill-per csharp">
                            <span class="tooltip">35%</span>
                        </span>
                    </div>
                </div>
                <div class="skill-box">
                    <span class="title">JavaScript</span>

                    <div class="skill-bar">
                        <span class="skill-per javascript">
                            <span class="tooltip">30%</span>
                        </span>
                    </div>
                </div>
                <div class="skill-box">
                    <span class="title">NodeJS</span>

                    <div class="skill-bar">
                        <span class="skill-per nodejs">
                            <span class="tooltip">30%</span>
                        </span>
                    </div>
                </div>
                <div class="skill-box">
                    <span class="title">C</span>

                    <div class="skill-bar">
                        <span class="skill-per c">
                            <span class="tooltip">15%</span>
                        </span>
                    </div>
                </div>
            </div>

        </body>
    )
}

export default SkillBar;