
import React, {useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {

  let [filename, setFilename] = useState('');
  let [expiration, setExpiration] = useState('');
  let [code, setCode] = useState('');

  let inputArray = [];
  inputArray.push(filename, expiration, code);



  console.log(expiration);


  const handleSubmit = (event) => {
    let apiCall = 'https://pastebin.com/api/api_post.php';
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','http://localhost:3000');
    headers.append('Access-Control-Allow-Origin', '*',)

    if (!inputArray.includes('')) {
      axios
      .post(apiCall, {
        mode: 'cors',
        credentials: 'include',
        method: 'POST',
        headers: headers
      })
      .then(() => {

      })
      .catch( () => {

      })
    }else {
      alert('empty value')
    }
    event.preventDefault();
  }

  return (
    <div className="App">
      <h1>
        <a href="/instructions.html"> instructions </a>
      </h1>
      <br />
      <img
        className="logo"
        src="https://pastebin.com/i/pastebin_logo_side_outline.png"
        alt="pastebin"
      />
      <form className="col-10 offset-1" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="api_paste_name">Filename</label>
          <input
            onChange={(e) => setFilename(e.target.value)}
            type="text"
            className="form-control"
            id="api_paste_name"
            name="api_paste_name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="api_paste_expire_date">Expiration</label>
          <select onChange={(e) => setExpiration(e.target.value)}
            className="custom-select"
            id="api_paste_expire_date"
            name="api_paste_expire_date"
          >
            <option defaultValue="10M" >
              10 Minutes
            </option>
            <option value="1H">1 Hour</option>
            <option value="1D">1 Day</option>
          </select>
        </div>
        <div class="form-group">
          <label for="api_paste_code">Code</label>
          <textarea  onChange={(e) => setCode(e.target.value)}
            class="form-control"
            id="api_paste_code"
            name="api_paste_code"
            rows="3"
          />
        </div>
        <input type="hidden" name="api_paste_private" value="0" />
        <input type="hidden" name="api_option" value="paste" />
        <input type="hidden" name="api_user_key" value="" />
        <input
          type="hidden"
          name="api_dev_key"
          value="Vzw9fccDLOlfuCnnETD19DDDwpeZS-n7"
        />
        <div className="form-group">
          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </div>
        <p>Your link is: ~~~~</p>
      </form>
    </div>
  );
}

export default App;
