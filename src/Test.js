import React from 'react';
import stutterRec from './utils/stutterRec.js';
import './App.css';

// stutterRec.handleHidingRecordingControlButtons();
// stutterRec.handleDisplayingRecordingControlButtons();
// stutterRec.displayBrowserNotSupportedOverlay();
// stutterRec.hideBrowserNotSupportedOverlay();
// stutterRec.createSourceForAudioElement();
// stutterRec.displayTextIndicatorOfAudioPlaying();
// stutterRec.hideTextIndicatorOfAudioPlaying();
// stutterRec.startAudioRecording();
// stutterRec.stopAudioRecording();
// stutterRec.cancelAudioRecording();
// stutterRec.playAudio();
// stutterRec.handleElapsedRecordingTime();
// stutterRec.displayElapsedTimeDuringAudioRecording();
// stutterRec.elapsedTimeReachedMaximumNumberOfHours();
// stutterRec.computeElapsedTime();



const Test = () => {
    const h1style = {
        display: "flex",
        flexDirection: "column"
      };
    return <div><div class="audio-recording-container">
    <h1 class="title">Audio Recording API Demo</h1>
  <div style={h1style}>
    <h2>Instellingen</h2>
     <span>
    <input id="blob-lenght" type="number" value="100"/>
    Frame in MS
  </span>
  <span>
    <input id="frame-lenght" type="number" value="5"/>
    Frames tot het gaat stotteren
  </span>
  </div>
  
 
  <span style={{marginTop: "40px"}}>
    Spreek de volgende zin uit.
  </span>
  <h3 style={{width: "40%"}}>Er was eens een klein jongetje genaamd Tim. Tim woonde in een rustig dorpje aan de rand van het bos. Hij was dol op avontuur en kon urenlang buiten spelen.

Op een dag besloot Tim om het mysterieuze bos te verkennen. Hij nam zijn verrekijker en zijn rode pet mee. Zijn mama waarschuwde hem om voorzichtig te zijn en niet te ver te gaan.
</h3>
  <span style={{margin: "1rem 0"}}></span>
    <i class="start-recording-button fa fa-microphone" aria-hidden="true"></i>
    <div class="recording-contorl-buttons-container hide">
        <i class="cancel-recording-button fa fa-times-circle-o" aria-hidden="true"></i>
        <div class="recording-elapsed-time">
            <i class="red-recording-dot fa fa-circle" aria-hidden="true"></i>
            <p class="elapsed-time"></p>
        </div>
        <i class="stop-recording-button fa fa-stop-circle-o" aria-hidden="true"></i>
    </div>
    <div class="text-indication-of-audio-playing-container">
        <p class="text-indication-of-audio-playing hide">Audio is playing<span>.</span><span>.</span><span>.</span></p>
    </div>
</div>
<div class="overlay hide">
    <div class="browser-not-supporting-audio-recording-box">
        <p>To record audio, use browsers like Chrome and Firefox that support audio recording.</p>
        <button type="button" class="close-browser-not-supported-box">Ok.</button>
    </div>
</div>

<audio controls class="audio-element hide">
</audio>

</div>;
};

export default Test;