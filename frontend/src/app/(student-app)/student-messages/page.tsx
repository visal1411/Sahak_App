"use client";

import React, { useState } from 'react';
import Image from 'next/image';

// Custom type for Messages
interface Message {
  id: string;
  sender: 'student' | 'mentor';
  text: string;
  timestamp: string;
}

interface ChatContact {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  lastMessage: string;
  time: string;
  unread: number;
}

const contacts: ChatContact[] = [
  {
    id: "m-8",
    name: "Minea Prak",
    role: "Mathematics Mentor",
    avatarUrl: "https://i.pravatar.cc/150?u=minea",
    lastMessage: "That sounds like a great plan! Let's review the algebra assignment on Friday.",
    time: "10:42 AM",
    unread: 2,
  },
  {
    id: "m-2",
    name: "Vannak Sovann",
    role: "Biology Mentor",
    avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiCYkAwyr1C1OgrXiwQFAzXt-D9FE6FFLMR0lqzLu0uMQZWBJwIUF-mBvz42fKecRWGeDtvGgpYvjPiBXYWYnHnTFMrL3VnXH5HkgN-zCaaroFBEjzr3R3dpb6Grf2M4Iv1thAMJbKQcyLNDj5FbopCQXLfA28TUcHhfqmrxNy_BmoI_6u17j508qao7UKaEZtBwBfa_DGTDnhVOIOZv6DvUrmdJIzvzV52RTR13E3iF15MDaoNG_ewQ",
    lastMessage: "Did you manage to read the chapter on cellular respiration?",
    time: "Yesterday",
    unread: 0,
  },
  {
    id: "m-6",
    name: "Chanda Kim",
    role: "English Mentor",
    avatarUrl: "https://i.pravatar.cc/150?u=chanda",
    lastMessage: "Great job on the essay. The structure is much better.",
    time: "Monday",
    unread: 0,
  }
];

const mockThread: Message[] = [
  { id: '1', sender: 'mentor', text: 'Hi Sokha! How is your preparation for the upcoming BacII exam going?', timestamp: '10:15 AM' },
  { id: '2', sender: 'student', text: 'Hello Teacher Minea! It’s going okay, but I am still struggling a bit with complex numbers in algebra.', timestamp: '10:20 AM' },
  { id: '3', sender: 'mentor', text: 'Don’t worry, that’s a common area to get stuck. Have you tried breaking down the real and imaginary parts separately?', timestamp: '10:25 AM' },
  { id: '4', sender: 'student', text: 'Yes, but when it comes to division, I get confused with the conjugate.', timestamp: '10:30 AM' },
  { id: '5', sender: 'mentor', text: 'I have a great visual trick for that. Why don’t we go through a few practice problems together in our next session?', timestamp: '10:35 AM' },
  { id: '6', sender: 'student', text: 'That would be perfect! Could we do it this Friday?', timestamp: '10:40 AM' },
  { id: '7', sender: 'mentor', text: 'That sounds like a great plan! Let\'s review the algebra assignment on Friday.', timestamp: '10:42 AM' },
];

