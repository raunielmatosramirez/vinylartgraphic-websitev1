"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { IoMdSend } from "react-icons/io";

const WhatsAppButton = () => {
  const phoneNumber = "+1 7865327005";
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-adjust textarea height
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [message]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Optimized WhatsApp sending logic
  const sendWhatsAppMessage = () => {
    if (!message.trim()) return;
    
    const cleanPhone = phoneNumber.replace(/\D/g, '');
    const encodedMessage = encodeURIComponent(message.trim());
    
    // Always use wa.me - it works on both mobile and desktop
    // wa.me will open WhatsApp app on mobile or WhatsApp Web on desktop
    // This avoids the login redirect issue
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Reset and close
    setMessage("");
    setIsOpen(false);
    
    // Optional tracking
    // console.log("WhatsApp message sent to:", cleanPhone);
  };

  // Handle Enter key
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendWhatsAppMessage();
    }
  };

  // Toggle chat with focus
  const toggleChat = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    
    if (newState && textareaRef.current) {
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 150);
    }
  };

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-50">
      {/* Chat Container - EXACTLY your original design */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-70 bg-black/90 backdrop-blur-sm rounded-sm shadow-2xl p-4 animate-fade-in">
          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-[#FFFF00] text-sm font-large">WhatsApp Message</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors p-1"
              aria-label="Close chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Textarea - EXACTLY your original */}
          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Write your message..."
            className="w-full bg-transparent text-white placeholder-gray-400 border border-[#FFFF00]/30 rounded-lg p-3 text-sm resize-none focus:outline-none focus:border-[#FFFF00] transition-colors mb-3"
            rows={3}
            aria-label="Message input"
          />

          {/* Bottom section with professional info */}
          <div className="flex items-center justify-between">
            <div className="text-xs text-gray-400">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                <span>Online • Quick reply</span>
              </div>
              <div className="text-[10px] text-gray-500 mt-0.5">
                {message.length}/500 characters
              </div>
            </div>
            
            {/* Send button - EXACTLY your original position and style */}
            <div className="flex absolute right-1 bottom-5 justify-end">
              <button
                onClick={sendWhatsAppMessage}
                disabled={!message.trim()}
                className={`w-8 h-8 ${
                  message.trim() 
                    ? "bg-[#FFFF00] hover:bg-[#ffff00cc]" 
                    : "bg-gray-600 cursor-not-allowed"
                } text-black text-center rounded-full font-medium transition-all duration-300 ease-in-out transform hover:scale-110 flex items-center justify-center group shadow-lg`}
                aria-label="Send message"
                title="Send WhatsApp message"
              >
                <IoMdSend/>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main button - EXACTLY your original style */}
      <button
        onClick={toggleChat}
        className='w-14 h-14 bg-[#ffff0054] rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 flex items-center justify-center group relative'
        aria-label='Contact via WhatsApp'
        title='Open WhatsApp chat'
      >
        <Image
          src='/ICONOWHATSAPP.svg'
          width={35}
          height={35}
          priority={true}
          alt='WhatsApp'
        />

        <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFFF00] opacity-75'></span>
        
        {/* Professional indicator */}
        {isOpen ? (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-black animate-pulse"></span>
        ) : (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#FFFF00] rounded-full border-2 border-black"></span>
        )}
      </button>
    </div>
  );
};

export default WhatsAppButton;