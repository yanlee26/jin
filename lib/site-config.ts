const yearsExperience = 10;

export const siteConfig = {
  name: "Jin's Nice Painting",
  shortName: "Jin's Painting",
  tagline: "Nice paint work, done right.",
  description:
    "Trusted residential and commercial painters serving Auckland and the North Island. Interior, exterior, fences and decks — free no-obligation quotes.",
  phone: "064 204 138 8886",
  phoneHref: "tel:+0642041388886",
  email: "franklyan24@gmail.com",
  areaServed: "Auckland & North Island",
  yearsExperience,
  nav: [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    {
      title: "Interior Painting",
      description:
        "Walls, ceilings and trims painted with a clean, tidy finish and minimal disruption to your home.",
    },
    {
      title: "Exterior Painting",
      description:
        "Weatherproof coatings that protect and refresh your home's exterior against the elements.",
    },
    {
      title: "Residential Painting",
      description:
        "Full-home painting projects handled from prep to final walkthrough, on time and on budget.",
    },
    {
      title: "Commercial Painting",
      description:
        "Offices, retail and warehouse fitouts, with flexible scheduling to suit your business hours.",
    },
    {
      title: "Fences & Decks",
      description:
        "Stains and paints that bring tired fences and decks back to life and keep them protected.",
    },
  ],
  process: [
    {
      step: "1",
      title: "Get in touch",
      description: "Call, email or fill out the quote form with your project details.",
    },
    {
      step: "2",
      title: "Free quote",
      description: "We visit or discuss your job and provide a clear, no-obligation quote.",
    },
    {
      step: "3",
      title: "We paint",
      description: "Our team arrives on schedule and completes the work to a high standard.",
    },
    {
      step: "4",
      title: "Final walkthrough",
      description: "We walk through the finished job together to make sure you're happy.",
    },
  ],
  trustPoints: [
    `${yearsExperience}+ years experience`,
    "Auckland & North Island",
    "Fully insured team",
    "Free no-obligation quotes",
  ],
  // Sample testimonials — replace with real customer quotes and names.
  testimonials: [
    {
      quote:
        "Really happy with the finish on our lounge and hallway. Tidy work and finished on the day they said they would.",
      name: "Sample Client",
      location: "Auckland",
    },
    {
      quote:
        "Our office fitout was scheduled around business hours with no fuss. Would use them again.",
      name: "Sample Client",
      location: "North Shore",
    },
    {
      quote:
        "Fence and deck look brand new. Good communication from the first quote through to completion.",
      name: "Sample Client",
      location: "Hamilton",
    },
  ],
  faqs: [
    {
      question: "Do you offer free quotes?",
      answer:
        "Yes — every quote is free and no-obligation. Get in touch with your project details and we'll get back to you.",
    },
    {
      question: "What areas do you cover?",
      answer: "We're based in Auckland and cover jobs across the wider North Island.",
    },
    {
      question: "Are you insured?",
      answer: "Yes, our team is fully insured for residential and commercial painting work.",
    },
    {
      question: "How long have you been painting?",
      answer: "We've been painting homes and businesses for over 10 years.",
    },
    {
      question: "What services do you offer?",
      answer:
        "Interior, exterior, residential, commercial painting, plus fences and decks. Get in touch if you don't see your job type listed.",
    },
  ],
  serviceOptions: [
    "Interior Painting",
    "Exterior Painting",
    "Residential Painting",
    "Commercial Painting",
    "Fences & Decks",
    "Other",
  ],
} as const;
