import type { LegalContent } from "./types";

export const legalEn: LegalContent = {
  privacy: (c) => ({
    intro:
      "Cleenty respects your privacy. This policy explains what personal data we collect, how we use it, who we share it with and what your rights are, under the General Data Protection Regulation (GDPR) and applicable Portuguese law.",
    sections: [
      {
        heading: "1. Data controller",
        body: [
          `The controller of your personal data is ${c.entity}, located at ${c.address}.`,
          `For any privacy question, please contact us at ${c.email} or on WhatsApp at ${c.phone}.`,
        ],
      },
      {
        heading: "2. What data we collect",
        body: [
          "We only collect the data we need to answer your requests and provide our services:",
          [
            "Identification and contact details: name, phone number and email address.",
            "The address where the service is provided or where laundry is collected and delivered.",
            "Service details: type of cleaning, dates, features of your home and any instructions you give us.",
            "Billing details: name and tax number (NIF), when you request an invoice.",
            "The content of the messages you send us by WhatsApp, email or phone.",
          ],
          "This website has no forms or customer area. Quote requests are made via WhatsApp, outside the website.",
        ],
      },
      {
        heading: "3. Why we use your data and on what legal basis",
        body: [
          [
            "Answering quote and information requests — pre-contractual steps taken at your request.",
            "Scheduling and providing cleaning and laundry collection and delivery services — performance of a contract.",
            "Issuing invoices and meeting tax and accounting obligations — legal obligation.",
            "Keeping the website secure and working properly — legitimate interest.",
            "Sending news or promotions — only with your prior consent, which you can withdraw at any time.",
          ],
          "We do not make automated decisions or build profiles using your data.",
        ],
      },
      {
        heading: "4. Who we share your data with",
        body: [
          "We never sell or rent your data. We only share it with those who need it to provide the service or comply with the law:",
          [
            "Partner laundries, which only receive the information needed to care for your laundry.",
            "WhatsApp (Meta Platforms Ireland), when you contact us that way, under WhatsApp's privacy policy.",
            "Our website hosting provider, which may log technical access data.",
            "Our chartered accountant and the Portuguese Tax Authority, for invoicing purposes.",
            "Public authorities, where required by law.",
          ],
        ],
      },
      {
        heading: "5. Transfers outside the European Economic Area",
        body: [
          "Some providers, such as WhatsApp (Meta) or Google, may process data outside the European Economic Area. In those cases, transfers are protected by appropriate safeguards under the GDPR, such as the European Commission's standard contractual clauses or the EU-US Data Privacy Framework.",
        ],
      },
      {
        heading: "6. How long we keep your data",
        body: [
          [
            "Quote requests that do not lead to a booking: up to 12 months after the last contact.",
            "Client data: for as long as we have a business relationship and, afterwards, for the period needed to handle any claims.",
            "Invoices and accounting records: 10 years, as required by law.",
          ],
          "After these periods, the data is deleted or anonymised.",
        ],
      },
      {
        heading: "7. Cookies and similar technologies",
        body: [
          "This website does not use advertising or analytics cookies. We only store, in your browser's local storage, the language you chose, so that it is kept on your next visit. This stays on your device and is not sent to us.",
          "The website links to external services — WhatsApp, Google Maps, Instagram and Facebook. When you open them, the privacy policy of each of those services applies.",
          "If we start using tools such as Google Analytics or Google Ads in the future, we will ask for your consent before enabling them and update this policy. You can learn more about how Google uses data at https://policies.google.com/technologies/partner-sites.",
        ],
      },
      {
        heading: "8. Your rights",
        body: [
          "Under the GDPR, you have the right to:",
          [
            "Access your personal data.",
            "Have inaccurate or incomplete data corrected.",
            "Have your data erased.",
            "Restrict the processing of your data.",
            "Object to processing based on legitimate interest.",
            "Receive your data in a structured format (portability).",
            "Withdraw your consent at any time, without affecting processing already carried out.",
          ],
          `To exercise these rights, write to ${c.email}. We will reply within one month.`,
          "You also have the right to lodge a complaint with the Portuguese Data Protection Authority (CNPD) at https://www.cnpd.pt.",
        ],
      },
      {
        heading: "9. Security",
        body: [
          "We take appropriate technical and organisational measures to protect your data against loss, unauthorised access or disclosure. The website is served over a secure connection (HTTPS) and access to client data is limited to those who need it.",
        ],
      },
      {
        heading: "10. Children",
        body: [
          "Our services are intended for people aged 18 and over. We do not knowingly collect data from children.",
        ],
      },
      {
        heading: "11. Changes to this policy",
        body: [
          "We may update this policy to reflect changes in the law or in our services. The date of the latest update is shown at the top of this page.",
        ],
      },
    ],
  }),

  terms: (c) => ({
    intro:
      "These Terms and Conditions govern the use of this website and the services provided by Cleenty. By requesting a quote or booking a service, you confirm that you have read and accept them.",
    sections: [
      {
        heading: "1. Who we are",
        body: [
          `Services are provided by ${c.entity}, located at ${c.address}. Contact: ${c.email} and WhatsApp ${c.phone}.`,
        ],
      },
      {
        heading: "2. Services",
        body: [
          "Cleenty provides the following services in Amora, Cruz de Pau and the surrounding area:",
          [
            "Home cleaning, regular or one-off.",
            "Deep cleaning.",
            "After-builders cleaning.",
            "Laundry collection and delivery for washing and ironing, carried out by our partner laundries.",
          ],
          "The service descriptions on this website are for information only. The exact scope of each service is the one agreed in the quote.",
        ],
      },
      {
        heading: "3. Quotes and bookings",
        body: [
          "Quotes are free and with no obligation, and are requested via WhatsApp or email. The price is based on the information you give us. If conditions on site are very different from those described, we will let you know before starting and only go ahead with your agreement.",
          "A booking is confirmed once the date, service and price have been agreed in writing.",
        ],
      },
      {
        heading: "4. Prices and payment",
        body: [
          [
            "Prices are shown in euros and include VAT at the applicable rate, where relevant.",
            "Laundry is charged by the kilo.",
            "Laundry collection and delivery is free within our service area. Outside that area, any cost is stated before booking.",
            "Payment methods and timing are stated in the quote. We issue an invoice for every service.",
          ],
        ],
      },
      {
        heading: "5. Changes and cancellations",
        body: [
          "You can change or cancel a booking free of charge up to 24 hours before the agreed time. Later cancellations, or being unable to access the home at the agreed time, may incur a fee, stated in the quote.",
          "If, due to circumstances beyond our control, we cannot attend, we will let you know as early as possible and offer a new date at no cost to you.",
        ],
      },
      {
        heading: "6. Client responsibilities",
        body: [
          [
            "Provide access to the home and make sure water and electricity are available.",
            "Tell us about fragile or valuable items, or surfaces that need special care.",
            "Put away cash, jewellery and other valuables before the service.",
            "Let us know if there are pets in the home.",
          ],
        ],
      },
      {
        heading: "7. Laundry collection and delivery",
        body: [
          [
            "Please check all pockets before collection. We are not responsible for items left in clothing.",
            "Tell us about delicate items or anything that needs special care. Each item is treated according to its care label.",
            "We may refuse items without a care label, badly damaged items or items that cannot be treated safely.",
            "The usual turnaround is 48 to 72 hours. This is an estimate and may vary at busy times; we will always let you know of any delay.",
            "Please check your laundry on delivery and report any issue within 48 hours.",
          ],
        ],
      },
      {
        heading: "8. Liability",
        body: [
          "We carry out every service with care and professionalism. If any damage is caused by our team or our partner laundries, please report it within 48 hours, with photos where possible. We will look into each case and, where we are responsible, arrange an appropriate repair or compensation.",
          "We are not responsible for damage resulting from pre-existing defects or wear, incorrect care labels or information not provided by the client.",
          "Nothing in these terms limits the rights consumers have under the law.",
        ],
      },
      {
        heading: "9. Complaints",
        body: [
          `You can send any complaint to ${c.email}. We also have a Complaints Book (Livro de Reclamações), including the electronic version at https://www.livroreclamacoes.pt.`,
        ],
      },
      {
        heading: "10. Alternative dispute resolution",
        body: [
          "In the event of a consumer dispute, consumers may use an alternative dispute resolution body under Portuguese Law no. 144/2015 of 8 September, such as CNIACC – National Centre for Consumer Arbitration (https://www.cniacc.pt).",
          "More information is available on the Portuguese Consumer Portal at https://www.consumidor.gov.pt.",
        ],
      },
      {
        heading: "11. Use of the website",
        body: [
          "The text, images, logo and other content on this website belong to Cleenty or are used with permission, and may not be reproduced without prior consent.",
          "We aim to keep the information on this website accurate and up to date, but the prices and conditions that apply to each service are always those in the quote.",
        ],
      },
      {
        heading: "12. Governing law and changes",
        body: [
          "These terms are governed by Portuguese law. We may update them at any time; changes only apply to services booked after they are published.",
        ],
      },
    ],
  }),
};
