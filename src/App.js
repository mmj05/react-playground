import React from 'react';
//import Split from './composition/Split';
import './App.css';
//import TheDate from './state/TheDate';
import Counter from './state/Counter';
//import TooltipClass from './composition/Tooltip';

/*const firstTooltip = (
  <TooltipClass color='hotpink' message='tooltip message'>
    ipsum
  </TooltipClass>
)
const secondTooltip = (
  <TooltipClass color='#126BCC' message='another tooltip message'>
    officiis
  </TooltipClass>
)


function App() {
  return (
    <main className='App'>
      <Split className='left'>
        This is the content for the left Split. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?<br />
        {/* make another tooltip directly inside the App }
        <TooltipClass message='one more tooltip message'>
          Necessitatibus?
        </TooltipClass>
      </Split>
      <Split className='right'>
        This is the content for the right Split. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
      </Split>
    </main>
  );
}*/
function App() {
  return (
    <main className='App'>
      <Counter step={1}/>
    </main>
  )
}

export default App;