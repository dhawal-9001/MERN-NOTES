import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import light from "../Logo_Icons/lightmode.svg";
// import dark from "../Logo_Icons/darkmode.svg";
const Textutils = () => {
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // VARIABLES

  // const [mode, setMode] = useState("light");
  const [text, settext] = useState("");
  const [preview_text1, setpreview_text1] = useState("");
  const [preview_text2, setpreview_text2] = useState("");
  const [count_word, setcountword] = useState("");
  const [count_char, setcountchar] = useState("");
  const [count_sent, setcountsent] = useState("");

  const navigate = useNavigate();

  // const toggleMode = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "rgb(62,68,74)";
  //     document.body.style.color = "rgb(255,255,255)";
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "rgb(255,255,255)";
  //     document.body.style.color = "rgb(0,0,0)";
  //   }
  // };
  let currStyle = {
    // color: mode === "light" ? "black" : "white",
    color: "black",
  };

  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // METHODS

  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/login");
    // eslint-disable-next-line
  }, []);
  const handelUperCase = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
  };
  const handelLowerCase = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
  };
  const handelCaptalize = () => {
    let text1 = text.split(" ");
    let newtext = "";
    text1.forEach((element) => {
      newtext +=
        element.substring(0, 1).toUpperCase() +
        element.substring(1).toLowerCase() +
        " ";
    });
    settext(newtext.slice(0, -1));
  };
  const handleExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    settext(newtext.join(" "));
  };
  const handleExtraLines = () => {
    let newtext = text.replace(/\s+/g, " ").trim();
    settext(newtext);
  };
  const handelReset = () => {
    settext("");
    handelWordCount();
    handelCharCount();
    handelSentCount();
    handelWordCount();
    handelCharCount();
    handelSentCount();
  };
  const handelCopy = () => {
    navigator.clipboard.writeText(text);
    alert(
      text.length > 0 ? "Text copied to clipboard" : "Enter text below to copy"
    );
  };
  const handelSentCount = () => {
    let _text = text.replace(/\s+/g, " ").trim();
    if (document.getElementById("count_sent").checked === true) {
      let count = _text.split(".").length;
      if (_text === "") {
        count = 0;
      }
      setcountsent("Total number of sentances are : " + count);
    } else {
      setcountsent("");
    }
  };
  const handelWordCount = () => {
    let _text = text.replace(/\s+/g, " ").trim();
    if (document.getElementById("count_words").checked === true) {
      if (_text === "") {
        setcountword("Number of word is : 0");
      } else {
        let count = _text.split(" ").length;
        if (count < 2) {
          setcountword("Number of word is : " + count);
        } else {
          setcountword("Total number of words are : " + count);
        }
      }
    } else {
      setcountword("");
    }
  };
  const handelCharCount = () => {
    let _text = text.replace(/\s+/g, " ").trim();
    if (document.getElementById("count_chars").checked === true) {
      let count = _text.length;
      if (count < 2) {
        setcountchar("Number of character is : " + count);
      } else {
        setcountchar("Total number of characters are : " + count);
      }
    } else {
      setcountchar("");
    }
  };
  const handelPreview1 = () => {
    setpreview_text2("");
    setpreview_text1(
      text.length > 0 ? text : "Enter text above to preview it here"
    );
  };
  const handelPreview2 = () => {
    setpreview_text1("");
    setpreview_text2(
      text.length > 0 ? text : "Enter text above to preview it here"
    );
  };
  const textchange = (event) => {
    settext(event.target.value);
    handelWordCount();
    handelCharCount();
    handelSentCount();
  };

  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // RETURN

  if (!localStorage.getItem("token")) {
    navigate("/login");
  } else {
    return (
      <div className="m-2 py-5">
        {/* <div
        className="py-4"
        style={{
          display: "flex",
          position: "absolute",
          justifyContent: "flex-end",
          right: "700px",
        }}
      >
      </div> */}
        <h3 className="my-3 text-center">
          TextUtils: Analyzer, Manipulate, Update Text
        </h3>

        {/* <div className="py-4"
        style={{
          display: "flex",
          position: "absolute",
          justifyContent: "flex-end",
          right: "110px",
        }}
      >
        <button className="btn my-2 my-sm-0" type="button" onClick={toggleMode}>
          <img
            src={mode === "light" ? light : dark}
            alt=""
            width="30"
            height="34"
            className="d-inline-block align-text-top"
            onClick={toggleMode}
          />
        </button>
      </div> */}
        <div className="container mt-4 pt-4">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            value={text}
            placeholder="Enter Your text here"
            onChange={textchange}
            style={{
              color: "black",
              backgroundColor: "white",
              // color: mode === "light" ? "black" : "white",
              // backgroundColor: mode === "light" ? "white" : "rgb(72,78,84)",
            }}
          ></textarea>
        </div>
        <div className="container  ">
          <center>
            <button
              type="button"
              className={`btn-sm btn-bg-custom m-2`}
              // className={`btn btn-${mode === "light" ? "dark" : "light"} my-2 mr-2`}
              onClick={handelUperCase}
            >
              CONVERT TO UPPERCASE
            </button>
            <button
              type="button"
              className={`btn-sm btn-bg-custom m-2`}
              // className={`btn btn-${mode === "light" ? "dark" : "light"} m-2`}
              onClick={handelLowerCase}
            >
              convert to lowerCase
            </button>
            <button
              type="button"
              className={`btn-sm btn-bg-custom m-2`}
              // className={`btn btn-${mode === "light" ? "dark" : "light"} m-2`}
              onClick={handelCaptalize}
            >
              Capatalize Each Word
            </button>
            <button
              type="button"
              className={`btn-sm btn-bg-custom m-2`}
              // className={`btn btn-${mode === "light" ? "dark" : "light"} m-2`}
              onClick={handleExtraSpaces}
              // style={{padding:"2px"}}
            >
              Remove Extra Spaces
            </button>
            <button
              type="button"
              className={`btn-sm btn-bg-custom m-2`}
              // className={`btn btn-${mode === "light" ? "dark" : "light"} m-2`}
              onClick={handleExtraLines}
            >
              Remove Extra Spaces with Lines
            </button>
            <button
              type="button"
              className={`btn-sm btn-bg-custom m-2`}
              // className={`btn btn-${mode === "light" ? "dark" : "light"} m-2`}
              onClick={handelCopy}
            >
              Copy to clipboard
            </button>
            <button
              type="button"
              className={` btn-sm btn-bg-custom m-2`}
              // className={`btn btn-${mode === "light" ? "dark" : "light"} m-2`}
              onClick={handelReset}
              // onClick={{handelReset, handelReset}}
            >
              Reset
            </button>
            <button
              type="button"
              className={` btn-sm btn-bg-custom m-2`}
              // className={`btn btn-${mode === "light" ? "dark" : "light"} m-2`}
              onClick={handelPreview1}
            >
              Preview As It Is
            </button>
            <button
              type="button"
              className={` btn-sm btn-bg-custom m-2`}
              // className={`btn btn-${mode === "light" ? "dark" : "light"} m-2`}
              onClick={handelPreview2}
            >
              Preview
            </button>
          </center>
          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              className="custom-control-input"
              id="count_words"
              onChange={handelWordCount}
            />
            <label
              className="custom-control-label count_char"
              htmlFor="count_words"
            >
              Count Words
            </label>
          </div>
          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              className="custom-control-input"
              id="count_chars"
              onChange={handelCharCount}
            />
            <label
              className="custom-control-label count_char"
              htmlFor="count_chars"
            >
              Count Characters
            </label>
          </div>
          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              className="custom-control-input"
              id="count_sent"
              onChange={handelSentCount}
            />
            <label
              className="custom-control-label count_char"
              htmlFor="count_sent"
            >
              Count Sentances
            </label>
          </div>
        </div>
        <div className="container">
          <h3>Summary</h3>
          <p>{count_word}</p>
          <p>{count_char}</p>
          <p>{count_sent}</p>
        </div>
        <div className="container">
          <pre id="preview1" style={currStyle}>
            {preview_text1}
          </pre>
          <p id="preview2">{preview_text2}</p>
          <pre>{}</pre>
        </div>
      </div>
    );
  }
};

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// EXPORT

export default Textutils;
