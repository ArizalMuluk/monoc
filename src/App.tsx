import { useState, useEffect } from 'react';
import { ArrowRight, Mail, Phone, MapPin, Download, Github, Linkedin, Facebook, Menu, X, Loader2, Check, Send } from 'lucide-react';
import ProjectFilter from './components/ProjectFilter.tsx';
import ProjectGrid from './components/ProjectGrid.tsx';
import Footer from './components/Footer.tsx';
import Navigation from './components/Navigation.tsx';

export type Project = {
  id: number;
  title: string;
  categories: string[];
  year: string;
  image: string;
  description: string;
  tags: string[];
  featured: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Personality Prediction",
    categories: ["Predictive Modeling"],
    year: "2025",
    image: "/images/project/aiml_personality.png",
    description: "Personality prediction system using machine learning (Random Forest) to analyze user input.",
    tags: ["Scikit-Learn", "Flask", "Random Forest"],
    featured: true
  },
  {
    id: 2,
    title: "Nasi Padang Image Classification",
    categories: ["Image Classifier"],
    year: "2025",
    image: "/images/project/naspad_classifier.png",
    description: "Transfer learning model (ResNet18) to classify Nasi Padang Menu images.",
    tags: ["ResNet18", "Deep Learning", "PyTorch", "Flask"],
    featured: true
  },
  {
    id: 3,
    title: "Iris Prediction System",
    categories: ["Predictive Modeling"],
    year: "2025",
    image: "/images/project/aiml.png",
    description: "Machine learning model (Decision Tree) to predict iris species based on flower measurements.",
    tags: ["Flask", "Decision Tree Classifier", "Scikit-Learn"],
    featured: true
  },
  {
    id: 4,
    title: "Learning ChatBot Assistant",
    categories: ["Natural Language Processing"],
    year: "2022",
    image: "/images/project/aiml2.png",
    description: "Chatbot using Groq API for natural language processing, built with Flask.",
    tags: ["NLP", "Flask", "Groq API"],
    featured: false
  },
  {
    id: 5,
    title: "ART Theme Static Portofolio Website",
    categories: ["Other"],
    year: "2025",
    image: "/images/project/farhanstaticweb.png",
    description: "ART Theme Static portfolio website showcasing projects and skills.",
    tags: ["Website", "Portofolio", "ART"],
    featured: false
  },
];

