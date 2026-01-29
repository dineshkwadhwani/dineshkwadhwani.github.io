import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, GraduationCap, Award, BookOpen } from "lucide-react";
import RocketLoader from "@/components/RocketLoader";

const Education = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const education = [
    {
      degree: "Master of Technology",
      field: "Computer Science",
      institution: "Indian Institute of Technology",
      year: "2004",
      description: "Specialized in distributed systems and algorithms",
    },
    {
      degree: "Bachelor of Engineering",
      field: "Computer Science",
      institution: "University of Pune",
      year: "2002",
      description: "Strong foundation in computer science fundamentals",
    },
  ];

  const certifications = [
    {
      name: "AWS Solutions Architect Professional",
      issuer: "Amazon Web Services",
      year: "2022",
    },
    {
      name: "Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      year: "2021",
    },
    {
      name: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      year: "2020",
    },
    {
      name: "Certified Scrum Master",
      issuer: "Scrum Alliance",
      year: "2018",
    },
  ];

  const publications = [
    {
      title: "Scaling Microservices for Enterprise Applications",
      venue: "IEEE Software Engineering Conference",
      year: "2019",
    },
    {
      title: "Effective Mentorship Patterns in Software Engineering",
      venue: "ACM Computing Surveys",
      year: "2021",
    },
  ];

  if (isLoading) {
    return <RocketLoader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.button
          onClick={() => navigate("/#about")}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-mono"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to About Me
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-mono font-bold mb-4">
            Education & <span className="text-gradient">Certifications</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            A commitment to continuous learning and professional development.
          </p>

          {/* Education - 3D Cards */}
          <div className="mb-16">
            <h2 className="font-mono text-2xl font-semibold mb-6 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              Academic Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="p-6 bg-card border border-border rounded-lg card-3d"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <div>
                      <h3 className="font-mono font-semibold text-lg">{edu.degree}</h3>
                      <p className="text-primary">{edu.field}</p>
                    </div>
                    <span className="font-mono text-muted-foreground">{edu.year}</span>
                  </div>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mt-2">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications - 3D Cards */}
          <div className="mb-16">
            <h2 className="font-mono text-2xl font-semibold mb-6 flex items-center gap-3">
              <Award className="w-6 h-6 text-primary" />
              Professional Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-4 bg-card border border-border rounded-lg card-3d"
                >
                  <h3 className="font-mono font-medium mb-1">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-sm text-primary mt-1">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Publications - 3D Cards */}
          <div>
            <h2 className="font-mono text-2xl font-semibold mb-6 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-primary" />
              Publications
            </h2>
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <motion.div
                  key={pub.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="p-4 bg-card border border-border rounded-lg card-3d"
                >
                  <h3 className="font-mono font-medium mb-1">{pub.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {pub.venue} • {pub.year}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
