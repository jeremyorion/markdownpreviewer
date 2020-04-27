import React from 'react';
import ReactHTMLParser from 'react-html-parser';
import marked from 'marked';

function Preview(props) {
    return (
        <div id='preview'>
            {ReactHTMLParser(marked(props.markdownText, {breaks: true}))}
        </div>
    )
}

export default Preview