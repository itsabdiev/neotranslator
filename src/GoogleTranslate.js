import axios from 'axios';

const API_KEY = 'AIzaSyB2Y6i188vHCaPHQEAdI3NGG7C5WewrP0c';
const API_URL = 'https://translation.googleapis.com/language/translate/v2';

const translateText = async (text, targetLanguage, sourceLanguage) => {
  if(targetLanguage != null && sourceLanguage != null && !(targetLanguage === sourceLanguage)) {
  const response = await axios.post(
    `${API_URL}?key=${API_KEY}`,
    {
      q: text,
      source: sourceLanguage,
      target: targetLanguage,
    }
  );

  return response.data.data.translations[0].translatedText;
  }else{
    return "Кажеться, ты выбрал один тот же язык для перевода, поменяй пожалуйста";
  }
};


export default translateText;