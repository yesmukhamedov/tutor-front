import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-tomorrow';
import '../style.css';

const PieceEditor = (code='', line=2) => 
    <AceEditor
            mode="python"
            theme="tomorrow"
            value={""}
            readOnly
            style={{ height: line*14, width: '100%' }}
            fontSize={14}
            highlightActiveLine={true}
            showPrintMargin={true}
            showGutter={true}
            className='editor'
            setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 1
            }}
        />

  export default PieceEditor;