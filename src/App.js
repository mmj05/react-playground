import React from 'react';
//import Split from './composition/Split';
import './App.css';
//import TheDate from './state/TheDate';
//import Counter from './state/Counter';
//import TooltipClass from './composition/Tooltip';
import Tabs from './state/Tabs';

const tabsProp = [
  {
    name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.'
  },
  {
    name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.'
  },
];

class App extends React.Component {
  render() {
    return <div>
      <Tabs tabs={tabsProp} />
    </div>
  }
}

export default App;

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