import React from "react";
import "./Home.css"; // No need to import the image here anymore

const Home = () => {
  return (
    <div className="home">
      {/* Header Section */}
      <header>
        <h1>
          Tulsica Learning & Skill <br />Development Foundation
        </h1>
        <p>Registered students can upload important documents.</p>
      </header>

      {/* Main Content Section */}
      <main>
        <section className="content">
          <h2>Why Choose Us?</h2>
          <p>
            We are providing a wide range of free education on all levels. <br />
            We are providing basic primary education and, on the other hand, complex technologies related to computing.
          </p>
          
          <h3>Our Courses</h3>
          <ul>
            <li>English Communication<br/>& Writing</li>
            <li>SLDC & Domain <br/> Training<br/>(only for aspirant candidates)</li>
            <li>Comptetive Exams preparartion</li>
          </ul>
          
          <h2>Our Mission</h2>
          <p>
            We are trying to educate people to be worthy enough so they can get jobs related to their preference.
          </p>
        </section>
      </main>

      {/* Footer Section */}
      <footer>
        <p>© 2025 Tulsica Learning & Skill Development Foundation</p>
      </footer>
    </div>
  );
};

export default Home;