const skills = [
  "Python", "Linux", "Fine Tuning", "Flask", "OpenCV", "Pandas", "NumPy", "Matplotlib",
  "TensorFlow", "PyTorch", "scikit-learn", "FastAPI", "Docker", "SQL"
];

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projectFilter, setProjectFilter] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const HomePage = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-8">
            {/* Hapus animate-fade-in agar tidak flicker saat scroll */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-off-white leading-none">
              Machine Learning Engineer
              <br />
              <span className="text-off-white/60">& AI Enthusiast</span>
            </h1>
            <p className="text-xl md:text-2xl text-off-white/80 max-w-3xl mx-auto leading-relaxed">
              I'm Arizal Firdaus, a Machine Learning Engineer specializing in transforming complex data into intelligent, real-world solutions. With over 3 years of experience, I leverage AI, NLP, and Computer Vision to drive innovation and solve tangible problems.
            </p>
            <div className="flex items-center justify-center gap-6 pt-8">
              <button 
                onClick={() => setCurrentPage('work')}
                className="group flex items-center gap-3 bg-transparent border-2 border-off-white text-off-white px-8 py-4 hover:bg-off-white hover:text-charcoal transition-all duration-300"
              >
                <span className="text-sm tracking-wide uppercase font-medium">View Work</span>
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setCurrentPage('about')}
                className="text-sm tracking-wide uppercase font-medium text-off-white/60 hover:text-off-white transition-colors border-b border-transparent hover:border-off-white/60 pb-1"
              >
                About Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-off-white mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-off-white/60 max-w-2xl mx-auto leading-relaxed">
              A selection of recent work showcasing design thinking and creative problem solving
            </p>
          </div>
          {/* Bento Grid for Featured Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.filter(p => p.featured).slice(0, 2).map((project, index) => {
              const isMain = index === 0;
              const onProjectClick = () => {
                setSelectedProject(project);
                setCurrentPage('case-study');
              };

              return (
                <div
                  key={project.id}
                  className={`group cursor-pointer ${isMain ? 'lg:col-span-2' : 'lg:col-span-1'}`}
                  onClick={onProjectClick}
                >
                  <div className="bg-dark-gray overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-500 h-full flex flex-col">
                    <div className={`${isMain ? 'aspect-video' : 'aspect-square'} overflow-hidden`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-500"
                      />
                    </div>
                    <div className="p-8 flex-grow flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm uppercase tracking-wide text-off-white/60">{project.categories.join(' / ')}</span>
                        <span className="text-sm text-off-white/60">{project.year}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-off-white mb-3 group-hover:text-off-white/80 transition-colors">{project.title}</h3>
                      <p className="text-off-white/70 leading-relaxed mb-4">{project.description}</p>
                      <div className="mt-auto pt-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="text-xs uppercase tracking-wide text-off-white/50 bg-off-white/10 px-3 py-1">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-16">
            <button 
              onClick={() => setCurrentPage('work')}
              className="group flex items-center gap-3 bg-transparent border border-off-white/30 text-off-white px-8 py-4 mx-auto hover:border-off-white hover:bg-off-white hover:text-charcoal transition-all duration-300"
            >
              <span className="text-sm tracking-wide uppercase font-medium">All Projects</span>
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );

  const WorkPage = () => (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-off-white mb-6">
            Selected Works
          </h1>
          <p className="text-xl text-off-white/60 max-w-2xl mx-auto">
            A comprehensive showcase of machine learning and AI projects across various domains.
          </p>
        </div>
        <ProjectFilter
          filter={projectFilter}
          setFilter={setProjectFilter}
        />
        <ProjectGrid
          projects={projects.filter(project => projectFilter === 'all' || project.categories.includes(projectFilter))}
          onProjectClick={(project) => {
            setSelectedProject(project);
            setCurrentPage('case-study');
          }}
        />
      </div>
    </div>
  );

  const CaseStudyPage = () => (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <button 
          onClick={() => setCurrentPage('work')}
          className="flex items-center gap-2 text-off-white/60 hover:text-off-white transition-colors mb-12"
        >
          <ArrowRight size={18} className="rotate-180" />
          <span className="text-sm uppercase tracking-wide">Back to Work</span>
        </button>

        {selectedProject && (
          <div className="space-y-16">
            {/* Hero */}
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <span className="text-sm uppercase tracking-wide text-off-white/60">{selectedProject.categories.join(' / ')}</span>
                <h1 className="text-5xl md:text-6xl font-bold text-off-white">
                  {selectedProject.title}
                </h1>
                <p className="text-xl text-off-white/70 max-w-3xl mx-auto">
                  {selectedProject.description}
                </p>
              </div>
              <div className="flex items-center justify-center gap-8 text-sm text-off-white/60">
                <div>
                  <span className="uppercase tracking-wide">Year</span>
                  <div className="text-off-white mt-1">{selectedProject.year}</div>
                </div>
                <div>
                  <span className="uppercase tracking-wide">Category</span>
                  <div className="text-off-white mt-1">{selectedProject.categories.join(' / ')}</div>
                </div>
                <div>
                  <span className="uppercase tracking-wide">Role</span>
                  <div className="text-off-white mt-1">Lead Designer</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="aspect-[16/10] overflow-hidden bg-dark-gray">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-off-white mb-6">The Challenge</h2>
                  <p className="text-off-white/70 leading-relaxed text-lg">
                    The existing platform suffered from poor user engagement and conversion rates. Users found the interface confusing and the overall experience fragmented. Our goal was to create a cohesive, intuitive design that would improve user satisfaction and drive business results.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-off-white mb-6">Design Process</h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-off-white mb-3">Research & Discovery</h3>
                      <p className="text-off-white/70 leading-relaxed">
                        We conducted extensive user interviews and analyzed existing user behavior to understand pain points and opportunities for improvement.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-off-white mb-3">Ideation & Wireframing</h3>
                      <p className="text-off-white/70 leading-relaxed">
                        Multiple design concepts were explored through rapid prototyping and stakeholder feedback sessions.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-off-white mb-3">Visual Design</h3>
                      <p className="text-off-white/70 leading-relaxed">
                        The final design focused on clarity, consistency, and brand alignment while maintaining accessibility standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-off-white mb-4">Technologies</h3>
                  <div className="space-y-2">
                    {['Figma', 'Principle', 'Adobe Creative Suite', 'Miro'].map((tech) => (
                      <div key={tech} className="text-off-white/70">{tech}</div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-off-white mb-4">Results</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-2xl font-bold text-off-white">+40%</div>
                      <div className="text-off-white/70">User Engagement</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-off-white">+60%</div>
                      <div className="text-off-white/70">Conversion Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-off-white">+25%</div>
                      <div className="text-off-white/70">User Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-[4/3] bg-dark-gray">
                <img 
                  src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Process"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] bg-dark-gray">
                <img 
                  src="https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Final Design"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-off-white mb-6">
                About Me
              </h1>
              <p className="text-xl text-off-white/70 leading-relaxed mb-8">
                I'm a Machine Learning Engineer with a passion for solving complex problems through data-driven, intelligent solutions. With over three years of experience, I've honed my skills in Python, AI, and Deep Learning to build impactful applications.
              </p>
              <p className="text-lg text-off-white/60 leading-relaxed">
                Based in Central Java, I thrive on exploring new frontiers in AI, from fine-tuning NLP models to researching articles deep learning architectures. I'm always eager to collaborate on projects that push the boundaries of what's possible with technology.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <button className="group flex items-center gap-3 bg-off-white text-charcoal px-8 py-4 hover:bg-off-white/90 transition-all duration-300">
                <Download size={18} />
                <span className="text-sm tracking-wide uppercase font-medium">Download Resume</span>
              </button>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="text-sm tracking-wide uppercase font-medium text-off-white/60 hover:text-off-white transition-colors border-b border-transparent hover:border-off-white/60 pb-1"
              >
                Get in Touch
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-dark-gray overflow-hidden">
              <img 
                src="/images/profile-photoaidcom-greyscale.png" 
                alt="Arizal Firdaus Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-off-white mb-8">Skills & Tools</h2>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div key={skill} className="text-off-white/70 py-2">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-off-white mb-8">Experience</h2>
            <div className="space-y-8">
              <div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-off-white">Data Entry Clerk</h3>
                  <span className="text-off-white/60">2022 - 2024</span>
                </div>
                <p className="text-off-white/60 mb-2">Jasmin Motor</p>
                <p className="text-off-white/70">
                  Responsible for accurately entering sales and inventory transaction data, ensuring data integrity for operational and reporting purposes.
                </p>
              </div>
              <div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-off-white">Research Assistant</h3>
                  <span className="text-off-white/60">2025</span>
                </div>
                <p className="text-off-white/60 mb-2">STMIK AMIKOM Surakarta</p>
                <p className="text-off-white/70">
                  Contributed to a faculty research project by designing and developing the backend infrastructure. My responsibilities included database integration and implementing the Groq API for Natural Language Processing (NLP), enabling advanced data analysis for the research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => {
    // --- State Management ---
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      serviceType: '', // Corresponds to 'subject' in ContactSuccess.tsx, but kept as serviceType for relevance
      message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false); // To show success message
    const [error, setError] = useState<string | null>(null);

    // --- Input Handler ---
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };

    // --- Submit Handler ---
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setError(null); // Reset error on new submission
      setSubmitted(false); // Reset submitted state on new submission

      try {
        const response = await fetch('/api/send-email', { // Ensure this matches your actual API endpoint
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitted(true);
          setFormData({ name: '', email: '', serviceType: '', message: '' }); // Reset form fields
          // Reset submitted state after showing success message
          setTimeout(() => {
            setSubmitted(false);
          }, 5000);
        } else {
          // Try to parse as JSON, but fallback to text if it fails
          let errorMessage = 'Failed to send message. Please try again.';
          try {
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.indexOf("application/json") !== -1) {
              const errorData = await response.json();
              errorMessage = errorData.message || errorMessage;
            } else {
              // If not JSON, try to get text. This might be an HTML error page.
              const errorText = await response.text();
              console.error('Server responded with non-JSON error. Status:', response.status, 'Response:', errorText);
              errorMessage = `Server error (${response.status}). Check console for details.`;
            }
          } catch (parseError) {
            console.error('Failed to parse error response. Status:', response.status, 'Error:', parseError);
            errorMessage = `Server error (${response.status}). Could not parse response.`;
          }
          setError(errorMessage);
        }
      } catch (error: any) {
        setError('An unexpected error occurred. Please try again.');
        console.error('Submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-off-white mb-6">
            Let's Work Together
          </h1>
          <p className="text-xl text-off-white/60 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-off-white mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail size={20} className="text-off-white/60" />
                  <span className="text-off-white/70">bangmulukkeren@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone size={20} className="text-off-white/60" />
                  <span className="text-off-white/70">+62 815 4816 3365</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin size={20} className="text-off-white/60" />
                  <span className="text-off-white/70">Sragen, Central Java, Indonesia</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-off-white mb-4">Follow Me</h3>
              <div className="flex items-center gap-6">
                <a href="#" className="text-off-white/60 hover:text-off-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-off-white/60 hover:text-off-white transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-off-white/60 hover:text-off-white transition-colors">
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-dark-gray p-8">
            {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm uppercase tracking-wide text-off-white/60 mb-3">
                  Name
                </label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-medium-gray focus:border-off-white outline-none text-off-white py-3 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wide text-off-white/60 mb-3">
                  Email
                </label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-medium-gray focus:border-off-white outline-none text-off-white py-3 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wide text-off-white/60 mb-3">
                  Service Type
                </label>
                <select 
                  name="serviceType" 
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-medium-gray focus:border-off-white outline-none text-off-white py-3 transition-colors">
                  <option value="" className="bg-charcoal">Select a service</option>
                  <option value="ml-development" className="bg-charcoal">ML Model Development</option>
                  <option value="nlp" className="bg-charcoal">Natural Language Processing</option>
                  <option value="computer-vision" className="bg-charcoal">Computer Vision</option>
                  <option value="consultation" className="bg-charcoal">AI/ML Consultation</option>
                  <option value="other" className="bg-charcoal">Other Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wide text-off-white/60 mb-3">
                  Message
                </label>
                <textarea 
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-medium-gray focus:border-off-white outline-none text-off-white py-3 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center gap-3 bg-off-white text-charcoal px-8 py-4 transition-all duration-300 w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <div className="flex items-center">
                    <span className="text-sm tracking-wide uppercase font-medium">Send Message</span>
                    <Send size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
              </button>
              {error && (
                <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
              )}
            </form>
            ) : (
              <div 
                className="text-center py-8"
              >
                <div className="p-4 rounded-full bg-off-white/10 mx-auto w-16 h-16 flex items-center justify-center mb-4">
                  <Check size={24} className="text-off-white" />
                </div>
                <h3 className="text-2xl font-bold text-off-white mb-2">Message Sent!</h3>
                <p className="text-off-white/70">
                  Thank you for your message. I'll get back to you as soon as possible.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )};

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage />;
      case 'work': return <WorkPage />;
      case 'case-study': return <CaseStudyPage />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="bg-charcoal text-off-white font-sans">
      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isScrolled={isScrolled}
      />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;