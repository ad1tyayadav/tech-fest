export const events = [
    {
        id: 1,
        title: 'Robo-Obstacle Race',
        objective: "The goal is to build your own robot, either wired or wireless....",
        img: 'https://techfest.org/static/media/image.89f4ff403ffd225d7e15.png'
    },
    {
        id: 2,
        title: 'Robo-War',
        objective: 'Construct a robot for one-on-one combat in an obstacle-filled arena.',
        img: 'https://techfest.org/static/media/Cozmoclench.da96030f9c4bf326375a.jpg'
    },
    {
        id: 3,
        title: 'Line Following Bot',
        objective: 'Design an autonomous robot to navigate a predefined track.',
        img: 'https://techfest.org/static/media/image.89f4ff403ffd225d7e15.png'

    },
    {
        id: 4,
        title: 'Robo-Soccer',
        objective: 'Build a robot to play soccer in knockout-style matches.',
        img: 'https://techfest.org/static/media/Cozmoclench.da96030f9c4bf326375a.jpg'

    },
];

export const eventsDetails = [
    {
        id: 1,
        image: 'https://techfest.org/static/media/Cozmoclench.da96030f9c4bf326375a.jpg',
        title: "Robo-Obstacle Race",
        details: "The goal is to build your own robot, either wired or wireless, within the required specifications in order to obtain the highest speed possible in order to outrun other robots on the track and cross the finish line in the shortest time possible.",
        generalInfo: ["Team size: 3-5", "Entry fee: ₹350", "Eligibilty: Student IDs Requried"],
        rewards: [
            "1st Prize: ₹9000 + Trophy",
            "2nd Prize: ₹6000 + Trophy",
            "3rd Prize: ₹5000 + Trophy",
            "Certificates for all participants"
        ],
        dimensions: [
            "Max length: 30cm",
            "Max width: 30cm",
            "Max height: 25cm",
            "Max-weight: 2kg"
        ],
        powerSource: [
            "Electric Robots only",
            "Max voltage: 12VDC",
            "Battery: Sealed (Gel, lithium, NiCad)"
        ],
        trackDetails: [
            "Length: 16+ meters",
            "Width: 35 cm",
            "Surface: Uneven, includes hurdles"
        ],
        gameplay: [
            "No trials allowed",
            "Time-based scoring for successful runs",
            "Penalties for skipping obstacles",
            "Points based on obstacle difficulty",
            "Negative points for moving off track"
        ]
    },
    
    {
        
            id: 2,
            image: "https://techfest.org/static/media/Cozmoclench.da96030f9c4bf326375a.jpg",
            title: "Robo-War",
            details: "The objective is to construct a robot, either wired or wireless, within the specified guidelines to knockout or push the opponent's robot out of the arena. The arena is equipped with a range of obstacles and hazards that will challenge your robot's durability and combat effectiveness.",
            generalInfo: [
                "Do not create robots with pre-assembled kits.",
                "Robots can have hidden weapons like pneumatic pincers, mighty armors, nifty axes, and more innovative weapons.",
                "Each team has to come up with a wired/wirelessly controlled robot capable of one-on-one combat.",
                "Prohibition on disrupting the opponent's power.",
                "Each team must have 3-5 members only.",
                "Registration Fee is ₹350 Non-Refundable.",
                "Only undergraduate and School students with valid college/school IDs are eligible to participate.",
                "Only the strongest will prevail."
            ],
            rewards: [
                "1st Position: ₹9,000 + Winning Certificate + Trophy",
                "First Runner Up: ₹6,000 + Winning Certificate + Trophy",
                "Second Runner Up: ₹5,000 + Winning Certificate + Trophy",
                "All the participants will get Participant e-Certificate"
            ],
            dimensions: [
                "Width: Not More Than 45cm",
                "Length: Not More Than 45cm",
                "Height: No Limitation but does not affect safety of participants and spectators.",
                "Maximum weight must not exceed 5 kg (including battery for wirelessly controlled Robots).",
                "However, a tolerance of 10% is acceptable but with penalty."
            ],
            powerSource: [
                "Only electric robots are allowed at the event.",
                "The battery must be of a sealed and immobilized electrolyte type (gel, lithium, NiCad, or batteries).",
                "Battery voltage capped at 36 V DC.",
                "On-site power supplied at 230 V AC; teams must bring adapters/converters (max output: 36 V DC) for AC supply."
            ],
            trackDetails: [
                "The arena is equipped with various concealed weapons such as saws, cutters, flame-throwers, ditches, and other hazards designed to challenge your robot's resilience and combat capabilities."
            ],
            gameplay: [
                "Knock-out style competition featuring 2-player matches.",
                "Each round lasts for a maximum of 3 minutes having 3 rounds per match.",
                "Touching bot during the round will award you a penalty.",
                "Disabling/knockout will ensure max points.",
                "Victory is achieved if a robot successfully pushes its opponent into the ditch, immobilizes them, or forces them out of the arena.",
                "Moving obstacles may intermittently appear during battles; robots must evade these obstacles.",
                "Matches halted upon wire crossings.",
                "No unauthorized entry into the war zone; coordinator permission required.",
                "Organizers possess the right to modify the rules.",
                "Violation of rules leads to disqualification.",
                "Judges' decisions are final and binding."
            ]

        
    },
    {
            
        id: 3,
        image: "https://techfest.org/static/media/Cozmoclench.da96030f9c4bf326375a.jpg",
        title: "Line Following Bot",
        details: "Teams will design and build an autonomous robot capable of navigating a predefined track by following a black line on a white surface. The event emphasizes precision, speed, and technical expertise. Participants must demonstrate their bot’s ability to tackle various challenges, such as sharp turns, intersections, and curves, without human intervention.",
        generalInfo: [
            "Each team can have 3-5 members.",
            "Only undergraduate and School students with valid college/school IDs are eligible to participate.",
            "The bot must operate autonomously, using onboard sensors and controllers.",
            "Only onboard batteries are allowed as the power source. External power sources are prohibited.",
            "The bot must not damage the track; otherwise, the team will be disqualified.",
            "Registration Fee is ₹350 Non-Refundable."
        ],
        rewards: [
            "1st Position: ₹9,000 + Winning Certificate + Trophy",
            "First Runner Up: ₹6,000 + Winning Certificate + Trophy",
            "Second Runner Up: ₹5,000 + Winning Certificate + Trophy",
            "All the participants will get Participant e-Certificate"
        ],
        dimensions: [
            "Width: Not More Than 30cm",
            "Length: Not More Than 30cm",
            "Height: Not More Than 30cm"
        ],
        powerSource: [
            "Only onboard batteries are allowed as the power source.",
            "External power sources are prohibited.",
            "Voltage is capped at 12V DC."
        ],
        trackDetails: [
            "The track will consist of a black line (3 cm wide) on a white background.",
            "It may include curves, sharp turns, and intersections.",
            "The arena layout will not be disclosed before the competition to ensure fairness."
        ],
        gameplay: [
            "Each team is allowed 2 attempts to complete the track. The better of the two timings will be considered.",
            "The maximum time allowed per attempt is 5 minutes.",
            "The bot must restart from the previous checkpoint in case of a deviation.",
            "Teams are not allowed to modify their bots during the competition.",
            "The bot with the fastest time wins.",
            "Time penalties: 5 seconds for track deviation, 10 seconds if the bot requires manual intervention to be repositioned on the track.",
            "Bonus points may be awarded for completing challenging sections flawlessly."
        ],
        disqualificationCriteria: [
            "Use of external control mechanisms (wired or wireless) during the run.",
            "Causing damage to the track or interfering with another team’s performance.",
            "Violation of bot size or specification constraints.",
            "Judges’ decisions are final and binding."
        ]

    },
    {
        
        id: 4,
        image: "https://techfest.org/static/media/Cozmoclench.da96030f9c4bf326375a.jpg",
        title: "Robo-Soccer",
        details: "The objective is to construct a robot, either wired or wireless, within the specified guidelines to score goals and defend against the opponent's robot in a soccer match. Participants design and build their robots to navigate the field, dribble, pass, and shoot the ball, all while outsmarting the opposing team's robot. The matches are knockout battles, where the winner moves on to the next round.",
        generalInfo: [
            "Each team can have 3-5 members only.",
            "Only undergraduate and School students with valid college/school IDs are eligible to participate.",
            "Bots can be wired/wireless.",
            "Batteries must be sealed, immobilized electrolyte type (gel cell, lithium, NiCad, or dry cells).",
            "Each team is allowed only one robot on the field at a time during gameplay.",
            "The bot must not damage the track or other bots; otherwise, the team will be disqualified.",
            "Registration Fee is ₹350 Non-Refundable."
        ],
        rewards: [
            "1st Position: ₹9,000 + Winning Certificate + Trophy",
            "First Runner Up: ₹6,000 + Winning Certificate + Trophy",
            "Second Runner Up: ₹5,000 + Winning Certificate + Trophy",
            "All the participants will get Participant e-Certificate"
        ],
        dimensions: [
            "Width: Not More Than 30cm",
            "Length: Not More Than 30cm",
            "Height: Not More Than 30cm",
            "Dribbling devices that actively exert spin on the ball, which keep the ball in contact with the robot are permitted under certain conditions.",
            "Maximum weight must not exceed 5 kg (including battery for wirelessly controlled Robots).",
            "However, a tolerance of 10% is acceptable but with penalty."
        ],
        powerSource: [
            "Only electric robots are allowed at the event.",
            "The battery must be of a sealed and immobilized electrolyte type (gel, lithium, NiCad, or batteries).",
            "Battery voltage capped at 24 V DC.",
            "On-site power supplied at 230 V AC; teams must bring adapters/converters (max output: 36 V DC) for AC supply."
        ],
        trackDetails: [
            "The field will be a rectangular arena with goalposts at both ends.",
            "The dimensions of the field will be announced during the briefing session.",
            "A standard lightweight plastic or foam soccer ball will be used.",
            "The arena will have boundaries; if the ball or robot crosses them, the referee will reset them."
        ],
        gameplay: [
            "Knock-out style competition featuring 2-player matches.",
            "Each round lasts for a maximum of 4 minutes having 2 rounds per match with a 1-minute break in between.",
            "Touching bot during the round will award you a penalty.",
            "Organizers possess the right to modify the rules.",
            "Violation of rules leads to disqualification.",
            "Judges' decisions are final and binding.",
            "Each team must try to score goals in the opponent’s net while defending their own.",
            "The bot can push or dribble the ball but cannot lift it or hold it.",
            "Only one bot per team is allowed on the field during play.",
            "Teams are prohibited from obstructing or damaging the opponent's robot deliberately.",
            "A goal is awarded when the ball completely crosses the opponent's goal line.",
            "In the event of a tie, there will be a 3-penalty shoot-out.",
            "Teams must maintain decorum and adhere to the event's code of conduct.",
            "A referee will oversee all matches, and their decisions are final."
        ]

    },
    {
        id: 5,
        image: "https://techfest.org/static/media/Cozmoclench.da96030f9c4bf326375a.jpg",
        title: "Showcase and Exhibition",
        details: "The Showcase and Exhibition aims to provide a platform for students, innovators, and enthusiasts to display their cutting-edge science projects. The event focuses on celebrating creativity, technical expertise, and innovation in Science, offering participants an opportunity to demonstrate how their project solves real-world problems or exhibits advanced capabilities in automation, artificial intelligence, and engineering.",
        generalInfo: [
            "Exhibition: A showcase of unique projects and designs.",
            "Live Demonstrations: Participants can demonstrate their project's functionality and capabilities in real-time.",
            "Interactive Sessions: Opportunities for visitors to interact with robots and learn about their mechanisms and technology.",
            "Knowledge Exchange: Networking opportunities for participants, mentors, and industry professionals."
        ],
        rewards: [
            "Usability",
            "Innovation",
            "Presentation",
            "Uniqueness"
        ],
        dimensions: [
            "1st Position: ₹7,000 + Winning Certificate + Trophy",
            "First Runner Up: ₹5,000 + Winning Certificate + Trophy",
            "Second Runner Up: ₹3,000 + Winning Certificate + Trophy",
            "All the participants will get Participant e-Certificate"
        ],
        powerSource: [

        ],
        trackDetails: [

        ],
        gameplay : [

        ]
    }

]