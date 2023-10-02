import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__description">
        <h3 className="about-project__description-title about-project__description-title_stages">
          Дипломный проект включал 5 этапов
        </h3>
        <h3 className="about-project__description-title about-project__description-title_weeks">
          На выполнение диплома ушло 5 недель
        </h3>
        <p className="about-project__description-text about-project__description-text_weeks">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <p className="about-project__description-text about-project__description-text_stages">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className="about-project__timeline">
        <div className="about-project__timeline-title about-project__green-bkg">
          <p className="about-project__timeline-paragraph">1 неделя</p>
        </div>
        <div className="about-project__timeline-title about-project__grey-bkg">
          <p className="about-project__timeline-paragraph">4 недели</p>
        </div>
        <div className="about-project__timeline-text">
          <p className="about-project__timeline-paragraph">Back-end</p>
        </div>
        <div className="about-project__timeline-text">
          <p className="about-project__timeline-paragraph">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
