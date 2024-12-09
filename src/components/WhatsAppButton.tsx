'use client';

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "6285225575696";
    const message = "Halo Baparkir? Parkir Mantap!";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <button 
      onClick={handleWhatsAppClick}
      className="px-8 py-3 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-400 transition-colors font-semibold"
    >
      Hubungi Kami
    </button>
  );
}
