import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone, MapPin, Code, Database, Globe, Calendar } from "lucide-react";

const Index = () => {
  const skills = {
    backend: ["ASP.NET Core", "ASP.NET Core MVC", "ASP.NET Web API", "RESTful API Design"],
    languages: ["C#", "SQL"],
    dataAccess: ["Entity Framework Core", "LINQ", "ADO.NET", "Dapper"],
    databases: ["MS SQL Server", "MySQL"],
    frontend: ["HTML", "CSS", "Bootstrap", "jQuery"],
    tools: ["Visual Studio", "VS Code", "Git", "GitHub", ".NET CLI", "Postman", "Azure"],
    testing: ["Unit Testing (xUnit)", "Integration Testing"],
    architecture: ["OOP", "SOLID", "Design Patterns", "Clean Architecture", "Repository Pattern", "Dependency Injection"],
    additional: ["Authentication & Authorization (Identity, JWT)", "Caching", "Background Jobs (Hangfire)", "Logging (Serilog)", "Automated Notifications (MailKit)", "Performance Optimization"]
  };

  const projects = [
    {
      name: "FoodFlow",
      description: "Built a backend system for food delivery and restaurant management with secure RESTful APIs and automated documentation. Improved performance and reliability with optimized data access, caching, and background jobs.",
      technologies: ["ASP.NET Core", "Web API", "EF Core", "SQL Server", "LINQ", "Identity", "JWT", "Repository Pattern", "Unit of Work", "Clean Architecture", "Hangfire", "Serilog"]
    },
    {
      name: "Rahala - Smart Parking System",
      description: "Graduation project: A smart parking system integrated with hardware that helps users find, book, and access parking spots easily while managing reservations and user accounts.",
      technologies: ["ASP.NET Core", "SQL Server", "Hardware Integration", "Real-time Systems"]
    },
    {
      name: "BookSky",
      description: "Developed a platform for creating and analyzing surveys with automated notifications. Enhanced performance using query optimization through stored procedures and task-based validation.",
      technologies: ["ASP.NET Core", "SQL Server", "Identity Framework", "JWT Authentication", "Repository Pattern", "FluentValidation", "Mapper Extensions", "Clean Architecture", "Bootstrap"]
    }
  ];

  const experience = [
    {
      role: "Full Stack .Net Developer",
      company: "ITS Technologies",
      period: "Present",
      location: "Port Said, Egypt",
      type: "On-site, Full-Time",
      achievements: [
        "Built APIs for mobile integration and managed logistics/tracking platforms",
        "Developed technical support website for ITS Technologies to follow problems and chat",
        "Integral Transport: Developed a container transport management system for tracking shipments and generating reports"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-2">Omar Mohamed Omar</h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90">.Net Developer</p>
              <p className="text-sm mt-2 text-primary-foreground/80">Skilled developer with +1 year of experience in building scalable and maintainable web applications</p>
            </div>
            <div className="flex flex-col space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>omar88mohamed@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>01013762770</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Banha, Qalubiyyah, Egypt</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>15 Oct 2003</span>
              </div>
              <div className="flex space-x-4 mt-4">
                <Button variant="secondary" size="sm">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="secondary" size="sm">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-primary">About Me</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Passionate developer with +1 year of experience in building scalable and maintainable web applications across 
                different domains. Skilled in writing clean code, optimizing performance, securing data, and delivering effective 
                solutions that align with real business needs.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-primary">Work Experience</h2>
          {experience.map((job, index) => (
            <Card key={index} className="mb-6">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl">{job.role}</CardTitle>
                    <CardDescription className="text-lg font-medium">{job.company}</CardDescription>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <p>{job.period} | {job.location}</p>
                    <p>{job.type}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-primary">Projects</h2>
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="h-5 w-5 mr-2 text-primary" />
                    {project.name}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-primary">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="h-5 w-5 mr-2 text-primary" />
                  Backend Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Backend Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.backend.map((skill, i) => (
                        <Badge key={i} variant="outline">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Programming Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.languages.map((skill, i) => (
                        <Badge key={i} variant="outline">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Data Access</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.dataAccess.map((skill, i) => (
                        <Badge key={i} variant="outline">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Databases</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.databases.map((skill, i) => (
                        <Badge key={i} variant="outline">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-primary" />
                  Frontend & Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Frontend & Integration</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.frontend.map((skill, i) => (
                        <Badge key={i} variant="outline">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Development Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.tools.map((skill, i) => (
                        <Badge key={i} variant="outline">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Testing</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.testing.map((skill, i) => (
                        <Badge key={i} variant="outline">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Architecture & Best Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.architecture.map((skill, i) => (
                    <Badge key={i} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Additional Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.additional.map((skill, i) => (
                    <Badge key={i} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-primary">Education & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold">Bachelor's Degree</h4>
                  <p className="text-muted-foreground">Information Technology and Systems</p>
                  <p className="text-sm text-muted-foreground">2021 - 2025 | Port Said, Egypt</p>
                  <p className="text-sm">Graduated with a very good overall grade</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">ITI Summer Training 2023</h4>
                    <p className="text-sm text-muted-foreground">Web Development using ASP.NET Core</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      <Badge variant="outline" className="text-xs">SQL Server</Badge>
                      <Badge variant="outline" className="text-xs">C#</Badge>
                      <Badge variant="outline" className="text-xs">LINQ & EF Core</Badge>
                      <Badge variant="outline" className="text-xs">ASP.NET Core MVC</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Languages & Soft Skills */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Arabic</span>
                    <Badge variant="secondary">Native</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>English</span>
                    <Badge variant="secondary">Good</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Problem Solving", "Teamwork", "Communication", "Time Management", "Adaptability"].map((skill, i) => (
                    <Badge key={i} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Omar Mohamed Omar. Built with React & TypeScript.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
