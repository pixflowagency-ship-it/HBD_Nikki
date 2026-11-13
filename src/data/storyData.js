/**
 * =========================================================================
 * THE NIKKI CHRONICLES — CENTRALIZED STORY DATA CONFIGURATION
 * =========================================================================
 * You (Yuvi) can easily edit any text, photo caption, video source, or 
 * chapter name in this file anytime.
 */

export const storyConfig = {
  // Key Identity Details
  meta: {
    author: "Yuvi",
    recipient: "Nikki",
    birthdayDate: "15 November", // Nikki's Birthday
    friendshipDuration: "Four Years",
    meetingPlace: "Batido",
    nicknames: ["Baingan", "Bhanta", "Shinchan"],
    siteTitle: "THE NIKKI CHRONICLES",
    subtitle: "Four Years. Countless Memories. One Crazy Friendship.",
    footerSignature: "Made with love, madness and memories — Yuvi.",
  },

  // Page 01: The Invitation — Intro Screen
  invitation: {
    badge: "15 NOVEMBER SPECIAL",
    leadLine: "Some stories begin with a plan.",
    originLine: "Ours began at Batido.",
    subtext: "Four years later, here we are.",
    title: "THE NIKKI CHRONICLES",
    universeNote: "A little universe created for Nikki.",
    ctaText: "Open Your Story ✨",
    skipText: "Skip directly to memories",
    envelopeText: "For Nikki (aka Baingan 🍆)",
    envelopeSubtitle: "Tap wax seal to unseal",
    countdownTitle: "Celebrating the one and only Nikki!",
  },

  // Page 02: The Beginning — Batido
  beginning: {
    tag: "THE ORIGIN • CHAPTER ZERO",
    heading: "Every crazy story has a beginning...",
    subheading: "Ours started at Batido.",
    storyLines: [
      "Four years ago, it was just another normal meeting.",
      "She met me at Batido.",
      "Neither of us knew that this random meeting would turn into a friendship full of memories, madness, arguments, trust and countless stories.",
      "And somehow, that one meeting became the beginning of something really special."
    ],
    cafeAtmosphere: {
      location: "Batido Café",
      vibe: "Warm lights, two coffee cups & an unexpected bond",
      quote: "One table. Two seats. Four years of history in the making."
    },
    ctaButton: "Let's Go Back In Time"
  },

  // Page 03: The Scrapbook — Four Years Together (20 Photos across 7 Chapters)
  scrapbook: {
    title: "The Scrapbook",
    subtitle: "Four Years of Friendship Captured in Moments",
    description: "Polaroids, taped notes, smiles, and the journey from Day 1 to Year 4.",
    closingQuote: "20 photographs. Thousands of memories. And still not enough to capture everything.",
    
    // The 7 Chronological Chapters
    chapters: [
      {
        id: "ch-1",
        number: "CHAPTER 01",
        title: "The First Meeting",
        subtitle: "The beginning at Batido",
        description: "Where it all started. No script, no expectations, just two people sitting across a table.",
        photoIds: [1, 2]
      },
      {
        id: "ch-2",
        number: "CHAPTER 02",
        title: "The Friendship Begins",
        subtitle: "The initial days & getting comfortable",
        description: "Breaking the ice, endless conversations, and realizing we vibe on a different frequency.",
        photoIds: [3, 4, 5]
      },
      {
        id: "ch-3",
        number: "CHAPTER 03",
        title: "The Unlimited Madness",
        subtitle: "Funny memories, random moments & crazy times",
        description: "Zero filter, zero awkwardness, just pure uncontrollable laughter and impromptu shenanigans.",
        photoIds: [6, 7, 8, 9]
      },
      {
        id: "ch-4",
        number: "CHAPTER 04",
        title: "The Ups and Downs",
        subtitle: "The difficult times & misunderstandings",
        description: "Because real friendships aren't picture-perfect fairy tales; they get tested by storms.",
        photoIds: [10, 11]
      },
      {
        id: "ch-5",
        number: "CHAPTER 05",
        title: "The Year of Silence",
        subtitle: "Almost one year without talking",
        description: "Months of quiet distance, unspoken words, yet the bond silently refused to disappear.",
        photoIds: [12, 13]
      },
      {
        id: "ch-6",
        number: "CHAPTER 06",
        title: "The Bond That Remained",
        subtitle: "The trust, belief & friendship that continued",
        description: "When people doubted me, you stood strong. You faced taunts, yet you never gave up on me.",
        photoIds: [14, 15, 16, 17]
      },
      {
        id: "ch-7",
        number: "CHAPTER 07",
        title: "Still Writing Our Story",
        subtitle: "Four years later — still unbreakable",
        description: "Four years down. You are irreplaceable, and this crazy journey is far from over.",
        photoIds: [18, 19, 20]
      }
    ],

    // The 20 Photo Items with editable metadata
    photos: [
      {
        id: 1,
        filename: "photo-01.jpg",
        src: "/assets/photos/photo-01.jpg",
        caption: "Where it all started — the very first chapter of us.",
        note: "Batido vibes",
        chapter: "CHAPTER 01 — THE FIRST MEETING",
        rotation: "-rotate-2",
        tapeColor: "gold",
        sticker: "☕"
      },
      {
        id: 2,
        filename: "photo-02.jpg",
        src: "/assets/photos/photo-02.jpg",
        caption: "That random afternoon that quietly changed the next four years.",
        note: "Day one energy",
        chapter: "CHAPTER 01 — THE FIRST MEETING",
        rotation: "rotate-3",
        tapeColor: "rose",
        sticker: "✨"
      },
      {
        id: 3,
        filename: "photo-03.jpg",
        src: "/assets/photos/photo-03.jpg",
        caption: "Breaking the ice and realizing awkwardness doesn't belong here.",
        note: "Getting comfortable",
        chapter: "CHAPTER 02 — THE FRIENDSHIP BEGINS",
        rotation: "-rotate-3",
        tapeColor: "kraft",
        sticker: "🌱"
      },
      {
        id: 4,
        filename: "photo-04.jpg",
        src: "/assets/photos/photo-04.jpg",
        caption: "Conversations that effortlessly turned minutes into hours.",
        note: "Vibe check passed",
        chapter: "CHAPTER 02 — THE FRIENDSHIP BEGINS",
        rotation: "rotate-2",
        tapeColor: "gold",
        sticker: "💬"
      },
      {
        id: 5,
        filename: "photo-05.jpg",
        src: "/assets/photos/photo-05.jpg",
        caption: "The start of countless inside jokes and spontaneous plans.",
        note: "Unplanned happiness",
        chapter: "CHAPTER 02 — THE FRIENDSHIP BEGINS",
        rotation: "-rotate-1",
        tapeColor: "rose",
        sticker: "🌸"
      },
      {
        id: 6,
        filename: "photo-06.jpg",
        src: "/assets/photos/photo-06.jpg",
        caption: "Peak madness mode activated. No filter, pure chaotic joy.",
        note: "Shinchan behavior",
        chapter: "CHAPTER 03 — THE UNLIMITED MADNESS",
        rotation: "rotate-4",
        tapeColor: "gold",
        sticker: "🤪"
      },
      {
        id: 7,
        filename: "photo-07.jpg",
        src: "/assets/photos/photo-07.jpg",
        caption: "Laughing at things that nobody else would ever understand.",
        note: "Inside joke #482",
        chapter: "CHAPTER 03 — THE UNLIMITED MADNESS",
        rotation: "-rotate-3",
        tapeColor: "kraft",
        sticker: "⚡"
      },
      {
        id: 8,
        filename: "photo-08.jpg",
        src: "/assets/photos/photo-08.jpg",
        caption: "Unlimited bakchodi in its most natural, unfiltered habitat.",
        note: "Classic Baingan",
        chapter: "CHAPTER 03 — THE UNLIMITED MADNESS",
        rotation: "rotate-2",
        tapeColor: "rose",
        sticker: "🍆"
      },
      {
        id: 9,
        filename: "photo-09.jpg",
        src: "/assets/photos/photo-09.jpg",
        caption: "When both of us forget how to act like mature adults.",
        note: "Zero braincells",
        chapter: "CHAPTER 03 — THE UNLIMITED MADNESS",
        rotation: "-rotate-2",
        tapeColor: "gold",
        sticker: "🎉"
      },
      {
        id: 10,
        filename: "photo-10.jpg",
        src: "/assets/photos/photo-10.jpg",
        caption: "Every strong friendship survives heavy rain before finding clarity.",
        note: "Tough weather",
        chapter: "CHAPTER 04 — THE UPS AND DOWNS",
        rotation: "rotate-3",
        tapeColor: "kraft",
        sticker: "🌧️"
      },
      {
        id: 11,
        filename: "photo-11.jpg",
        src: "/assets/photos/photo-11.jpg",
        caption: "Through misunderstandings, the foundation never truly cracked.",
        note: "Holding on",
        chapter: "CHAPTER 04 — THE UPS AND DOWNS",
        rotation: "-rotate-2",
        tapeColor: "rose",
        sticker: "🛡️"
      },
      {
        id: 12,
        filename: "photo-12.jpg",
        src: "/assets/photos/photo-12.jpg",
        caption: "The season of quiet — almost a whole year of silence.",
        note: "Unspoken thoughts",
        chapter: "CHAPTER 05 — THE YEAR OF SILENCE",
        rotation: "-rotate-3",
        tapeColor: "kraft",
        sticker: "⏳"
      },
      {
        id: 13,
        filename: "photo-13.jpg",
        src: "/assets/photos/photo-13.jpg",
        caption: "Even when words stopped flowing, the memory of our bond stayed alive.",
        note: "Still remembered",
        chapter: "CHAPTER 05 — THE YEAR OF SILENCE",
        rotation: "rotate-2",
        tapeColor: "gold",
        sticker: "🕊️"
      },
      {
        id: 14,
        filename: "photo-14.jpg",
        src: "/assets/photos/photo-14.jpg",
        caption: "You stayed when others doubted. That takes rare courage and real heart.",
        note: "True believer",
        chapter: "CHAPTER 06 — THE BOND THAT REMAINED",
        rotation: "rotate-3",
        tapeColor: "rose",
        sticker: "⭐"
      },
      {
        id: 15,
        filename: "photo-15.jpg",
        src: "/assets/photos/photo-15.jpg",
        caption: "Facing taunts from others just for talking to me, but you refused to leave.",
        note: "Unshakable",
        chapter: "CHAPTER 06 — THE BOND THAT REMAINED",
        rotation: "-rotate-2",
        tapeColor: "gold",
        sticker: "💛"
      },
      {
        id: 16,
        filename: "photo-16.jpg",
        src: "/assets/photos/photo-16.jpg",
        caption: "Standing beside me in times when standing wasn't easy.",
        note: "Pillar of strength",
        chapter: "CHAPTER 06 — THE BOND THAT REMAINED",
        rotation: "rotate-2",
        tapeColor: "kraft",
        sticker: "✨"
      },
      {
        id: 17,
        filename: "photo-17.jpg",
        src: "/assets/photos/photo-17.jpg",
        caption: "A trust that proved stronger than any rumors or opinions.",
        note: "Grounded in truth",
        chapter: "CHAPTER 06 — THE BOND THAT REMAINED",
        rotation: "-rotate-3",
        tapeColor: "rose",
        sticker: "🤝"
      },
      {
        id: 18,
        filename: "photo-18.jpg",
        src: "/assets/photos/photo-18.jpg",
        caption: "Four years later: older, wiser, but just as crazy when together.",
        note: "Year 4 milestone",
        chapter: "CHAPTER 07 — STILL WRITING OUR STORY",
        rotation: "rotate-3",
        tapeColor: "gold",
        sticker: "📖"
      },
      {
        id: 19,
        filename: "photo-19.jpg",
        src: "/assets/photos/photo-19.jpg",
        caption: "No matter how confusing life gets right now, you are never alone in this.",
        note: "Always here",
        chapter: "CHAPTER 07 — STILL WRITING OUR STORY",
        rotation: "-rotate-2",
        tapeColor: "kraft",
        sticker: "💫"
      },
      {
        id: 20,
        filename: "photo-20.jpg",
        src: "/assets/photos/photo-20.jpg",
        caption: "Here's to the girl who made four chaotic years unforgettable. Happy Birthday!",
        note: "Nikki Day ✨",
        chapter: "CHAPTER 07 — STILL WRITING OUR STORY",
        rotation: "rotate-2",
        tapeColor: "rose",
        sticker: "🎂"
      }
    ]
  },

  // Page 04: The Cinema Room — Our Special Video
  cinema: {
    heading: "Some memories are better watched than explained.",
    subheading: "So here's something I made just for you.",
    preNotice: "Made with a little bit of nostalgia, a lot of memories and my own voice.",
    postNotice: "Some things are difficult to say. So I made you this.",
    videoSources: [
      {
        id: "main",
        title: "Special Video Edit",
        src: "/assets/videos/special-video.mp4",
        poster: "/assets/backgrounds/magical-atmosphere.jpg"
      },
      {
        id: "edit",
        title: "Birthday Edit",
        src: "/assets/videos/birthday-edit.mp4",
        poster: "/assets/backgrounds/birthday-finale.jpg"
      },
      {
        id: "clip",
        title: "Memory Clip",
        src: "/assets/videos/memory-clip.mp4",
        poster: "/assets/backgrounds/scrapbook.jpg"
      }
    ]
  },

  // Page 05: The Magical Universe — Potterhead + Shinchan
  magicalUniverse: {
    potterhead: {
      heading: "Every Potterhead deserves a little magic.",
      subheading: "Welcome to our personal Hogwarts wing",
      quote: "If life were Hogwarts, I'd probably be the friend who keeps getting into trouble while you somehow manage to survive all the chaos.",
      spellButton: "Cast a Friendship Spell 🪄",
      incantation: "Expecto Bestfriendum!",
      spellReveal: "May your days be full of magic, your dreams bigger than Hogwarts and your worries smaller than a house elf.",
      houseBadge: "Certified Gryffindor & Hufflepuff mix of loyalty and courage",
      magicalTraits: [
        { label: "Wand Core", value: "Phoenix Feather & Unlimited Laughs" },
        { label: "Patronus", value: "A mischievous baby elephant / Shinchan" },
        { label: "Spell Specialty", value: "Lumos (lighting up any gloomy day)" }
      ]
    },
    shinchan: {
      heading: "Seriousness? Never heard of it.",
      subheading: "Welcome to the Kasukabe Bakchodi headquarters",
      quote: "One moment we're discussing life, the next moment we're doing the most ridiculous things possible.\n\nAnd honestly, that's what makes this friendship special.",
      bakchodiButton: "Press for Bakchodi 🤪",
      shinchanModeButton: "Unlock Shinchan Mode 🕺",
      dialogues: [
        "Oi Nikki! Tum itni dramatic kyu ho? 😆",
        "Action Kamen, check! Chocobi, check! Nikki ki bakchodi, SUPER CHECK!",
        "Warning: High doses of non-stop laughing detected. No refund for stomach cramps!",
        "Tumhe lagta hai tum normal ho? Spoiler alert: hum dono hi normal nahi hain! 😂",
        "Buri Buri Zaemon has officially declared Nikki as the Supreme Drama Queen!"
      ]
    }
  },

  // Page 06: The Baingan Chronicles — Our Madness
  bainganChronicles: {
    heading: "Introducing the three legendary identities of Nikki.",
    cards: [
      {
        id: "baingan",
        title: "BAINGAN",
        emoji: "🍆",
        color: "from-purple-900 to-indigo-950",
        accent: "border-purple-400/50 text-purple-300",
        description: "An identity that needs absolutely no explanation."
      },
      {
        id: "bhanta",
        title: "BHANTA",
        emoji: "🍆",
        color: "from-fuchsia-950 to-pink-950",
        accent: "border-pink-400/50 text-pink-300",
        description: "Same person. Different level of nonsense."
      },
      {
        id: "shinchan",
        title: "SHINCHAN",
        emoji: "😭",
        color: "from-red-950 to-amber-950",
        accent: "border-amber-400/50 text-amber-300",
        description: "Certified troublemaker. Unlimited entertainment."
      }
    ],
    zeroBoundary: {
      title: "THE ZERO-BOUNDARY FRIENDSHIP",
      lines: [
        "Humari dosti mein awkwardness naam ki cheez exist hi nahi karti.",
        "Kabhi bhi, kahin bhi, kuch bhi bakchodi.",
        "No unnecessary formalities. No pretending. Just two people being completely themselves.",
        "And honestly, not every friendship gives you that kind of comfort."
      ]
    },
    rulesButton: "Reveal Our Friendship Rules 📜",
    rules: [
      { number: "01", text: "No boring conversations allowed." },
      { number: "02", text: "Randomness is compulsory." },
      { number: "03", text: "Bakchodi has no fixed schedule." },
      { number: "04", text: "Serious moments are allowed, but only when necessary." },
      { number: "05", text: "Being yourself is always allowed." },
      { number: "06", text: "Four years later, the madness continues." }
    ]
  },

  // Page 07: The Final Letter — For Nikki
  finalLetter: {
    heading: "Before you leave, there's something I want to tell you.",
    greeting: "Dear Nikki,",
    paragraphs: [
      "I don't think I have ever properly expressed how much this friendship means to me.",
      "It all started at Batido, and somehow four years passed with so many memories, arguments, laughter, ups and downs.",
      "There was even a time when we didn't talk for almost a year.",
      "But one thing I will never forget is that when a lot of people stopped believing in me, you didn't.",
      "You were taunted for talking to me, yet you never gave up on this friendship.",
      "I don't know if I have ever thanked you enough for that.",
      "Today, I know you're going through a phase where things might feel confusing and you might feel like you're losing yourself.",
      "I just want you to remember something.",
      "You don't have to be perfect.\nYou don't have to pretend to be happy.\nYou don't have to figure everything out immediately.",
      "Please don't lose the person you are while trying to figure out everything around you.",
      "Keep laughing, keep dreaming, keep being your weird, crazy, beautiful self.",
      "And yes, I know I might not always be around or available the way I wish I could be.",
      "But I hope you never forget that you have a special place in my life.",
      "Thank you for believing in me.\nThank you for staying.\nThank you for all the madness.",
      "Happy Birthday, Baingan.\nHappy Birthday, Bhanta.\nHappy Birthday, Shinchan."
    ],
    closing: "With lots of love and unlimited bakchodi,",
    signature: "Yuvi ❤️"
  },

  // Final Screen — Happy Birthday Nikki
  birthdayFinale: {
    mainText: "HAPPY BIRTHDAY NIKKI!",
    subheading: "May this new chapter bring you back to yourself, closer to your dreams and surrounded by the happiness you deserve.",
    finalLine: "Four years down. Countless memories behind us. And hopefully, many chapters still waiting.",
    signature: "Forever your partner in bakchodi,\nYuvi ❤️",
    replayButton: "Replay Our Story ↺"
  }
};

