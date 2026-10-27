/* =====================================================================
   ✏️  홈페이지 내용은 이 파일만 수정하면 됩니다.
   ---------------------------------------------------------------------
   - 문자열은 "큰따옴표" 안에 쓰고, 항목 끝에는 쉼표(,)를 붙이세요.
   - 항목을 추가하려면 { ... } 블록 하나를 통째로 복사해서 붙여넣으세요.
   - 이미지는 images/ 폴더에 넣고 경로를 적으세요. 비워두면("") 자동으로
     자리표시 그래픽이 표시됩니다.
   ===================================================================== */

const content = {
  /* ------------------------------------------------------------------ */
  /* Profile                                                             */
  /* ------------------------------------------------------------------ */
  profile: {
    name: "Junyeong Kum",
    nameLocal: "금준영",
    role: "Ph.D. Student",
    affiliation: "Pusan National University",
    photo: "images/profile.jpg", // 없으면 이니셜이 표시됩니다
    headline: "Designing virtual humans that share our space.",
    bio:
      "My research focuses on Extended Reality (XR), Virtual Humans, and Human–Computer Interaction (HCI). " +
      "I study how embodied conversational agents enter, move through, and take part in social situations " +
      "with people in AR, VR, and mixed reality.",
    interests: ["Extended Reality (XR)", "Virtual Humans", "Human–Computer Interaction", "Embodied Conversational Agents", "Social Presence"],
    email: "gold.junyeong@gmail.com",
    links: [
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=YOJ2AaoAAAAJ&hl=ko&oi=ao" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/junyeong-kum-a05889358/" },
    ],
    // 출판물 저자 목록에서 굵게 표시할 내 이름 표기들
    myNames: ["J. Kum", "Junyeong Kum"],
  },

  /* ------------------------------------------------------------------ */
  /* Projects  (위에서부터 01, 02 ... 순서로 번호가 붙습니다)              */
  /*  - publications: 아래 publications의 id를 적으면 "Selected studies"  */
  /*    카드로 자동 연결됩니다.                                           */
  /* ------------------------------------------------------------------ */
  projectsIntro: {
    title: "From questions to working systems.",
    text:
      "Each project starts from a question about how people experience virtual humans, " +
      "and turns it into a system, a user study, and a set of findings.",
  },

  projects: [
    {
      title: "Agent Locomotion",
      period: "2025.05 – Present",
      theme: "Ongoing · Virtual agents & locomotion",
      question: "Should a virtual agent walk to you, or simply appear?",
      description:
        "We conducted a user study manipulating agent locomotion (walking vs. teleporting), " +
        "outfit (casual vs. hero), and body completeness (full-body vs. upper-body).",
      team: "Junyeong Kum (PNU), Omar Khan (UofC), Hyeongil Nam (UofC), Kangsoo Kim (UofC), Myungho Lee (PNU)",
      image: "", // 예: "images/projects/agent-locomotion.png"
      tags: ["Virtual Agents", "Locomotion", "Appearance", "Mixed Reality"],
      publications: [],
    },
    {
      title: "F-formation in Mixed Group",
      period: "2025.01 – 2025.10",
      theme: "VRST 2025 · Group interaction",
      question: "How do people join a conversation circle made of an agent, an avatar, and a human?",
      description:
        "We examine participants' entry behavior as they join a circular F-formation composed of " +
        "three distinct entities: an agent, an avatar, and a real human.",
      team: "Junyeong Kum (PNU), Sunghun Jung (PNU), Hyeongil Nam (UofC), Kangsoo Kim (UofC), Myungho Lee (PNU)",
      image: "",
      tags: ["F-formation", "Proxemics", "Mixed Reality", "Social Interaction"],
      publications: ["vrst25"],
    },
    {
      title: "Agent Entrance",
      period: "2024.03 – 2025.03",
      theme: "TVCG 2025 · Social presence",
      question: "How should an embodied conversational agent enter your space in AR?",
      description:
        "We examine how plausible it is for embodied conversational agents to enter the user's field of view in AR, " +
        "and how their entrance styles affect user experience, perceived social presence, and agent co-presence.",
      team: "Junyeong Kum (PNU), Seungwon Kim (CNU), Myungho Lee (PNU)",
      image: "",
      tags: ["Embodied Conversational Agents", "Augmented Reality", "Social Presence", "Co-presence"],
      publications: ["tvcg25", "ieeevr25"],
    },
    {
      title: "Eye-gaze of Agent",
      period: "2023.03 – 2024.03",
      theme: "Electronics 2024–25 · Multi-party conversation",
      question: "Who should a virtual human look at when several people are talking?",
      description:
        "We built a speaker detection model that identifies the active speaker in noisy conditions using only " +
        "one camera and one microphone, and compared it with a baseline and a human-controlled condition " +
        "in a user study with 30 participants.",
      team: "Sunghun Jung (PNU), Junyeong Kum (PNU), Myungho Lee (PNU)",
      image: "",
      tags: ["Eye Gaze", "Speaker Detection", "Mona Lisa Effect", "Multi-party"],
      publications: ["electronics24", "electronics25"],
    },
    {
      title: "Hybrid Avatar-Agent System",
      period: "2022.03 – 2023.03",
      theme: "J. Korea Multimedia Society 2023 · Conversational agents",
      question: "Can an avatar and an agent work together so a virtual human can answer anything?",
      description:
        "We introduce the Hybrid Avatar-Agent System (HAAS), designed to implement virtual agents " +
        "that can address diverse questions.",
      team: "Junyeong Kum (PNU), Myungho Lee (PNU)",
      image: "",
      tags: ["Hybrid System", "Avatar", "Agent", "LLM"],
      publications: ["kms23", "kcgs22-haas"],
    },
    {
      title: "Gestural Filler to Mitigate Perceived Latency",
      period: "2022.03 – 2023.03",
      theme: "Applied Sciences 2022 · Latency perception",
      question: "Can a gesture make waiting for a digital human feel shorter?",
      description:
        "We examine whether gestural fillers that match the conversation type reduce user-perceived latency, " +
        "and compare gestural fillers with conversational fillers.",
      team: "Junyeong Kum (PNU), Myungho Lee (PNU)",
      image: "",
      tags: ["Digital Humans", "Latency", "Gestural Filler", "Conversation"],
      publications: ["applsci22", "vrst22", "kcgs22-filler"],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Publications                                                        */
  /*  - type: "journal" | "conference" | "domestic"                     */
  /*  - id: 영문/숫자로 된 고유 이름 (Projects에서 연결할 때 사용)         */
  /*  - award: 수상 내역이 있으면 적고, 없으면 지우거나 ""                 */
  /*  - selected: true 이면 Profile 페이지에도 표시됩니다                  */
  /* ------------------------------------------------------------------ */
  publications: [
    // Journal Articles
    {
      id: "tvcg25", type: "journal", year: 2025, selected: true,
      authors: "J. Kum, S. Kim, and M. Lee",
      title: "Entering Your Space: How Agent Entrance Styles Shape Social Presence in AR",
      venue: "IEEE Transactions on Visualization and Computer Graphics (TVCG)",
      short: "TVCG 2025",
      link: "https://ieeexplore.ieee.org/document/11192593",
      image: "",
    },
    {
      id: "electronics25", type: "journal", year: 2025,
      authors: "S. Jung, J. Kum, and M. Lee",
      title: "An Efficient Gaze Control System for Kiosk-Based Embodied Conversational Agents in Multi-Party Conversations",
      venue: "Electronics, vol. 14",
      short: "Electronics 2025",
      link: "https://doi.org/10.3390/electronics14081592",
      image: "",
    },
    {
      id: "electronics24", type: "journal", year: 2024,
      authors: "J. Kum, S. Jung, and M. Lee",
      title: "The effect of eye contact in multi-party conversations with virtual humans and mitigating the Mona Lisa effect",
      venue: "Electronics, vol. 13",
      short: "Electronics 2024",
      link: "https://doi.org/10.3390/electronics13020430",
      image: "",
    },
    {
      id: "applsci22", type: "journal", year: 2022,
      authors: "J. Kum and M. Lee",
      title: "Can Gestural Filler Reduce User-Perceived Latency in Conversation with Digital Humans?",
      venue: "Applied Sciences, vol. 12",
      short: "Applied Sciences 2022",
      link: "https://doi.org/10.3390/app122110972",
      image: "",
    },

    // Conference Proceedings
    {
      id: "vrst25", type: "conference", year: 2025, selected: true,
      authors: "J. Kum, S. Jung, H. Nam, K. Kim, and M. Lee",
      title: "Joining the Circle: Human Entry Behavior in a Mixed Reality F-Formation with Agent, Avatar, and Human Partners",
      venue: "Proceedings of the 31st ACM Symposium on Virtual Reality Software and Technology (VRST '25)",
      short: "VRST 2025",
      link: "https://dl.acm.org/doi/full/10.1145/3756884.3766022",
      image: "",
    },
    {
      id: "ismar25", type: "conference", year: 2025,
      authors: "J. Kum, S. Kim, and M. Lee",
      title: "Entering Your Space: How Agent Entrance Styles Shape Social Presence in AR",
      venue: "IEEE International Symposium on Mixed and Augmented Reality (ISMAR)",
      short: "ISMAR 2025",
      link: "https://ieeexplore.ieee.org/document/11192593",
      image: "",
    },
    {
      id: "ieeevr25", type: "conference", year: 2025, selected: true,
      authors: "J. Kum and M. Lee",
      title: "How Embodied Conversational Agents Should Enter Your Space?",
      venue: "2025 IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops (IEEE VR)",
      short: "IEEE VR 2025",
      link: "https://ieeexplore.ieee.org/document/10972767",
      award: "Honorable Mention, Best Poster",
      image: "",
    },
    {
      id: "apmar23", type: "conference", year: 2023,
      authors: "S. Jung, J. Kum, and M. Lee",
      title: "Breaking the Mona Lisa Effect: Enhancing Eye Contact with Virtual Humans in 2D Display Environments",
      venue: "The 15th Asia-Pacific Workshop on Mixed and Augmented Reality (APMAR)",
      short: "APMAR 2023",
      link: "https://ceur-ws.org/Vol-3467/paper4.pdf",
      image: "",
    },
    {
      id: "vrst22", type: "conference", year: 2022, selected: true,
      authors: "J. Kum and M. Lee",
      title: "The Effects of Gestural Filler in Reducing Perceived Latency in Conversation with a Digital Human",
      venue: "Proceedings of the 28th ACM Symposium on Virtual Reality Software and Technology (VRST '22)",
      short: "VRST 2022",
      link: "https://doi.org/10.1145/3562939.3565657",
      award: "Best Poster Award",
      image: "",
    },

    // Domestic
    {
      id: "kms23", type: "domestic", year: 2023,
      authors: "J. Kum, T. Kim, and M. Lee",
      title: "LLM 기반 하이브리드 아바타 에이전트 시스템의 사용성 평가",
      venue: "멀티미디어학회논문지, vol. 26",
      short: "멀티미디어학회논문지 2023",
      link: "https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE11516288",
      image: "",
    },
    {
      id: "kcgs22-haas", type: "domestic", year: 2022,
      authors: "J. Kum, K. Kim, and M. Lee",
      title: "하이브리드 아바타-에이전트 시스템",
      venue: "한국컴퓨터그래픽스학회 2022 KCGS 학술대회 논문집",
      short: "KCGS 2022",
      link: "https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE11135629",
      image: "",
    },
    {
      id: "kcgs22-filler", type: "domestic", year: 2022,
      authors: "J. Kum and M. Lee",
      title: "대화 유형에 맞는 디지털 휴먼의 행동 필러와 사용자가 인식하는 대기 시간의 관계성 연구",
      venue: "한국컴퓨터그래픽스학회 2022 KCGS 학술대회 논문집",
      short: "KCGS 2022",
      link: "https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE11135639",
      image: "",
    },
  ],

  // Publications 페이지에 표시할 분류 이름과 순서
  publicationTypes: [
    { type: "journal", label: "Journal Articles" },
    { type: "conference", label: "Conference Proceedings" },
    { type: "domestic", label: "Domestic" },
  ],

  /* ------------------------------------------------------------------ */
  /* Activities  (위에 있을수록 최신)                                      */
  /*  - category: Conference | Research | Workshop | Service 등 자유롭게  */
  /* ------------------------------------------------------------------ */
  activities: [
    {
      title: "Lab Workshop",
      date: "2026.01.28 – 2026.01.29",
      location: "Gyeongju",
      category: "Workshop",
      details: ["Joined a workshop with lab members and visited media art exhibitions."],
    },
    {
      title: "VRST 2025",
      date: "2025.11.12 – 2025.11.14",
      location: "Montreal",
      category: "Conference",
      details: ["Presented a paper and connected with researchers from around the world."],
    },
    {
      title: "ISMAR 2025",
      date: "2025.10.07 – 2025.10.12",
      location: "Daejeon",
      category: "Conference",
      details: ["Presented a TVCG paper.", "Served as a Student Volunteer."],
    },
    {
      title: "APMAR 2025",
      date: "2025.09.26 – 2025.09.27",
      location: "Busan",
      category: "Conference",
      details: [
        "Presented research in the \"Pitch Your Work\" session.",
        "Helped organize and run the event hosted by our lab.",
      ],
    },
    {
      title: "Visiting Researcher, HXI Lab, University of Calgary",
      date: "2025.05.12 – 2025.08.10",
      location: "Calgary",
      category: "Research",
      details: [
        "Visiting researcher under Dr. Kangsoo Kim.",
        "Collaborated on XR and HCI projects, and planned and conducted user studies.",
      ],
    },
    {
      title: "IEEE VR 2025",
      date: "2025.03.08 – 2025.03.12",
      location: "Saint-Malo",
      category: "Conference",
      details: ["Presented a poster and received the Honorable Mention Award for Best Poster."],
    },
    {
      title: "VRST 2022",
      date: "2022.11.29 – 2022.12.01",
      location: "Tsukuba",
      category: "Conference",
      details: ["Presented a poster and received the Best Poster Award."],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* CV                                                                  */
  /*  - pdf: files/ 폴더에 CV PDF를 넣고 파일 이름을 적으세요              */
  /* ------------------------------------------------------------------ */
  cv: {
    pdf: "files/CV_Junyeong_Kum.pdf",
    updated: "2026.10",
    sections: [
      {
        title: "Education",
        items: [
          { when: "Present", what: "Ph.D. Student", where: "Pusan National University" },
        ],
      },
      {
        title: "Research Experience",
        items: [
          { when: "2025.05 – 2025.08", what: "Visiting Researcher, HXI Lab (Dr. Kangsoo Kim)", where: "University of Calgary, Canada" },
        ],
      },
      {
        title: "Honors & Awards",
        items: [
          { when: "2025", what: "Honorable Mention, Best Poster", where: "IEEE VR 2025" },
          { when: "2022", what: "Best Poster Award", where: "ACM VRST 2022" },
        ],
      },
      {
        title: "Service",
        items: [
          { when: "2025", what: "Student Volunteer", where: "IEEE ISMAR 2025" },
          { when: "2025", what: "Organizing Staff", where: "APMAR 2025" },
        ],
      },
    ],
  },
};
