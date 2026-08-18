"use client";

import React, { useRef, useState, useEffect } from 'react';

type Message = {
  id: string;
  text: string;
  sender: 'me' | 'other';
  time: string;
};

const initialMessages: Message[] = [
  { id: '1', text: 'Hi! I reviewed the draft you sent over yesterday. The user flows are looking much cleaner now.', sender: 'other', time: '10:30 AM' },
  { id: '2', text: 'I left a few comments on the Figma file regarding the edge cases during checkout.', sender: 'other', time: '10:31 AM' },
  { id: '3', text: "Thank you! I'll take a look at the comments right away.", sender: 'me', time: '10:35 AM' },
  { id: '4', text: "I'm thinking of adding a confirmation modal for the final step. What do you think?", sender: 'me', time: '10:36 AM' },
  { id: '5', text: 'That sounds like a great plan for your capstone project! Let me know if you need resources.', sender: 'other', time: '10:42 AM' }
];

export default function MessagesPage() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    const target = e.target;
    target.style.height = 'auto';
    target.style.height = `${target.scrollHeight}px`;
    if (target.value === '') {
      target.style.height = '44px';
    }
  };

  const handleSend = () => {
    if (inputValue.trim() === '') return;
    
    const newMsg: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: 'me',
      time: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, newMsg]);
    setInputValue('');
    if (textareaRef.current) {
      textareaRef.current.style.height = '44px';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col md:flex-row h-full min-h-[calc(100vh-[var(--navbar-height,80px)]-[var(--dock-height,96px)])] lg:min-h-[calc(100vh-80px)] overflow-hidden relative border-t border-outline-variant/20 -mx-6 lg:-mx-0">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-tertiary-container/10 rounded-full blur-[80px]"></div>
      </div>

      {/* Left Pane: Conversation List */}
      <aside className="w-full md:w-[30%] min-w-[320px] max-w-[400px] h-[400px] md:h-full flex flex-col bg-surface border-r border-outline-variant/20 z-10">
        {/* Header & Search */}
        <div className="p-4 lg:p-container-padding-mobile flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Messages</h2>
            <button className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container hover:bg-surface-variant transition-colors text-on-surface">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>edit_square</span>
            </button>
          </div>
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" style={{ fontVariationSettings: "'FILL' 0" }}>search</span>
            <input className="w-full bg-surface-container text-on-surface placeholder:text-outline border-none rounded-full py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary focus:outline-none transition-all font-body-sm text-body-sm" placeholder="Search conversations" type="text" />
          </div>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto px-2 pb-[100px] md:pb-4 custom-scrollbar">
          {/* Active Chat Item */}
          <div className="flex items-center gap-3 p-3 rounded-lg bg-primary-container/20 cursor-pointer mb-1 relative overflow-hidden group">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-primary rounded-r-full"></div>
            <div className="relative w-12 h-12 rounded-full flex-shrink-0">
              <img alt="Sophea N." className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsUAw1hjz3PjLJm4Df9GXqhzsTQO4GCfT_-d1fZbnNCFIjMnUrtHSLMuiwuSOIlpqokXkxIQ3XAvZOVGTAm_okh_lJbGzO3NxKTqoHq8QJoxUqQPePuOctoZs-JI1pc4IrRiBYycTZAJf0VE-gMsMpXsYwXU8haN8M17S83BZvHTNWj8-8H_xbM5c35hKfUArEBPzOR_LEkTQ9a1oBw5C0EKMXTz0kvBSJTigeHb4KZmAapzpqXTmU_w"/>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#10B981] border-2 border-surface rounded-full"></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline mb-0.5">
                <h3 className="font-body-sm text-body-sm font-semibold text-on-surface truncate">Sophea N.</h3>
                <span className="font-label-caps text-label-caps text-primary">10:42 AM</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant truncate">That sounds like a great plan for your capstone project! Let me know if you need resources.</p>
            </div>
          </div>

          {/* Inactive Chat Items */}
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-container cursor-pointer transition-colors mb-1 group">
            <div className="relative w-12 h-12 rounded-full flex-shrink-0">
              <div className="w-full h-full rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-stat-display text-stat-display">R</div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline mb-0.5">
                <h3 className="font-body-sm text-body-sm font-semibold text-on-surface truncate">Study Group: UX/UI</h3>
                <span className="font-label-caps text-label-caps text-outline">Yesterday</span>
              </div>
              <p className="font-body-sm text-body-sm text-outline truncate">Rithy: Has anyone finished the wireframes yet?</p>
            </div>
            <div className="w-5 h-5 bg-error text-on-error rounded-full flex items-center justify-center font-label-caps text-[10px]">2</div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-container cursor-pointer transition-colors mb-1 group">
            <div className="relative w-12 h-12 rounded-full flex-shrink-0">
              <img alt="Chanda K." className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGFRDMmyX2vKZbp5ykQvWZuXETahOtb4B3Qmt9CxiuPf6TnUqEXTU-4C8lIvKYtB-3bA4mg0ZCIEEVssjTjsV7CkdKRxx8yHlvOUpDHdUw-JmPYZA249vljRNpqq8rBCzy_ugr3B8nsKycBEzXXS5moIyLtepLjXGsX7zWk8M_m5_2iciBegQsglF7OS9VW9saxybN7cFOpAyhqA6QfWQ9bxrQfEOAtcLsuIwnEb4hhlvu5nVPgYZg2Q"/>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline mb-0.5">
                <h3 className="font-body-sm text-body-sm font-semibold text-on-surface truncate">Chanda K.</h3>
                <span className="font-label-caps text-label-caps text-outline">Tue</span>
              </div>
              <p className="font-body-sm text-body-sm text-outline truncate">Thanks for the notes from yesterday's lecture!</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-container cursor-pointer transition-colors mb-1 group">
            <div className="relative w-12 h-12 rounded-full flex-shrink-0">
              <div className="w-full h-full rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-stat-display text-stat-display">
                <span className="material-symbols-outlined">school</span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline mb-0.5">
                <h3 className="font-body-sm text-body-sm font-semibold text-on-surface truncate">Academic Advisor</h3>
                <span className="font-label-caps text-label-caps text-outline">Mon</span>
              </div>
              <p className="font-body-sm text-body-sm text-outline truncate">Your registration for next semester is confirmed.</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Right Pane: Active Chat */}
      <section className="flex flex-col flex-1 h-[calc(100vh-80px-400px)] md:h-full bg-surface-bright z-10 shadow-[-10px_0px_30px_rgba(79,55,138,0.03)] relative">
        {/* Chat Header */}
        <header className="h-20 border-b border-outline-variant/20 flex items-center justify-between px-6 lg:px-container-padding-desktop bg-surface/50 backdrop-blur-md sticky top-0 z-20 shrink-0">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full hidden sm:block">
              <img alt="Sophea N." className="w-full h-full object-cover rounded-full shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDol4iRwIIIvzMZGsgQCWaCnmveLjqe3oBRkod6_DttyHynDQKfBfB4sLbJbqL9Vo5uRgzrArVGKXOAPEzEbP-PZWAEi_NXYdmhpwbRLOO7n2EHvjbJnF8N0-L1yt_1vBqDfZmTmZcuLCuDYsoe6VmCjfch7FLsrBVzTDRVwNg6TyelB6pKmzB1MuAOwxtDcTJH7mWG-6FDBU5oJLobGPT5RaW7dmxI69AylMD0ZPeYODQBnGlODL7uww"/>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#10B981] border-2 border-surface rounded-full"></div>
            </div>
            <div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-[20px] font-bold text-on-surface leading-tight">Sophea N.</h2>
              <div className="flex items-center gap-2">
                <span className="font-body-sm text-[12px] text-outline">Senior UX Researcher</span>
                <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                <span className="font-body-sm text-[12px] text-primary">Active now</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-variant/50 transition-colors">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>videocam</span>
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-variant/50 transition-colors">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>call</span>
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-variant/50 transition-colors hidden sm:flex">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>info</span>
            </button>
          </div>
        </header>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto px-4 lg:px-container-padding-desktop pt-6 flex flex-col gap-6 scroll-smooth pb-[120px] custom-scrollbar">
          {/* Date Divider */}
          <div className="flex justify-center my-2">
            <span className="px-4 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-caps text-label-caps text-[10px]">TODAY</span>
          </div>

          {messages.map((msg, index) => {
            const isMe = msg.sender === 'me';
            const showAvatar = msg.sender === 'other' && (index === 0 || messages[index - 1].sender === 'me');
            const isSequentialMe = isMe && index > 0 && messages[index - 1].sender === 'me';
            const isSequentialOther = !isMe && index > 0 && messages[index - 1].sender === 'other';

            if (isMe) {
              return (
                <div key={msg.id} className={`flex items-end gap-3 max-w-[85%] sm:max-w-[80%] self-end ${isSequentialMe ? '-mt-4' : ''}`}>
                  <div className="flex flex-col gap-1 items-end">
                    <div className={`bg-primary text-on-primary px-5 py-3 rounded-2xl ${isSequentialMe ? 'rounded-tr-sm' : ''} rounded-br-sm font-body-sm text-body-sm shadow-[0px_4px_10px_rgba(14,165,233,0.2)] whitespace-pre-wrap`}>
                        {msg.text}
                    </div>
                    <span className="text-[10px] text-outline font-body-sm mr-1 flex items-center gap-1">
                        {msg.time}
                        <span className="material-symbols-outlined text-[14px] text-primary" style={{ fontVariationSettings: "'FILL' 0" }}>done_all</span>
                    </span>
                  </div>
                </div>
              );
            } else {
              return (
                <div key={msg.id} className={`flex items-end gap-3 max-w-[85%] sm:max-w-[80%] ${isSequentialOther ? '-mt-4 sm:pl-11' : ''}`}>
                  {showAvatar ? (
                    <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 mb-1 hidden sm:block">
                      <img alt="Sophea N." className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy169VFAeTZeAalIBAno4QtNY4Sh-zZDx2tl6Jcj6jgKkI-z0jiTnCUlLwRRdooFc7DRBLl1CKlLpqFaAckDXIQYguEV0aVu2gh6t4VB6i9Kdjn1YvaFULz8c1i3kpsiw4kuywZTfx3kxtHtxkePL5euO7CWMt4LVKlaD1llcTnpWttwGVUx6I_XFiMvYsc-FsC3T_htCzuDbnJXoDp2ZKJ8u8OhhThIEPn1oThFun8pw-TVPo1MhQ1A"/>
                    </div>
                  ) : (
                    <div className="w-8 flex-shrink-0 hidden sm:block"></div>
                  )}
                  <div className="flex flex-col gap-1 items-start">
                    <div className={`bg-surface-container text-on-surface px-5 py-3 rounded-2xl ${isSequentialOther ? 'rounded-tl-sm' : ''} rounded-bl-sm font-body-sm text-body-sm shadow-sm relative group whitespace-pre-wrap`}>
                        {msg.text}
                    </div>
                    <span className="text-[10px] text-outline font-body-sm ml-1">{msg.time}</span>
                  </div>
                </div>
              );
            }
          })}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-surface-bright via-surface-bright to-transparent z-20">
          <div className="max-w-4xl mx-auto flex items-end gap-2 bg-surface shadow-[0px_10px_30px_rgba(79,55,138,0.1)] rounded-3xl p-2 border border-outline-variant/20 focus-within:border-primary/50 focus-within:shadow-[0px_10px_40px_rgba(14,165,233,0.15)] transition-all duration-300">
            <button className="w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center text-outline hover:text-primary hover:bg-primary-container/20 transition-colors">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>add_circle</span>
            </button>
            
            <div className="flex-1 min-h-[44px] max-h-32 flex items-center pt-[2px]">
              <textarea 
                ref={textareaRef}
                value={inputValue}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent border-none focus:ring-0 resize-none font-body-sm text-body-sm text-on-surface placeholder:text-outline py-2.5 px-2 max-h-32 overflow-y-auto custom-scrollbar" 
                placeholder="Type a message..." 
                rows={1}
                style={{ height: '44px' }}
              />
            </div>
            
            <div className="flex items-center gap-1 flex-shrink-0 mb-1">
              <button className="w-10 h-10 rounded-full flex items-center justify-center text-outline hover:text-primary hover:bg-primary-container/20 hidden sm:flex transition-colors">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>sentiment_satisfied</span>
              </button>
              <button onClick={handleSend} className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-on-primary hover:opacity-90 shadow-sm transition-all hover:scale-105 active:scale-95">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
