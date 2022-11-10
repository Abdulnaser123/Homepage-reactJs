import './style.css';
import {useSpeechSynthesis} from 'react-speech-kit';
import {useState} from 'react';

const HeaderText = () => {
  const [text, setText] = useState('Free shipping for orders above USD 150');
  const {speak} = useSpeechSynthesis();
  const handleSpeech = () => {
    speak({text: text});
  };
  return (
    <div
      className="header-container"
      value="Free shipping for orders above USD 150"
      onChange={(e) => setText(e.target.value)}
      onClick={() => handleSpeech()}
    >
      Free shipping for orders above USD 150
    </div>
  );
};
export default HeaderText;
