import React, { useEffect, useState } from "react";
import ReactQuill, { Quill, editor } from "react-quill";
// import ImageResize  from 'quill-image-resize-module';
import "react-quill/dist/quill.snow.css";
import katex from "katex";
import "katex/dist/katex.min.css";
import CustomToolbar from "./CustomToolbar";
window.katex = katex;

// Quill.register('modules/ImageResize',ImageResize);
const Editor = () => {
  const [text, setText] = useState("");

  const handleChange = (html) => {
    console.log(html);
    setText(html);
  };
  const modules = {
    toolbar: {
      container: "#toolbar",
    },
  };
  const formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "script",
    "header",
    "blockquote",
    "code-block",
    "indent",
    "list",
    "direction",
    "align",
    "link",
    "image",
    "video",
    "formula",
  ];

  return (
    <>
      <CustomToolbar />
      <ReactQuill
        value={text}
        onChange={handleChange}
        modules={modules}
        formats={formats}
      />
      <div
        style={{ margin: 10, border: "1px solid #000", padding: 10 }}
        dangerouslySetInnerHTML={{ __html: text }}
      ></div>
      <ReactQuill
        value={text}
        readOnly={true}
        modules={{
          toolbar: false,
        }}
      />
      <div>{text}</div>
    </>
  );
};

export default Editor;
