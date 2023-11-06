import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-tomorrow';
import Brython from 'brython';
import '../style.css';

const Editor = (input="", output="") => {
  const [state, setState] = React.useState({
    code: {
      input: input,
      output: output
    }
  })
  
    // useEffect(() => {
    //   Brython.run_script();
    // }, []);
  
    const executeCode = () => {
      setState({...state, code: {...state.code, output: ''}});
      try {
        Brython.run_script(state.code.input);
      } catch (error) {
        setState({...state, code: {...state.code, output: `Қате: ${error}`}});
      }
    };
  
    return (
      <div className='editor'>
        <Row>
          <Col span={24}><button onClick={executeCode}>Выполнить</button></Col>
        </Row>
        <Row>
          <Col span={12}>
            <AceEditor
              mode="python"
              theme="tomorrow"
              value={""} //state.code.input
              onChange={(newCode) => setState({...state, code: {...state.code, input: newCode}})}
              style={{ height: '300px', width: '100%' }}
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
          </Col>
          <Col span={12}>
        <div>
          <h3>Вывод:</h3>
          <AceEditor
                mode="python"
                theme="tomorrow"
                value={""} //state.code.output 
                readOnly
                style={{ height: '300px', width: '100%' }}
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
              {/* <pre>{output}</pre> */}
            </div>
          </Col>
        </Row>
      </div>
    );
  }

  export default Editor;