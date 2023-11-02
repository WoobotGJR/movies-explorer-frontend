import "./NotFoundPage.css";

import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <main>
      <section className="not-found-page">
        <h2 className="not-found-page__title">404</h2>
        <p className="not-found-page__text">Страница не найдена</p>
        <span
          className="not-found-page__return-link"
          onClick={() => navigate(-1)}
        >
          Назад
        </span>
      </section>
    </main>
  );
}

export default NotFoundPage;
