import { ref } from "vue";
import interactivity from "@/assets/images/interactive.png";
import prototype from "@/assets/images/prototype.png";
import arDevelopment from "@/assets/images/Custom_VR.png";
import vrExperiences from "@/assets/images/organisation.png";
import UXUI from "@/assets/images/UIUX.png";
import Mobile from "@/assets/images/MobileVR_AR.png";
import ImageRotator from "@/components/reusable/ImageRotator.vue";
import imageOne from "@/assets/images/PipingNormal.png";
import imageTwo from "@/assets/images/PipingAdded.png";
import FSTS_N from "@/assets/images/FSTS_N.png";
import FSTS_A from "@/assets/images/FSTS_A.png";
import WH_One from "@/assets/images/WH_1.png";
import WH_Two from "@/assets/images/WH_2.png";
import WH_Three from "@/assets/images/WH_3.png";

import MT_One from "@/assets/images/MT_1.png";
import MT_Two from "@/assets/images/MT_2.png";
import MT_Three from "@/assets/images/MT_3.png";

import ASTwo_One from "@/assets/images/ASTwo_1.png";
import ASTwo_Two from "@/assets/images/ASTwo_2.png";

import TS_One from "@/assets/images/TS_1.png";
import TS_Two from "@/assets/images/TS_2.png";
import TS_Three from "@/assets/images/TS_3.png";
import TS_Four from "@/assets/images/TS_4.png";
import { reactive } from "vue";

