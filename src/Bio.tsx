import me from './other-files/me.jpg';
import './Bio.css';

const Bio = () => {
  return (
    <div id="bio">
      <img id="my-picture" src={me} alt="Me" />
      <h1>I am Karoline</h1>
      <p>
      I am 21 years old, and studying computer science, currently at my third year. 
      On my spare time I like dancing and traveling, preferably with good friends. 
      </p>
    </div>
  )
}

export default Bio;