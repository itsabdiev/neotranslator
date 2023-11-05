import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import translateText from './GoogleTranslate';

function App() {
  const languageOptions = [
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" import logo from './logo.svg';
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
  src="data:image/png;base64,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"
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
      )}
    </select>
        To :
        <select value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)}>
      {languageOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      )}
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
