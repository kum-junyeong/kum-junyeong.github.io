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
    email: "gold.junyeong@gmail.com", // 클릭하면 클립보드에 복사됩니다
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
  /*  - abstract: 그림 클릭 시 팝업에 표시됩니다. 없으면 description 사용  */
  /* ------------------------------------------------------------------ */
  projectsIntro: {
    title: "From questions to working systems.",
    text:
      "Each project starts from a question about how people experience virtual humans, " +
      "and turns it into a system, a user study, and a set of findings.",
  },

  projects: [
    {
      title: "Agent Identification",
      period: "2026.05 –",
      theme: "Under review · IEEE VR 2027",
      question: "Which features must stay the same for a virtual human to still feel like the same person?",
      description:
        "We conducted a user study with 20 participants manipulating five identity-related features " +
        "(face, body type, voice, outfit, and hairstyle) across personal, social, and public distances, " +
        "and examined which cues make two virtual humans perceived as the same individual.",
            abstract: "Virtual humans (VHs) are increasingly used across diverse contents, where the same virtual individual may appear repeatedly across different scenes, contexts, and representations.Unlike real humans, virtual humans can be readily modified in appearance. Such flexibility enables diverse representations of the same character, but it also raises a fundamental question: which features must remain consistent for users to continue perceiving a VH as the same individual? Although prior work on real human identification has established that multiple visual and auditory cues contribute to same- identity perception, it remains unclear whether these cues play comparable roles in VH, particularly when their perceptual availability changes with distance.To address this question, we conducted a within- subjects user study with 20 participants to investigate how five identity - related features—face, body type, voice, outfit, and hairstyle—contribute to perceived VH identity across personal, social, and public distances.Participants sequentially observed two VHs and rated the extent to which they perceived them as the same individual.Our results showed that face, voice, and hairstyle each provided strong identity information, and several feature pairs showed positive interactions, indicating stronger effects when both cues were consistent.The contribution of face, however, varied with interpersonal distance.At closer distances, participants allocated more gaze to the head region, and the effect of matching facial appearance on same - identity ratings decreased as distance increased.Outfit did not independently affect identity judgments, but produced an additional effect when combined with voice, suggesting that relatively weak cues may still contribute when integrated with more diagnostic features.These findings indicate that VH identity is supported by multiple interacting visual and auditory cues rather than by a single invariant feature, and that the relative importance of some cues, particularly face and hairstyle, changes with interpersonal distance.We therefore suggest that VH systems prioritize the preservation of highly diagnostic identity cues while allowing greater flexibility in less critical features, and adapt this prioritization according to the expected interpersonal distance and representational context.",
      team: "Junyeong Kum (PNU), Myungho Lee (PNU)",
      image: "images/publications/agentidentification.png",
      tags: ["Virtual Humans", "Identity Perception", "Identity Features", "Interpersonal Distance"],
      publications: [],
    },
    {
      title: "Pedestrian Visualization",
      period: "2025.12 – 2026.03",
      theme: "TVCG 2026 · Situational awareness",
      question: "How should real-world pedestrians appear to someone immersed in VR?",
      description:
        "We conducted a user study manipulating pedestrian intent (Passerby, Bystander, Interactor), " +
        "visualization shape (humanoid vs. capsule) and transparency (opaque vs. translucent), and task distance, " +
        "and propose intent-dependent visualization strategies that balance situational awareness and task distraction.",
            abstract: "Users wearing head-mounted displays in immersive virtual reality (VR) often lose awareness of people in the surrounding physical environment.This reduced awareness can lead to safety issues, such as collisions with pedestrians, as well as missed opportunities for real - world interaction.Prior work has attempted to notify VR users of nearby people through auditory alarms or by switching to passthrough views, but these approaches can disrupt immersion and interfere with ongoing tasks.Moreover, existing work rarely considers pedestrians’ interaction intent, and visualizing all pedestrians indiscriminately may introduce unnecessary distraction during VR tasks.We investigate how pedestrians with different intents—those likely to interact with the user(Interactors), those who remain nearby without interacting(Bystanders), and those who merely pass by(Passersby)—should be visualized within the virtual environment.We conducted a user study manipulating pedestrian intent, visualization method(shape: Humanoid vs.Capsule; transparency: Opaque vs.Translucent), and task distance(Near vs.Far).Our results show that humanoid representations improved participants’ ability to identify pedestrian intent but also increased distraction and frustration compared to capsule representations. However, this trade - off was intent - dependent: capsule representations, which convey limited social cues, interfered more with task engagement for Bystanders and Interactors, whereas humanoid representations were more disruptive for Passersby.Based on these findings, we propose intent- dependent visualization strategies to preserve users’ task engagement: humanoid representations for pedestrians likely to interact with the user or stand close(Interactors and Bystanders), and capsule representations for pedestrians who are merely passing by(Passersby).This work highlights the importance of designing intent - aware visualizations of real - world pedestrians in immersive VR environments to balance situational awareness and task distraction.",
      team: "Junyeong Kum (PNU), Bogyeong Seo (CNU), Seungwon Kim (CNU), Myungho Lee (PNU)",
      image: "images/publications/pedestrianvisualization.png",
      tags: ["Virtual Reality", "VR–Non-VR Interaction", "Awareness", "Interruptions"],
      publications: ["tvcg26"],
    },
    {
      title: "Agent Locomotion",
      period: "2025.05 – 2025.08",
      theme: "Under review · IEEE VR 2027",
      question: "Should a virtual agent walk to you, or simply appear?",
      description:
        "We conducted a user study manipulating agent locomotion (walking vs. teleporting), " +
        "outfit (casual vs. hero), and body completeness (full-body vs. upper-body).",
            abstract: "Avatars in social virtual reality (VR) platforms vary in appearance and body form, from full- body to upper - body figures, and move using locomotion such as walking or teleportation.These visual and behavioral features influence social perception, sometimes reducing naturalness or comfort when avatars appear suddenly or move unpredictably.Prior work has largely examined self - avatars, leaving open how they shape perceptions of agents—in some sense, others’ avatars.Moreover, while appearance and behavior have been studied as separate factors, little is known about how these features may interact to influence user experience.To address this gap, we conducted a user study manipulating agent locomotion(walking vs.teleporting), outfit(casual vs.hero), and body completeness(full- body vs.upper-body). Results show that locomotion and body completeness significantly affect social presence and anxiety, whereas outfit alone does not but interacts with the other factors. These findings suggest aligning agent design features to enhance social VR.",
      team: "Junyeong Kum (PNU), Omar Khan (UofC), Hyeongil Nam (UofC), Kangsoo Kim (UofC), Myungho Lee (PNU)",
          image: "images/publications/agentlocomotion.png", // 예: "images/projects/agent-locomotion.png"
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
      abstract: "",
      team: "Junyeong Kum (PNU), Sunghun Jung (PNU), Hyeongil Nam (UofC), Kangsoo Kim (UofC), Myungho Lee (PNU)",
        image: "images/publications/formation.png",
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
            abstract: "Embodied conversational agents (ECAs) capable of non-verbal behaviors have been developed to address the limitations of voice- only assistants, with research exploring their use in mixed and augmented reality(AR), suggesting they may soon interact with us more naturally in physical spaces.Traditionally, AI voice assistants are activated through wake- up keywords, and since they are invisible, their method of appearance has not been a concern.However, for ECAs in AR, the question of how they should enter the user’s space when summoned remains underexplored.In this paper, we focused on the plausibility of ECAs’ entering action into the user’s field of view in AR.We analyzed its impact on user experience, concentrating on perceived social presence and co - presence of the agent.Three entrance styles were chosen for comparison: an obviously impossible one, a possible one, and an intermediate one, alongside a voice - only condition.We designed and conducted a within - subjects study with 38 participants.Our results indicated that while the plausibility of the action had less impact on functionality compared to the embodiment itself, it significantly affected social / co - presence.These findings highlight the importance of entrance design for future AR agent experiences.",
      team: "Junyeong Kum (PNU), Seungwon Kim (CNU), Myungho Lee (PNU)",
        image: "images/publications/agententrance.png",
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
            abstract: "The demand for kiosk systems with embodied conversational agents has increased with the development of artificial intelligence.There have been attempts to utilize non- verbal cues, particularly virtual human(VH) eye contact, to enable human - like interaction.Eye contact with VHs can affect satisfaction with the system and the perception of VHs.However, when rendered in 2D kiosks, the gaze direction of a VH can be incorrectly perceived, due to a lack of stereo cues.A user study was conducted to examine the effects of the gaze behavior of VHs in multi- party conversations in a 2D display setting.The results showed that looking at actual speakers affects the perceived interpersonal skills, social presence, attention, co - presence, and competence in conversations with VHs.In a second study, the gaze perception was further examined with consideration of the Mona Lisa effect, which can lead users to believe that a VH rendered on a 2D display is gazing at them, regardless of the actual direction, within a narrow range.We also proposed the camera rotation angle fine tuning(CRAFT) method to enhance the users’ perceptual accuracy regarding the direction of the VH’s gaze.The results showed that the perceptual accuracy for the VH gaze decreased in a narrow range and that CRAFT could increase the perceptual accuracy.",
      team: "Sunghun Jung (PNU), Junyeong Kum (PNU), Myungho Lee (PNU)",
      image: "images/publications/eyegaze.png",
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
        abstract: "The demand for conversational systems using digital humans has increased across various fields, including education and psychological counseling. Conversational digital humans can be categorized into avatar and agent.This paper introduces the Hybrid Avatar Agent System(HAAS), designed to implement a conversational digital human capable of addressing diverse questions.To facilitate seamless transitions between avatars and agents, we developed a Korean Dialogue Breakdown Detection(DBD) model.While a digital human typically functions as an agent, the DBD model identifies conversational pauses, prompting human operator intervention for user assistance.We trained DBD model using the RoBERTa_base model, achieving an accuracy of 60.77%.In a user study, a comparison was drawn between HAAS and the Agent Only System(AOS).Users noted that HAAS provided more appropriate answers than AOS.",
      team: "Junyeong Kum (PNU), Myungho Lee (PNU)",
      image: "images/publications/haas.png",
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
            abstract: "The demand for a conversational system with digital humans has increased with the development of artificial intelligence.Latency can occur in such conversational systems because of natural language processing and network issues, which can deteriorate the user’s performance and the availability of the systems.There have been attempts to mitigate user- perceived latency by using conversational fillers in human–agent interaction and human–robot interaction.However, non - verbal cues, such as gestures, have received less attention in such attempts, despite their essential roles in communication.Therefore, we designed gestural fillers for the digital humans.This study examined the effects of whether the conversation type and gesture filler matched or not.We also compared the effects of the gestural fillers with conversational fillers.The results showed that the gestural fillers mitigate user- perceived latency and affect the willingness, impression, competence, and discomfort in conversations with digital humans.",
      team: "Junyeong Kum (PNU), Myungho Lee (PNU)",
      image: "images/publications/gesturalfiller.png",
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
      id: "tvcg26", type: "journal", year: 2026, selected: true,
      authors: "J. Kum, B. Seo, S. Kim, and M. Lee",
      title: "Not All Pedestrians Are the Same: Effects of Real-World Pedestrian Visualization on Intent Recognition and Task Distraction",
      venue: "IEEE Transactions on Visualization and Computer Graphics (TVCG)",
      short: "TVCG 2026",
      link: "", // DOI 나오면 추가
      image: "",
    },
    {
      id: "tvcg26-locomotion", type: "journal", year: 2026,
      authors: "O. A. Khan, J. Kum, H. Nam, M. Lee, and K. Kim",
      title: "Influence of Avatar Appearance and Target Distance on Locomotion Method Selection in Virtual Reality",
      venue: "IEEE Transactions on Visualization and Computer Graphics (TVCG)",
      short: "TVCG 2026",
      link: "https://doi.org/10.1109/TVCG.2026.3679092",
      image: "",
    },
    {
      id: "jh26", type: "journal", year: 2026,
      authors: "H. Choi, M. Kim, B. Kim, J. Kum, H. Lee, M. Lee, and S. J. Noh",
      title: "High-resolution urban flood risk mapping using indicator cokriging integrated with physical modelling and observational data",
      venue: "Journal of Hydroinformatics, vol. 28",
      short: "J. Hydroinformatics 2026",
      link: "https://doi.org/10.2166/hydro.2025.078",
      image: "",
    },
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
      id: "ieeevr26", type: "conference", year: 2026,
      authors: "G. Woodhouse, D. Kim, T. Kim, J. Kum, D. Han, M. Lee, and I. Cho",
      title: "Behavioral Cues for Trust in AI-Driven Virtual Agents",
      venue: "2026 IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops (IEEE VR)",
      short: "IEEE VR 2026",
      link: "", // DOI 나오면 추가
      image: "",
    },
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
      id: "egu25", type: "conference", year: 2025,
      authors: "M. Kim, H. Choi, B. Kim, Y. Lee, H. Lee, J. Kum, M. Lee, and S. J. Noh",
      title: "Integrating Citizen Data in Urban Flood Risk Modeling: Insights from synthetic experiments",
      venue: "EGU General Assembly 2025 (EGU25-8244)",
      short: "EGU 2025",
      link: "https://doi.org/10.5194/egusphere-egu25-8244",
      image: "",
    },
    {
      id: "agu24", type: "conference", year: 2024,
      authors: "S. J. Noh, H. Choi, M. Kim, B. Kim, Y. Lee, H. Lee, J. Kum, and M. Lee",
      title: "Integration of urban flood risk information using high-resolution modeling and citizen observations: synthetic experiment on an open platform",
      venue: "AGU Fall Meeting 2024 (H33J-1058)",
      short: "AGU 2024",
      link: "",
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
  /*  - photos: 사진을 images/activities/ 폴더에 넣고 경로를 적으세요.    */
  /*    예: photos: ["images/activities/ismar26-1.jpg", "..."]           */
  /*    (Activities 페이지에만 표시되고, 누르면 원본이 새 탭에 열립니다)  */
  /* ------------------------------------------------------------------ */
  activities: [
    {
      title: "ISMAR 2026",
      date: "2026.10.05 – 2026.10.09",
      location: "Bari, Italy",
      category: "Conference",
      details: ["Presented a TVCG paper."],
      photos: ["images/activities/ismar2026_1.jpg", "images/activities/ismar2026_2.jpg", "images/activities/ismar2026_3.jpg",
              "images/activities/ismar2026_4.jpg", "images/activities/ismar2026_5.jpg"]
    },
    {
      title: "Lab Workshop",
      date: "2026.01.28 – 2026.01.29",
      location: "Gyeongju, Korea",
      category: "Workshop",
      details: ["Joined a workshop with lab members and visited media art exhibitions."],
      photos: ["images/activities/workshop_1.jpg", "images/activities/workshop_2.jpg", "images/activities/workshop_3.jpg"],
    },
    {
      title: "VRST 2025",
      date: "2025.11.12 – 2025.11.14",
      location: "Montreal, Canada",
      category: "Conference",
      details: ["Presented a paper and connected with researchers from around the world."],
      photos: ["images/activities/vrst2025_1.jpg", "images/activities/vrst2025_2.jpg", "images/activities/vrst2025_3.jpg", "images/activities/vrst2025_4.jpg"]
    },
    {
      title: "ISMAR 2025",
      date: "2025.10.07 – 2025.10.12",
      location: "Daejeon, Korea",
      category: "Conference",
      details: ["Presented a TVCG paper.", "Served as a Student Volunteer."],
      photos: ["images/activities/ismar2025_1.jpg", "images/activities/ismar2025_2.jpg", "images/activities/ismar2025_3.jpg",
            "images/activities/ismar2025_4.jpg", "images/activities/ismar2025_5.jpg", "images/activities/ismar2025_6.jpg"]
    },
    {
      title: "APMAR 2025",
      date: "2025.09.26 – 2025.09.27",
      location: "Busan, Korea",
      category: "Conference",
      details: [
        "Presented research in the \"Pitch Your Work\" session.",
        "Helped organize and run the event hosted by our lab.",
        ],
        photos: ["images/activities/apmar2025_1.jpg", "images/activities/apmar2025_2.jpg", "images/activities/apmar2025_3.jpg",
            "images/activities/apmar2025_4.jpg"]
    },
    {
      title: "Visiting Researcher, HXI Lab, University of Calgary",
      date: "2025.05.12 – 2025.08.10",
      location: "Calgary, Canada",
      category: "Research",
      details: [
        "Visiting researcher under Dr. Kangsoo Kim.",
        "Collaborated on XR and HCI projects, and planned and conducted user studies.",
      ],
      photos: ["images/activities/calgary_1.jpg", "images/activities/calgary_2.jpg"],
    },
    {
      title: "IEEE VR 2025",
      date: "2025.03.08 – 2025.03.12",
      location: "Saint-Malo, France",
      category: "Conference",
      details: ["Presented a poster and received the Honorable Mention Award for Best Poster."],
        photos: ["images/activities/vr2025_1.jpg", "images/activities/vr2025_2.jpg", "images/activities/vr2025_3.jpg"],
    },
    {
      title: "M.S. Graduation",
      date: "2023.02",
      location: "Busan, Korea",
      category: "Education",
      details: [
        "Received an M.S. in Information Convergence Engineering (Major in Artificial Intelligence) from Pusan National University.",
        "Thanks to my advisor and colleagues for all their support!",
      ],
      photos: ["images/activities/graduate.jpg"],
    },
    {
      title: "VRST 2022",
      date: "2022.11.29 – 2022.12.01",
      location: "Tsukuba, Japan",
      category: "Conference",
      details: ["Presented a poster and received the Best Poster Award."],
        photos: ["images/activities/vrst2022_1.jpg", "images/activities/vrst2022_2.jpg", "images/activities/vrst2022_3.jpg"],
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
          { when: "2023.09 – Present", what: "Ph.D. in Information Convergence Engineering (Major in Artificial Intelligence)", where: "Pusan National University · Full scholarship" },
          { when: "2021.03 – 2023.02", what: "M.S. in Information Convergence Engineering (Major in Artificial Intelligence)", where: "Pusan National University · Full scholarship" },
          { when: "2016.03 – 2021.02", what: "B.S. in Mechanical Engineering", where: "Pusan National University" },
        ],
      },
      {
        title: "Research Experience",
        items: [
          { when: "2025.05 – 2025.08", what: "Visiting Researcher, HXI Lab (Dr. Kangsoo Kim)", where: "University of Calgary, Canada" },
        ],
      },
      {
        title: "Teaching Experience",
        items: [
          { when: "2026 Fall", what: "Teaching Assistant, Virtual Reality (Graduate)", where: "Pusan National University" },
          { when: "2026 Spring", what: "Teaching Assistant, Introduction to Virtual Reality (Undergraduate)", where: "Pusan National University · Including Unity lab sessions" },
          { when: "2025 Fall", what: "Teaching Assistant, Artificial Intelligence Seminar (Undergraduate)", where: "Pusan National University" },
          { when: "2023 Fall", what: "Teaching Assistant, Virtual Reality (Graduate)", where: "Pusan National University · Including Unity lab sessions" },
          { when: "2022 Spring", what: "Teaching Assistant, Introduction to Data Science (Undergraduate)", where: "Pusan National University" },
          { when: "2021 Spring", what: "Teaching Assistant, Introduction to Data Science (Undergraduate)", where: "Pusan National University" },
        ],
      },
      {
        title: "Honors & Awards",
        items: [
          { when: "2025", what: "BK21 International Conference Presentation Travel Grant (ACM VRST 2025)", where: "Pusan National University" },
          { when: "2025", what: "Honorable Mention, Best Poster", where: "IEEE VR 2025" },
          { when: "2024", what: "Mitacs Globalink Research Award", where: "Mitacs, Canada · University of Calgary (Host: Dr. Kangsoo Kim)" },
          { when: "2022", what: "Best Poster Award", where: "ACM VRST 2022" },
        ],
      },
      {
        title: "Service",
        items: [
          { when: "2026", what: "Reviewer, Virtual Reality (2 manuscripts)", where: "Springer" },
          { when: "2026", what: "Reviewer, Humanities and Social Sciences Communications (1 manuscript)", where: "Springer Nature" },
          { when: "2026", what: "Reviewer, Posters (2 submissions)", where: "IEEE ISMAR 2026" },
          { when: "2025", what: "Student Volunteer", where: "IEEE ISMAR 2025" },
          { when: "2025", what: "Organizing Staff", where: "APMAR 2025" },
        ],
      },
    ],
  },
};
