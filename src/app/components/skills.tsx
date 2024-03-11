import React from "react";

function Skills() {
  return (
    <>
      <div className="collapse bg-black text-white text-center font-semibold border-2 border-green-500">
        <input type="checkbox" className="peer" />
        <div className="collapse-title p-4">
          <p className="text-xl font-bold text-green-500">Skills</p>
        </div>
        <div className="collapse-content">
          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>TailwindCSS</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Wordpress</li>
            <li>Playwright (E2E)</li>
            <li>Manual testing</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Skills;
