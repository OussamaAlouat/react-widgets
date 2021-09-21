import axios from 'axios';
import React, { useEffect, useState } from 'react';

const googleKey = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

const Convert = (props) => {
  const { language, text } = props;
  const [translated, setTranslated] = useState('');
  const [debouncedText, setDebouncedText] = useState(translated);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    }

  }, [text]);

  useEffect(() => {
    const search = async() => {
      const  { data }  = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
        params: {
          q: debouncedText ,
          target: language.value,
          key: googleKey
        }
      });

      setTranslated(data.data.translations[0].translatedText)
    }

    search();
  }, [language, debouncedText]);

  return (
    <div>
      <h1 className="ui header">{ translated }</h1>
    </div>
  )
}

export default Convert;
