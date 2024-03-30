import './App.css';
import MainLayout from './Layout/MainLayout'
import RoutesComponent from './Layout/Routes';
function App() {
  return (
    <div className="App">
      <MainLayout>
        <RoutesComponent />
      </MainLayout>
    </div>
  );
}

export default App;
