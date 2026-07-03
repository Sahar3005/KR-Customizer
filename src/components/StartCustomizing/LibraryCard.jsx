function LibraryCard() {
  return (
    <div className="library-card">

      <div className="library-header">
        <h5>Kr Customizer Design Library</h5>
      </div>

      <div className="design-grid">

        <div className="design-item">
          <div className="design-box">
            <img src="/dark color.png" alt="Patterns" />
          </div>
          <p>Patterns</p>
        </div>

        <div className="design-item">
          <div className="design-box">
            <img src="/light.png" alt="Colors" />
          </div>
          <p>Colors</p>
        </div>

        <div className="design-item">
          <div className="design-box">
            <img src="/shapes.png" alt="Shapes" />
          </div>
          <p>Shapes</p>
        </div>

        <div className="design-item">
          <div className="design-box">
            <img src="/love.png" alt="Fonts" />
          </div>
          <p>Fonts</p>
        </div>

      </div>

    </div>
  );
}

export default LibraryCard;