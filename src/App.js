import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import translateText from './GoogleTranslate';
import MyImage from './images/logo.png';

function App() {
  const languageOptions = [
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
  { value: "en", label: "English" },
  { value: "ky", label: "Kyrgyz" },
  { value: "ru", label: "Russian" },
  { value: "de", label: "German" },
  { value: "it", label: "Italian" },
  { value: "pt", label: "Portuguese" },
  { value: "zh-CN", label: "Chinese (Simplified)" },
  { value: "zh-TW", label: "Chinese (Traditional)" },
  { value: "ja", label: "Japanese" },
  { value: "ko", label: "Korean" },
  { value: "ar", label: "Arabic" },
  { value: "tr", label: "Turkish" },
  { value: "hi", label: "Hindi" },
  { value: "ur", label: "Urdu" },
  { value: "fa", label: "Persian" },
  { value: "nl", label: "Dutch" },
  { value: "sv", label: "Swedish" },
  { value: "fi", label: "Finnish" },
  { value: "el", label: "Greek" },
  { value: "pl", label: "Polish" },
  { value: "he", label: "Hebrew" },
  { value: "th", label: "Thai" },
  { value: "vi", label: "Vietnamese" },
  { value: "id", label: "Indonesian" },
  { value: "ms", label: "Malay" },
  { value: "fil", label: "Filipino" },
  { value: "kk", label: "Kazakh (Kazakh Cyrillic script)" },
  { value: "uz", label: "Uzbek (Uzbek Latin script)" },
];
  const [inputText, setInputText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('es');
  const [sourceLanguage, setSourceLanguage] = useState('es');
  const [outputText, setOutputText] = useState('');
  const handleTranslate = async () => {
    if (inputText) {
      const translatedText = await translateText(inputText, targetLanguage,sourceLanguage);
      setOutputText(translatedText);
    }
  }  

  return (
    <div className="App">
      <div>
        <div>
        <img
  src={MyImage}
  alt="Your Logo"
  className="logo"
/>
</div>
        From :
        <select value={sourceLanguage} onChange={(e) => setSourceLanguage(e.target.value)}>
      {languageOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
        To :
        <select value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)}>
      {languageOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
      </div>
      <div>
      <textarea cols={50} rows={8}
        value={inputText} onChange={(e) => setInputText(e.target.value)}
      />
      </div>
      <div>
        <textarea cols={50} rows={8} value={outputText}></textarea>
      </div>
      <div>
        <button onClick={handleTranslate}>Translate</button>
      </div>
    </div>
  );
}

export default App;
