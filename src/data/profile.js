
export const pick = (value, lang) => (typeof value === "string" ? value : value[lang]);

export const profile = {
  name: { en: "Muhammad Akbar Putra Ardiyansyach", id: "Muhammad Akbar Putra Ardiyansyach" },
  roles: {
    en: ["Job Seeker", "General Worker", "Operations & Production"],
    id: ["Pencari Kerja", "Pekerja Umum", "Operator & Produksi"],
  },
  intro: {
    en: "I am a motivated job seeker, ready to learn, adapt, and take on new opportunities.",
    id: "Saya adalah pencari kerja yang siap belajar, beradaptasi, dan mengambil peluang baru.",
  },
  email: "666einhard@gmail.com",
  phone: "+62 896 6261 9456",
  phoneHref: "+6289662619456",
  video: "/images/FangYuan.mp4",
};

export const channels = [
  { id: "tiktok", label: "TikTok", display: "@666einhard", url: "https://www.tiktok.com/@666einhard" },
  { id: "facebook", label: "Facebook", display: "Einhard Wayne", url: "https://www.facebook.com/share/19B9M1qDYP/" },
];

export const nav = [
  { id: "home" },
  { id: "about" },
  { id: "info" },
  { id: "education" },
  { id: "experience" },
  { id: "skills" },
  { id: "portfolio" },
  { id: "contact" },
];

export const about = {
  paragraphs: {
    en: [
      "I am a motivated job seeker who is ready to learn, adapt, and take on new challenges. I am open to opportunities where I can develop my skills, gain valuable experience, and contribute to the team.",

      "I value responsibility, discipline, and teamwork. I am willing to learn from feedback, follow instructions carefully, and give my best to complete every task properly and on time.",
    ],

    id: [
      "Saya adalah pencari kerja yang siap belajar, beradaptasi, dan menghadapi tantangan baru. Saya terbuka terhadap berbagai peluang untuk mengembangkan kemampuan, mendapatkan pengalaman, dan memberikan kontribusi bagi tim.",

      "Saya menghargai tanggung jawab, kedisiplinan, dan kerja sama tim. Saya siap menerima arahan dan masukan, mempelajari hal baru, serta berusaha menyelesaikan setiap tugas dengan baik dan tepat waktu.",
    ],
  },
  focus: {
    en: "Opportunities to learn, contribute, and grow.",
    id: "Peluang untuk belajar, berkontribusi, dan berkembang.",
  },
};

export const personalInfo = [
  { key: "birth", value: "Bojonegoro, 19 November 2003" },
  { key: "domicile", value: "Jawa Timur, Kab. Gresik, Ds. Banjarsari" },
  { key: "availability", value: { en: "Available to work", id: "Siap bekerja" } },
  { key: "workType", value: "Full-time" },
  {
    key: "workPreference",
    value: { en: "Open to various work opportunities", id: "Terbuka untuk berbagai peluang kerja" },
  },
];

export const education = [
  {
    period: "2010 - 2016",
    institution: "MI Baitussalam",
    program: {
      en: "Primary Education",
      id: "Pendidikan Dasar",
    },
    degree: {
      en: "",
      id: "",
    },
    note: {
      en: "",
      id: "",
    },
  },
  {
    period: "2016 - 2019",
    institution: "SMPN 1 Kebomas",
    program: {
      en: "Lower Secondary Education",
      id: "Pendidikan Menengah Pertama",
    },
    degree: {
      en: "",
      id: "",
    },
    note: {
      en: "",
      id: "",
    },
  },
  {
    period: "2019 - 2022",
    institution: "SMK NURUL ISLAM",
    program: {
      en: "Vocational Secondary Education",
      id: "Pendidikan Menengah Kejuruan",
    },
    degree: {
      en: "Mechanical Engineering",
      id: "Teknik Pemesinan",
    },
    note: {
      en: "",
      id: "",
    },
  },
];

