import { ref } from "vue";
import interactivity from "@/assets/images/interactive.png";
import prototype from "@/assets/images/prototype.png";
import arDevelopment from "@/assets/images/Custom_VR.png";
import vrExperiences from "@/assets/images/organisation.png";
import UXUI from "@/assets/images/UIUX.png";
import Mobile from "@/assets/images/MobileVR_AR.png";

export const Languages = [
  {
    Active: English,
    English: English,
    Icelantic: Icelantic,
  },
];

const English = [
  {
    Header: [
      {
        FunctionLink: "Function",
        ImpactLink: "Impact",
        DeploymentLink: "Deployment",
        RoadmapLink: "Roadmap",
        ContactButton: "Let's Talk",
      },
    ],
    Hero: [
      {
        MainTitle: "Reduce Maintenance Errors with AR-Guided Training.",
        SubTitle:
          "Turn every technician into an expert. Our Augmented Reality platform provides real-time, hands-on guidance for setup and troubleshooting, reducing onboarding time and cutting service costs.",
        Button: "Impact Examples",
      },
    ],
    Function: [
      {
        EyelashText: "Function",
        MainTitle: "How does it work?",
        SubTitle: "How do our virtual and augmented reality services work?",
        services: [
          {
            // Object/Image detection
            icon: arDevelopment,
            stepTitle: "Step One",
            title: "Capture",
            description: "We digitize your manuals and expert knowledge.",
          },
          {
            // Connects
            icon: Mobile,
            stepTitle: "Step Two",
            title: "Deploy",
            description:
              "Your team accesses instructions instantly via smartphone or tablet.",
          },
          {
            // design and animation
            icon: interactivity,
            stepTitle: "Step Three",
            title: "Execute",
            description:
              "AR overlays show exactly which bolt to turn and which lever to pull.",
          },
          {
            // AR/VR Concept Prototyping
            icon: vrExperiences,
            stepTitle: "Step Four",
            title: "Verify",
            description: "Real-time data logs ensure the job was done to spec",
          },
        ],
      },
    ],
    Impact: [
      {
        EyelashText: "Impact",
        MainTitle: "Services Impact Examples",
        SubTitle:
          "Just few of the general ways how this service can create value, only requiring a mobile phone.",
        processSteps: [
          {
            icon: "🏭",
            title: "Standardize Expert Performance",
            obf: "fill",
            images: [
              {
                src: MT_One,
                alt: "Image 1",
                caption: "The sample",
                of: "fill",
              }, // full
              {
                src: MT_Two,
                alt: "Image 2 - Baraba",
                caption: "The Alps",
                of: "fade",
              },
              {
                src: MT_Three,
                alt: "Image 3",
                caption: "The sample",
                of: "fill",
              }, // full
            ],
            description:
              "Stop 'shadowing' and start doing. Trainees follow foolproof AR overlays on live machinery, bridging the gap between knowledge and action, resulting in lower error rates. With this you get faster onboarding and  compliance with SOPs.",
            durnation: 800,
            interval: 4000,
            transt: ["direct", "direct"],
            of: "fade",
          },
          {
            icon: "🔧",
            title: "Eliminate Schematic Confusion",
            obf: "fill",
            images: [
              {
                src: FSTS_N,
                alt: "Image 1",
                caption: "The sample",
                of: "fill",
              }, // full
              {
                src: FSTS_A,
                alt: "Image 2 - Baraba",
                caption: "The Alps",
                of: "fill",
              },
            ],
            description:
              "Stop wasting hours deciphering grease-stained paper blueprints. Our AR overlays trace exact cable routes directly onto your panels, improving wiring accuracy and cutting repair cycles in half.",
            durnation: 400,
            interval: 10,
            transt: ["fade"],
          },
          {
            icon: "📦",
            title: "Precision Picking at Speed",
            obf: "fill",
            images: [
              {
                src: WH_One,
                alt: "Image 1",
                caption: "The sample",
                of: "fill",
              }, // full
              {
                src: WH_Three,
                alt: "Image 2 - Baraba",
                caption: "The Alps",
                of: "fill",
              },
            ],
            description:
              "Turn seasonal staff into top performers faster. AR-guided routing and bin-highlighting reducing 'search time' and picking errors, ensuring your high-volume facility stays on schedule without the training overhead",
            durnation: 800,
            interval: 4000,
            transt: ["fade"],
          },

          {
            icon: "🔍",
            title: "Visualize Hidden Hazards",
            obf: "fill",
            images: [
              {
                src: imageOne,
                alt: "Image 1",
                caption: "The sample",
                of: "fill",
              }, // full
              {
                src: imageTwo,
                alt: "Image 2 - Baraba",
                caption: "The Alps",
                of: "fill",
              },
            ],
            description:
              "Keep your team out of the danger zone. Our interface projects spatial risk zones and historical fault data directly onto the worker’s field of view, turning safety compliance from a checklist into a visual reality.",
            durnation: 800,
            interval: 4000,
            transt: ["fade"],
          },
          {
            icon: "⚙️",
            title: "Reduce-Error Commissioning",
            obf: "fill",
            images: [
              {
                src: ASTwo_One,
                alt: "Image 1",
                caption: "The sample",
                of: "fill",
              }, // full
              {
                src: ASTwo_Two,
                alt: "Image 2 - Baraba",
                caption: "The Alps",
                of: "fill",
              },
            ],
            description:
              "Reduce the 'measure twice, drill once' headache. Project exact bolt-hole locations and alignment markers directly onto mounting surfaces to ensure heavy equipment is installed well the first time.",
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
                caption: "The sample",
                of: "fill",
              }, // full
              {
                src: TS_Two,
                alt: "Image 2 - Baraba",
                caption: "The Alps",
                of: "fill",
              },
              {
                src: TS_Three,
                alt: "Image 2 - Baraba",
                caption: "The Alps",
                of: "fill",
              },
              {
                src: TS_Four,
                alt: "Image 2 - Baraba",
                caption: "The Alps",
                of: "fill",
              },
            ],
            description:
              "No more guessing games. Our dynamic fault-tree overlays react to what the technician sees in real-time, guiding them through complex repairs with the precision of a senior engineer,even if it's their first day.",
            durnation: 800,
            interval: 4000,
            transt: ["fade"],
          },
        ],
      },
    ],
    Deployment: [
      {
        EyelashText: "Deployment",
        MainTitle: "Built for the Real World",
        Cards: [
          {
            CardOne: [
              {
                CardTitleNumber: "01",
                CardTitleTop: "Hardware Agnostic",
                CardMainTitle: "Use the Tools You Already Own",
                CardSubtitle:
                  "No need to buy $5,000 goggles just to see the value. Our platform is built to run on the hardware your team and customers already have in their pockets.",
                CardItems: [
                  {
                    itemList: [
                      {
                        itemOne: [
                          {
                            Title: "Mobile & Tablet",
                            subText:
                              "Full support for iOS and Android (ARKit / ARCore).",
                          },
                        ],
                        itemTwo: [
                          {
                            Title: "Industrial Wearables",
                            subText:
                              "Ready for RealWear and HoloLens, hands-free in high-risk zones.",
                          },
                        ],
                        itemThree: [
                          {
                            Title: "Legacy Integration",
                            subText:
                              "Works with your existing CAD exports, no expensive proprietary remodeling.",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
            CardTwo: [
              {
                CardTitleNumber: "02",
                CardTitleTop: "Deployment",
                CardMainTitle: "From CAD to Site in Days, Not Months",
                CardSubtitle:
                  "We've eliminated the Implementation Gap. Our deployment pipeline is optimized for the speed of manufacturing.",
                CardItems: [
                  {
                    itemList: [
                      {
                        itemOne: [
                          {
                            Title: "Rapid Ingestion",
                            subText:
                              "Send in your existing 3D models and PDF manuals, can be ready in days.",
                          },
                        ],
                        itemTwo: [
                          {
                            Title: "Quick Update",
                            subText:
                              "Revised procedures to every field machine simultaneously, no paper supplements.",
                          },
                        ],
                        itemThree: [
                          {
                            Title: "Low-Code Logic",
                            subText:
                              "Subject matter experts update fault trees, no software engineer required.",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        Benefit: [
          {
            ItemOne: [{ Main: "0$", Sub: "Hardware Cost" }],
            ItemTwo: [{ Main: "3+", Sub: "Hardware Ecosystems" }],
            ItemThree: [{ Main: "0", Sub: "Proprietary Lock-in" }],
          },
        ],
      },
    ],
    Roadmap: [
      {
        EyelashText: "Offer",
        MainTitle: "A Clear Path to Yes",
        SubTitle:
          "We don't expect you to overhaul your entire product line overnight. Let's prove the ROI on a single high-impact procedure.",
        Cards: [
          {
            CardOne: [
              {
                Day: "Day",
                Title: "Asset Audit",
                SubTitle:
                  "Send us a CAD file and a standard SOP for one complex task. We analyse the procedure scope and identify spatial anchor points.",
              },
            ],
            CardTwo: [
              {
                Day: "Day",
                Title: "AR Transformation",
                SubTitle:
                  "We map the logic and create the spatial overlays, step annotations, fault-tree branches, and safety checkpoints rendered in-context.",
              },
            ],
            CardThree: [
              {
                Day: "Day",
                Title: "Live Validation",
                SubTitle:
                  "We demo the guided procedure on your own equipment. You see real technicians completing the task with measurable confidence.",
              },
            ],
          },
        ],
        ActonBox: [
          {
            Title: "Ready to start?",
            subtext:
              "Send us one CAD file and process instrucitons. That's the entire commitment.",
            ButtonText: "Begin Your Pilot",
          },
        ],
      },
    ],
    Contact: [
      {
        EyelashText: "Contact",
        MainTitle: "Ready for the next step?",
        SubTitle: "Let's collaborate on your innovative VR/AR solutions.",
        TextBox: [
          {
            NameText: "Your Name",
            EmailText: "Your Email",
            DetailText: "Project Details / Message",
            ButtonText: "Send Message",
          },
        ],
        DirectContent: [
          {
            Title: "Direct Contact",
            EmailText: "✉️ Email:",
            ServiceText: "Serving clients globally from Reykjavik, Iceland.",
          },
        ],
      },
    ],
  },
];

const Icelantic = [
  {
    Header: [
      {
        FunctionLink: "Virkni",
        ImpactLink: "Notkun",
        DeploymentLink: "Uppsetning",
        RoadmapLink: "Vegvísir",
        ContactButton: "Hafðu Samband",
      },
    ],
    Hero: [
      {
        MainTitle: "Fækkum viðhaldsvillum með AR-þjálfun.",
        SubTitle:
          "Breytum tæknimönnum frá óreyndum í sérfræðing. Lausnin okkar veitir á rauntíma, hagnýtar leiðbeiningar við uppsetningu og bilanagreiningu, sem styttir þjálfunartíma og lækkar þjónustukostnað.",
        Button: "Dæmi um áhrif",
      },
    ],
    Function: [
      {
        EyelashText: "Virkni",
        MainTitle: "Hvernig virkar lausnin?",
        SubTitle: "Hvernig virka sýndar- og AR þjónustur okkar?",
        services: [
          {
            icon: arDevelopment,
            stepTitle: "Fyrsta Skref",
            title: "Upplýsinga Söfnun",
            description:
              "Við breytum leiðbeiningum og sérfræðiþekkingu í stafrænt form.",
          },
          {
            icon: Mobile,
            stepTitle: "Annað Skref",
            title: "Uppsetning",
            description:
              "Liðið þitt fær tafarlausar leiðbeiningar í gegnum snjallsíma eða spjaldtölvu.",
          },
          {
            icon: interactivity,
            stepTitle: "Þriðja Skref",
            title: "Notkun",
            description:
              "AR-yfirlag sýnir nákvæmlega hvaða bolta á að snúa og hvaða stöng á að toga.",
          },
          {
            icon: vrExperiences,
            stepTitle: "Fjórða Skref",
            title: "Staðfesta",
            description:
              "Rauntímagagnaskráningar tryggja að verkið sé unnið rétt.",
          },
        ],
      },
    ],
    Impact: [
      {
        EyelashText: "Áhrif",
        MainTitle: "Dæmi um áhrif þjónustunnar",
        SubTitle:
          "Nokkur almenn dæmi um hvernig þessi þjónusta bætir framleiðslu og þarfnast einungis farsíma.",
        processSteps: [
          {
            icon: "🏭",
            title: "Staðlar Sérfræðinga Ferla",
            obf: "fill",
            images: [
              {
                src: MT_One,
                alt: "Image 1",
                caption: "The sample",
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
                caption: "The sample",
                of: "fill",
              },
            ],
            description:
              "Hættu að fylgjast og byrjaðu að gera. Nemi fylgja villulausum AR-yfirlögum á lifandi vélar, brúa bilið milli þekkingar og framkvæmdar, sem leiðir til færri villna. Þetta gefur þér hraðari þjálfun og samræmi við staðlaðar verklagsreglur.",
            durnation: 800,
            interval: 4000,
            transt: ["direct", "direct"],
            of: "fade",
          },
          {
            icon: "🔧",
            title: "Útrýma ruglingi á skýringarmyndum",
            obf: "fill",
            images: [
              {
                src: FSTS_N,
                alt: "Image 1",
                caption: "The sample",
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
              "Hættu að sóa tíma í að ráða í fitugræðdar pappírsteikninga. AR-yfirlögin okkar rekja nákvæmar kapalslóðir beint á spjaldið þitt, bæta nákvæmni við lagningu lagna og skera viðgerðarferla um helming.",
            durnation: 400,
            interval: 10,
            transt: ["fade"],
          },
          {
            icon: "📦",
            title: "Nákvæm tínsla á hraða",
            obf: "fill",
            images: [
              {
                src: WH_One,
                alt: "Image 1",
                caption: "The sample",
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
              "Breyttu tímabundinni starfsmönnum í bestu framkvæmdarmenn hraðar. AR-leiðbeint leiðarval og kassaauðkenning dregur úr „leitartíma og tínsluvisum, sem tryggir að hásértíðni aðstaðan þín haldi áætlun án þjálfunarkostnaðar.",
            durnation: 800,
            interval: 4000,
            transt: ["fade"],
          },
          {
            icon: "🔍",
            title: "Gera falda hættur sýnilegar",
            obf: "fill",
            images: [
              {
                src: imageOne,
                alt: "Image 1",
                caption: "The sample",
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
              "Haltu liðinu þínu utan hættusvæðisins. Viðmótið okkar varpar rýmislegum áhættusónum og sögulegum bilunargögnum beint á sjónarsvið starfsmannsins, og breytir öryggisfylgni úr gátlista í sjáanlegri veruleika.",
            durnation: 800,
            interval: 4000,
            transt: ["fade"],
          },
          {
            icon: "⚙️",
            title: "Minnka villur við gangsetningu",
            obf: "fill",
            images: [
              {
                src: ASTwo_One,
                alt: "Image 1",
                caption: "The sample",
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
              "Dragðu úr höfuðverknum af því að „mæla tvisvar, bora einu sinni. Varpaðu nákvæmum boltaholsstaðsetningum og jöfnunarmerkjum beint á uppsetningarfleti til að tryggja að þungar vélar séu settar upp rétt í fyrsta skipti.",
            durnation: 800,
            interval: 4000,
            transt: ["fade"],
          },
          {
            icon: "🚨",
            title: "Aðlæg villubæting",
            obf: "fill",
            images: [
              {
                src: TS_One,
                alt: "Image 1",
                caption: "The sample",
                of: "fill",
              },
              {
                src: TS_Two,
                alt: "Image 2 - Baraba",
                caption: "The Alps",
                of: "fill",
              },
              {
                src: TS_Three,
                alt: "Image 2 - Baraba",
                caption: "The Alps",
                of: "fill",
              },
              {
                src: TS_Four,
                alt: "Image 2 - Baraba",
                caption: "The Alps",
                of: "fill",
              },
            ],
            description:
              "Engar fleiri giskungar. Kvikt bilunartrjáyfirlag okkar bregst við því sem tæknimaðurinn sér í rauntíma og leiðir hann í gegnum flóknar viðgerðir með nákvæmni reynds verkfræðings — jafnvel þótt þetta sé fyrsti dagur hans.",
            durnation: 800,
            interval: 4000,
            transt: ["fade"],
          },
        ],
      },
    ],
    Deployment: [
      {
        EyelashText: "Uppsetning",
        MainTitle: "Byggt fyrir raunveruleikann",
        Cards: [
          {
            CardOne: [
              {
                CardTitleNumber: "01",
                CardTitleTop: "Óháð vélbúnaði",
                CardMainTitle: "Notaðu tækjin sem þú átt nú þegar",
                CardSubtitle:
                  "Engin þörf á að kaupa 5.000 dollara gleraugur til að sjá gildið. Vettvangurinn okkar er hannaður til að keyra á vélbúnaðinum sem liðið þitt og viðskiptavinir hafa þegar í vasanum.",
                CardItems: [
                  {
                    itemList: [
                      {
                        itemOne: [
                          {
                            Title: "Farsímar og spjaldtölvur",
                            subText:
                              "Fullur stuðningur fyrir iOS og Android (ARKit / ARCore).",
                          },
                        ],
                        itemTwo: [
                          {
                            Title: "Iðnaðarburar",
                            subText:
                              "Tilbúinn fyrir RealWear og HoloLens, handfrjáls í háhættusvæðum.",
                          },
                        ],
                        itemThree: [
                          {
                            Title: "Samþætting við eldri kerfi",
                            subText:
                              "Virkar með fyrirliggjandi CAD-útflutningi þínum, engin dýr sérhæfð endurgerð.",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
            CardTwo: [
              {
                CardTitleNumber: "02",
                CardTitleTop: "Uppsetning",
                CardMainTitle: "Frá CAD að vinnustað á dögum, ekki mánuðum",
                CardSubtitle:
                  "Við höfum útrýmt innleiðingarbilinu. Uppsetningarleiðlínan okkar er fínstillt fyrir hraða framleiðslunnar.",
                CardItems: [
                  {
                    itemList: [
                      {
                        itemOne: [
                          {
                            Title: "Hröð inntaka",
                            subText:
                              "Sendu inn fyrirliggjandi þrívíddarlíkön og PDF-handbækur, getur verið tilbúið á dögum.",
                          },
                        ],
                        itemTwo: [
                          {
                            Title: "Hröð uppfærsla",
                            subText:
                              "Endurskoðaðar verklagsreglur á hverja vél á vettvangi samtímis, engar pappírsviðbætur.",
                          },
                        ],
                        itemThree: [
                          {
                            Title: "Lágkóðaleg rök",
                            subText:
                              "Sérfræðingar í efni uppfæra bilunartre, enginn hugbúnaðarverkfræðingur þarf.",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        Benefit: [
          {
            ItemOne: [{ Main: "0$", Sub: "Vélbúnaðarkostnaður" }],
            ItemTwo: [{ Main: "3+", Sub: "Vélbúnaðarkerfi" }],
            ItemThree: [{ Main: "0", Sub: "Sérhæfð binding" }],
          },
        ],
      },
    ],
    Roadmap: [
      {
        EyelashText: "Tilboð",
        MainTitle: "Skýr leið að já",
        SubTitle:
          "Við gerum ekki ráð fyrir að þú endurbyggir alla vörulínuna yfir nótt. Við skulum sanna arðsemina á einni áhrifamikilli aðferð.",
        Cards: [
          {
            CardOne: [
              {
                Day: "Dagur",
                Title: "Eignaúttekt",
                SubTitle:
                  "Sendu okkur CAD-skrá og staðlaðar verklagsreglur fyrir eitt flókið verkefni. Við greinum verkefnisumfangið og finnum rýmislegar festingarpunkta.",
              },
            ],
            CardTwo: [
              {
                Day: "Dagur",
                Title: "AR-umbreyting",
                SubTitle:
                  "Við kortleggjum rökina og búum til rýmislegar yfirlög, skrefaskýringar, bilunartrjágreinar og öryggisathuganir sem eru birtar í samhengi.",
              },
            ],
            CardThree: [
              {
                Day: "Dagur",
                Title: "Lifandi staðfesting",
                SubTitle:
                  "Við sýnum leiðbeindu verklagsreglurnar á eigin búnaði þínum. Þú sérð raunverulega tæknimenn ljúka verkefninu með mælanlegri öryggi.",
              },
            ],
          },
        ],
        ActonBox: [
          {
            Title: "Tilbúinn að byrja?",
            subtext:
              "Sendu okkur eina CAD-skrá og verkferlisskipulag. Það er allt skuldbindingin.",
            ButtonText: "Byrjaðu tilraunina þína",
          },
        ],
      },
    ],
    Contact: [
      {
        EyelashText: "Hafa samband",
        MainTitle: "Tilbúinn fyrir næsta skref?",
        SubTitle: "Við skulum vinna saman að nýstárlegum VR/AR lausnum þínum.",
        TextBox: [
          {
            NameText: "Nafn þitt",
            EmailText: "Netfang þitt",
            DetailText: "Verkefnisupplýsingar / Skilaboð",
            ButtonText: "Senda skilaboð",
          },
        ],
        DirectContent: [
          {
            Title: "Bein samskipti",
            EmailText: "✉️ Netfang:",
            ServiceText:
              "Þjónum viðskiptavinum um allan heim frá Reykjavík, Íslandi.",
          },
        ],
      },
    ],
  },
];

export const ListItem = [{}];
