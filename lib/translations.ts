export type Locale = "en" | "zh";

export type TranslationSet = {
  nav: {
    services: string;
    process: string;
    testimonials: string;
    faq: string;
    contact: string;
  };
  common: { areaServed: string };
  header: { quoteButton: string };
  hero: {
    yearsSuffix: string;
    tagline: string;
    description: string;
    quoteButton: string;
    callButton: (phone: string) => string;
  };
  trust: { points: (years: number) => string[] };
  services: {
    heading: string;
    subheading: string;
    items: { title: string; description: string }[];
  };
  process: {
    heading: string;
    subheading: string;
    steps: { title: string; description: string }[];
  };
  testimonials: {
    heading: string;
    subheading: string;
    items: { quote: string; name: string; location: string }[];
  };
  faq: {
    heading: string;
    items: { question: string; answer: string }[];
  };
  bookingForm: {
    heading: string;
    description: string;
    fields: {
      name: string;
      phone: string;
      email: string;
      suburb: string;
      service: string;
      message: string;
    };
    messagePlaceholder: string;
    selectPlaceholder: string;
    serviceOptions: string[];
    submitButton: string;
    errors: {
      name: string;
      phone: string;
      email: string;
      emailInvalid: string;
      suburb: string;
      service: string;
    };
    success: {
      title: string;
      description: (email: string) => string;
      sendAnother: string;
    };
    subjectPrefix: string;
    emailBody: {
      nameLabel: string;
      phoneLabel: string;
      emailLabel: string;
      suburbLabel: string;
      serviceLabel: string;
      detailsLabel: string;
      noneProvided: string;
    };
  };
  footer: { copyright: (year: number, name: string, area: string) => string };
};