export const experience = [
  {
    role: {
      en: "Picker",
      id: "Picker",
    },
    org: "J&T Express",
    period: { en: "1 Month", id: "1 Bulan" },
    location: {
      en: "Surabaya",
      id: "Surabaya",
    },
    points: {
      en: [
        "Picked and prepared items according to order requirements.",
        "Checked items and quantities before moving them to the next process.",
        "Supported daily warehouse operations and maintained an organized work area.",
      ],
      id: [
        "Melakukan picking dan menyiapkan barang sesuai kebutuhan.",
        "Memeriksa barang dan jumlahnya sebelum dipindahkan ke proses berikutnya.",
        "Membantu operasional gudang harian dan menjaga area kerja tetap tertata.",
      ],
    },
  },

  {
    role: {
      en: "Production Worker",
      id: "Pekerja Produksi",
    },
    org: "PT. Rackindo Sejahtera",
    period: { en: "2 Months", id: "2 Bulan" },
    location: {
      en: "Gresik",
      id: "Gresik",
    },
    points: {
      en: [
        "Assisted with daily production activities according to work procedures.",
        "Supported the production process and handled assigned tasks as instructed.",
        "Maintained work area cleanliness and followed workplace safety procedures.",
      ],
      id: [
        "Membantu kegiatan produksi harian sesuai prosedur kerja.",
        "Mendukung proses produksi dan mengerjakan tugas yang diberikan sesuai arahan.",
        "Menjaga kebersihan area kerja dan mengikuti prosedur keselamatan kerja.",
      ],
    },
  },

  {
    role: {
      en: "Warehouse Worker",
      id: "Pekerja Gudang",
    },
    org: "PT. Rackindo Sejahtera",
    period: { en: "4 Months", id: "4 Bulan" },
    location: {
      en: "Gresik",
      id: "Gresik",
    },
    points: {
      en: [
        "Handled daily warehouse activities and assisted with the movement of goods.",
        "Organized and arranged items to support efficient warehouse operations.",
        "Supported loading, unloading, and other assigned warehouse tasks.",
      ],
      id: [
        "Menangani kegiatan gudang harian dan membantu proses perpindahan barang.",
        "Menata dan mengatur barang untuk mendukung operasional gudang yang teratur.",
        "Membantu proses bongkar muat dan berbagai tugas gudang sesuai arahan.",
      ],
    },
  },
];

export const skillGroups = [
  {
    title: {
      en: "Work Skills",
      id: "Keterampilan Kerja",
    },
    items: {
      en: [
        "Discipline",
        "Responsibility",
        "Following Instructions",
        "Time Management",
        "Independent Work",
        "Problem Solving",
        "Adaptability",
      ],
      id: [
        "Disiplin",
        "Tanggung Jawab",
        "Mengikuti Arahan",
        "Manajemen Waktu",
        "Bekerja Mandiri",
        "Pemecahan Masalah",
        "Adaptasi",
      ],
    },
  },

  {
    title: {
      en: "Programming Languages",
      id: "Bahasa Pemrograman",
    },
    items: {
      en: [
        "JavaScript",
        "TypeScript",
        "Lua",
      ],
      id: [
        "JavaScript",
        "TypeScript",
        "Lua",
      ],
    },
  },

  {
    title: {
      en: "Frontend Development",
      id: "Pengembangan Frontend",
    },
    items: {
      en: [
        "HTML",
        "CSS",
        "React",
        "Next.js",
        "Tailwind CSS",
      ],
      id: [
        "HTML",
        "CSS",
        "React",
        "Next.js",
        "Tailwind CSS",
      ],
    },
  },

  {
    title: {
      en: "Backend Development & Database",
      id: "Pengembangan Backend & Database",
    },
    items: {
      en: [
        "Prisma ORM",
        "SQLite",
        "REST API",
        "Database Integration",
      ],
      id: [
        "Prisma ORM",
        "SQLite",
        "REST API",
        "Integrasi Database",
      ],
    },
  },
];

