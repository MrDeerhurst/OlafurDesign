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

import Brain from "@/assets/images/brain.png";
import Time from "@/assets/images/Time.png";
import Waste from "@/assets/images/Waste.png";

import GA from "@/assets/images/Guided Assembly.png";
import GAIcon from "@/assets/images/GA.png";

import RST from "@/assets/images/RSTMain.png";
import RSTIcon from "@/assets/images/RSTI.png";

import SFT from "@/assets/images/SFI.png";
import SFTIcon from "@/assets/images/Safe.png";

import MICO from "@/assets/images/MICO.png";
import MICOIcon from "@/assets/images/MICOIcon.png";

import REC from "@/assets/images/REC.png";
import RECIcon from "@/assets/images/RECIcon.png";

import BLCS from "@/assets/images/BLCS.png";
import BLCSIcon from "@/assets/images/BLCSIcon.png";

import { reactive } from "vue";

export const English = {
  Header: {
    FunctionLink: "Value",
    ImpactLink: "Impact",
    DeploymentLink: "Roadmap",
    RoadmapLink: "Offer",
    ContactButton: "Get in touch",
  },
  Hero: {
    MainTitle: "Train Any Stakeholder Faster Using Mobile AR",
    SubTitle:
      "The End of the Manual. Why the World’s Best Manufacturers are Switching to 'Visual Guidance'. No headsets, no friction, just faster production.",
    Button: "Book a pilot",
  },

  Value: {
    EyelashText: "Value",
    MainTitle: "The Expertise Bottleneck",
    SubTitle:
      "In modern machinery manufacturing, knowledge is your most valuable and most fragile asset. We see three critical points of failure in the current industrial model",
    compareTableHead: {
      before: "The Old Way",
      after: "Our solution",
    },
    Cards: [
      {
        icon: Time,
        toptext: "Time",
        label: "Time Delays",
        desc: "New employees take months to reach peak efficiency because traditional manuals and shadowing can be slow and inconsistent.",
        items: [
          {
            oldTitle: "The Shadowing Bottleneck",
            oldDesc:
              "Training scales at the speed of your busiest expert. If the expert is busy, the trainee sits idle.",
            newTitle: "On-Demand Mentorship",
            newDesc:
              "AR guides the user instantly. Training scales at the speed of a download.",
          },
          {
            oldTitle: "Logistical Drag",
            oldDesc:
              "Shipping headsets or flying trainers is a high-CO2, high-cost, low-speed relic of the past.",
            newTitle: "Zero-Lead Time",
            newDesc:
              "Deploy knowledge globally in one click to the device already in the worker’s pocket.",
          },
        ],
      },

      {
        icon: Waste,
        label: "Hardware costs",
        desc: "Shipping a machine is a high-risk event. Static mauals and unfimilarity with expensive headsets can cause errors lead to expensive service travel and eroded margins.",
        items: [
          {
            oldTitle: "Static Manuals",
            oldDesc:
              "Printed paper is dead data. The moment a process changes, the manual becomes a liability.",
            newTitle: "Active Content",
            newDesc:
              "One update at HQ refreshes every manual in the field. Perfect compliance, zero paper waste.",
          },
          {
            oldTitle: "The Headset Graveyard",
            oldDesc:
              "High-cost, fragile hardware that workers find awkward ends up locked in a cabinet. Sunk cost.",
            newTitle: "Hardware Agnostic",
            newDesc:
              "Uses the smartphone,the most refined, durable, and familiar interface on Earth. Zero scare factor.",
          },
        ],
      },

      {
        icon: Brain,
        label: "Knowledge Management",
        desc: "As your most experienced employees retire, their specialized assembly and repair techniques leave with them.",
        items: [
          {
            oldTitle: "The Retirement Crisis",
            oldDesc:
              "When a 30-year veteran leaves, their unwritten expertise walks out the door with them.",
            newTitle: "Expert Capture",
            newDesc:
              "Turn unspoken mastery into a shared digital standard. The company benefits from the brilliance, not just the employee.",
          },
          {
            oldTitle: "Software Lock-in",
            oldDesc:
              "Specialized AR platforms trap your data in walled gardens that are hard to export or update.",
            newTitle: "Open Flexibility",
            newDesc:
              "A lasting framework that integrates with your existing IT, built for long-term stability.",
          },
          {
            oldTitle: "The Stress of the New",
            oldDesc:
              "New technicians feel the weight of potentially making a million-euro mistake during training",
            newTitle: "The Safety Net",
            newDesc:
              "AR guidance provides a Digital Guardrail. It lowers cognitive load and workplace stress, leading to higher Worker Satisfaction.",
          },
        ],
      },
    ],
  },
  Impact: {
    EyelashText: "Impact",
    MainTitle: "Scalable Intelligence on Demand",
    SubTitle:
      "We treat the smartphone as a professional precision tool. Our platform captures your engineering data and transforms it into a mobile-first AR ecosystem that serves two distinct purposes: your production floor and your customer's site.",

    processSteps: [
      {
        title: "Internal",
        subtitle: "Operational Excellence & Workforce Upskilling",
        subitems: [
          {
            index: 0,
            icon: GAIcon,
            title: "Guided Assembly",
            obf: "fill",
            images: [
              {
                src: GA,
                alt: "Image 1",
                caption: "Sample",
                of: "cover",
              },
            ],
            description:
              "Move beyond 2D blueprints. Employees follow 3D spatial overlays that show exactly where every sensor, bolt, and wire belongs. Mistakes are caught before the machine leaves the station.",
            durnation: 800,
            interval: 4000,
            transt: ["direct", "direct"],
            of: "fade",
          },
          {
            index: 1,
            icon: RSTIcon,
            title: "Rapid Skill Transfer",
            obf: "cover",
            images: [
              {
                src: RST,
                alt: "Image 1",
                caption: "Sample",
                of: "fit",
              },
            ],
            description:
              "Reduce Time-to-Competence. New hires learn on the job with a digital mentor in their pocket, reducing the burden on your senior supervisors.",
            durnation: 400,
            interval: 10,
            transt: ["fade"],
          },
          {
            index: 2,
            icon: SFTIcon,
            title: "Safety-First Interface",
            obf: "fit",
            images: [
              {
                src: SFT,
                alt: "Image 1",
                caption: "Sample",
                of: "fit",
              },
            ],
            description:
              "Unlike immersive headsets that can disorient workers, our mobile UI maintains peripheral awareness, ensuring operators remain safe and present in the factory environment.",
            durnation: 800,
            interval: 4000,
            transt: ["fade"],
          },
        ],
      },
      {
        title: "External",
        subtitle: "The Hardware Handover & After-Sales Service",
        subitems: [
          {
            index: 3,
            icon: RECIcon,
            title: "More Indipendant Customer Onboarding",
            obf: "fill",
            images: [
              {
                src: MICO,
                alt: "Image 1",
                caption: "Sample",
                of: "fill",
              },
            ],
            description:
              "Don't just ship hardware, ship the expertise to run it. Provide customers with an AR Setup & Calibration guide. They suppliment your onbording, and you reduce the number of support calls.",
            durnation: 800,
            interval: 4000,
            transt: ["fade"],
          },
          {
            index: 4,
            icon: MICOIcon,
            title: "Remote Expert Collaboration",
            obf: "fill",
            images: [
              {
                src: REC,
                alt: "Image 1",
                caption: "Sample",
                of: "fill",
              },
            ],
            description:
              "When a customer hits a bottleneck, your engineers can communicate more effectively to subject matter seen through the phone camera. Using spatial markers to point to the exact component that needs adjustment, no flight required.",
            durnation: 800,
            interval: 4000,
            transt: ["fade"],
          },
          {
            index: 5,
            icon: BLCSIcon,
            title: "Branded Life-Cycle Support",
            obf: "fill",
            images: [
              {
                src: BLCS,
                alt: "Image 1",
                caption: "Sample",
                of: "fill",
              },
            ],
            description:
              "A quick scan of a serial number provides customers with instant maintenance schedules and parts ordering, turning your machine into a long-term Service-as-a-Product.",
            durnation: 800,
            interval: 4000,
            transt: ["fade"],
          },
        ],
      },
    ],
  },

  Onboarding: {
    EyelashText: "Onbording",
    MainTitle: "Three-Step Implementation",
    SubTitle: "A breakdown of our virtual and augmented reality workflow.",
    services: [
      {
        icon: arDevelopment,
        stepTitle: "Step One",
        title: "Data Conversion",
        description:
          "We digitize your existing manuals and specialist knowledge.",
      },
      {
        icon: Mobile,
        stepTitle: "Step Two",
        title: "User Test",
        description:
          "Your team gains access to inital reults and evaluates instructions via smartphone or tablet.",
      },
      {
        icon: interactivity,
        stepTitle: "Step Three",
        title: "Deployment",
        description:
          "Using their mobile phones Employees and/or customer empowered by training using AR overlays indicate exactly which bolts to turn and which levers to pull.",
      },
    ],
  },

  Roadmap: {
    EyelashText: "Offer",
    MainTitle: "A clear path to results",
    SubTitle:
      "We don't expect you to overhaul everything at once. Let's prove the ROI with a single, simple high-impact procedure.",
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
      NameText: "Name",
      EmailText: "Email",
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
    FunctionLink: "Áhrif",
    ImpactLink: "Dæmi",
    DeploymentLink: "Innleiðing",
    RoadmapLink: "Tilboð",
    ContactButton: "Hafa samband",
  },
  Hero: {
    MainTitle: "Hraðari þjálfun með AR í farsíma",
    SubTitle:
      "Handbókin heyrir sögunni til. Leiðandi framleiðslufyrirtæki heims nýta nú „sjónræna leiðbeiningatækni“. Enginn aukabúnaður, engar hindranir bara skilvirkari framleiðsla.",
    Button: "Bóka Sýnishorn",
  },

  Value: {
    EyelashText: "Áhrif",
    MainTitle: "Flækustig Þekkingar",
    SubTitle:
      "Í nútíma tækjaframleiðslu er þekking dýrmætasta en jafnframt viðkvæmasti þátturinn. Við sjáum þrjá flokka semskapa hættur tengdar því í núverandi iðnaðarframleiðslu",
    compareTableHead: {
      before: "Ástandið Núna",
      after: "Okkar Lausn",
    },
    Cards: [
      {
        icon: Time,
        toptext: "Tími",
        label: "Tími",
        desc: "Nýir starfsmenn eru mánuði að ná fullum afköstum þar sem hefðbundnar handbækur og þjálfarar á stanum eru taka langann tíma og ferli þeirra geta reynst óregluleg.",
        items: [
          {
            oldTitle: "Aðgangur að þjálfurum",
            oldDesc:
              "Þjálfun takmarkast við tíma annasams sérfræðings. Ef sérfræðingurinn er upptekinn, þá bíður sá sem á að læra.",
            newTitle: "Leiðbeiningar á staðnum",
            newDesc:
              "AR-tæknin leiðbeinir notandanum samstundis. Þjálfunin skalast á hraða niðurhals.",
          },
          {
            oldTitle: "Flutnings tafir",
            oldDesc:
              "Að senda sérhæfð gleraugu, bæklinga eða fljúga með leiðbeinendur er dýrt, hægvirkt og skilur eftir sig stórt kolefnisspor.",
            newTitle: "Enginn biðtími",
            newDesc:
              "Miðlið þekkingu um allan heim með einum smelli sem er svo aðgengilegt í tæki sem allir starfsmenn eru þegar með í vasanum.",
          },
        ],
      },

      {
        icon: Waste,
        label: "Vélbúnaðarkostnaður",
        desc: "Sending á tækjabúnaði fylgir mikil áhætta. Rangt uppsett tæki eða villur óreyndra starfsmanna leiða til dýrra þjónustuferða og skertra afkasta.",
        items: [
          {
            oldTitle: "Formfastar handbækur",
            oldDesc:
              "Prentað mál eru dauð gögn. Um leið og ferli breytist verður handbókin að áhættuþætti.",
            newTitle: "Lifandi verklagsreglur",
            newDesc:
              "Ein uppfærsla í höfuðstöðvum uppfærir allar handbækur á vettvangi. Fullkomið öryggi, engin pappírssóun.",
          },
          {
            oldTitle: "Ónotaður tæknibúnaður",
            oldDesc:
              "Dýr og viðkvæmur tæknibúnaður sem starfsmönnum finnst óþægilegur endar oft inni í skáp. Tapað fjármagn.",
            newTitle: "Óháð vélbúnaði",
            newDesc:
              "Nýtir snjallsímann, þekktasta viðmót heims og endingargott. Engin tæknifælni.",
          },
        ],
      },

      {
        icon: Brain,
        label: "Þekkingarstjórnun",
        desc: "Þegar reyndustu starfsmennirnir fara á eftirlaun, hverfur sérhæfð þekking þeirra á samsetningu og viðgerðum með þeim.",
        items: [
          {
            oldTitle: "Eftirlauna vandinn",
            oldDesc:
              "Þegar starfsmaður með 30 ára reynslu hættir, fer óskrifuð sérþekking hans út um dyrnar.",
            newTitle: "Varðveisla sérþekkingar",
            newDesc:
              "Breyttu óskráðri sérfæðikunnáttu í stafrænan staðla. Gerir samstarfsmönnum kleift að byggja á sérfæðireynslu viðkomandi.",
          },
          {
            oldTitle: "Hugbúnaðar fjötrar",
            oldDesc:
              "Sérhæfðir AR-hugbúnaðir læsa gögnum inni í lokuðum kerfum sem erfitt getur reynst að flytja eða uppfæra.",
            newTitle: "Sveigjanleg lausn",
            newDesc:
              "Varanlegra kerfi sem samþættist núverandi upplýsingatækni og er byggt fyrir langtímastöðugleika.",
          },
          {
            oldTitle: "Álag vegna óvissu",
            oldDesc:
              "Nýir tæknimenn finna fyrir pressu þegar mistök í þjálfun geta kostað milljónir.",
            newTitle: "Stafrænt öryggisnet",
            newDesc:
              "AR-leiðbeiningar bjóða upp á heilstæðari þjálfun. Þær draga úr hugrænu álagi og streitu, sem eykur starfsánægju.",
          },
        ],
      },
    ],
  },
  Impact: {
    EyelashText: "Áhrif",
    MainTitle: "Snjalllausnir þegar þörf er á",
    SubTitle:
      "Við lítum á snjallsímann sem nauðsilnlegan tækjabúnað. Lausnin okkar nýtir hönnunargögnin þín og breytir þeim í AR-umhverfi sem þjónar bæði þjónustu og þjálfun innanhús og viðskiptavina.",

    processSteps: [
      {
        title: "Innanhús",
        subtitle: "Bætir rekstur og þróun mannauðs",
        subitems: [
          {
            index: 0,
            icon: GAIcon,
            title: "Sjónrænar leiðbeiningar",
            obf: "fill",
            images: [
              {
                src: GA,
                alt: "Mynd 1",
                caption: "Sýnishorn",
                of: "cover",
              },
            ],
            description:
              "Farðu lengra en 2D teikningar. Starfsmenn fylgja þrívíddarleiðbeiningum sem sýna nákvæmlega hvar hver skynjari, bolti og kapall á að vera. Mistök eru leiðrétt áður en vélin yfirgefur verksmiðju.",
            durnation: 800,
            interval: 4000,
            transt: ["direct", "direct"],
            of: "fade",
          },
          {
            index: 1,
            icon: RSTIcon,
            title: "Hraðari þekkingarmiðlun",
            obf: "cover",
            images: [
              {
                src: RST,
                alt: "Mynd 1",
                caption: "Sýnishorn",
                of: "fit",
              },
            ],
            description:
              "Styttu tímann sem það tekur að verða sjálfstæðari í starfi. Nýliðar læra hraðar með stafrænan leiðbeinanda í vasanum, sem léttir álagi á verkstjórum.",
            durnation: 400,
            interval: 10,
            transt: ["fade"],
          },
          {
            index: 2,
            icon: SFTIcon,
            title: "Öryggi í fyrirrúmi",
            obf: "fit",
            images: [
              {
                src: SFT,
                alt: "Mynd 1",
                caption: "Sýnishorn",
                of: "fit",
              },
            ],
            description:
              "Ólíkt sýndarveruleikagleraugum sem geta byrgt sýn, tryggir farsímaviðmótið okkar að starfsmenn hafi fulla yfirsýn yfir umhverfi sitt og öryggi á gólfinu.",
            durnation: 800,
            interval: 4000,
            transt: ["fade"],
          },
        ],
      },
      {
        title: "Þjónusta viðskipavina",
        subtitle: "Afhending tækjabúnaðar og eftirfylgni",
        subitems: [
          {
            index: 3,
            icon: RECIcon,
            title: "Sjálfstæðari innleiðing hjá viðskiptavinum",
            obf: "fill",
            images: [
              {
                src: MICO,
                alt: "Mynd 1",
                caption: "Sýnishorn",
                of: "fill",
              },
            ],
            description:
              "Ekki bara senda vélbúnað, sendu sérþekkinguna með. Veittu viðskiptavinum AR-leiðbeiningar fyrir uppsetningu og stillingar. Þetta styður við innleiðingu og fækkar þjónustutilfellum.",
            durnation: 800,
            interval: 4000,
            transt: ["fade"],
          },
          {
            index: 4,
            icon: MICOIcon,
            title: "Fjarþjónusta sérfræðinga",
            obf: "fill",
            images: [
              {
                src: REC,
                alt: "Mynd 1",
                caption: "Sýnishorn",
                of: "fill",
              },
            ],
            description:
              "Þegar viðskiptavinur lendir í flöskuhálsi geta verkfræðingar þínir leiðbeint í gegnum síma. Með því að nota stafræn merki er hægt að benda á nákvæmlega þann hluta sem þarf að stilla og ekkert flug nauðsynlegt.",
            durnation: 800,
            interval: 4000,
            transt: ["fade"],
          },
          {
            index: 5,
            icon: BLCSIcon,
            title: "Betri Þjónusta fyrir vörur",
            obf: "fill",
            images: [
              {
                src: BLCS,
                alt: "Mynd 1",
                caption: "Sýnishorn",
                of: "fill",
              },
            ],
            description:
              "Einföld skönnun á raðnúmeri gefur viðskiptavinum upplýsingar um viðhald og varahlutapantanir, sem breytir vélbúnaðinum í samfellda þjónustulausn.",
            durnation: 800,
            interval: 4000,
            transt: ["fade"],
          },
        ],
      },
    ],
  },

  Onboarding: {
    EyelashText: "Innleiðing",
    MainTitle: "Innleiðing í þremur skrefum",
    SubTitle: "Yfirlit yfir vinnuflæði okkar í sýndar- og viðbættum veruleika.",
    services: [
      {
        icon: arDevelopment,
        stepTitle: "Skref eitt",
        title: "Gagnaflutningur",
        description:
          "Við stafrænum handbækur þínar og sérþekkingu fyrirtækisins.",
      },
      {
        icon: Mobile,
        stepTitle: "Skref tvö",
        title: "Notendaprófun",
        description:
          "Teymið þitt fær aðgang að fyrstu niðurstöðum og leggur mat á leiðbeiningar í snjallsíma eða spjaldtölvu.",
      },
      {
        icon: interactivity,
        stepTitle: "Skref þrjú",
        title: "Raunnotkun",
        description:
          "Með snjallsímanum geta starfsmenn og viðskiptavinir nýtt AR-leiðbeiningar sem sýna nákvæmlega hvaða skrúfum á að snúa og hvaða handföngum á að toga í.",
      },
    ],
  },

  Roadmap: {
    EyelashText: "Tilboð",
    MainTitle: "Skýr leið að árangri",
    SubTitle:
      "Við ætlumst ekki til þess að þú breytir öllu í einu. Sýnum fram á arðsemi með einu einföldu en mikilvægu ferli.",
    Cards: [
      {
        days: "Dagar 1 – 3",
        title: "Gagnagreining",
        body: "Sendu okkur CAD-skjal og leiðbeiningar fyrir eitt afmarkað verkefni. Við greinum umfangið og finnum helstu tengipunkta.",
      },
      {
        days: "Dagar 4 – 10",
        title: "AR-uppsetning",
        body: "Við setjum upp rökfræðina og búum til sjónrænar leiðbeiningar, skýringar og öryggisathuganir í réttu samhengi.",
      },
      {
        days: "Dagar 11 – 14",
        title: "Staðfesting",
        body: "Við sýnum ferlið á ykkar búnaði.",
      },
    ],

    ActonBox: {
      Title: "Tilbúin að byrja?",
      subtext:
        "Sendu okkur eitt CAD-skjal og verklagsreglur. Það er eina skuldbindingin.",
      ButtonText: "Hefja prufuverkefni",
    },
  },

  Contact: {
    EyelashText: "Tengiliður",
    MainTitle: "Næstu skref?",
    SubTitle: "Hönnum þína næstu lausn samann.",
    TextBox: {
      NameText: "Nafn",
      EmailText: "Netfang",
      DetailText: "Upplýsingar um verkefni / Skilaboð",
      ButtonText: "Senda skilaboð",
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
