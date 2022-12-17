import './style.css';
import {useSpeechSynthesis} from 'react-speech-kit';
import {useState} from 'react';
const Slider = () => {
  const [text, setText] = useState('Perfume Tips Trick');
  const {speak} = useSpeechSynthesis();
  const handleSpeech = () => {
    speak({text: text});
  };

  return (
    <div className="SlidesContainer">
      <div className="LeftArrow arrowHover">
        <div className="arrow left"></div>
      </div>
      <div className="RightArrow arrowHover">
        <div className="arrow right"></div>
      </div>
      <div className="content">
        <span
          className="MySpan"
          value="abdelnasser"
          onChange={(e) => setText(e.target.value)}
          onClick={() => handleSpeech()}
        >
          Perfume Tips <br></br>Tricks
        </span>
        <button className="MyButton">shop now</button>
      </div>
    </div>
  );
};
export default Slider;
