import "./styles.css"

export default function MainContent() {
  return (
    < div className="main">
      <h1 className="reasons">Reasons I'm excited to learn React</h1>
      <ol className="items">
        <li > React is a popular library with an easier learning curve. </li>
        <li>
          React allows you to have a stronger opinion on how the code should be
          organized.
        </li>
      </ol>
    </div>
  );
}