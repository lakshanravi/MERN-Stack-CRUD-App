import React, { useEffect } from 'react'
import { useState  } from 'react';
import Nav from '../Nav/Nav';
import axios from 'axios';


function SendPdf() {


  const [title, setTitle] = useState('');
    const[file, setFile] = useState('');
    const[allpdf, setAllPdf] = useState([]);
    useEffect(() => {
      getpdf();
    } , []);
    const getpdf = async () => {
      const result = await axios.get('http://localhost:5000/getFile');
      console.log(result.data.data);
      setAllPdf(result.data.data);

    }

    const submitpdf = async (e) => {
      
      // FormData is a built-in JavaScript object that allows you to construct key-value pairs to send data in an HTTP request (usually POST or PUT).
      // It is commonly used when uploading files, as it allows sending binary data (like images or PDFs).
      // It automatically sets the request Content-Type to multipart/form-data, which is required for file uploads.


      e.preventDefault();
      const formData = new FormData();
      formData.append('title', title);
      formData.append('file', file);
      console.log(title,file);
    
    try {
      const result = await axios.post('http://localhost:5000/uploadfile', formData,{

        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(result);
      if(result.data.success){
        alert('PDF uploaded successfully');
        getpdf();
      }else{
        alert('PDF uploaded error');
      }

    }catch (error) {
      console.error("error uploading : "+ error.message);
      alert('PDF uploaded error');
    }
  }
  return (


    <div>
      <Nav/>
      <h1>SendPdf</h1>
<form  onSubmit={submitpdf}>
  <label>PDF Title</label>
  <input required type="text" name="pdf_title" onChange={(e)=>setTitle(e.target.value)} />
  <br/>
  <label>PDF File</label>
  <input required type="file" name="pdf_file" accept='application/pdf' onChange={(e)=>saveFile(e.target.value[0])}/> 
   {/* //accept krnne pdf vitri */}
<button>submit</button>


  </form>

    </div>
  )
}

export default SendPdf