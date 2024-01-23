import { useEffect } from "react";
import { useState } from "react";

const finishedLines = [
  "./about_self.sh",
  "starting...",
  "Hello, I'm Taylor",
  "I'm a current Master's student, focused on Robotics and Computer Graphics.",
  "I have a background in various programming languages, like C++, Python, C# and JavaScript."
];

const Home = () => {
  const [line0, setLine0] = useState("");
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [line3, setLine3] = useState("");
  const [line4, setLine4] = useState("");

  const [currentLine, setCurrentLine] = useState(0);



  const handleType = () => {
    const setLineFunctions = [setLine0, setLine1, setLine2, setLine3, setLine4];
    const allLines = [line0, line1, line2, line3, line4];

    if (allLines[currentLine].length !== finishedLines[currentLine].length){
      setLineFunctions[currentLine](oldLine => oldLine.concat(finishedLines[currentLine].charAt(oldLine.length)));
    }
    else {
      if (currentLine === 4)
        return;
      setCurrentLine(oldLine => oldLine + 1);
    }
  };

  useEffect(() => {
    if (line4.length === finishedLines[4].length) return;
    if (currentLine < 5) {
      setTimeout(handleType, 50);
    }
  }, [line0, line1, line2, line3, line4, currentLine]);

  useEffect(() => {
    handleType();
  }, []);

  return(
    <div className="p-2">
      <div>
        <div className="mockup-code pl-2">
          <pre data-prefix="$"><code>{line0}</code></pre>
          {line1.length > 0 && <pre data-prefix=">" className="text-warning whitespace-pre-wrap"><code>{line1}</code></pre>}
          {line2.length > 0 && <pre data-prefix=">" className="text-warning whitespace-pre-wrap"><code>{line2}</code></pre>}
          {line3.length > 0 && <pre data-prefix=">" className="text-success whitespace-pre-wrap"><code>{line3}</code></pre>}
          {line4.length > 0 && <pre data-prefix=">" className="text-success whitespace-pre-wrap"><code>{line4}</code></pre>}
        </div>
      </div>
    </div>
  )
}
export default Home;