import { Navbar } from './components/Navbar/Navbar';
import { Center } from './components/Center/Center';
import { Reputation } from './components/Reputation/Reputation';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Center />
        <Reputation />
      </main>
    </div>
  );
}

export default App;