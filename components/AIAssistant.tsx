
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, Send, X, Bot, Loader2 } from 'lucide-react';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: 'Hi! I am Mahapurush Moving Assistant. How can I help you plan your move today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Ref to persist the chat session across re-renders
  const chatSessionRef = useRef<any>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      // Initialize the AI client and Chat session if it doesn't exist
      if (!chatSessionRef.current) {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        chatSessionRef.current = ai.chats.create({
          model: 'gemini-3-flash-preview',
          config: {
            systemInstruction: `You are an expert moving consultant for 'Mahapurush Packers and Movers' located in Ratnagiri, Maharashtra. 
            Provide helpful, safe, and professional advice about packing, moving fragile items, relocation checklists, and vehicle transport. 
            Keep answers concise and friendly. If they ask about pricing, tell them to visit our Contact page for a custom quote.
            Our address is: House No. B/1714, Rasalwadi, Near Bus Stop, Nachane Road, Shanti Nagar, Ratnagiri.
            Our focus is on damage-free shifting and customer trust.`,
          },
        });
      }

      // Send message using the chat session
      const result = await chatSessionRef.current.sendMessage({ message: userMsg });
      
      const botText = result.text || "I'm sorry, I couldn't process that. Please try again or call us directly.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error("AI Assistant Error:", error);
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: "I'm having a bit of trouble connecting to my moving database. Please feel free to call us directly for immediate help!" 
      }]);
      // Reset chat session on error to allow a fresh start
      chatSessionRef.current = null;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {isOpen && (
        <div className="bg-white w-80 sm:w-96 h-[500px] shadow-2xl rounded-3xl mb-4 flex flex-col overflow-hidden border border-brandGray animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-primary-500 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="bg-cta p-2 rounded-lg text-primary-900 shadow-md">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold leading-none">Moving Assistant</p>
                <p className="text-[10px] text-cta uppercase tracking-widest mt-1 font-extrabold">Expert Help</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="hover:bg-white/10 p-1 rounded-full transition-colors"
              aria-label="Close assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-brandGray/30 no-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm font-medium ${
                  m.role === 'user' 
                    ? 'bg-primary-500 text-white rounded-tr-none' 
                    : 'bg-white text-textMain rounded-tl-none border border-brandGray'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-brandGray flex items-center gap-2">
                  <Loader2 className="w-4 h-4 text-cta animate-spin" />
                  <span className="text-xs text-textMuted font-bold">AI is thinking...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-brandGray">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about packing tips..."
                className="flex-1 bg-brandGray border-brandGray rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-cta focus:outline-none font-medium"
                disabled={isLoading}
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-cta text-primary-900 p-2 rounded-xl hover:bg-cta-hover transition-colors disabled:opacity-50 shadow-md"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary-500 text-cta p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce-slow border-2 border-white"
        aria-label={isOpen ? "Close Assistant" : "Open Assistant"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default AIAssistant;
