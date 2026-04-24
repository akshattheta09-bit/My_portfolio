import { useFadeIn } from "@/hooks/useFadeIn";

const skills = [
  "Python",
  "Django",
  "Django REST Framework",
  "MVT",
  "REST APIs",
  "APIs",
  "API Development",
  "JavaScript",
  "HTML5",
  "HTML",
  "CSS",
  "Web Development",
  "Back-End Web Development",
  "Docker",
  "Docker Swarm",
  "Kubernetes",
  "OpenShift",
  "Containerization",
  "SQL",
  "Relational Databases",
  "DBMS",
  "Database Design",
  "Git",
  "GitHub",
  "Git BASH",
  "Test-Driven Development",
  "Software Testing",
  "OOP",
  "PyTorch",
  "Pandas",
  "NumPy",
  "Prompt Engineering",
  "Insomnia",
  "Blender",
  "AutoCAD",
  "Leadership",
  "Collaboration",
  "Internet Protocol",
];

export default function Skills() {
  const fade = useFadeIn();

  return (
    <section id="skills" className="section">
      <div
        ref={fade.ref}
        className={`fade-section ${fade.visible ? "visible" : ""}`}
      >
        <span className="section-label">SKILLS & TECHNOLOGIES</span>
        <h2 className="section-title">Tools of the trade.</h2>

        <div className="mt-12 flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="tag hover:-translate-y-1"
              style={{
                padding: "8px 20px",
                fontSize: "14px",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
