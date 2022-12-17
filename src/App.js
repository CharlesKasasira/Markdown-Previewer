import { marked } from "marked";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  // console.log(document.getElementById("editor").value);
  const [markdown, setMarkdown] = useState(
    `
# Heading

## Sub-heading
 
### Another deeper heading
 
Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a  
line break

Text attributes *italic*, **bold**, 
\`monospace\`, ~~strikethrough~~.

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

> Block Quotes!

help \n me


![github](https://images.unsplash.com/photo-1671275548086-2653ec0e6bd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)

help \r me

\`\`\`
Hey, look, a code block!
\`\`\`

\`\`\`js
function() {
  console.log("hey")
}
\`\`\`

 *[Helder S Ribeiro](https://freecodecamp.com/hsribei)*
`
  );
  // useEffect(() => {
  //   document.getElementById("preview").innerHTML = marked.parse(markdown);
  // }, []);

  const handleChange = () => {
    document.getElementById("preview").innerHTML = marked.parse(
      document.getElementById("editor").value
    );
  };
  return (
    <div className="App">
      <main>
        <textarea
          id="editor"
          onChange={(event) => setMarkdown(event.target.value)}
          value={markdown}
        ></textarea>
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked(markdown, {breaks: true}),
          }}
        ></div>
      </main>
    </div>
  );
}

export default App;