export default function StudentMessagesPage() {
  const [activeChat, setActiveChat] = useState<ChatContact>(contacts[0]);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<Message[]>(mockThread);

  const handleSend = () => {
    if (!inputText.trim()) return;
    
    const newMsg: Message = {
      id: Date.now().toString(),
      sender: 'student',
      text: inputText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMsg]);
    setInputText("");
  };

  return (
    <div className="w-full max-w-[1280px] mx-auto px-6 py-6 pb-24 h-[calc(100vh-80px)]">
      {/* Mobile Header */}
      <div className="mb-4 lg:hidden">
        <h1 className="font-display-lg text-[24px] font-bold text-on-surface">Messages</h1>
      </div>

      <div className="w-full h-full bg-white rounded-3xl shadow-sm border border-outline-variant/20 flex overflow-hidden">
        
        {/* Left Pane: Contacts List */}
        <div className="w-full lg:w-[350px] border-r border-outline-variant/20 flex flex-col bg-surface-container-lowest shrink-0 hidden lg:flex">
          {/* Contacts Header */}
          <div className="p-4 border-b border-outline-variant/20 flex items-center justify-between">
            <h2 className="font-headline-lg text-[20px] font-bold">Chats</h2>
            <button className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-[18px]">edit_square</span>
            </button>
          </div>
          
          {/* Search Box */}
          <div className="p-4 pb-2">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-[18px]">search</span>
              <input 
                type="text" 
                placeholder="Search mentors..." 
                className="w-full pl-9 pr-4 py-2 bg-surface-container-low rounded-xl border border-transparent focus:border-primary/30 focus:bg-white outline-none transition-all font-body-sm"
              />
            </div>
          </div>

          {/* Contact List */}
          <div className="flex-1 overflow-y-auto w-full p-2 space-y-1">
            {contacts.map((contact) => {
              const isActive = activeChat.id === contact.id;
              return (
                <div 
                  key={contact.id}
                  onClick={() => setActiveChat(contact)}
                  className={`w-full flex items-center gap-3 p-3 rounded-2xl cursor-pointer transition-colors ${isActive ? 'bg-primary/10 border border-primary/20' : 'hover:bg-surface-variant/30 border border-transparent'}`}
                >
                  <div className="relative w-12 h-12 shrink-0">
                    <img src={contact.avatarUrl} alt={contact.name} className="w-full h-full rounded-full object-cover border border-outline-variant/10" />
                    {isActive && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline mb-0.5">
                      <h3 className={`font-body-md font-bold truncate ${isActive ? 'text-primary' : 'text-on-surface'}`}>{contact.name}</h3>
                      <span className={`text-[10px] font-bold ${contact.unread > 0 ? 'text-brand-sky' : 'text-on-surface-variant'}`}>{contact.time}</span>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                      <p className={`font-body-sm truncate ${contact.unread > 0 ? 'text-on-surface font-semibold' : 'text-on-surface-variant'}`}>
                        {contact.lastMessage}
                      </p>
                      {contact.unread > 0 && (
                        <div className="w-5 h-5 rounded-full bg-brand-sky flex items-center justify-center text-white text-[10px] font-bold shrink-0">
                          {contact.unread}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Pane: Chat Thread */}
        <div className="flex-1 flex flex-col bg-[#F8FAFC] relative h-full">
          {/* Thread Header */}
          <div className="h-16 border-b border-outline-variant/20 bg-white px-6 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              {/* Mobile Back Button */}
              <button className="lg:hidden w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center mr-2">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              
              <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-outline-variant/10">
                <img src={activeChat.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="font-body-md font-bold text-on-surface leading-tight">{activeChat.name}</h2>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span className="font-body-sm text-[11px] text-on-surface-variant font-medium">{activeChat.role}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 rounded-full hover:bg-surface-variant/50 text-on-surface-variant transition-colors flex items-center justify-center">
                <span className="material-symbols-outlined">videocam</span>
              </button>
              <button className="w-10 h-10 rounded-full hover:bg-surface-variant/50 text-on-surface-variant transition-colors flex items-center justify-center">
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="w-full flex justify-center">
              <div className="bg-surface-variant/50 px-3 py-1 rounded-full font-label-caps text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">
                Today
              </div>
            </div>

            {messages.map((msg, index) => {
              const isMe = msg.sender === 'student';
              return (
                <div key={msg.id} className={`flex w-full ${isMe ? 'justify-end' : 'justify-start'}`}>
                  {!isMe && (
                    <img src={activeChat.avatarUrl} alt="Mentor" className="w-8 h-8 rounded-full object-cover mr-2 self-end mb-1 border border-outline-variant/20" />
                  )}
                  <div className={`flex flex-col ${isMe ? 'items-end' : 'items-start'} max-w-[70%]`}>
                    <div 
                      className={`px-4 py-2.5 rounded-[20px] font-body-sm shadow-sm
                        ${isMe 
                          ? 'bg-gradient-to-br from-brand-sky to-brand-blue text-white rounded-br-[4px]' 
                          : 'bg-white border border-outline-variant/20 text-on-surface rounded-bl-[4px]'
                        }`}
                    >
                      {msg.text}
                    </div>
                    <span className="font-label-caps text-[9px] text-on-surface-variant mt-1.5 px-1">{msg.timestamp}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-outline-variant/20 shrink-0">
            <div className="flex items-end gap-2 bg-surface-container-lowest border border-outline-variant/40 rounded-3xl p-1.5 focus-within:border-brand-sky focus-within:ring-2 focus-within:ring-brand-sky/20 transition-all shadow-sm">
              <button className="w-10 h-10 rounded-full hover:bg-surface-variant/50 text-on-surface-variant transition-colors flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[20px]">add_circle</span>
              </button>
              <textarea 
                className="flex-1 bg-transparent border-none outline-none resize-none font-body-sm py-2.5 px-2 max-h-32 min-h-[40px]" 
                placeholder="Type your message..."
                rows={1}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
              />
              <button 
                onClick={handleSend}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors shrink-0 ${inputText.trim() ? 'bg-primary text-white shadow-md hover:bg-primary/90' : 'bg-surface-variant text-on-surface-variant/50'}`}
              >
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
              </button>
            </div>
            <div className="w-full text-center mt-2">
              <span className="font-label-caps text-[9px] text-on-surface-variant/70 uppercase">Press Enter to send, Shift+Enter for new line</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
