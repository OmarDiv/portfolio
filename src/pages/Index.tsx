import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Code, 
  Database, 
  Globe, 
  Calendar,
  Download,
  ExternalLink,
  Star,
  Users,
  Trophy,
  Target,
  Briefcase,
  GraduationCap,
  Languages,
  Heart,
  ArrowRight,
  ChevronDown,
  Moon,
  Sun,
  Menu,
  X
} from "lucide-react";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-reveal', 'revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const skills = {
    backend: [
      { name: "ASP.NET Core", level: 90 },
      { name: "ASP.NET Core MVC", level: 85 },
      { name: "ASP.NET Web API", level: 90 },
      { name: "RESTful API Design", level: 85 }
    ],
    languages: [
      { name: "C#", level: 90 },
      { name: "SQL", level: 85 }
    ],
    dataAccess: [
      { name: "Entity Framework Core", level: 85 },
      { name: "LINQ", level: 90 },
      { name: "ADO.NET", level: 75 },
      { name: "Dapper", level: 70 }
    ],
    databases: [
      { name: "MS SQL Server", level: 85 },
      { name: "MySQL", level: 80 }
    ],
    frontend: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "Bootstrap", level: 80 },
      { name: "jQuery", level: 75 }
    ],
    tools: [
      { name: "Visual Studio", level: 90 },
      { name: "VS Code", level: 85 },
      { name: "Git", level: 80 },
      { name: "GitHub", level: 80 },
      { name: ".NET CLI", level: 75 },
      { name: "Postman", level: 85 },
      { name: "Azure", level: 70 }
    ]
  };

  const projects = [
    {
      name: "FoodFlow",
      description: "Built a backend system for food delivery and restaurant management with secure RESTful APIs and automated documentation. Improved performance and reliability with optimized data access, caching, and background jobs.",
      technologies: ["ASP.NET Core", "Web API", "EF Core", "SQL Server", "LINQ", "Identity", "JWT", "Repository Pattern", "Unit of Work", "Clean Architecture", "Hangfire", "Serilog"],
      featured: true,
      github: "#",
      demo: "#"
    },
    {
      name: "Rahala - Smart Parking System",
      description: "Graduation project: A smart parking system integrated with hardware that helps users find, book, and access parking spots easily while managing reservations and user accounts.",
      technologies: ["ASP.NET Core", "SQL Server", "Hardware Integration", "Real-time Systems"],
      featured: true,
      github: "#",
      demo: "#"
    },
    {
      name: "BookSky",
      description: "Developed a platform for creating and analyzing surveys with automated notifications. Enhanced performance using query optimization through stored procedures and task-based validation.",
      technologies: ["ASP.NET Core", "SQL Server", "Identity Framework", "JWT Authentication", "Repository Pattern", "FluentValidation", "Mapper Extensions", "Clean Architecture", "Bootstrap"],
      featured: false,
      github: "#",
      demo: "#"
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

  const stats = [
    { number: "1+", label: "Years Experience", icon: Briefcase },
    { number: "3+", label: "Projects Completed", icon: Trophy },
    { number: "15+", label: "Technologies", icon: Code },
    { number: "100%", label: "Success Rate", icon: Target }
  ];

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="font-playfair text-xl font-bold text-gradient">
              Omar Mohamed
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    currentSection === item.href.substring(1) ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-accent transition-colors"
              >
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-accent transition-colors"
              >
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-accent transition-colors"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border">
              <div className="px-4 py-2 space-y-2">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href.substring(1))}
                    className="block w-full text-left px-3 py-2 text-sm font-medium hover:bg-accent rounded-lg transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 space-y-8 scroll-reveal">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-playfair font-bold">
                  <span className="text-gradient">Omar</span>
                  <br />
                  <span className="text-foreground">Mohamed</span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground">
                  Full Stack .NET Developer
                </p>
                <p className="text-base lg:text-lg text-muted-foreground max-w-2xl">
                  Passionate developer with 1+ years of experience building scalable web applications. 
                  Skilled in modern .NET technologies, clean architecture, and delivering solutions that drive business success.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="shadow-elegant hover:shadow-glow transition-all">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => scrollToSection('contact')}
                  className="hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Let's Connect
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center space-x-6">
                <Button variant="ghost" size="sm" className="hover:text-primary transition-colors">
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </Button>
                <Button variant="ghost" size="sm" className="hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="ghost" size="sm" className="hover:text-primary transition-colors">
                  <Mail className="h-5 w-5 mr-2" />
                  Email
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center scroll-reveal">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-primary rounded-full animate-float shadow-elegant"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-72 h-72 bg-muted rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-6xl font-bold text-primary">OM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center scroll-reveal">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary font-playfair mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-playfair font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating efficient, scalable solutions that solve real-world problems
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal">
              <Card className="p-8 hover-lift">
                <CardContent className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    I'm a dedicated Full Stack .NET Developer with over a year of hands-on experience 
                    in building scalable web applications. My expertise spans across the entire development 
                    lifecycle, from architecting clean, maintainable code to implementing robust backend systems.
                  </p>
                  <p className="text-lg leading-relaxed">
                    I specialize in ASP.NET Core, Entity Framework, and modern database technologies. 
                    My approach focuses on writing clean, efficient code while following industry best practices 
                    and design patterns to deliver solutions that truly make a difference.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-6">
                    {["Problem Solver", "Team Player", "Fast Learner", "Detail Oriented"].map((trait) => (
                      <Badge key={trait} variant="secondary" className="px-3 py-1">
                        {trait}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="scroll-reveal">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground">Banha, Qalubiyyah, Egypt</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Born</h3>
                    <p className="text-muted-foreground">October 15, 2003</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Experience</h3>
                    <p className="text-muted-foreground">1+ Years Professional Development</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Interests</h3>
                    <p className="text-muted-foreground">Clean Code, System Architecture, Innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-playfair font-bold mb-4">Professional Experience</h2>
            <p className="text-xl text-muted-foreground">My journey in software development</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {experience.map((job, index) => (
              <div key={index} className="relative scroll-reveal">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>
                <div className="relative pl-20 pb-12">
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  <Card className="hover-lift">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <CardTitle className="text-2xl font-playfair">{job.role}</CardTitle>
                          <CardDescription className="text-lg font-medium text-primary">
                            {job.company}
                          </CardDescription>
                        </div>
                        <div className="mt-2 md:mt-0 text-right">
                          <Badge variant="secondary" className="mb-1">
                            {job.period}
                          </Badge>
                          <div className="text-sm text-muted-foreground">
                            <div>{job.location}</div>
                            <div>{job.type}</div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {job.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start space-x-3">
                            <div className="mt-2 w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <p className="text-muted-foreground">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-playfair font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">
              Showcase of my technical skills and problem-solving abilities
            </p>
          </div>

          <div className="grid gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className={`hover-lift scroll-reveal ${project.featured ? 'ring-2 ring-primary/20' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Code className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-playfair">{project.name}</CardTitle>
                        {project.featured && (
                          <Badge variant="secondary" className="mt-1">
                            <Star className="h-3 w-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-playfair font-bold mb-4">Technical Skills</h2>
            <p className="text-xl text-muted-foreground">
              My technical expertise and proficiency levels
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Backend Skills */}
            <Card className="hover-lift scroll-reveal">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Database className="h-6 w-6 mr-3 text-primary" />
                  Backend Development
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skills.backend.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Programming Languages */}
            <Card className="hover-lift scroll-reveal">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Code className="h-6 w-6 mr-3 text-primary" />
                  Programming Languages
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skills.languages.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Data Access */}
            <Card className="hover-lift scroll-reveal">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Database className="h-6 w-6 mr-3 text-primary" />
                  Data Access & ORM
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skills.dataAccess.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Frontend & Tools */}
            <Card className="hover-lift scroll-reveal">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Globe className="h-6 w-6 mr-3 text-primary" />
                  Frontend & Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skills.tools.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Additional Skills */}
          <div className="mt-12 grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover-lift scroll-reveal">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                  Architecture & Patterns
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["OOP", "SOLID", "Clean Architecture", "Repository Pattern", "Dependency Injection", "Design Patterns"].map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift scroll-reveal">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Languages className="h-5 w-5 mr-2 text-primary" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Arabic</span>
                    <Badge variant="secondary">Native</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>English</span>
                    <Badge variant="secondary">Good</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift scroll-reveal">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Problem Solving", "Team Collaboration", "Communication", "Time Management", "Adaptability", "Leadership"].map((skill, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-playfair font-bold mb-4">Education & Certifications</h2>
            <p className="text-xl text-muted-foreground">
              My academic background and professional development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover-lift scroll-reveal">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <GraduationCap className="h-6 w-6 mr-3 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">Bachelor's Degree</h3>
                    <p className="text-primary font-medium">Information Technology and Systems</p>
                    <p className="text-muted-foreground">2021 - 2025 | Port Said, Egypt</p>
                    <Badge variant="secondary" className="mt-2">Very Good Grade</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift scroll-reveal">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Trophy className="h-6 w-6 mr-3 text-primary" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">ITI Summer Training 2023</h3>
                    <p className="text-primary font-medium">Web Development using ASP.NET Core</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {["SQL Server", "C#", "LINQ & EF Core", "ASP.NET Core MVC"].map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-playfair font-bold mb-4">Let's Connect</h2>
            <p className="text-xl text-muted-foreground">
              Ready to discuss your next project? I'd love to hear from you!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="scroll-reveal">
                <Card className="p-8 hover-lift">
                  <CardContent className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-muted-foreground">omar88mohamed@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-muted-foreground">01013762770</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Location</h3>
                        <p className="text-muted-foreground">Banha, Qalubiyyah, Egypt</p>
                      </div>
                    </div>

                    <div className="pt-6 border-t">
                      <h3 className="font-semibold mb-4">Follow Me</h3>
                      <div className="flex space-x-4">
                        <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </Button>
                        <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="scroll-reveal">
                <Card className="p-8 hover-lift">
                  <CardContent>
                    <form className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                          placeholder="your@email.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                          placeholder="Your message..."
                        />
                      </div>
                      
                      <Button type="submit" className="w-full shadow-elegant hover:shadow-glow">
                        Send Message
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="font-playfair text-2xl font-bold text-gradient mb-4">
              Omar Mohamed Omar
            </div>
            <p className="text-muted-foreground mb-6">
              Full Stack .NET Developer passionate about creating amazing digital experiences
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <Button variant="ghost" size="sm">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Omar Mohamed Omar. Built with React & TypeScript.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      <button
        onClick={() => scrollToSection('home')}
        className="fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-glow transition-all z-40"
      >
        <ChevronDown className="h-5 w-5 rotate-180" />
      </button>
    </div>
  );
};

export default Index;