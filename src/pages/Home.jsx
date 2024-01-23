import { useEffect } from "react";
import { useState } from "react";

const finishedLines = [
  "./about_self.sh",
  "starting...",
  "Hello, I'm Taylor Anderson",
  "I'm a current Master's student, focused on Robotics and Computer Graphics.",
  "I have a background in various programming languages, like C++, Python, C# and JavaScript.",
  "Use the buttons below to check out more:"
];

const Home = () => {
  const [line0, setLine0] = useState("");
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [line3, setLine3] = useState("");
  const [line4, setLine4] = useState("");
  const [line5, setLine5] = useState("");

  const [currentLine, setCurrentLine] = useState(0);



  const handleType = () => {
    const setLineFunctions = [setLine0, setLine1, setLine2, setLine3, setLine4, setLine5];
    const allLines = [line0, line1, line2, line3, line4, line5];

    if (allLines[currentLine].length !== finishedLines[currentLine].length){
      setLineFunctions[currentLine](oldLine => oldLine.concat(finishedLines[currentLine].charAt(oldLine.length)));
    }
    else {
      if (currentLine === 5)
        return;
      setCurrentLine(oldLine => oldLine + 1);
    }
  };

  useEffect(() => {
    if (line5.length === finishedLines[5].length) return;
    if (currentLine < 6) {
      setTimeout(handleType, 16);
    }
  }, [line0, line1, line2, line3, line4, line5, currentLine]);

  useEffect(() => {
    handleType();
  }, []);

  return(
    <div className="p-2 flex flex-col h-screen items-center">
      <div className="w-full lg:w-2/3">
        <div className="mockup-code pl-2">
          <pre data-prefix="$"><code>{line0}</code></pre>
          {line1.length > 0 && <pre data-prefix=">" className="text-warning whitespace-pre-wrap"><code>{line1}</code></pre>}
          {line2.length > 0 && <pre data-prefix=">" className="text-success whitespace-pre-wrap"><code>{line2}</code></pre>}
          {line3.length > 0 && <pre data-prefix=">" className="text-success whitespace-pre-wrap"><code>{line3}</code></pre>}
          {line4.length > 0 && <pre data-prefix=">" className="text-success whitespace-pre-wrap"><code>{line4}</code></pre>}
          {line5.length > 0 && <pre data-prefix=">" className="whitespace-pre-wrap"><code>{line5}</code></pre>}
          {line5.length === finishedLines[5].length &&
          <div class="flex flex-row justify-center">
            <a class="btn btn-primary m-1 mt-2" href='/about'>About Me</a>
            <a class="btn btn-primary m-1 mt-2" href='/projects'>Projects</a>
            <a class="btn btn-primary m-1 mt-2" href='https://github.com/tganderson0'><i class="fa-brands fa-github"></i></a>
            <a class="btn btn-primary m-1 mt-2" href='https://www.linkedin.com/in/taylor-anderson-16887022b/'><i class="fa-brands fa-linkedin"></i></a>
          </div>
          }
        </div>
      </div>
    </div>
  )
}
export default Home;