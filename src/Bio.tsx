import me from "./other-files/me.jpg";
import "./Bio.css";


/**
 * Bio is the component for the top of the home page. 
 * It fills the screen when entering the page, containing 
 * pictures and a welcoming text.
 */
const Bio = () => {
  return (
    <div id="bio">
      <img id="my-picture" src={me} alt="Me" />
      <h1>I am Karoline</h1>
      <p>
        I am 21 years old, and studying computer science, currently at my third
        year. On my spare time I like dancing and traveling, preferably with
        good friends.
      </p>
    </div>
  );
};

export default Bio;