export const English = {
  Header: {
    FunctionLink: "Functionality",
    ImpactLink: "Value & Impact",
    DeploymentLink: "Implementation",
    RoadmapLink: "Roadmap",
    ContactButton: "Get in touch",
  },
  Hero: {
    MainTitle: "Minimize maintenance errors with AR-guided training.",
    SubTitle:
      "Empower every technician with expert knowledge. Our Augmented Reality (AR) platform provides real-time guidance for setup and troubleshooting, shortening the learning curve and reducing service costs.",
    Button: "See impact examples",
  },

  Function: {
    EyelashText: "Functionality",
    MainTitle: "How does it work?",
    SubTitle: "A breakdown of our virtual and augmented reality workflow.",
    services: [
      {
        icon: arDevelopment,
        stepTitle: "Step One",
        title: "Data Capture",
        description:
          "We digitize your existing manuals and specialist knowledge.",
      },
      {
        icon: Mobile,
        stepTitle: "Step Two",
        title: "Implementation",
        description:
          "Your team gains instant access to instructions via smartphone or tablet.",
      },
      {
        icon: interactivity,
        stepTitle: "Step Three",
        title: "Execution",
        description:
          "AR overlays indicate exactly which bolts to turn and which levers to pull.",
      },
      {
        icon: vrExperiences,
        stepTitle: "Step Four",
        title: "Verification",
        description:
          "Real-time data logging ensures the work meets all quality standards.",
      },
    ],
  },

  Impact: {
    EyelashText: "Value",
    MainTitle: "Service Impact Examples",
    SubTitle:
      "Here are a few practical ways to create value using the service with a standard mobile phone.",
    processSteps: [
      {
        icon: "🏭",
        title: "Standardize Expert Performance",
        obf: "fill",
        images: [
          {
            src: MT_One,
            alt: "Image 1",
            caption: "Sample",
            of: "fill",
          },
          {
            src: MT_Two,
            alt: "Image 2 - Baraba",
            caption: "The Alps",
            of: "fade",
          },
          {
            src: MT_Three,
            alt: "Image 3",
            caption: "Sample",
            of: "fill",
          },
        ],
        description:
          "Move from observation to action. Trainees follow AR instructions directly on the equipment, bridging the gap between theory and practice. This results in fewer errors, faster onboarding, and better compliance with standard procedures.",
        durnation: 800,
        interval: 4000,
        transt: ["direct", "direct"],
        of: "fade",
      },
      {
        icon: "🔧",
        title: "Clarify Complex Schematics",
        obf: "fill",
        images: [
          {
            src: FSTS_N,
            alt: "Image 1",
            caption: "Sample",
            of: "fill",
          },
          {
            src: FSTS_A,
            alt: "Image 2 - Baraba",
            caption: "The Alps",
            of: "fill",
          },
        ],
        description:
          "Save time spent deciphering worn paper blueprints. Our AR system projects exact cable routes directly onto panels, increasing wiring accuracy and halving repair cycles.",
        durnation: 400,
        interval: 10,
        transt: ["fade"],
      },
      {
        icon: "📦",
        title: "Warehouse Speed and Precision",
        obf: "fill",
        images: [
          {
            src: WH_One,
            alt: "Image 1",
            caption: "Sample",
            of: "fill",
          },
          {
            src: WH_Three,
            alt: "Image 2 - Baraba",
            caption: "The Alps",
            of: "fill",
          },
        ],
        description:
          "Make seasonal staff productive instantly. AR-guided routing and bin-highlighting minimize search time and picking errors, ensuring your facility stays on schedule without high training costs.",
        durnation: 800,
        interval: 4000,
        transt: ["fade"],
      },
      {
        icon: "🔍",
        title: "Identify Hidden Hazards",
        obf: "fill",
        images: [
          {
            src: imageOne,
            alt: "Image 1",
            caption: "Sample",
            of: "fill",
          },
          {
            src: imageTwo,
            alt: "Image 2 - Baraba",
            caption: "The Alps",
            of: "fill",
          },
        ],
        description:
          "Keep your team safe. Our interface projects risk zones and historical fault data directly into the worker's field of view, turning safety protocols into a visual reality.",
        durnation: 800,
        interval: 4000,
        transt: ["fade"],
      },
      {
        icon: "⚙️",
        title: "Quality Control in Commissioning",
        obf: "fill",
        images: [
          {
            src: ASTwo_One,
            alt: "Image 1",
            caption: "Sample",
            of: "fill",
          },
          {
            src: ASTwo_Two,
            alt: "Image 2 - Baraba",
            caption: "The Alps",
            of: "fill",
          },
        ],
        description:
          "Avoid the common headaches of manual measurement. Project exact bolt-hole locations and alignment markers directly onto mounting surfaces to ensure heavy equipment is installed correctly the first time.",
        durnation: 800,
        interval: 4000,
        transt: ["fade"],
      },
      {
        icon: "🚨",
        title: "Adaptive Fault Recovery",
        obf: "fill",
        images: [
          {
            src: TS_One,
            alt: "Image 1",
            caption: "Sample",
            of: "fill",
          },
          {
            src: TS_Two,
            alt: "Image 2 - Baraba",
            caption: "The Alps",
            of: "fill",
          },
        ],
        description:
          "Eliminate the guesswork. Our dynamic fault-tree overlays react to what the technician sees in real-time, guiding them through complex repairs with the precision of a senior engineer.",
        durnation: 800,
        interval: 4000,
        transt: ["fade"],
      },
    ],
  },

  Deployment: {
    EyelashText: "Implementation",
    MainTitle: "Built for the real world",
    Cards: {
      CardOne: {
        CardTitleNumber: "01",
        CardTitleTop: "Hardware Independent",
        CardMainTitle: "Use the tools you already have",
        CardSubtitle:
          "There is no need for expensive specialized equipment. Our platform is designed to run on the hardware your team already carries.",
        CardItems: [
          {
            label: "Smartphones and Tablets",
            desc: "Full support for iOS and Android (ARKit / ARCore).",
            paths: [
              "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5",
              "M12 18h.008v.008H12V18z",
            ],
          },

          {
            label: "Industrial Wearables",
            desc: "Ready for RealWear and HoloLens for hands-free operation in high-risk zones.",
            paths: [
              "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z",
              "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
            ],
          },

          {
            label: "Legacy Integration",
            desc: "Compatible with your current CAD data; no costly remodeling required.",
            paths: [
              "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244",
            ],
          },
        ],
      },

      CardTwo: {
        CardTitleNumber: "02",
        CardTitleTop: "Implementation",
        CardMainTitle: "From design to site in days, not months",
        CardSubtitle:
          "We have bridged the implementation gap. Our process is optimized for the speed of modern manufacturing.",
        CardItems: [
          {
            label: "Rapid Data Processing",
            desc: "Submit your 3D models and PDF manuals; the system can be ready in days.",
            paths: [
              "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5",
            ],
          },

          {
            label: "Quick Updates",
            desc: "Deploy updated procedures to all devices simultaneously without paper supplements.",
            paths: [
              "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99",
            ],
          },

          {
            label: "Simple Interface",
            desc: "Your specialists can update fault trees themselves without needing a software engineer.",
            paths: [
              "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
            ],
          },
        ],
      },
    },
    Benefit: [
      { value: "0 USD", label: "Hardware Cost" },
      { value: "3+", label: "Hardware Ecosystems" },
      { value: "0", label: "Vendor Lock-in" },
    ],
  },

  Roadmap: {
    EyelashText: "Offer",
    MainTitle: "A clear path to results",
    SubTitle:
      "We don't expect you to overhaul everything at once. Let's prove the ROI with a single high-impact procedure.",
    Cards: [
      {
        days: "Days 1 – 3",
        title: "Asset Audit",
        body: "Send us a CAD file and a manual for one simple task. We analyze the scope and identify key anchor points.",
      },

      {
        days: "Days 4 – 10",
        title: "AR Transformation",
        body: "We set up the logic and create spatial overlays, step annotations, and safety checkpoints in-context.",
      },
      {
        days: "Days 11 – 14",
        title: "Live Validation",
        body: "We demonstrate the guided procedure on your equipment. You see technicians complete tasks with measurable confidence.",
      },
    ],

    ActonBox: {
      Title: "Ready to start?",
      subtext:
        "Send us one CAD file and process instructions. That is the only commitment.",
      ButtonText: "Begin your pilot project",
    },
  },

  Contact: {
    EyelashText: "Contact",
    MainTitle: "Ready for the next step?",
    SubTitle: "Let’s collaborate on your next VR/AR solution.",
    TextBox: {
      NameText: "Your Name",
      EmailText: "Your Email",
      DetailText: "Project Details / Message",
      ButtonText: "Send Message",
    },

    DirectContact: {
      Title: "Direct Contact",
      EmailText: "✉️ Email:",
      ServiceText: "Serving clients globally from Reykjavik, Iceland.",
    },
  },
};

