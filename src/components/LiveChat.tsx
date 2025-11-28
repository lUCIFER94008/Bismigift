import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface ChatMessage {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      text: 'Hello! 👋 Welcome to Bismi Gift House. How can we help you today?',
      isUser: false,
      timestamp: new Date()
    }
  ]);

  const quickReplies = [
    'Check order status',
    'Product availability',
    'Shipping information',
    'Contact WhatsApp'
  ];

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Greeting responses
    if (lowerMessage.match(/^(hi|hello|hey|good morning|good evening|good afternoon)/)) {
      return 'Hello! 😊 Welcome to New Bismi Gift House! How can I assist you today? You can ask about:\n\n• Product availability\n• Shipping & delivery\n• Order status\n• Gift wrapping services\n• Bulk orders\n\nOr click "Chat on WhatsApp" below for instant support!';
    }
    
    // Order related
    if (lowerMessage.includes('order') || lowerMessage.includes('status') || lowerMessage.includes('track')) {
      return '📦 To check your order status:\n\n1. Login to your account\n2. Go to "My Orders" section\n3. View all your order details\n\nFor immediate assistance, contact us on WhatsApp at 94466 51773!';
    }
    
    // Shipping & Delivery
    if (lowerMessage.includes('ship') || lowerMessage.includes('delivery') || lowerMessage.includes('deliver')) {
      return '🚚 Shipping Information:\n\n• Standard shipping: ₹50 across India\n• Delivery time: 5-7 business days\n• Free shipping on orders above ₹999\n• Express delivery available\n\nNeed faster delivery? Contact us on WhatsApp!';
    }
    
    // Returns & Refunds
    if (lowerMessage.includes('return') || lowerMessage.includes('refund') || lowerMessage.includes('exchange')) {
      return '↩️ Return Policy:\n\n• 7-day return on most items\n• Product must be unused & in original packaging\n• Full refund or exchange available\n\nFor return requests, message us on WhatsApp or visit our Return Policy page!';
    }
    
    // Product availability
    if (lowerMessage.includes('product') || lowerMessage.includes('available') || lowerMessage.includes('stock')) {
      return '🎁 All products displayed on our website are in stock!\n\nWe have:\n• Toys & Games\n• Newborn Baby Items\n• Wall Clocks & Watches\n• Stationery\n• Remote Cars\n• Gift Items\n\nLooking for something specific? Chat with us on WhatsApp!';
    }
    
    // Categories
    if (lowerMessage.includes('toy') || lowerMessage.includes('game')) {
      return '🧸 We have an amazing collection of toys including educational toys, action figures, dolls, puzzles, and more! Visit our Toys category to explore!';
    }
    
    if (lowerMessage.includes('clock') || lowerMessage.includes('watch')) {
      return '⏰ Check out our beautiful collection of wall clocks and watches! We have modern, classic, and decorative designs. Visit our Wall Clocks & Watches categories!';
    }
    
    if (lowerMessage.includes('stationery') || lowerMessage.includes('pen') || lowerMessage.includes('notebook')) {
      return '📝 We offer a wide range of stationery items including pens, notebooks, art supplies, and more! Perfect for students and professionals!';
    }
    
    // Pricing
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('discount')) {
      return '💰 Pricing Information:\n\n• Competitive prices on all items\n• Special combo pack discounts\n• Seasonal sales & offers\n• Earn 5% rewards on every purchase\n\nCheck product pages for current prices!';
    }
    
    // Gift wrapping
    if (lowerMessage.includes('gift') && (lowerMessage.includes('wrap') || lowerMessage.includes('pack'))) {
      return '🎁 Gift Wrapping Service:\n\n• Available for ₹50 per item\n• Beautiful & professional wrapping\n• Perfect for all occasions\n\nSelect gift wrapping when adding items to cart!';
    }
    
    // Bulk orders
    if (lowerMessage.includes('bulk') || lowerMessage.includes('wholesale') || lowerMessage.includes('corporate')) {
      return '📦 Wholesale & Bulk Orders:\n\n• Special discounts available\n• Corporate gifting solutions\n• Custom packaging options\n\nContact us on WhatsApp at 94466 51773 for bulk order enquiries!';
    }
    
    // Payment
    if (lowerMessage.includes('payment') || lowerMessage.includes('pay') || lowerMessage.includes('cod')) {
      return '💳 Payment Options:\n\n• Credit/Debit Cards\n• UPI\n• Net Banking\n• Cash on Delivery (COD)\n\nAll payments are secure and encrypted!';
    }
    
    // Contact
    if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('whatsapp')) {
      return '📞 Contact Us:\n\n• WhatsApp: +91 94466 51773\n• Available: 9 AM - 10 PM (All Days)\n\nClick the "Chat on WhatsApp" button below for instant support!';
    }
    
    // Thanks
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return 'You\'re welcome! 😊 Happy shopping at New Bismi Gift House! Feel free to reach out on WhatsApp anytime!';
    }
    
    // Default response
    return '🤖 Thank you for your message!\n\nFor personalized assistance, please:\n• Click "Chat on WhatsApp" below\n• Call us at 94466 51773\n\nOur team is ready to help you with all your gift, toy, and stationery needs!';
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Add user message
      const userMessage: ChatMessage = {
        text: message,
        isUser: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, userMessage]);
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse = getBotResponse(message);
        
        const botMessage: ChatMessage = {
          text: botResponse,
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      }, 800);
      
      setMessage('');
    }
  };

  const handleQuickReply = (reply: string) => {
    setMessage(reply);
    // Auto-send the quick reply
    const userMessage: ChatMessage = {
      text: reply,
      isUser: true,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(reply);
      
      const botMessage: ChatMessage = {
        text: botResponse,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 800);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919446651773?text=Hello, I need assistance with New Bismi Gift House', '_blank');
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 p-3 sm:p-4 bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all z-50"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 left-4 sm:left-auto sm:bottom-6 sm:right-6 w-auto sm:w-96 bg-white dark:bg-gray-800 rounded-lg shadow-2xl z-50 flex flex-col max-h-[85vh] sm:max-h-[600px]">
          {/* Header */}
          <div className="bg-gray-900 dark:bg-gray-700 text-white p-3 sm:p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-xl sm:text-2xl">🎁</span>
              </div>
              <div>
                <h3 className="text-sm sm:text-base">Bismi Gift House</h3>
                <p className="text-[10px] sm:text-xs text-gray-300">We typically reply instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-gray-800 dark:hover:bg-gray-600 rounded transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-3 sm:p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
            <div className="space-y-2 sm:space-y-3">
              {messages.map((msg, index) => (
                <div key={index} className={`flex gap-2 ${msg.isUser ? 'justify-end' : ''}`}>
                  {!msg.isUser && (
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-900 dark:bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs sm:text-sm">B</span>
                    </div>
                  )}
                  <div className={`rounded-lg p-2.5 sm:p-3 max-w-[85%] sm:max-w-[80%] ${
                    msg.isUser 
                      ? 'bg-gray-900 dark:bg-gray-700 text-white' 
                      : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow'
                  }`}>
                    <p className="text-xs sm:text-sm whitespace-pre-line">{msg.text}</p>
                  </div>
                </div>
              ))}

              {/* Quick Replies - only show if it's the first message */}
              {messages.length === 1 && (
                <div className="flex flex-col gap-2 pl-8 sm:pl-10">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Quick replies:</p>
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="text-left px-2.5 py-1.5 sm:px-3 sm:py-2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xs sm:text-sm border border-gray-200 dark:border-gray-700 transition"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-3 sm:p-4 border-t border-gray-200 dark:border-gray-700">
            <form onSubmit={handleSendMessage} className="flex gap-2 mb-2 sm:mb-3">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-2.5 py-2 sm:px-3 text-xs sm:text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
              <button
                type="submit"
                className="px-3 py-2 sm:px-4 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white rounded-lg transition"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </form>

            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsApp}
              className="w-full px-3 py-2 sm:px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg flex items-center justify-center gap-2 transition text-xs sm:text-sm"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
