/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright Contributors to the Zowe Project.
*/

// Still in Progress
import * as React from 'react';
import 'script-loader!./App-css.js';
import { withTranslation } from 'react-i18next';
import * as monaco from 'monaco-editor';

class DocView extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      code: this.props.code as any,
    }
  }

  public editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }

  public onChange(newValue, e) {
    console.log('onChange', newValue, e);
  }

  public render(): JSX.Element {
    const { t } = this.props;
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <div className="monaco-code-editor" id="monacoEditor"></div>
    );
  }
}

export default withTranslation('translation')(DocView);
