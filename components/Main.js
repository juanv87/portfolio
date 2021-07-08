export default function Main(){
    return(
        <>
        <main>
            <h1>🙋🏻‍♂️Juan Andrés Villegas🙆🏻‍♂️</h1>
            <div className="typewriter">
                <h2>FrontEnd Developer</h2>
            </div>
            <nav>
                <ul>
                    <li><a href="">About me</a></li>
                    <li><a href="">Skills</a></li>
                    <li><a href="">GitHub</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </main>
        <style jsx>{`
            main {
                font-family: 'Roboto Mono', monospace;
                height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-content: center;
                cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='50' height='40' viewport='0' style='fill:black;font-size:30px;'><text y='30' x='0'>🍩</text></svg>") 16 0,auto;
                .typewriter {
                    width: 320px;
                    text-align: center;
                    margin-left: auto;
                    margin-right: auto;
                }
                .typewriter h2 {
                    color: #000;
                    overflow: hidden; /* Ensures the content is not revealed until the animation */
                    border-right: .15em solid orange; /* The typwriter cursor */
                    white-space: nowrap; /* Keeps the content on a single line */
                    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
                    margin-top: 10px;
                    letter-spacing: .15em; /* Adjust as needed */
                    animation: 
                    typing 2s steps(30, end),
                    blink-caret .5s step-end infinite;
                }
                @keyframes typing {
                    from { width: 0 }
                    to { width: 100% }
                }
                @keyframes blink-caret {
                    from, to { border-color: transparent }
                    50% { border-color: orange }
                }
                h1 {
                    font-size: 3em;
                    margin: 0;
                    text-align: center;
                    font-weight: 900;
                }
                h2 {
                    font-size: 1.5em;
                    margin: 0;
                    text-align: center;
                    display: inline-block;
                }
                nav {
                    text-align: center;
                    margin-top: 30px;
                    ul {
                        margin: 0;
                        padding: 0;
                        display: flex;
                        justify-content: center;
                        li {
                            list-style-type: none; 
                            margin: 0 15px;
                            a {
                                color: #000;
                                text-decoration: none;
                                font-size: 1.5em;
                                &:hover {
                                    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='50' height='40' viewport='0' style='fill:black;font-size:30px;'><text y='30' x='0'>👆</text></svg>") 16 0,auto;
                                    text-decoration: underline;
                                }
                            }
                        }
                    }
                }
            }
        `}</style>
        </>
    )
}