export const projects = [
  {
    name: "Financial Tracker",
    year: "2026",
    role: {
      en: "Solo Developer",
      id: "Developer Solo",
    },
    description: {
      en: "A personal financial management application for tracking accounts, transactions, invoices, and financial data through a structured dashboard.",
      id: "Aplikasi manajemen keuangan pribadi untuk mengelola akun, transaksi, invoice, dan data keuangan melalui dashboard yang terstruktur.",
    },
    stack: [
      "TypeScript",
      "Next.js",
      "Prisma",
      "SQLite",
      "Tailwind CSS",
    ],
    image: "/images/Dashboard.png",
  },

  {
    name: "Panel Dashboard",
    year: "2026",
    role: {
      en: "Solo Developer",
      id: "Developer Solo",
    },
    description: {
      en: "A web-based monitoring dashboard designed to present operational information and status data through a clear and structured interface.",
      id: "Dashboard monitoring berbasis web yang dirancang untuk menampilkan informasi operasional dan data status melalui antarmuka yang jelas dan terstruktur.",
    },
    stack: [
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
    image: "/images/Panel.png",
  },
  {
    name: "Wraith",
    year: "2026",
    role: {
      en: "Solo Developer",
      id: "Developer Solo",
    },
    description: {
      en: "An automated Discord-based store system for managing digital game-item orders. The bot handles product listings, order processing, and payment verification using in-game items, reducing the need for manual store management.",
      id: "Sistem toko berbasis Discord yang digunakan untuk mengelola pesanan item game secara otomatis. Bot menangani daftar produk, proses pesanan, dan verifikasi pembayaran menggunakan item dalam game sehingga mengurangi kebutuhan pengelolaan toko secara manual.",
    },
    stack: [
      "Lua",
      "Discord Bot",
      "API Integration",
      "Automation",
    ],
    image: "/images/Wraith.jpg",
  },
];

export const strengths = [
  {
    title: {
      en: "Discipline",
      id: "Disiplin",
    },
    description: {
      en: "I follow work procedures, instructions, and schedules carefully while staying focused on completing my responsibilities.",
      id: "Saya mengikuti prosedur kerja, arahan, dan jadwal dengan baik serta tetap fokus menyelesaikan tanggung jawab yang diberikan.",
    },
    evidence: {
      en: "Experienced in production and warehouse work where following procedures and completing assigned tasks were part of the daily routine.",
      id: "Memiliki pengalaman di bidang produksi dan gudang yang membutuhkan kepatuhan terhadap prosedur serta penyelesaian tugas harian.",
    },
  },
  {
    title: {
      en: "Adaptability",
      id: "Adaptasi",
    },
    description: {
      en: "I am willing to learn new tasks, adjust to different work environments, and follow new instructions when needed.",
      id: "Saya siap mempelajari tugas baru, menyesuaikan diri dengan lingkungan kerja yang berbeda, dan mengikuti arahan baru sesuai kebutuhan.",
    },
    evidence: {
      en: "Worked in different roles including picking, production, and warehouse operations, adapting to different tasks and work processes.",
      id: "Pernah bekerja di beberapa bidang seperti picking, produksi, dan operasional gudang dengan tugas serta proses kerja yang berbeda.",
    },
  },
  {
    title: {
      en: "Responsibility",
      id: "Tanggung Jawab",
    },
    description: {
      en: "I take assigned tasks seriously and make an effort to complete them properly and according to instructions.",
      id: "Saya menjalankan tugas yang diberikan dengan serius dan berusaha menyelesaikannya dengan baik sesuai arahan.",
    },
    evidence: {
      en: "Handled daily responsibilities in warehouse and production environments where tasks had to be completed accurately and on time.",
      id: "Menjalankan tanggung jawab harian di lingkungan gudang dan produksi yang membutuhkan ketelitian serta penyelesaian tugas tepat waktu.",
    },
  },
];

export const improvements = [
  {
    area: {
      en: "Communication",
      id: "Komunikasi",
    },
    how: {
      en: "I am improving by practicing clearer communication, asking when instructions are unclear, and being more comfortable discussing work-related matters.",
      id: "Saya meningkatkan kemampuan dengan berlatih berkomunikasi lebih jelas, bertanya ketika arahan kurang jelas, dan membiasakan diri membahas hal-hal yang berkaitan dengan pekerjaan.",
    },
    progress: {
      en: "I have become more comfortable asking questions and communicating about tasks when clarification is needed.",
      id: "Saya sudah lebih terbiasa bertanya dan berkomunikasi mengenai tugas ketika membutuhkan penjelasan lebih lanjut.",
    },
  },
  {
    area: {
      en: "Work Experience",
      id: "Pengalaman Kerja",
    },
    how: {
      en: "I continue to learn through different work environments and by taking on new tasks whenever possible.",
      id: "Saya terus belajar melalui berbagai lingkungan kerja dan mencoba tugas-tugas baru ketika ada kesempatan.",
    },
    progress: {
      en: "My experience in picking, production, and warehouse operations has helped me understand different types of daily work and responsibilities.",
      id: "Pengalaman di bidang picking, produksi, dan gudang membantu saya memahami berbagai jenis pekerjaan dan tanggung jawab sehari-hari.",
    },
  },
];
