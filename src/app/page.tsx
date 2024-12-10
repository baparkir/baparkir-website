import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <div className="text-center mb-6">
              <img className="inline-block" style={{ width: 120 }}  src="/logo2.png" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
              Revolusi
              <span className="text-yellow-500"> Manajemen Parkir </span>
              untuk Kota Cerdas
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Tingkatkan efisiensi parkir, pantau pendapatan, dan bangun kepercayaan melalui transformasi digital
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                Mulai Sekarang
              </a>
              <a
                href="#features"
                className="px-8 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tentang Kami</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-4">
                Baparkir adalah solusi sistem manajemen parkir untuk pemerintah dan swasta. Manajemen parkir menjadi mudah dengan memanfaatkan platform web.
              </p>
              <p className="text-lg text-gray-600">
                Dengan teknologi modern dan interface yang intuitif, kami membantu mengoptimalkan pengelolaan area parkir, meningkatkan efisiensi operasional, dan memberikan pengalaman parkir yang lebih baik untuk semua pengguna.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-16 bg-gray-100 text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Fitur Utama</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Analisis Pendapatan",
                description: "Pantau dan analisis pendapatan parkir secara real-time dengan detail lengkap",
              },
              {
                title: "Pembayaran Digital",
                description: "Proses pembayaran digital yang aman dan efisien untuk semua transaksi",
              },
              {
                title: "Monitoring Okupansi",
                description: "Pemantauan langsung ketersediaan dan penggunaan ruang parkir",
              },
              {
                title: "Manajemen Pelanggaran",
                description: "Sistem pengelolaan pelanggaran parkir yang terstruktur",
              },
              {
                title: "Laporan Otomatis",
                description: "Sistem pelaporan komprehensif untuk pengambilan keputusan yang lebih baik dan meningkatkan kepercayaan masyarakat serta pelanggan",
              },
              {
                title: "Akses Mobile",
                description: "Kelola operasional parkir dari mana saja dengan aplikasi mobile kami",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white text-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Mengapa Memilih Baparkir?</h2>
            <p className="text-gray-600">Solusi terpadu untuk pemerintah dan pengelola parkir</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-black">Untuk Pemerintah</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  Peningkatan pendapatan retribusi parkir
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  Pengawasan operasional yang lebih baik
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  Mengurangi parkir liar dan tidak berizin
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-black">Untuk Pengelola Parkir</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Pengelolaan pendapatan yang transparan
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Meningkatkan kepercayaan pelanggan
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Wawasan bisnis secara real-time
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Siap Mengoptimalkan Pengelolaan Parkir Anda?</h2>
          <p className="text-gray-300 mb-8">
            Bergabunglah dalam revolusi digital manajemen parkir
          </p>
          <WhatsAppButton />
        </div>
      </div>
    </div>
  );
}
