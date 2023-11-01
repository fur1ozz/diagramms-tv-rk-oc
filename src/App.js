import './App.css';
import SequenceDiagramExplanation from "./components/SequenceDiagramExplanation";
import WhenToUseSequenceDiagram from "./components/WhenToUseSequenceDiagram";
import Slide3 from "./components/Slide3";
import Slide4 from "./components/Slide4";
import Slide5 from "./components/Slide5";

function App() {
  return (
    <div className="App">
        <SequenceDiagramExplanation />
        <WhenToUseSequenceDiagram />
        <Slide3 />
        <Slide4 />
        <Slide5 />
    </div>
  );
}

export default App;