export const Icelandic = {
  Header: {
    FunctionLink: "Virkni",
    ImpactLink: "Ávinningur",
    DeploymentLink: "Innleiðing",
    RoadmapLink: "Vegvísir",
    ContactButton: "Hafðu samband",
  },
  Hero: {
    MainTitle: "Fækkaðu villum við viðhald með AR-þjálfun.",
    SubTitle:
      "Gerðu hvern tæknimann að sérfræðingi. Viðbættur veruleiki (AR) veitir rauntíma leiðbeiningar við uppsetningu og bilanaleit, sem styttir upplýsingagjöf og lækkar þjónustukostnað.",
    Button: "Dæmi um ávinning",
  },

  Function: {
    EyelashText: "Virkni",
    MainTitle: "Hvernig virkar þetta?",
    SubTitle: "Hvernig virkar sýndar- og viðbættur AR veruleiki hjá okkur?",
    services: [
      {
        icon: arDevelopment,
        stepTitle: "Skref eitt",
        title: "Gagnaöflun",
        description: "Við stafrænum handbækur þínar og sérfræðiþekkingu.",
      },
      {
        icon: Mobile,
        stepTitle: "Skref tvö",
        title: "Innleiðing",
        description:
          "Teymið þitt fær tafarlausan aðgang að leiðbeiningum í snjallsíma eða spjaldtölvu.",
      },
      {
        icon: interactivity,
        stepTitle: "Skref þrjú",
        title: "Framkvæmd",
        description:
          "AR-upplýsingar sýna nákvæmlega hvaða skrúfu á að snúa og í hvaða stöng á að toga.",
      },
      {
        icon: vrExperiences,
        stepTitle: "Skref fjögur",
        title: "Staðfesting",
        description:
          "Rauntímaskráning gagna tryggir að verkið sé unnið samkvæmt ítrustu kröfum.",
      },
    ],
  },

  Impact: {
    EyelashText: "Ávinningur",
    MainTitle: "Dæmi um ávinning þjónustunnar",
    SubTitle:
      "Hér eru nokkrar leiðir til að skapa virði með þjónustunni, þar sem aðeins þarf snjallsíma.",
    processSteps: [
      {
        icon: "🏭",
        title: "Samræmdu vinnubrögð sérfræðinga",
        obf: "fill",
        images: [
          {
            src: MT_One,
            alt: "Mynd 1",
            caption: "Sýnishorn",
            of: "fill",
          },
          {
            src: MT_Two,
            alt: "Mynd 2 - Baraba",
            caption: "Alparnir",
            of: "fade",
          },
          {
            src: MT_Three,
            alt: "Mynd 3",
            caption: "Sýnishorn",
            of: "fill",
          },
        ],
        description:
          "Hættu að fylgjast með úr fjarlægð og byrjaðu að vinna. Nýliðar fylgja AR-leiðbeiningum beint á vélbúnaði, sem brúar bilið milli þekkingar og framkvæmdar. Þetta skilar sér í færri villum, hraðari þjálfun og fylgni við verkferla.",
        durnation: 800,
        interval: 4000,
        transt: ["direct", "direct"],
        of: "fade",
      },
      {
        icon: "🔧",
        title: "Enginn ruglingur við teikningar",
        obf: "fill",
        images: [
          {
            src: FSTS_N,
            alt: "Mynd 1",
            caption: "Sýnishorn",
            of: "fill",
          },
          {
            src: FSTS_A,
            alt: "Mynd 2 - Baraba",
            caption: "Alparnir",
            of: "fill",
          },
        ],
        description:
          "Ekki eyða tíma í að ráða í óhreinar pappírsteikningar. AR-kerfið okkar sýnir nákvæmar lagnaleiðir beint á tækjatöflur, sem eykur nákvæmni og styttir viðgerðartíma.",
        durnation: 400,
        interval: 10,
        transt: ["fade"],
      },
      {
        icon: "📦",
        title: "Hraði og nákvæmni í vöruhúsum",
        obf: "fill",
        images: [
          {
            src: WH_One,
            alt: "Mynd 1",
            caption: "Sýnishorn",
            of: "fill",
          },
          {
            src: WH_Three,
            alt: "Mynd 2 - Baraba",
            caption: "Alparnir",
            of: "fill",
          },
        ],
        description:
          "Gerðu tímabundið starfsfólk afkastameira á svipstundu. AR-leiðbeiningar og auðkenning vörustaðsetninga lágmarkar leitartíma og tiltektarvillur, sem tryggir að allt sé á áætlun án mikils þjálfunarkostnaðar.",
        durnation: 800,
        interval: 4000,
        transt: ["fade"],
      },
      {
        icon: "🔍",
        title: "Sjáðu duldar hættur",
        obf: "fill",
        images: [
          {
            src: imageOne,
            alt: "Mynd 1",
            caption: "Sýnishorn",
            of: "fill",
          },
          {
            src: imageTwo,
            alt: "Mynd 2 - Baraba",
            caption: "Alparnir",
            of: "fill",
          },
        ],
        description:
          "Haltu teyminu þínu utan hættusvæða. Viðmótið okkar varpar áhættusvæðum og sögulegum gögnum um bilanir beint fyrir sjónir starfsmannsins. Öryggismál breytast úr þurrum tékklista í sjónrænan veruleika.",
        durnation: 800,
        interval: 4000,
        transt: ["fade"],
      },
      {
        icon: "⚙️",
        title: "Gæðastýring við gangsetningu",
        obf: "fill",
        images: [
          {
            src: ASTwo_One,
            alt: "Mynd 1",
            caption: "Sýnishorn",
            of: "fill",
          },
          {
            src: ASTwo_Two,
            alt: "Mynd 2 - Baraba",
            caption: "Alparnir",
            of: "fill",
          },
        ],
        description:
          "Sparaðu þér höfuðverkinn við mælingar. Varpaðu nákvæmri staðsetningu borholna og festinga beint á fleti til að tryggja að þungatæki séu rétt sett upp í fyrstu tilraun.",
        durnation: 800,
        interval: 4000,
        transt: ["fade"],
      },
      {
        icon: "🚨",
        title: "Sveigjanleg viðgerðarstýring",
        obf: "fill",
        images: [
          {
            src: TS_One,
            alt: "Mynd 1",
            caption: "Sýnishorn",
            of: "fill",
          },
          {
            src: TS_Two,
            alt: "Mynd 2 - Baraba",
            caption: "Alparnir",
            of: "fill",
          },
        ],
        description:
          "Engar fleiri getgátur. Virka bilanatréð okkar bregst við því sem tæknimaðurinn sér í rauntíma og leiðir hann í gegnum flóknar viðgerðir af sömu nákvæmni og reyndur verkfræðingur.",
        durnation: 800,
        interval: 4000,
        transt: ["fade"],
      },
    ],
  },

  Deployment: {
    EyelashText: "Innleiðing",
    MainTitle: "Hannað fyrir raunverulegar aðstæður",
    Cards: {
      CardOne: {
        CardTitleNumber: "01",
        CardTitleTop: "Óháð vélbúnaði",
        CardMainTitle: "Notaðu tækin sem þú átt núþegar",
        CardSubtitle:
          "Það er engin þörf á dýrum sérbúnaði. Hugbúnaðurinn okkar er hannaður til að keyra á þeim vélbúnaði sem teymið þitt er þegar með í vasanum.",
        CardItems: [
          {
            label: "Snjallsímar og spjaldtölvur",
            desc: "Fullur stuðningur fyrir iOS og Android (ARKit / ARCore).",
            paths: [
              "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5",
              "M12 18h.008v.008H12V18z",
            ],
          },

          {
            label: "Iðnaðar-snjallbúnaður",
            desc: "Tilbúið fyrir RealWear og HoloLens, fyrir handfrjálsa vinnu á áhættusvæðum.",
            paths: [
              "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z",
              "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
            ],
          },

          {
            label: "Samþætting við Önnur kerfi",
            desc: "Virkar með núverandi CAD-gögnum, engin þörf á dýrri endurgerð líkana.",
            paths: [
              "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244",
            ],
          },
        ],
      },

      CardTwo: {
        CardTitleNumber: "02",
        CardTitleTop: "Innleiðing",
        CardMainTitle: "Frá hönnun til framkvæmda á nokkrum dögum",
        CardSubtitle:
          "Við höfum brúað bilið í innleiðingu. Ferlið okkar er fínstillt fyrir hraða nútíma framleiðslu.",
        CardItems: [
          {
            label: "Hröð gagnaúrvinnsla",
            desc: "Sendu okkur 3D líkön og handbækur á PDF-formi; kerfið getur verið tilbúið á stuttum tíma.",
            paths: [
              "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5",
            ],
          },

          {
            label: "Fljótlegar uppfærslur",
            desc: "Sendu uppfærða verkferla í öll tæki samtímis, án þess að nota pappír.",
            paths: [
              "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99",
            ],
          },

          {
            label: "Einfalt viðmót",
            desc: "Sérfræðingar þínir geta sjálfir uppfært bilanatré án þess að þurfa forritara.",
            paths: [
              "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
            ],
          },
        ],
      },
    },
    Benefit: [
      { value: "0 kr.", label: "Vélbúnaðarkostnaður" },
      { value: "3+", label: "Vélbúnaðarkerfi" },
      { value: "0", label: "Binding við hugbúnað" },
    ],
  },

  Roadmap: {
    EyelashText: "Tilboð",
    MainTitle: "Skýr leið að árangri",
    SubTitle:
      "Við ætlumst ekki til þess að þú breytir öllu skipulagi á einni nóttu. Sönnum arðsemina með einu verkferli.",
    Cards: [
      {
        days: "Dagar 1 – 3",
        title: "Greining gagna",
        body: "Sendu okkur CAD-skrá og lýsingu á einföldum ferli. Við greinum umfangið og finnum helstu tengipunkta.",
      },

      {
        days: "Dagar 4 – 10",
        title: "AR-umbreyting",
        body: "Við setjum upp rökfræðina og búum til staðsetningarleiðbeiningar, skýringar og öryggisatriði í réttu samhengi.",
      },
      {
        days: "Dagar 11 – 14",
        title: "Raunprófun",
        body: "Við sýnum hvernig ferlið virkar á þínum eigin búnaði. Þú færð að sjá starfsmenn klára verkefnið.",
      },
    ],

    ActonBox: {
      Title: "Tilbúin(n) að byrja?",
      subtext:
        "Sendu okkur eina CAD-skrá og verkferla. Það er eina skuldbindingin.",
      ButtonText: "Hefja tilraunaverkefni",
    },
  },

  Contact: {
    EyelashText: "Samskipti",
    MainTitle: "Ertu tilbúin(n) í næsta skref?",
    SubTitle: "Vinnum saman að nýstárlegum VR/AR lausnum.",
    TextBox: {
      NameText: "Nafn",
      EmailText: "Netfang",
      DetailText: "Upplýsingar um verkefni / Skilaboð",
      ButtonText: "Senda",
    },

    DirectContact: {
      Title: "Beint samband",
      EmailText: "✉️ Netfang:",
      ServiceText: "Þjónustum viðskiptavini um allan heim frá Reykjavík.",
    },
  },
};

export const Languages = reactive({
  current: English,
  chosenLanguages: "en",
  set() {
    if (this.chosenLanguages === "en") {
      this.current = Icelandic;
      this.chosenLanguages = "is";
    } else {
      this.current = English;
      this.chosenLanguages = "en";
    }
  },
});
export const ListItem = [{}];
