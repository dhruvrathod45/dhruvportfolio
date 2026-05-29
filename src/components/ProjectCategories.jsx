function ProjectCategories() {
  return (
    <section className="categories">

      <div className="category-box">

        <p className="category-tag">
          FRONTEND
        </p>

        <h2>
          Frontend Development
        </h2>

        <p className="category-description">

          Building responsive, modern and
          user-focused web applications with
          clean UI, API integrations and
          optimized user experiences.

        </p>

        <ul>

          <li>NovaCart – E-Commerce Platform</li>

          <li>GitNova – GitHub Analytics Dashboard</li>

          <li>Climatrix – Weather Dashboard</li>

          <li>Personal Portfolio Website</li>

        </ul>

      </div>

      <div className="category-box">

        <p className="category-tag">
          BACKEND
        </p>

        <h2>
          Backend Development
        </h2>

        <p className="category-description">

          Designing scalable REST APIs,
          authentication systems, database
          architectures and real-time
          communication solutions.

        </p>

        <ul>

          <li>NotifyX – Notification Platform</li>

          <li>ChatFlow – Real-Time Chat Application</li>

          <li>Task API – Task Management Backend</li>

          <li>URL Shortener Service</li>

        </ul>

      </div>

    </section>
  );
}

export default ProjectCategories;