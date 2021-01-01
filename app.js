import marked from "https://cdn.skypack.dev/marked";

marked.setOptions({
  breaks: true,
});

let placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)`;

const MarkDown = () => {
  const [text, setText] = React.useState(placeholder);

  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col-md-6">
          <div>
            <textarea
              value={text}
              id="editor"
              style={{ width: "100%", minHeight: "80vh" }}
              onChange={(e) => setText(e.target.value)}
              className="border border-primary rounded"
            ></textarea>
          </div>
        </div>
        <div
          id="preview"
          className="col-md-6 border border-info rounded"
          style={{ width: "100%", minHeight: "80vh" }}
          dangerouslySetInnerHTML={{
            __html: marked(`${text}`),
          }}
        ></div>
      </div>
    </div>
  );
};
