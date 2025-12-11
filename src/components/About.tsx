import School from "./School";

const About = () => {
  const educationData = [
    {
      degree: "Engineering Degree of Computer Science",
      institution: "Institute of Technology of Cambodia (ITC)",
      duration: "2022 - 2026",
      location: "Phnom Penh, Cambodia",
      coursework:
        "Data Structures, Algorithms, Web Development, Database Design",
      website: "https://gic.itc.edu.kh/",
    },

    {
      degree: "General English as a Second Language",
      institution: "Paññāsāstra University of Cambodia (PUC)",
      duration: "2022 - 2024",
      location: "Phnom Penh, Cambodia",
      coursework:
        "Academic Writing, Listening, Speaking, and English for Career",
      website: "https://puc.edu.kh/",
    },

    // Add more education objects here if needed
    // {
    //   degree: "High School Diploma",
    //   institution: "Another School",
    //   duration: "2018 - 2021",
    //   location: "City, Country",
    //   coursework: "Mathematics, Physics, Computer Science",
    //   website: "https://example.com"
    // }
  ];

  return (
    <section id="about" className="py-20">
      <div className="section-container">
        <h2 className="text-3xl font-semibold text-foreground mb-8">
          About Me
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-12 text-lg">
          I'm a motivated computer science student with a strong foundation in
          programming and a passion for creating meaningful software solutions.
          I enjoy working on projects that challenge me to learn and grow as a
          software engineer.
        </p>

        {/* Education Section */}
        <div id="education" className="mt-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Education
          </h3>
          <div className="space-y-6">
            {educationData.map((education, index) => (
              <School
                key={index}
                degree={education.degree}
                institution={education.institution}
                duration={education.duration}
                location={education.location}
                coursework={education.coursework}
                website={education.website}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
