import NavBar from "./components/NavBar";
import Card from "./components/Card";
import "./styles/main.css"

function App() {
    let number = 1234;

    const showText = () => {
        console.log("Button clicked!")
    }


    return (
        <div>
            <NavBar/>
            <NavBar/>

            {/*properties => props*/}
            <div className="container">
                <Card title="Hello world" description="fe mwkfewlk fmkelw mefwkl"/>
                <Card title="Nimadir" description="ngtrnhtrn jkt"/>
                <Card title="Hello Topskill" description="n rjewng jkrwngjk wenkjf enwkj"/>
                <Card title="Nimadirlar" description="fewfn fnewjn fkjewnf kjew"/>
                <Card title="fkewmnkfnewlk fnewklf mewkl" description="gnrjwn jkwenfjk ewnf ekwj"/>
                <Card title="nfekwfn ejwknf jweknfkj enw" description="fjewn fewjlnf kewnfk jwenf ewkjn"/>
            </div>

            <br/>

            <p style={{color: "red", fontSize: "34px", fontFamily: "sans-serif"}}>{number}</p>

            <button type="button" onClick={() => {console.log("Hello world!"); showText() }}>Click me!</button>
            <button type="button" onClick={showText} onMouseEnter={() => console.log("Hover")}>Click me!!!</button>
        </div>
    );
}

export default App;
