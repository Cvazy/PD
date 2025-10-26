export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Бот "РУПы"',
    applicationCategory: 'EducationApplication',
    operatingSystem: 'Web, iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'RUB',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '500',
    },
    description: 'Персональный Telegram-бот для студентов Московского Политеха. Помогает закрывать академические задолженности: напоминания о дедлайнах, контроль РУПов, советы по учебе.',
    author: {
      '@type': 'Organization',
      name: 'Московский Политех',
    },
  }

  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Московский Политех',
    url: 'https://your-project.netlify.app',
    logo: 'https://your-project.netlify.app/logo.svg',
    sameAs: [
      'https://t.me/your_bot',
    ],
  }

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Что такое РУПы?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'РУП (Рабочая Учебная Программа) — это дисциплины, которые вы не закрыли, но должны сдать. Они появляются при пропущенной аттестации или сдаче факультета.',
        },
      },
      {
        '@type': 'Question',
        name: 'Как работает бот?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Бот работает прямо в Telegram. Вы указываете свои академические долги и дедлайны, а бот напоминает вам о них и дает полезные советы.',
        },
      },
      {
        '@type': 'Question',
        name: 'Бот бесплатный?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Да, бот полностью бесплатный для всех студентов Московского Политеха.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  )
}

