// Unified Publications Data - Replace with your own publications
// Each publication can be a preprint or a conference/journal paper.
// Use isSelected: true to feature it on the homepage and CV.
const publications = [
  {
    title: "UNITE: A Unified Framework for Accurate and Efficient Origin-Destination and Route Travel Time Estimation",
    authors: "<b>Wei Tian</b>, Jieming Shi, Man Lung Yiu",
    venue: "SIGKDD 2026",
    links: [
      { text: "Paper", url: "files/unite.pdf" },
      { text: "Code", url: "https://github.com/derekwtian/UNITE" }
    ],
    isNew: true,
    isPreprint: false,
    isSelected: true
  },
  {
    title: "Efficient Methods for Accurate Sparse Trajectory Recovery and Map Matching",
    authors: "<b>Wei Tian</b>, Jieming Shi, Man Lung Yiu",
    venue: "ICDE 2025",
    links: [
      { text: "Paper", url: "files/trmma.pdf" },
      { text: "Code", url: "https://github.com/derekwtian/TRMMA" }
    ],
    isNew: false,
    isPreprint: false,
    isSelected: true
  },
  {
    title: "Effective and Efficient Route Planning Using Historical Trajectories on Road Networks",
    authors: "<b>Wei Tian</b>, Jieming Shi, Siqiang Luo, Hui Li, Xike Xie, Yuanhang Zou",
    venue: "PVLDB 2023",
    links: [
      { text: "Paper", url: "files/drpk.pdf" },
      { text: "Code", url: "https://github.com/derekwtian/DRPK" }
    ],
    isNew: false,
    isPreprint: false,
    isSelected: true
  },
  {
    title: "VRE: A Versatile, Robust, and Economical Trajectory Data System",
    authors: "Hai Lan, Jiong Xie, Zhifeng Bao, Feifei Li, <b>Wei Tian</b>, Fang Wang, Sheng Wang, Ailin Zhang",
    venue: "PVLDB 2022",
    links: [
      { text: "Paper", url: "files/vre.pdf" },
    ],
    isNew: false,
    isPreprint: false,
    isSelected: true
  },
  {
    title: "TargetingVis: Visual Exploration and Analysis of Targeted Advertising Data",
    authors: "Di Peng, <b>Wei Tian</b>, Min Zhu, Yukun Ren, Xiaojian Lin, Mingzhao Li",
    venue: "Journal of Visualization 2020",
    links: [
      { text: "Paper", url: "files/jov2020.pdf" },
    ],
    isNew: false,
    isPreprint: false,
    isSelected: true
  },
  {
    title: "Fast Percentage Closer Soft Shadows",
    authors: "Min Zhu, Jianhua Wang, Xiaowei Li, <b>Wei Tian</b>",
    venue: "Advanced Engineering Sciences 2019",
    links: [
      { text: "Paper", url: "files/aes19-7.pdf" },
    ],
    isNew: false,
    isPreprint: false,
    isSelected: false
  },
  {
    title: "Method of Predicting User Professionalism Based on Question Granularity in Community Question Answering",
    authors: "Min Zhu, <b>Wei Tian</b>, Di Peng, Yabo Su, Hao Niu",
    venue: "Advanced Engineering Sciences 2019",
    links: [
      { text: "Paper", url: "files/aes19-1.pdf" },
    ],
    isNew: false,
    isPreprint: false,
    isSelected: false
  },
  {
    title: "DMNEVis: A Novel Visual Approach to Explore Evolution of Dynamic Multivariate Network",
    authors: "Di Peng, <b>Wei Tian</b>, Binbin Lu, Min Zhu",
    venue: "SMC 2018",
    links: [
      { text: "Paper", url: "files/smc2018.pdf" },
    ],
    isNew: false,
    isPreprint: false,
    isSelected: false
  },
  {
    title: "Book: Handbook of Computer Network Course Projects (in Chinese: 计算机网络课程设计)",
    authors: "Min Zhu, Li Chen, Qin Li, <b>Wei Tian</b>, Yong Pi, Qi Huang, et.al",
    venue: "China Machine Press (机械工业出版社) 2018",
    links: [
      { text: "Book", url: "https://www.cmpedu.com/books/book/5529932.htm" },
    ],
    isNew: false,
    isPreprint: false,
    isSelected: false
  },
];

