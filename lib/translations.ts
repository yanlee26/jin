export type Locale = "en" | "zh";

export type TranslationSet = {
  nav: {
    services: string;
    propertyServices: string;
    process: string;
    ourWork: string;
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
  propertyServices: {
    heading: string;
    subheading: string;
    items: { title: string; description: string }[];
  };
  process: {
    heading: string;
    subheading: string;
    steps: { title: string; description: string }[];
  };
  ourWork: {
    heading: string;
    subheading: string;
    before: string;
    after: string;
    prev: string;
    next: string;
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
    contactMethod: {
      label: string;
      email: string;
      sms: string;
    };
    scanToChat: {
      heading: string;
      wechat: string;
      whatsapp: string;
      caption: string;
    };
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
      description: (method: "email" | "sms", target: string) => string;
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
      propertyServices: "Property Services",
      process: "Process",
      ourWork: "Our Work",
      testimonials: "Testimonials",
      faq: "FAQ",
      contact: "Contact",
    },
    common: {
      areaServed: "Auckland",
    },
    header: {
      quoteButton: "Book a Visit",
    },
    hero: {
      yearsSuffix: "years experience",
      tagline: "Nice paint work, done right.",
      description:
        "Trusted residential and commercial painters serving Auckland. Interior, exterior, repairs, leaks and more — call us and we'll get it sorted.",
      quoteButton: "Book a Visit",
      callButton: (phone: string) => `Call ${phone}`,
    },
    trust: {
      points: (years: number) => [
        `${years}+ years experience`,
        "Based in Auckland",
        "Fully insured team",
        "Straightforward pricing, no hassle",
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
    propertyServices: {
      heading: "Property Services",
      subheading:
        "We also handle the everyday repairs and upkeep that come with owning a property.",
      items: [
        {
          title: "Doors, Windows & Trims",
          description: "Renovation, repair and replacement for doors, windows and skirting boards.",
        },
        {
          title: "Leak Repairs",
          description: "Fixing leaks from doors, windows, exterior walls, gutters and roofs.",
        },
        {
          title: "Pressure Washing",
          description: "Driveways, permeable pavers, decks and fences cleaned and refreshed.",
        },
        {
          title: "Grounds & Garden",
          description:
            "Artificial turf and gravel laying, land clearing, weeding and tree trimming.",
        },
      ],
    },
    process: {
      heading: "How it works",
      subheading: "A simple, straightforward process from first contact to finished job.",
      steps: [
        {
          title: "Get in touch",
          description: "Call, email or send us your details — whatever's easiest for you.",
        },
        {
          title: "We assess the job",
          description: "We take a look and give you a clear price on the spot — no back-and-forth.",
        },
        {
          title: "We get to work",
          description: "Our team arrives on schedule and completes the job to a high standard.",
        },
        {
          title: "Final walkthrough",
          description: "We walk through the finished job together to make sure you're happy.",
        },
      ],
    },
    ourWork: {
      heading: "Our Work",
      subheading: "A few recent jobs — see the difference for yourself.",
      before: "Before",
      after: "After",
      prev: "Previous",
      next: "Next",
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
          question: "How does pricing work?",
          answer:
            "We'll take a look at the job and give you a clear, straightforward price — no drawn-out quote process.",
        },
        {
          question: "What areas do you cover?",
          answer: "We're based in Auckland.",
        },
        {
          question: "Are you insured?",
          answer: "Yes, our team is fully insured for residential and commercial work.",
        },
        {
          question: "How long have you been in business?",
          answer: "We've been working on homes and businesses for over 10 years.",
        },
        {
          question: "What services do you offer?",
          answer:
            "Painting and decorating, plus repairs, leaks, gutters, pressure washing and general property maintenance. Get in touch if you don't see your job listed.",
        },
      ],
    },
    bookingForm: {
      heading: "Book a Visit",
      description: "Tell us what's going on and we'll get someone out to sort it.",
      contactMethod: {
        label: "How should we get your request?",
        email: "Email",
        sms: "Text message",
      },
      scanToChat: {
        heading: "Or scan to chat",
        wechat: "WeChat",
        whatsapp: "WhatsApp",
        caption: "Scan to add",
      },
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
        "Doors & Windows",
        "Leak Repair",
        "Pressure Washing",
        "Grounds & Garden",
        "Other",
      ],
      submitButton: "Request a Visit",
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
        description: (method: "email" | "sms", target: string) =>
          method === "sms"
            ? `Your messaging app should now be open with your text ready to send to ${target}. Just hit send.`
            : `Your email app should now be open with your request ready to send to ${target}. Just hit send.`,
        sendAnother: "Send another request",
      },
      subjectPrefix: "Service request",
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
      propertyServices: "物业服务",
      process: "服务流程",
      ourWork: "施工案例",
      testimonials: "客户评价",
      faq: "常见问题",
      contact: "联系我们",
    },
    common: {
      areaServed: "奥克兰",
    },
    header: {
      quoteButton: "预约上门",
    },
    hero: {
      yearsSuffix: "年经验",
      tagline: "专业刷漆，做到最好。",
      description:
        "值得信赖的住宅与商业油漆团队，服务奥克兰地区。承接室内、室外粉刷，维修、漏水处理等各类项目 — 联系我们，马上帮您搞定。",
      quoteButton: "预约上门",
      callButton: (phone: string) => `致电 ${phone}`,
    },
    trust: {
      points: (years: number) => [
        `${years}年以上经验`,
        "扎根奥克兰",
        "团队全额保险",
        "价格透明，省心省力",
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
    propertyServices: {
      heading: "物业服务",
      subheading: "我们也承接房屋日常维修与养护相关的各类项目。",
      items: [
        {
          title: "门窗与地脚线",
          description: "门窗、地脚线的翻新、维修与更换。",
        },
        {
          title: "漏水维修",
          description: "门窗漏水、外墙漏水、天沟漏水、屋顶漏水维修。",
        },
        {
          title: "高压清洗",
          description: "车道、透水砖、露台与围栏清洗焕新。",
        },
        {
          title: "庭院养护",
          description: "假草坪与碎石铺设、开荒除草、树枝修剪。",
        },
      ],
    },
    process: {
      heading: "服务流程",
      subheading: "从初次联系到完工，流程简单明了。",
      steps: [
        {
          title: "联系我们",
          description: "致电、发送邮件或告诉我们您的详情 — 怎么方便怎么来。",
        },
        {
          title: "现场评估",
          description: "我们会实地查看，当场给您明确报价，无需反复沟通。",
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
    ourWork: {
      heading: "施工案例",
      subheading: "近期完成的部分项目 — 效果一目了然。",
      before: "施工前",
      after: "施工后",
      prev: "上一张",
      next: "下一张",
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
          question: "价格是怎么定的？",
          answer: "我们会实地查看后直接给您明确报价，无需漫长的比价流程。",
        },
        {
          question: "你们的服务范围是哪里？",
          answer: "我们总部位于奥克兰。",
        },
        {
          question: "你们有保险吗？",
          answer: "是的，我们的团队在住宅和商业工程中均享有全额保险。",
        },
        {
          question: "你们做这行多久了？",
          answer: "我们已为住宅和企业提供服务超过10年。",
        },
        {
          question: "你们提供哪些服务？",
          answer:
            "室内外油漆装饰，以及维修、漏水处理、天沟、高压清洗与各类物业维护项目。如果没有看到您需要的服务，欢迎联系我们咨询。",
        },
      ],
    },
    bookingForm: {
      heading: "预约上门",
      description: "告诉我们出了什么问题，我们会尽快安排人手上门处理。",
      contactMethod: {
        label: "您希望我们通过哪种方式收到请求？",
        email: "邮件",
        sms: "短信",
      },
      scanToChat: {
        heading: "或扫码添加",
        wechat: "微信",
        whatsapp: "WhatsApp",
        caption: "扫码添加",
      },
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
      serviceOptions: [
        "室内粉刷",
        "室外粉刷",
        "住宅粉刷",
        "商业粉刷",
        "围栏与露台",
        "门窗维修",
        "漏水维修",
        "高压清洗",
        "庭院养护",
        "其他",
      ],
      submitButton: "提交预约申请",
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
        description: (method: "email" | "sms", target: string) =>
          method === "sms"
            ? `您的短信应用应该已经打开，短信内容已准备好发送至 ${target}，点击发送即可。`
            : `您的邮件应用应该已经打开，请求已准备好发送至 ${target}，点击发送即可。`,
        sendAnother: "再次提交请求",
      },
      subjectPrefix: "服务申请",
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
