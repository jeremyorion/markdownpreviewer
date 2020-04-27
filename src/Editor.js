import React from 'react';

function Editor(props) {
    return (
        <textarea name="editor" id="editor" cols="60" rows="30"
    onChange={props.handleTextChange}>{props.defaultValue}</textarea>
    )
}

export default Editor