// Helper functions to filter publications
const getPreprints = () => publications.filter(pub => pub.isPreprint);
const getSelectedPreprints = () => publications.filter(pub => pub.isPreprint && pub.isSelected);
const getPublications = () => publications.filter(pub => !pub.isPreprint);
const getSelectedPublications = () => publications.filter(pub => !pub.isPreprint && pub.isSelected);
const getAllPublications = () => publications.filter(pub => !pub.isPreprint);

// Legacy variables for backward compatibility
const preprints = getSelectedPreprints();
const selectedPublications = getSelectedPublications();
const fullPublications = getAllPublications();

// Projects Data - Replace with your own projects
const projects = [
  {
    title: "Gödel Agent",
    description: "A self-referential agent framework for recursive self-improvement implemented with Monkey Patching. (<a href=\"https://github.com/Arvid-pku/Godel_Agent\" target=\"_blank\" rel=\"noopener\">Project Homepage</a>)",
    badges: [
      { url: "https://github.com/Arvid-pku/Godel_Agent/releases", img: "https://img.shields.io/badge/Version-1.0-blue" },
      { url: "https://github.com/Arvid-pku/Godel_Agent/blob/main/LICENSE.md", img: "https://img.shields.io/badge/License-MIT-blue" },
      { url: "https://github.com/Arvid-pku/Godel_Agent/stargazers", img: "https://img.shields.io/github/stars/Arvid-pku/Godel_Agent" },
      { url: "https://github.com/Arvid-pku/Godel_Agent/network/members", img: "https://img.shields.io/github/forks/Arvid-pku/Godel_Agent" },
      { url: "https://arxiv.org/abs/2410.04444", img: "https://img.shields.io/badge/Doc-Paper-red" }
    ],
    isSelected: true,
    demoPath: "photos/project-demo/godel-agent.png"
  }
];

// Helper functions to filter projects
const getSelectedProjects = () => projects.filter(project => project.isSelected);
const getAllProjects = () => projects;

// Research Experience Data - Replace with your own experience
const researchExperience = [
  {
    period: "Month YYYY - Month YYYY",
    institution: "Your Institution Name",
    mentor: "Prof. Mentor Name",
    description: "Brief description of your research work and achievements."
  }
];

// Teaching Data - Replace with your own teaching experience
const teaching = [
  "2024 Spring: Teaching Assistant, COMP1011 - Programming Fundamentals, Hong Kong Polytechnic University",
  "2023 Fall: Teaching Assistant, COMP5434 - Big Data Computing, Hong Kong Polytechnic University",
  "2023 Spring: Teaching Assistant, COMP4434 - Big Data Analytics, Hong Kong Polytechnic University",
  "2022 Fall: Teaching Assistant, COMP5434 - Big Data Computing, Hong Kong Polytechnic University",
  "2022 Spring: Teaching Assistant, COMP5434 - Big Data Computing, Hong Kong Polytechnic University",
  "2021 Fall: Teaching Assistant, ENG2002 - Computer Programming, Hong Kong Polytechnic University"
];

// Academic Services Data - Replace with your own services
const academicServices = {
  "Conference Program Committee/Reviewer": [
    "ACM International Conference on Web Search and Data Mining (WSDM) Year: 2027"
    , "Special Interest Group on Spatial Information (SIGSPATIAL) Year: 2026"
    , "IEEE International Conference on Mobile Data Management (MDM) Year: 2026"
    , "IEEE International Conference on Systems, Man, and Cybernetics (SMC) Year: 2018"
  ],
  "Volunteer": [
    "Pacific-Asia Conference on Knowledge Discovery and Data Mining (PAKDD) Year: 2026"
    , "IEEE International Conference on Data Engineering (ICDE) Year: 2025"
    , "China Visualization and Visual Analytics Conference (ChinaVis) Year: 2019"
  ]
};

// Talks Data - Replace with your own talks
const talks = [
  {
    title: "The Research Intern at Alibaba DAMO Academy",
    venue: "Vision Computing Lab, Sichuan University",
    date: "June 11, 2021",
    attachments: [
      { text: "Newspaper", url: "https://scuvis.org/2017twlfjl/" }
    ]
  }
];

// Honors Data - Replace with your own honors and awards
const honors = [
  "The Hong Kong Polytechnic University Research Postgraduate Scholarship (2021)",
  "Outstanding Master Graduates of Sichuan University (2020)",
  "Outstanding student member of Sichuan University Branch of CCF (2018)",
  "Honorable mention of ChinaVis Data Challenge (2017)",
  "Second Prize of Sichuan Regional Contest of 7th Lan Qiao Cup (2016)"
];
