// script.js
document.addEventListener('DOMContentLoaded', () => {
  console.log('Script loaded');
  
  const talkBtn = document.getElementById('talk-btn');
  const transcriptDiv = document.getElementById('transcript');
  
  // Check if speech recognition is supported
  if (!('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
    transcriptDiv.textContent = 'Speech recognition not supported in this browser. Try Chrome or Edge.';
    talkBtn.disabled = true;
    return;
  }
  
  // Cross-browser SpeechRecognition
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  
  // Configure recognition
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-US';
  
  // When we get a result
  recognition.onresult = (event) => {
    console.log('Speech recognized:', event.results);
    const text = event.results[0][0].transcript;
    transcriptDiv.innerHTML = `<strong>You said:</strong> "${text}"<br><em>Confidence:</em> ${Math.round(event.results[0][0].confidence * 100)}%`;
    
    // Reply via speech synthesis
    const reply = new SpeechSynthesisUtterance(`You just said: ${text}`);
    window.speechSynthesis.speak(reply);
  };
  
  // Error handling
  recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
    
    if (event.error === 'not-allowed') {
      transcriptDiv.innerHTML = `<strong>Microphone access denied</strong><br>
        Please allow microphone access in your browser settings.<br>
        <small>Note: Speech recognition requires HTTPS or localhost for security reasons.</small>`;
    } else {
      transcriptDiv.textContent = `Error: ${event.error}. Try again.`;
    }
    
    talkBtn.disabled = false;
  };
  
  // When recognition ends
  recognition.onend = () => {
    console.log('Speech recognition ended');
    talkBtn.disabled = false;
    if (transcriptDiv.textContent === 'Listening...') {
      transcriptDiv.textContent = 'No speech detected. Try again.';
    }
  };
  
  // Start listening on click
  talkBtn.addEventListener('click', () => {
    console.log('Button clicked, starting recognition');
    transcriptDiv.textContent = 'Listening...';
    talkBtn.disabled = true;
    
    try {
      recognition.start();
    } catch (err) {
      console.error('Recognition start error:', err);
      transcriptDiv.textContent = `Error starting: ${err.message}`;
      talkBtn.disabled = false;
    }
  });
  
  console.log('Speech recognition initialized');
});
