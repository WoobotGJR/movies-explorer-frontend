import "./Techs.css";

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__title">Технологии</h2>
      <h3 className="techs__introduction-title">7 технологий</h3>
      <p className="techs__description">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__dev-stack">
        <li className="techs__dev-stack-item">HTML</li>
        <li className="techs__dev-stack-item">CSS</li>
        <li className="techs__dev-stack-item">JS</li>
        <li className="techs__dev-stack-item">React</li>
        <li className="techs__dev-stack-item">Git</li>
        <li className="techs__dev-stack-item">Express.js</li>
        <li className="techs__dev-stack-item">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
