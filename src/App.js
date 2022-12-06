import NavBar from "./components/NavBar";
import Card from "./components/Card";
import Counter from "./components/Counter";
import CounterClass from "./components/CounterClass";
import ClassLifeCycle from "./components/ClassLifeCycle";
import Hook from "./components/Hook";
import Bootstrap from "./components/Bootstrap";
import Reactstrap from "./components/Reactstrap";
import "./styles/main.css"
import ReactModalVideo from "./components/ReactModalVideo";
import Gallery from "./components/Gallery";
import Store from "./components/store/Store";

function App() {
    let number = 1234;

    const showText = () => {
        console.log("Button clicked!")
    }


    return (
        <div>
            {/*<NavBar/>*/}
            {/*<NavBar/>*/}

            {/*<Counter/>*/}

            {/*<CounterClass/>*/}
            {/*<ClassLifeCycle/>*/}
            {/*<Hook/>*/}
            {/*<Bootstrap/>*/}
            {/*<Reactstrap/>*/}
            {/*<ReactModalVideo/>*/}
            {/*<Gallery/>*/}
            <Store/>

            {/*properties => props*/}
            {/*<div className="container">*/}
            {/*    <Card title="Hello world" description="fe mwkfewlk fmkelw mefwkl"/>*/}
            {/*    <Card title="Nimadir" description="ngtrnhtrn jkt"/>*/}
            {/*    <Card title="Hello Topskill" description="n rjewng jkrwngjk wenkjf enwkj"/>*/}
            {/*    <Card title="Nimadirlar" description="fewfn fnewjn fkjewnf kjew"/>*/}
            {/*    <Card title="fkewmnkfnewlk fnewklf mewkl" description="gnrjwn jkwenfjk ewnf ekwj"/>*/}
            {/*    <Card title="nfekwfn ejwknf jweknfkj enw" description="fjewn fewjlnf kewnfk jwenf ewkjn"/>*/}
            {/*</div>*/}

            {/*<br/>*/}

            {/*<p style={{color: "red", fontSize: "34px", fontFamily: "sans-serif"}}>{number}</p>*/}

            {/*<button type="button" onClick={() => {console.log("Hello world!"); showText() }}>Click me!</button>*/}
            {/*<button type="button" onClick={showText} onMouseEnter={() => console.log("Hover")}>Click me!!!</button>*/}
        </div>
    );
}

export default App;
