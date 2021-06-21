import React, { useState } from 'react';
import Title from '../../components/Title';
import { Link } from "react-router-dom";
import '../../sass/main.css';
import axios from 'axios';

function AddScript() {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const handleTitleChange = ({target: {value}}) => setTitle(value)
  const handleContentsChange = ({target: {value}}) => setContents(value)
  const handleSubmit = () => {
    axios.post('http:/soongcom.kro.kr:3001/register/script', {body : {
      ScriptName: title,
      ScriptContent: contents
    }}).then(()=>{
      alert('등록 완료!');
    })
  }

  var now = 'unfinish';
  if(contents.length > 0 && title.length > 0) {
    now = 'finish'
  }

  return (
    <div >
      <Title title = '스크립트 등록'/>
      <form id='script-add-form'>
        <p>
          <input id="script-title-form"
            autoComplete="off"
            type="text" 
            name="title"
            placeholder="제목을 입력하세요."
            maxLength="30"
            value={title}
            onChange={handleTitleChange}
          />
        </p>

        <p>
          <textarea 
            className="notes"
            autoComplete="off"
            type="text"
            name="content"
            placeholder="내용을 입력하세요. (최대 500자)"
            maxLength="500"
            value={contents}
            onChange={handleContentsChange}
          />
        </p>
        <p>
          
          <Link  to ='/show-script' onClick={handleSubmit}>
            {
              {
                unfinish : <button type="submit" id='script-offbutton-form' disabled>등록</button>,
                finish : <button type="submit" id='script-onbutton-form'>등록</button>
              }[now]
            }
          </Link>
        </p>
      </form>
      
    </div>
  );
}

export default AddScript;