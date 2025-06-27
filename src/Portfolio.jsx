import React, { useState, useEffect, useRef } from 'react';
import mypic from "../src/assets/Ankitpic1.png";
import {
  MessageCircle,
  X,
  Send,
  Code,
  Smartphone,
  Globe,
  Github,
  ExternalLink,
  Sparkles,
  Zap
} from 'lucide-react';
import ProjectSection from './ProjectSection';
import ContactDetails from './ContactDetails';
import SkillsSection from './SkillsSection';
import AnimatedTitle from './AnimatedTitle';


const Portfolio = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Ankit's AI assistant. Ask me anything about Ankit's skills, experience, or projects!", isBot: true }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getAIResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech')) {
      return "Ankit is proficient in React.js, Node.js, JavaScript, HTML5, CSS3, MongoDB, Firebase, UI/UX Design, and Mobile App Development.";
    }
    if (lowerMessage.includes('experience') || lowerMessage.includes('job')) {
      return "Ankit is a passionate software developer with expertise in full-stack development.";
    }
    if (lowerMessage.includes('project') || lowerMessage.includes('portfolio')) {
      return "Ankit has developed several impressive projects like TodoList Clone, TrafficSub, LinkedIn Clone, and more.";
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('hire') || lowerMessage.includes('email')) {
      return "You can reach Ankit through the contact form or connect on LinkedIn and GitHub.";
    }
    if (lowerMessage.includes('education') || lowerMessage.includes('study') || lowerMessage.includes('background')) {
      return "Ankit is dedicated to continuous learning and staying updated with modern tech trends.";
    }
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! I'm here to help you learn more about Ankit. Ask me anything!";
    }
    return "That's a great question! Ankit is a versatile developer. Ask me about skills, projects, or contact info.";
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    const userMessage = inputMessage;
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setInputMessage('');
    setIsTyping(true);
    setTimeout(() => {
      const response = getAIResponse(userMessage);
      setMessages(prev => [...prev, { text: response, isBot: true }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="font-sans bg-white text-gray-800 relative overflow-hidden">
      <nav className="fixed top-0 left-0 w-full z-40 p-6 flex justify-between items-center bg-white border-b border-gray-300 shadow-sm">
        <div className="text-2xl font-bold text-gray-800 font-[cursive]">
          <span className="text-purple-500">&lt;Ankit Kumar/&gt;</span>
        </div>
        <div className="hidden md:flex space-x-8 text-gray-700">
          <a href="#home" className="hover:text-cyan-500">Home</a>
          <a href="#about" className="hover:text-cyan-500">About</a>
          <a href="#projects" className="hover:text-cyan-500">Projects</a>
          <a href="#contact" className="hover:text-cyan-500">Contact</a>
        </div>
        <a
          href="https://drive.google.com/uc?export=download&id=1u12VQo7UlR_64m9-lU0Zc4DbgASlWDQS"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25"
        >
          Resume
        </a>
      </nav>

      <section id="home" className="pt-8 min-h-screen flex flex-col justify-center items-center px-6 mt-8 sm:mt-0">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500">
          <img src={mypic} alt="Ankit Kumar" className="object-cover w-full h-full" />
        </div>
        <h1 className="text-4xl md:text-5xl mt-5 font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Hello,
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Ankit Kumar
          </span>
          
        </h2>
        <h2 className=" text-1xl md:text-2xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          <AnimatedTitle/>
        </h2>
        <p className="mt-6 max-w-xl text-center text-gray-600">
          A passionate software developer who builds modern web apps, websites, and mobile applications that are fast, responsive, and user-friendly.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="https://drive.google.com/uc?export=download&id=1u12VQo7UlR_64m9-lU0Zc4DbgASlWDQS"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-full font-medium"
          >
            <Sparkles className="inline-block w-5 h-5 mr-2" /> Resume
          </a>
          <a href="#contact" className="border border-cyan-400 text-cyan-500 px-6 py-3 rounded-full hover:bg-cyan-400 hover:text-white transition">
            Get In Touch
          </a>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
            About Me
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            I'm Ankit Kumar, a full-stack developer building digital experiences with beautiful design and strong functionality.
          </p>
        </div>
        <SkillsSection />
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl border border-gray-400 hover:border-cyan-400/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">UI/UX Design</h3>
              <p className="text-gray-600">Creating intuitive and beautiful user interfaces that provide exceptional user experiences across all devices.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-400 hover:border-cyan-400/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Website Design</h3>
              <p className="text-gray-600">Building responsive, modern websites with clean code and optimized performance for the best user experience.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-400 hover:border-cyan-400/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">App Design</h3>
              <p className="text-gray-600">Developing cross-platform mobile applications with native performance and engaging user interfaces.</p>
            </div>
          </div>
      </section>

      <ProjectSection />
      <ContactDetails />

      <footer className="text-center py-8 border-t border-gray-200">
        <p className="text-gray-500">© 2025 Ankit Kumar. All rights reserved.</p>
      </footer>

      <div className="fixed bottom-6 right-6 z-50">
        {isChatOpen && (
          <div className="mb-4 w-[90vw] max-w-md h-[60vh] sm:w-76 sm:h-76 bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg flex flex-col">
            <div className="p-4 border-b border-white/20 flex justify-between items-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-white" />
                <h3 className="font-semibold text-white">AI Assistant</h3>
              </div>
              <X className="w-5 h-5 text-white cursor-pointer" onClick={() => setIsChatOpen(false)} />
            </div>
            <div className="flex-1 p-4 overflow-y-auto space-y-2">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`px-3 py-2 rounded-xl text-sm ${msg.isBot ? 'bg-cyan-500/10 text-white' : 'bg-white/10 text-white'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="text-white text-sm">Typing...</div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className="p-4 border-t border-white/20">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about Ankit's skills..."
                  className="flex-1 px-3 py-2 bg-white/10 text-white rounded-xl placeholder-gray-400 text-sm"
                />
                <button onClick={handleSendMessage} className="bg-gradient-to-r from-cyan-500 to-purple-500 p-2 rounded-xl">
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        )}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
        >
          {isChatOpen ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-6 h-6 text-white" />}
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
