type skill = {
  name: string;
  url: string;
};

type project = {
  title: string;
  tech: string;
  img: string;
  url: string;
};

type projectDetail = {
  title: string;
  tech: string;
  img: string;
  param: string;
  description: string[];
  technologies: string[];
  code: string;
  demo: string;
  video: string;
};

type motionType = {
  children: React.ReactNode;
  index?: number;
};
