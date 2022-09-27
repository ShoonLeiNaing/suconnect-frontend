import { Box } from "@mui/material";
import { useState, FunctionComponent } from "react";
import ReactQuill from "react-quill";
import { Grammarly, GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import "react-quill/dist/quill.snow.css";

interface IProps {
  value?: string;
  setValue?: any;
}

const TextEditor: FunctionComponent<IProps> = () => {
  const [value, setValue] = useState("");

  return (
    <Box color="black" height="190px">
      {/* <Box height="300px">
        <Grammarly clientId="client_BCJJevCqLE5N5fNprYHYW8">
          <GrammarlyEditorPlugin>
            <textarea style={{ backgroundColor: "red" }} />
          </GrammarlyEditorPlugin>
        </Grammarly>
      </Box> */}
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        style={{ height: "100%" }}
      />
    </Box>
  );
};

export default TextEditor;