export const translations: Record<Locale, TranslationSet> = {
  en: {
    nav: {
      services: "Services",
      process: "Process",
      testimonials: "Testimonials",
      faq: "FAQ",
      contact: "Contact",
    },
    common: {
      areaServed: "Auckland & North Island",
    },
    header: {
      quoteButton: "Get a Free Quote",
    },
    hero: {
      yearsSuffix: "years experience",
      tagline: "Nice paint work, done right.",
      description:
        "Trusted residential and commercial painters serving Auckland and the North Island. Interior, exterior, fences and decks — free no-obligation quotes.",
      quoteButton: "Get a Free Quote",
      callButton: (phone: string) => `Call ${phone}`,
    },
    trust: {
      points: (years: number) => [
        `${years}+ years experience`,
        "Auckland & North Island",
        "Fully insured team",
        "Free no-obligation quotes",
      ],
    },
    services: {
      heading: "What we paint",
      subheading:
        "From single rooms to full commercial fitouts, we cover every kind of painting job.",
      items: [
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
    },
    process: {
      heading: "How it works",
      subheading: "A simple, straightforward process from first contact to finished job.",
      steps: [
        {
          title: "Get in touch",
          description: "Call, email or fill out the quote form with your project details.",
        },
        {
          title: "Free quote",
          description: "We visit or discuss your job and provide a clear, no-obligation quote.",
        },
        {
          title: "We paint",
          description: "Our team arrives on schedule and completes the work to a high standard.",
        },
        {
          title: "Final walkthrough",
          description: "We walk through the finished job together to make sure you're happy.",
        },
      ],
    },
    testimonials: {
      heading: "What customers say",
      subheading: "Sample feedback — swap these for real customer quotes once you have them.",
      items: [
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
    },
    faq: {
      heading: "Frequently asked questions",
      items: [
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
    },
    bookingForm: {
      heading: "Get a free quote",
      description:
        "Tell us a bit about your project and we'll get back to you with a free, no-obligation quote.",
      fields: {
        name: "Full name",
        phone: "Phone",
        email: "Email",
        suburb: "Suburb",
        service: "Service needed",
        message: "Project details (optional)",
      },
      messagePlaceholder: "Tell us about your project...",
      selectPlaceholder: "Select a service",
      serviceOptions: [
        "Interior Painting",
        "Exterior Painting",
        "Residential Painting",
        "Commercial Painting",
        "Fences & Decks",
        "Other",
      ],
      submitButton: "Request my free quote",
      errors: {
        name: "Please enter your name.",
        phone: "Please enter a phone number.",
        email: "Please enter your email.",
        emailInvalid: "Please enter a valid email address.",
        suburb: "Please enter your suburb.",
        service: "Please choose a service.",
      },
      success: {
        title: "Thanks — got it!",
        description: (email: string) =>
          `Your email app should now be open with your quote request ready to send to ${email}. Just hit send.`,
        sendAnother: "Send another request",
      },
      subjectPrefix: "Free quote request",
      emailBody: {
        nameLabel: "Name",
        phoneLabel: "Phone",
        emailLabel: "Email",
        suburbLabel: "Suburb",
        serviceLabel: "Service",
        detailsLabel: "Project details:",
        noneProvided: "(none provided)",
      },
    },
    footer: {
      copyright: (year: number, name: string, area: string) => `© ${year} ${name}. Serving ${area}.`,
    },
  },
  zh: {
    nav: {
      services: "服务项目",
      process: "服务流程",
      testimonials: "客户评价",
      faq: "常见问题",
      contact: "联系我们",
    },
    common: {
      areaServed: "奥克兰及北岛地区",
    },
    header: {
      quoteButton: "获取免费报价",
    },
    hero: {
      yearsSuffix: "年经验",
      tagline: "专业刷漆，做到最好。",
      description:
        "值得信赖的住宅与商业油漆团队，服务奥克兰及北岛地区。承接室内、室外、围栏与露台粉刷工程，提供免费无义务报价。",
      quoteButton: "获取免费报价",
      callButton: (phone: string) => `致电 ${phone}`,
    },
    trust: {
      points: (years: number) => [
        `${years}年以上经验`,
        "奥克兰及北岛地区",
        "团队全额保险",
        "免费无义务报价",
      ],
    },
    services: {
      heading: "我们承接的粉刷项目",
      subheading: "从单个房间到整体商业装修，我们承接各类粉刷工程。",
      items: [
        {
          title: "室内粉刷",
          description: "为墙面、天花板和收边线条提供整洁干净的粉刷效果，尽量减少对您生活的影响。",
        },
        {
          title: "室外粉刷",
          description: "采用防水防风涂料，为您的房屋外墙提供保护并焕然一新。",
        },
        {
          title: "住宅粉刷",
          description: "从前期准备到最终验收，全屋粉刷工程准时完成，不超预算。",
        },
        {
          title: "商业粉刷",
          description: "承接办公室、零售店铺与仓库装修粉刷，时间安排灵活，配合您的营业时间。",
        },
        {
          title: "围栏与露台",
          description: "为老旧围栏与露台重新上色上漆，焕发活力并加以保护。",
        },
      ],
    },
    process: {
      heading: "服务流程",
      subheading: "从初次联系到完工，流程简单明了。",
      steps: [
        {
          title: "联系我们",
          description: "致电、发送邮件或填写报价表单，告诉我们您的项目详情。",
        },
        {
          title: "免费报价",
          description: "我们会实地查看或与您沟通项目详情，提供清晰、无义务的报价。",
        },
        {
          title: "开始施工",
          description: "我们的团队按时抵达，以高标准完成施工。",
        },
        {
          title: "完工验收",
          description: "我们会与您一起验收完工项目，确保您满意。",
        },
      ],
    },
    testimonials: {
      heading: "客户评价",
      subheading: "以下为示例评价 — 待您收到真实客户评价后可替换。",
      items: [
        {
          quote: "非常满意客厅和走廊的粉刷效果，工作整洁，并按约定时间完工。",
          name: "示例客户",
          location: "奥克兰",
        },
        {
          quote: "我们的办公室装修按营业时间安排，过程顺利，以后还会再次合作。",
          name: "示例客户",
          location: "北岸",
        },
        {
          quote: "围栏和露台焕然一新，从报价到完工沟通都很顺畅。",
          name: "示例客户",
          location: "汉密尔顿",
        },
      ],
    },
    faq: {
      heading: "常见问题",
      items: [
        {
          question: "你们提供免费报价吗？",
          answer: "是的 — 所有报价均为免费且无义务。请告诉我们您的项目详情，我们会尽快回复您。",
        },
        {
          question: "你们的服务范围是哪里？",
          answer: "我们总部位于奥克兰，服务范围覆盖整个北岛地区。",
        },
        {
          question: "你们有保险吗？",
          answer: "是的，我们的团队在住宅和商业粉刷工程中均享有全额保险。",
        },
        {
          question: "你们从事粉刷行业多久了？",
          answer: "我们已为住宅和企业提供粉刷服务超过10年。",
        },
        {
          question: "你们提供哪些服务？",
          answer:
            "室内、室外、住宅及商业粉刷，还有围栏与露台粉刷。如果没有看到您需要的项目类型，欢迎联系我们咨询。",
        },
      ],
    },
    bookingForm: {
      heading: "获取免费报价",
      description: "告诉我们您的项目详情，我们会尽快为您提供免费无义务报价。",
      fields: {
        name: "姓名",
        phone: "电话",
        email: "电子邮箱",
        suburb: "所在地区",
        service: "所需服务",
        message: "项目详情（选填）",
      },
      messagePlaceholder: "请描述您的项目详情...",
      selectPlaceholder: "请选择服务项目",
      serviceOptions: ["室内粉刷", "室外粉刷", "住宅粉刷", "商业粉刷", "围栏与露台", "其他"],
      submitButton: "提交免费报价申请",
      errors: {
        name: "请输入您的姓名。",
        phone: "请输入电话号码。",
        email: "请输入您的电子邮箱。",
        emailInvalid: "请输入有效的电子邮箱地址。",
        suburb: "请输入所在地区。",
        service: "请选择所需服务。",
      },
      success: {
        title: "谢谢，已收到！",
        description: (email: string) =>
          `您的邮件应用应该已经打开，报价请求已准备好发送至 ${email}，点击发送即可。`,
        sendAnother: "再次提交请求",
      },
      subjectPrefix: "免费报价申请",
      emailBody: {
        nameLabel: "姓名",
        phoneLabel: "电话",
        emailLabel: "电子邮箱",
        suburbLabel: "所在地区",
        serviceLabel: "服务项目",
        detailsLabel: "项目详情：",
        noneProvided: "（未填写）",
      },
    },
    footer: {
      copyright: (year: number, name: string, area: string) => `© ${year} ${name}。服务范围：${area}。`,
    },
  },
};
