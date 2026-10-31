import React from 'react';
import PayAfterPlacement from '../sections/PayAfterPlacement';
import FAQSection from '../sections/FAQSection';
import { usePageMeta } from '../hooks/usePageMeta';
import { faqs } from '../data/testimonials';

export default function PayAfterPlacementPage() {
  usePageMeta({
    title: 'Pay After Placement | Zero Upfront Tuition Model',
    description: 'Learn tech with ₹0 upfront tuition at Karka Academy. You only pay after securing a verified tech job. Transparent agreement and guaranteed support.',
    schema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer,
        },
      })),
    },
  });

  return (
    <div style={{ paddingTop: '5rem' }}>
      <PayAfterPlacement />
      <FAQSection />
    </div>
  );
}
