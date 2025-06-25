import React, { useState, useEffect, useRef } from 'react';
import mypic from "../src/assets/Ankitpic1.png"
import { MessageCircle, X, Send, User, Code, Smartphone, Globe, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Star, Sparkles, Zap, Contact } from 'lucide-react';
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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simulated AI responses - in real implementation, this would connect to Firebase
 const getAIResponse = (message) => {
  const lowerMessage = message.toLowerCase();

  // Skills or Technologies
  if (
    lowerMessage.includes('what skills do you have') ||
    lowerMessage.includes('what technologies do you know') ||
    lowerMessage.includes('what tech stack') ||
    lowerMessage.includes('tell me your skills') ||
    lowerMessage.includes('technology') ||
    lowerMessage.includes('tech') ||
    lowerMessage.includes('skill')
  ) {
    return "Ankit is proficient in React.js, Node.js, JavaScript, HTML5, CSS3, MongoDB, Firebase, UI/UX Design, and Mobile App Development. He's passionate about creating modern web applications and mobile solutions.";
  }

  // Experience or Work Background
  if (
    lowerMessage.includes('what is your experience') ||
    lowerMessage.includes('do you have any work experience') ||
    lowerMessage.includes('tell me about your work') ||
    lowerMessage.includes('describe your job history') ||
    lowerMessage.includes('job') ||
    lowerMessage.includes('experience')
  ) {
    return "Ankit is a passionate software developer with expertise in full-stack development. He has worked on various web applications, mobile apps, and UI/UX projects, always focusing on creating user-friendly and responsive designs.";
  }

  // Projects or Portfolio
  if (
    lowerMessage.includes('show me your projects') ||
    lowerMessage.includes('what have you built') ||
    lowerMessage.includes('can i see your portfolio') ||
    lowerMessage.includes('share your work') ||
    lowerMessage.includes('project') ||
    lowerMessage.includes('portfolio')
  ) {
    return "Ankit has developed several impressive projects including TodoList Clone, TrafficSub platform, LinkedIn Clone, Storyver storytelling app, Homarex real estate platform, Shopnetic e-commerce app, and StopWatch mobile application. Each project demonstrates his diverse skill set!  ";
  }

  // Contact or Hire
  if (
    lowerMessage.includes('how can i contact you') ||
    lowerMessage.includes('can i hire you') ||
    lowerMessage.includes('how do i reach you') ||
    lowerMessage.includes('what is your email') ||
    lowerMessage.includes('contact') ||
    lowerMessage.includes('hire') ||
    lowerMessage.includes('email')
  ) {
    return "You can reach Ankit through the contact form below, or connect with him on LinkedIn and GitHub. He's always interested in discussing new opportunities and collaborations!";
  }

  // Education Background
  if (
    lowerMessage.includes('tell me about your education') ||
    lowerMessage.includes('what is your study background') ||
    lowerMessage.includes('where did you study') ||
    lowerMessage.includes('education') ||
    lowerMessage.includes('study') ||
    lowerMessage.includes('background')
  ) {
    return "Ankit is dedicated to continuous learning in software development, always staying updated with the latest technologies and best practices in web and mobile development.";
  }

  // Greetings
  if (
    lowerMessage.includes('hello') ||
    lowerMessage.includes('hi') ||
    lowerMessage.includes('hey') ||
    lowerMessage.includes('good morning') ||
    lowerMessage.includes('good evening') ||
    lowerMessage.includes('how are you') ||
    lowerMessage.includes('what’s up')
  ) {
    return "Hello! I'm here to help you learn more about Ankit Kumar. Feel free to ask about his skills, projects, experience, or how to get in touch with him!";
  }

  // Default fallback
  return "That's a great question! Ankit is a versatile developer with strong skills in web and mobile development. You can explore his projects below or ask me about his specific skills, experience, or how to contact him.";
};


  const handleSendMessage = async () => {
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
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-white border-b border-gray-300 shadow-sm">
        <div className="text-2xl font-bold text-gray-800 flex items-center gap-2 font-[cursive]">
          <span className="text-purple-500">&lt;Ankit Kumar/&gt;</span>

        </div>

        <div className="hidden md:flex space-x-8 text-gray-700">
          <a href="#home" className="hover:text-cyan-500 transition-colors duration-300">Home</a>
          <a href="#about" className="hover:text-cyan-500 transition-colors duration-300">About</a>
          <a href="#projects" className="hover:text-cyan-500 transition-colors duration-300">Projects</a>
          <a href="#contact" className="hover:text-cyan-500 transition-colors duration-300">Contact</a>
        </div>

        <div>
          <a
            href="https://drive.google.com/uc?export=download&id=1u12VQo7UlR_64m9-lU0Zc4DbgASlWDQS"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer"
          >
            Resume
          </a>
        </div>
      </nav>


      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-30">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1 mb-8 animate-pulse">
              <img
                src={mypic}
                alt="Ankit Kumar"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Hello,
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            I'm <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Ankit Kumar</span>
          
          </h2>
          <h5 className="text-2xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            < AnimatedTitle/>
          </h5>
          

          <p className="text-xl md:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
            A passionate software developer who builds modern web apps, websites, and mobile applications
            that are fast, responsive, and user-friendly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://drive.google.com/file/d/1u12VQo7UlR_64m9-lU0Zc4DbgASlWDQS/view" target="_blank"
      rel="noopener noreferrer" >
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Resume
              </span>
            </button>
            </a>
            <a href="#contact">
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-medium hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                Get In Touch
              </button>
            </a>
           
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              I'm Ankit Kumar, a passionate full-stack developer focused on building exceptional
              digital experiences that combine beautiful design with powerful functionality.
            </p>
          </div>

          {/* Skills Grid */}
          <SkillsSection />


          {/* Services */}
          <div className="grid md:grid-cols-3 gap-8">
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

        </div>
      </section>

      {/* Projects Section */}
      <ProjectSection />

      {/* Contact Section */}
      <ContactDetails />

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 px-6 border-t border-white/10">
        <p className="text-gray-400">
          Copyright © 2025 Ankit Kumar. All rights reserved.
        </p>
      </footer>

      {/* Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
  {isChatOpen && (
    <div className="mb-4 w-[75vw] max-w-md h-[50vh] sm:w-96 sm:h-96 bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl shadow-purple-500/20 flex flex-col">
      {/* Chat Header */}
      <div className="p-4 border-b border-white/20 flex justify-between items-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-t-2xl">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="font-semibold">AI Assistant</h3>
            <p className="text-xs text-gray-400">Ask about Ankit</p>
          </div>
        </div>
        <button
          onClick={() => setIsChatOpen(false)}
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
            <div
              className={`max-w-[80%] p-3 rounded-2xl ${
                message.isBot
                  ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white'
                  : 'bg-white/10 text-white'
              }`}
            >
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 p-3 rounded-2xl">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce animation-delay-200"></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce animation-delay-400"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <div className="p-4 border-t border-white/20">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask about Ankit's skills..."
            className="flex-1 p-3 bg-white/10 border border-white/20 rounded-xl focus:border-cyan-400 focus:outline-none text-white placeholder-gray-400 text-sm"
          />
          <button
            onClick={handleSendMessage}
            className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <Send className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  )}

  {/* Chat Toggle Button */}
  <button
    onClick={() => setIsChatOpen(!isChatOpen)}
    className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-110"
  >
    {isChatOpen ? (
      <X className="w-6 h-6 text-white" />
    ) : (
      <MessageCircle className="w-6 h-6 text-white" />
    )}
  </button>
</div>

    </div>
  );
};

export default Portfolio;
