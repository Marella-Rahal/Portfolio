export const skills: skill[] = [
  {
    name: "HTML",
    url: "/html.png",
  },
  {
    name: "CSS",
    url: "/css.png",
  },
  {
    name: "Tailwind CSS",
    url: "/tailwind.png",
  },
  {
    name: "JavaScript",
    url: "/javascript.png",
  },
  {
    name: "TypeScript",
    url: "/typescript.svg",
  },
  {
    name: "ReactJS",
    url: "/react.png",
  },
  {
    name: "NextJS",
    url: "/nextjs.png",
  },
  {
    name: "ReduxJS",
    url: "/redux.png",
  },
  {
    name: "Framer Motion",
    url: "/framer-motion.png",
  },
  {
    name: "MapBox",
    url: "/mapbox.png",
  },
];

export const projects: project[] = [
  {
    title: "Wepay | Online Payment Solution Platform",
    tech: "NextJs",
    img: "/wepay.png",
    url: "/project/wepay",
  },
  {
    title: "Shoppingo | Multi-Store online shopping platform",
    tech: "NextJs",
    img: "/shoppingo-2.png",
    url: "/project/shoppingo",
  },
  {
    title: "Blog",
    tech: "NextJs 13 - Sanity",
    img: "/blog.png",
    url: "/project/blog",
  },
];

export const projectDetail: projectDetail[] = [
  {
    title: "Wepay | Online Payment Solution Platform",
    tech: "NextJs",
    img: "/wepay.png",
    param: "wepay",
    code: "https://github.com/Marella-Rahal/wepay-ui",
    demo: "https://wepay-marella-rahal.vercel.app/",
    video:
      "https://drive.google.com/file/d/10TT0GwreNCINLr8Y9qF9vdZYvPjzyZNf/preview",
    technologies: [
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "React Js",
      "Next Js",
      "ReduxJS-Toolkit",
      "Next-Redux-Wrapper",
      "Axios",
      "Framer Motion",
      "MapBox GL",
      "Chart.JS",
      "React-Chartjs-2",
      "Next-Qrcode",
      "React-Qr-Reader",
    ],
    description: [
      "Introducing an online payment solutions website tailored for Syria. Users can easily make deposits using a variety of methods, with the option to initiate withdrawals through the same convenient channels.",
      "Seamless transactions: Scan QR codes or input codes to make deposits and withdrawals.",
      "Personalized QR codes: Receive payments with your unique QR code.",
      " Become a merchant: Users can elevate their status to a merchant if their account balance exceeds 5,000 Syrian pounds. Their store's location will be showcased on the map, informing other users of their acceptance of WePay payments.",
      "Budget management: Track activities, add personal payments, and set reminders.",
      " The backend has been developed by my teammate using Node.js and MongoDB, with a distinct approach from Next.js, operating independently.",
    ],
  },
  {
    title: "Shoppingo | Multi-Store online shopping platform",
    tech: "NextJs",
    img: "/shoppingo-2.png",
    param: "shoppingo",
    code: "https://github.com/Marella-Rahal/shoppingo-ui",
    demo: "https://shoppingo-marella-rahal.vercel.app/",
    video:
      "https://drive.google.com/file/d/10U42XshuHB-f4sqOh8Hq0YQlIPKGTLm1/preview",
    technologies: [
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "React Js",
      "Next Js",
      "ReduxJS-Toolkit",
      "Next-Redux-Wrapper",
      "Axios",
      "Framer Motion",
      "MapBox GL",
      "Recharts",
    ],
    description: [
      "Introducing a multi-store online shopping platform where users can seamlessly explore and rate a diverse range of products, when multiple sellers offer the same product, the platform shows the cheapest option to users.",
      "Product map and product recommendations: Users can see a map of all stores that sell a particular product,as well as similar products that the system recommends.",
      "Checkout: Users can complete the purchase process through the Checkout interface, which allows them to pay on delivery or with WePay.",
      "Merchant status and product management: Users can request merchant status to add, delete, and modify their products, as well as track customer purchase requests.",
      "The backend has been developed by my teammate using Node.js and MongoDB, with a distinct approach from Next.js, operating independently.",
    ],
  },
  {
    title: "Blog",
    tech: "NextJs 13 - Sanity",
    img: "/blog.png",
    param: "blog",
    code: "https://github.com/Marella-Rahal/Nextjs13-Blog-Sanity",
    demo: "https://nextjs13-blog-sanity.vercel.app/",
    video:
      "https://drive.google.com/file/d/1lqsGvnOy_znRE9Wsgy0Vg7Tv087LZFz-/preview",
    technologies: [
      "Tailwind CSS",
      "TypeScript",
      "React Js",
      "Next Js",
      "Sanity CMS",
    ],
    description: [
      "A simple blog made using Next.js 13 and Sanity CMS.",
      "Sanity CMS offers an embedded studio with Groq query language to add posts and fetch data from its dataset.",
      " Preview mode is enabled inside the Sanity embedded studio, and using the API routes ( /api/preview and /api/exit-preview ) .",
    ],
  },
];
