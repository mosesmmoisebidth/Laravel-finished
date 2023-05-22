
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
function App() {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="right-4 bottom-4 fixed" style={{zIndex:'1000'}}>
          <TooltipComponent content="Settings" position="Top">
            <button type="button" className="text-3xl p-3 hover:drop-shadow-3xl text-white hover:bg-light-grey" style={{backgroundColor:'blue', borderRadius:'50%'}}>
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        { activeMenu ? (
          <div>Side bar</div>
        ) : (
          <div className="w-0">
            Side menu
          </div>
        )}
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
