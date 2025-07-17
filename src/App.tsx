import Header from './components/Header';

function App() {
  return (
    <div className="w-screen h-screen bg-bg bg-[radial-gradient(#413D56_3px,transparent_0)] bg-[size:2rem_2rem] grid place-items-center">
      <main className="w-2/3 h-3/4 border-3 bg-bg/20 border-primary rounded-3xl backdrop-blur-xs">
        <Header />
      </main>
    </div>
  );
}

export default App;
