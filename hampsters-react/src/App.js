import React, { useEffect, useRef } from 'react';
import './App.css'; // Import your main CSS file

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const startAudio = () => {
      audio.loop = true;
      audio.muted = false; // Unmute after user interaction
      audio.play()
        .then(() => {
          console.log('Audio started successfully.');
        })
        .catch(error => {
          console.error('Failed to start audio:', error);
        });
    };

    const handleUserInteraction = () => {
      setTimeout(() => {
        startAudio();
      }, 1000); // 1000 milliseconds = 1 second
    };

    document.addEventListener('click', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>THE HAMPSTER DANCE</h1>
        <h3>dance the night away</h3>
      </header>
      <main className="App-main">
        <div className="hamster-row">
          {[...Array(5)].map((_, index) => (
            <img key={index} src="/images/anin.gif" alt={`Animated Hamster ${index}`} />
          ))}
        </div>
        <div className="hamster-row">
          {[...Array(12)].map((_, index) => (
            <img key={index} src="/images/hamu.gif" alt={`Gerbil Hamster ${index}`} />
          ))}
        </div>
        <div className="hamster-row">
          {[...Array(5)].map((_, index) => (
            <img key={index} src="/images/anin.gif" alt={`Animated Hamster ${index}`} />
          ))}
        </div>
        <div className="hamster-row">
          {[...Array(12)].map((_, index) => (
            <img key={index} src="/images/gerbil.gif" alt={`Animated Hamster ${index}`} />
          ))}
        </div>
        <div className="hamster-row">
          {[...Array(5)].map((_, index) => (
            <img key={index} src="/images/anin.gif" alt={`Animated Hamster ${index}`} />
          ))}
        </div>
        <div className="hamster-row">
          {[...Array(14)].map((_, index) => (
            <img key={index} src="/images/hamwalk.gif" alt={`Animated Hamster ${index}`} />
          ))}
        </div>
        <div className="hamster-row">
          {[...Array(5)].map((_, index) => (
            <img key={index} src="/images/anin.gif" alt={`Animated Hamster ${index}`} />
          ))}
        </div>
        <div className="hamster-row">
          {[...Array(5)].map((_, index) => (
            <img key={index} src="/images/anin.gif" alt={`Animated Hamster ${index}`} />
          ))}
        </div>
        <div className="hamster-row">
          {[...Array(12)].map((_, index) => (
            <img key={index} src="/images/hamu.gif" alt={`Gerbil Hamster ${index}`} />
          ))}
        </div>
        <div className="hamster-row">
          {[...Array(5)].map((_, index) => (
            <img key={index} src="/images/anin.gif" alt={`Animated Hamster ${index}`} />
          ))}
        </div>
        <div className="hamster-row">
          {[...Array(12)].map((_, index) => (
            <img key={index} src="/images/gerbil.gif" alt={`Animated Hamster ${index}`} />
          ))}
        </div>
        <div className="hamster-row">
          {[...Array(5)].map((_, index) => (
            <img key={index} src="/images/anin.gif" alt={`Animated Hamster ${index}`} />
          ))}
        </div>
        <div className="hamster-row">
          {[...Array(14)].map((_, index) => (
            <img key={index} src="/images/hamwalk.gif" alt={`Animated Hamster ${index}`} />
          ))}
        </div>
        <div className="hamster-row">
          {[...Array(5)].map((_, index) => (
            <img key={index} src="/images/anin.gif" alt={`Animated Hamster ${index}`} />
          ))}
        </div>
        <div className="hamster-row">
          {[...Array(5)].map((_, index) => (
            <img key={index} src="/images/anin.gif" alt={`Animated Hamster ${index}`} />
          ))}
        </div>
        <div className="hamster-row">
          {[...Array(12)].map((_, index) => (
            <img key={index} src="/images/hamu.gif" alt={`Gerbil Hamster ${index}`} />
          ))}
        </div>
        <div className="hamster-row">
          {[...Array(5)].map((_, index) => (
            <img key={index} src="/images/anin.gif" alt={`Animated Hamster ${index}`} />
          ))}
        </div>
        <div className="hamster-row">
          {[...Array(12)].map((_, index) => (
            <img key={index} src="/images/gerbil.gif" alt={`Animated Hamster ${index}`} />
          ))}
        </div>
        <div className="hamster-row">
          {[...Array(5)].map((_, index) => (
            <img key={index} src="/images/anin.gif" alt={`Animated Hamster ${index}`} />
          ))}
        </div>
        <div className="hamster-row">
          {[...Array(14)].map((_, index) => (
            <img key={index} src="/images/hamwalk.gif" alt={`Animated Hamster ${index}`} />
          ))}
        </div>
        <div className="hamster-row">
          {[...Array(5)].map((_, index) => (
            <img key={index} src="/images/anin.gif" alt={`Animated Hamster ${index}`} />
          ))}
        </div>
        <div className="hamster-row">
          {[...Array(5)].map((_, index) => (
            <img key={index} src="/images/anin.gif" alt={`Animated Hamster ${index}`} />
          ))}
        </div>
        <div className="hamster-row">
          {[...Array(12)].map((_, index) => (
            <img key={index} src="/images/hamu.gif" alt={`Gerbil Hamster ${index}`} />
          ))}
        </div>
        <div className="hamster-row">
          {[...Array(5)].map((_, index) => (
            <img key={index} src="/images/anin.gif" alt={`Animated Hamster ${index}`} />
          ))}
        </div>
        <div className="hamster-row">
          {[...Array(12)].map((_, index) => (
            <img key={index} src="/images/gerbil.gif" alt={`Animated Hamster ${index}`} />
          ))}
        </div>
        <div className="hamster-row">
          {[...Array(5)].map((_, index) => (
            <img key={index} src="/images/anin.gif" alt={`Animated Hamster ${index}`} />
          ))}
        </div>
        <div className="hamster-row">
          {[...Array(14)].map((_, index) => (
            <img key={index} src="/images/hamwalk.gif" alt={`Animated Hamster ${index}`} />
          ))}
        </div>
        <div className="hamster-row">
          {[...Array(5)].map((_, index) => (
            <img key={index} src="/images/anin.gif" alt={`Animated Hamster ${index}`} />
          ))}
        </div>
        <h2>© 1997 <a href="mailto:hampton@hampsterdance.com">hampton@hampsterdance.com</a></h2>
        <h2>HELP! I can't hear the music!</h2>
      </main>
      <audio ref={audioRef} src="/music/originaldedodedo.wav" />
    </div>
  );
}

export default App;
