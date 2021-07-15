export default function AboutMe() {
  return (
    <div>
        <section className="about-me">
            <div className="console">
            <pre className="bash user">
                <p>Portfolio@JuanAndresVillegas <span>About Me</span> <b>/</b></p>
            </pre> 
            <pre className="bash">
                <p>&gt; Hola 👋</p>
            </pre> 
            <pre className="bash">
                <p>&gt; Aquí, Juan.</p>
            </pre>
            <pre className="bash">
                <p>&gt; Soy de Buenos Aires, Argentina.</p>
            </pre>
            <pre className="bash">
                <p>&gt; Tengo 34 años.</p>
            </pre>
            <pre className="bash">
                <p>&gt; Actualmente me dedico a aportar mis conocimientos en diferentes proyectos de forma Freelance.</p>
            </pre>
            <pre className="bash">
                <p>&gt; Uno de mis mayores objetivos profesionales es desarrollarme como FrontEnd en ReactJS y React Native.</p>
            </pre>
            <pre className="bash border">
                <p>&gt; Priorizando un ambiente laboral positivo, en donde pueda aprender y compartir mis conocimientos.</p>
            </pre>
            </div>
        </section>
        <style jsx>{`
            .about-me {
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center; 
                .console {
                    width: 960px;
                    max-width: 70%;
                    height: 500px;
                    overflow-y: scroll;
                    background-color: #000;
                    box-shadow: 10px 10px 30px #00000063;
                    border-radius: 10px;
                    padding: 10px 30px;
                    border-top: 8px solid #444;
                    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='50' height='40' viewport='0' style='fill:black;font-size:30px;'><text y='30' x='0'>🍕</text></svg>") 16 0,auto;
                    p {
                        margin: 0;
                        display: inline-block;
                        line-height: 22px;
                    }
                    pre.bash {
                        color: white;
                        font-size: medium ; 
                        font-family: Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New, monospace;
                        width: auto;
                        margin-bottom: 10px;
                        white-space: nowrap; /* Keeps the content on a single line */
                        &.user {
                            color: #00bf00;
                            font-weight: bold;
                            font-size: 18px;
                            letter-spacing: 0;
                            span {
                                color: #bf00bf;
                            }
                            b {
                                color: #ffff00;
                            }
                        }
                        &.border {
                            display: inline-block;
                            margin-top: 5px;
                            overflow: hidden; /* Ensures the content is not revealed until the animation */
                            border-right: .15em solid red; /* The typwriter cursor */
                            animation: 
                            blink-caret .8s step-end infinite;

                        }
                    }
                    @keyframes blink-caret {
                        from, to { border-color: transparent }
                        50% { border-color: red }
                    }
                    &::-webkit-scrollbar {
                        width: 15px;
                        height: 8px;
                    }
                    &::-webkit-scrollbar-thumb {
                        background: #ccc;
                        border-radius: 10px;
                    }
                    &::-webkit-scrollbar-thumb:hover {
                        background: #666;
                    }
                    &::-webkit-scrollbar-thumb:active {
                        background-color: #ff0000;
                    }
                }
            }
        `}</style>
    </div>
  )
}
