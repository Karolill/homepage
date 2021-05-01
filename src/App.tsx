import React from "react";
import "./App.css";
import Button from "./Button";
import Header from "./Header";
import Bio from "./Bio";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="main-part">
        <Bio />
        <Button
          title="Visit my Github account"
          color="pink"
          onclick="https://github.com/Karolill"
        />
        <Button
          title="Get in touch at LinkedIn"
          color="blue"
          onclick="https://linkedin.com/in/karoline-lillevestre-langli-4975b117a"
        />
      </div>

      {/*The following svgs for the circles were created using figma*/}
      <svg
        id="pink-circle"
        className="blury-circle"
        width="500"
        height="500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f)">
          <circle cx="250" cy="250" r="150" fill="#FFD3D3" />
        </g>
        <defs>
          <filter
            id="filter0_f"
            x="0"
            y="0"
            width="500"
            height="500"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur" />
          </filter>
        </defs>
      </svg>

      <svg
        id="yellow-circle"
        className="blury-circle"
        width="500"
        height="500"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f)">
          <circle cx="250" cy="250" r="150" fill="#FFEB94" />
        </g>
        <defs>
          <filter
            id="filter0_f"
            x="0"
            y="0"
            width="500"
            viewBox="0 0 500 500"
            height="500"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur" />
          </filter>
        </defs>
      </svg>

      <svg
        id="blue-circle"
        className="blury-circle"
        width="500"
        height="500"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f)">
          <circle cx="250" cy="250" r="150" fill="#C1ECE9" />
        </g>
        <defs>
          <filter
            id="filter0_f"
            x="0"
            y="0"
            width="500"
            height="500"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default App;
