import { useState, memo } from 'react';
import { trackFAQExpand } from '../utils/gtm';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Turbo arızası nasıl anlaşılır?',
    answer: 'Turbo arızasının belirtileri arasında siyah veya mavi duman çıkması, güç kaybı, aşırı gürültü, yağ tüketiminde artış ve motor arıza lambasının yanması sayılabilir. Ücretsiz arıza tespiti için bize ulaşabilirsiniz.',
  },
  {
    question: 'Turbo revizyonu ne kadar sürer?',
    answer: 'Turbo revizyon süresi arızanın durumuna göre değişir. Genellikle 1-2 gün içinde tamamlanır. Acil durumlarda aynı gün teslim imkânımız da bulunmaktadır.',
  },
  {
    question: 'Garanti var mı?',
    answer: 'Evet, tüm revizyon ve tamir işlemlerimizde yazılı garanti sunuyoruz. Garanti süresi ve kapsamı hakkında detaylı bilgi için bize ulaşabilirsiniz.',
  },
  {
    question: 'Fiyat nasıl belirleniyor?',
    answer: 'Fiyatlandırma turbo markası, arıza tipi ve gerekli yedek parçalara göre belirlenir. Öncelikle ücretsiz arıza tespiti yapıyoruz, ardından şeffaf bir şekilde fiyat teklifi sunuyoruz.',
  },
  {
    question: 'Hangi marka turboları tamir ediyorsunuz?',
    answer: 'Tüm marka turboları (Garrett, BorgWarner, Holset, IHI, Mitsubishi, Cummins, KKK vb.) tamir ve revizyon hizmeti veriyoruz. Uzman ekibimiz her marka için deneyimlidir.',
  },
  {
    question: 'İstanbul dışına parça gönderimi yapıyor musunuz?',
    answer: 'Evet, Türkiye\'nin her yerine revizyonlu turbo gönderimi yapıyoruz. Kargo süresi ve fiyat bilgisi için bize ulaşabilirsiniz.',
  },
  {
    question: 'Ödeme şekli nedir?',
    answer: 'Nakit, kredi kartı ve banka havalesi ile ödeme kabul ediyoruz. Detaylı bilgi için bize ulaşabilirsiniz.',
  },
  {
    question: 'Çalışma saatleri nelerdir?',
    answer: 'Hafta içi 09:00 - 18:00, Cumartesi 09:00 - 17:00 saatleri arasında hizmet veriyoruz. Acil durumlar için WhatsApp üzerinden 7/24 ulaşabilirsiniz.',
  },
];

const FAQ = memo(function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    const isOpening = openIndex !== index;
    setOpenIndex(prevIndex => prevIndex === index ? null : index);
    
    // Track FAQ expand event
    if (isOpening) {
      trackFAQExpand(faqData[index].question, `faq-${index}`);
    }
  };

  return (
    <section id="sss" className="py-12 md:py-20 bg-dark-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          Sıkça Sorulan <span className="text-primary">Sorular</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Turbo hizmetlerimiz hakkında merak ettikleriniz.
        </p>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-dark border border-dark-lighter rounded-md overflow-hidden hover:border-primary transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-white pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4 text-gray-400 leading-relaxed">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default FAQ;

