import Block from './components/Block'
import {createHash} from 'crypto'

const hashText = (text) => {
  return createHash("sha256").update(text).digest("hex")
}

console.log(hashText("Hello"));

function App() {
  return (
    <div className="App" style={{display:"flex", height:"100vh"}}>
      <Block />
      <Block />
      <Block />
    </div>
  );
}

export default App;
