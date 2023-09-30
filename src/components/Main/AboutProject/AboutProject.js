import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__description">
        <div className="about-project__description-title about-project__description-title_stages">
          Дипломный проект включал 5 этапов
        </div>
        <div className="about-project__description-title about-project__description-title_weeks">
          На выполнение диплома ушло 5 недель
        </div>
        <div className="about-project__description-text about-project__description-text_weeks">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </div>
        <div className="about-project__description-text about-project__description-text_stages">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </div>
      </div>
      <div className="about-project__timeline">
        <div className="about-project__timeline-title about-project__green-bkg">
          1 неделя
        </div>
        <div className="about-project__timeline-title about-project__grey-bkg">
          4 недели
        </div>
        <div className="about-project__timeline-text">Back-end</div>
        <div className="about-project__timeline-text">Front-end</div>
      </div>
    </section>
  );
}

export default AboutProject;
