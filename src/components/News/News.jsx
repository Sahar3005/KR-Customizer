import "./News.css";

function News() {
  return (
    <section className="news">

      <div className="news-content">

        <div className="news-left">

          <h2>
            See What's New
            <br />
            with KR Customizer
            <br />
            Every Time
          </h2>

          <p>
            Track your product journey with KR Customizer and get clear
            updates. Whether it's a shiny new tool or a small
            improvement, nothing slips by unnoticed.
          </p>

          <button>TRY FOR FREE</button>

        </div>

        <div className="news-right">

          <img src="/News.png" alt="" />

        </div>

      </div>

    </section>
  );
}

export default News;