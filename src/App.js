import { useEffect, useState } from "react";
import axios from "axios";
import PdfComp from "./PdfComp";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";


function App() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [allImage, setAllImage] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);

  useEffect(() => {
    getPdf();
  }, []);
  const getPdf = async () => {
    const result = await axios.get("http://localhost:5000/get-files");
    console.log(result.data.data);
    setAllImage(result.data.data);
  };

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    console.log(title, file);

    const result = await axios.post(
      "http://localhost:5000/upload-files",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(result);
    if (result.data.status == "ok") {
      alert("Uploaded Successfully!!!");
      getPdf();
    }
  };
  const showPdf = (pdf) => {
    // window.open(`http://localhost:5000/files/${pdf}`, "_blank", "noreferrer");
    setPdfFile(
      `https://themodernfirm.com/wp-content/uploads/2017/12/Sample-Fillable-PDF.pdf`
    );
  };
  const getObjectData = () => {
    var myData = "";
    var object = document.getElementById("pdf-file");
    console.log(object);
    //get data inside object data
    var myData = object.contentDocument;

    alert("myData => " + myData + " <= myData");
  };
  return (
    <div className="App">
      <iframe
        title="pdf"
        src="https://themodernfirm.com/wp-content/uploads/2017/12/Sample-Fillable-PDF.pdf"
        style={{ width: "600px", height: "500px" }}
        frameborder="0"
      ></iframe>
      <object
        id="pdf-file"
        data="https://themodernfirm.com/wp-content/uploads/2017/12/Sample-Fillable-PDF.pdf"
        type="application/pdf"
        width="100%"
        height="1000px"
      >
        <p>
          Alternative text - include a link{" "}
          <a href="https://themodernfirm.com/wp-content/uploads/2017/12/Sample-Fillable-PDF.pdf">
            to the PDF!
          </a>
        </p>
      </object>
      <button onClick={getObjectData}>Get Object Data</button>
      <form className="formStyle" onSubmit={submitImage}>
        <h4>Upload Pdf in React</h4>
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          type="file"
          class="form-control"
          accept="application/pdf"
          required
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <button class="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      <div className="uploaded">
        <h4>Uploaded PDF:</h4>
        <div className="output-div">
          {allImage == null
            ? ""
            : allImage.map((data) => {
                return (
                  <div className="inner-div">
                    <h6>Title: {data.title}</h6>
                    <button
                      className="btn btn-primary"
                      onClick={() => showPdf(data.pdf)}
                    >
                      Show Pdf
                    </button>
                  </div>
                );
              })}
        </div>
      </div>
      <PdfComp pdfFile={pdfFile} />
    </div>
  );
}

export default App;
