// word lists derived from http://www.momswhothink.com/reading/
//                         http://www.enchantedlearning.com/wordlist/

// Adjectives
var A = new Array("pulchritudinous", "abandoned", "abhorrent", "abiding", "absurd", "acidic", "adventurous", "alluring", "aloof", "apathetic", "aquatic", "aspiring", "auspicious", "axiomatic", "barbarous", "bashful", "bawdy", "beautiful", "bewildered", "callous", "capricious", "careful", "careless", "childlike", "chilly", "chivalrous", "colossal", "combative", "comfortable", "cultured", "cumbersome", "curious", "debonair", "decisive", "didactic", "disillusioned", "domineering", "draconian", "dramatic", "elated", "elegant", "elite", "embarrassed", "enthusiastic", "envious", "erect", "erratic", "ethereal", "evanescent", "exuberant", "exultant", "fallacious", "furtive", "garrulous", "gaudy", "glorious", "grandiose", "grotesque", "harmonious", "highfalutin", "ignorant", "illustrious", "imaginary", "immense", "imminent", "inquisitive", "jaded", "lackadaisical", "languid", "luxuriant", "macabre", "magnificent", "majestic", "makeshift", "maniacal", "materialistic", "melted", "merciful", "mere", "messy", "mighty", "military", "milky", "mindless", "mundane", "nonchalant", "obese", "obnoxious", "obscene", "obsequious", "observant", "omniscient", "overconfident", "parsimonious", "penitent", "perfect", "picayune", "possessive", "powerful","profuse", "quaint", "quarrelsome", "quixotic", "quizzical", "rambunctious", "rampant", "relieved", "remarkable", "reminiscent", "righteous", "rustic", "ruthless", "scandalous", "scintillating", "scrawny", "second-hand", "sedate", "sincere", "skillful", "slimy", "slippery", "solid", "somber", "sophisticated", "sordid", "spectacular", "spiritual", "spiteful", "splendid", "statuesque", "steadfast", "succinct", "superficial", "tangible", "tangy", "tart", "tranquil", "truculent", "ubiquitous","unaccountable", "upbeat", "utopian", "vacuous", "valuable", "vengeful", "venomous", "vigorous", "violent", "volatile", "voracious", "vulgar", "wealthy", "weary", "well-groomed","whimsical", "womanly", "wonderful", "wrathful", "xenophobic", "youthful", "zany", "zealous", "zesty");
// Nouns
var N = new Array("account", "achiever", "acoustics", "act", "action", "activity", "actor", "addition", "adjustment", "advertisement", "advice", "aftermath", "afternoon", "afterthought", "agreement", "air", "airplane", "airport", "alarm", "amount", "amusement", "anger", "angle", "animal", "answer", "ant", "ants", "apparatus", "apparel", "apple", "apples", "appliance", "approval", "arch", "argument", "arithmetic", "arm", "army", "art", "attack", "attempt", "attention", "attraction", "aunt", "authority", "babies", "baby", "back", "badge", "bag", "bait", "balance", "ball", "balloon", "balls", "banana", "band", "base", "baseball", "basin", "basket", "basketball", "bat", "bath", "battle", "bead", "beam", "bean", "bear", "bears", "beast", "bed", "bedroom", "beds", "bee", "beef", "beetle", "beggar", "beginner", "behavior", "belief", "believe", "bell", "bells", "berry", "bike", "bikes", "bird", "birds", "birth", "birthday", "bit", "bite", "blade", "blood", "blow", "board", "boat", "boats", "body", "bomb", "bone", "boob", "book", "books", "boot", "border", "bottle", "boundary", "box", "boy", "boys", "brain", "brake", "branch", "brass", "bread", "breakfast", "breath", "breast", "brick", "bridge", "brother", "brothers", "brush", "bubble", "bucket", "building", "bulb", "bun", "burn", "burst", "bushes", "business", "butter", "button", "cabbage", "cable", "cactus", "cake", "cakes", "calculator", "calendar", "camera", "camp", "can", "cannon", "canvas", "cap", "caption", "car", "card", "care", "carpenter", "carriage", "cars", "cart", "cast", "cat", "cats", "cattle", "cause", "cave", "celery", "cellar", "cemetery", "cent", "chain", "chair", "chairs", "chalk", "chance", "change", "channel", "cheese", "cherries", "cherry", "chess", "chicken", "chickens", "children", "chin", "church", "circle", "clam", "class", "clock", "clocks", "cloth", "cloud", "clouds", "clover", "club", "coach", "coal", "coast", "coat", "cobweb", "coil", "collar", "color", "comb", "comfort", "committee", "company", "comparison", "competition", "condition", "connection", "control", "cook", "copper", "copy", "cord", "cork", "corn", "cough", "country", "cover", "cow", "cows", "crack", "cracker", "crate", "crayon", "cream", "creator", "creature", "credit", "crib", "crime", "crook", "crow", "crowd", "crown", "crush", "cry", "cub", "cup", "current", "curtain", "curve", "cushion", "dad", "daughter", "day", "death", "debt", "decision", "deer", "degree", "design", "desire", "desk", "destruction", "detail", "development", "digestion", "dime", "dinner", "dinosaurs", "direction", "dirt", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "dock", "doctor", "dog", "dogs", "doll", "dolls", "donkey", "door", "downtown", "drain", "drawer", "dress", "drink", "driving", "drop", "drug", "drum", "duck", "ducks", "dust", "ear", "earth", "earthquake", "edge", "education", "effect", "egg", "eggnog", "eggs", "elbow", "end", "engine", "error", "event", "example", "exchange", "existence", "expansion", "experience", "expert", "eye", "eyes", "face", "fact", "fairies", "fall", "family", "fan", "fang", "farm", "farmer", "father", "father", "faucet", "fear", "feast", "feather", "feeling", "feet", "fiction", "field", "fifth", "fight", "finger", "finger", "fire", "fireman", "fish", "flag", "flame", "flavor", "flesh", "flight", "flock", "floor", "flower", "flowers", "fly", "fog", "fold", "food", "foot", "force", "fork", "form", "fowl", "frame", "friction", "friend", "friends", "frog", "frogs", "front", "fruit", "fuel", "furniture", "alley", "game", "garden", "gate", "geese", "ghost", "giants", "giraffe", "girl", "girls", "glass", "glove", "glue", "goat", "gold", "goldfish", "good-bye", "goose", "government", "governor", "grade", "grain", "grandfather", "grandmother", "grape", "grass", "grip", "ground", "group", "growth", "guide", "guitar", "gun", "hair", "haircut", "hall", "hammer", "hand", "hands", "harbor", "harmony", "hat", "hate", "head", "health", "hearing", "heart", "heat", "help", "hen", "hill", "history", "hobbies", "hole", "holiday", "home", "honey", "hook", "hope", "horn", "horse", "horses", "hose", "hospital", "hot", "hour", "house", "houses", "humor", "hydrant", "ice", "icicle", "idea", "impulse", "income", "increase", "industry", "ink", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jail", "jam", "jar", "jeans", "jelly", "jellyfish", "jewel", "join", "joke", "journey", "judge", "juice", "jump", "kettle", "key", "kick", "kiss", "kite", "kitten", "kittens", "kitty", "knee", "knife", "knot", "knowledge", "laborer", "lace", "ladybug", "lake", "lamp", "land", "language", "laugh", "lawyer", "lead", "leaf", "learning", "leather", "leg", "legs", "letter", "letters", "lettuce", "level", "library", "lift", "light", "limit", "line", "linen", "lip", "liquid", "list", "lizards", "loaf", "lock", "locket", "look", "loss", "love", "low", "lumber", "lunch", "lunchroom", "machine", "magic", "maid", "mailbox", "man", "manager", "map", "marble", "mark", "market", "mask", "mass", "match", "meal", "measure", "meat", "meeting", "memory", "men", "metal", "mice", "middle", "milk", "mind", "mine", "minister", "mint", "minute", "mist", "mitten", "mom", "money", "monkey", "month", "moon", "morning", "mother", "motion", "mountain", "mouth", "move", "muscle", "music", "nail", "name", "nation", "neck", "need", "needle", "nerve", "nest", "net", "news", "night", "noise", "north", "nose", "note", "notebook", "number", "nut", "oatmeal", "observation", "ocean", "offer", "office", "oil", "operation", "opinion", "orange", "oranges", "order", "organization", "ornament", "oven", "owl", "owner", "page", "pail", "pain", "paint", "pan", "pancake", "paper", "parcel", "parent", "park", "part", "partner", "party", "passenger", "paste", "patch", "payment", "peace", "pear", "pen", "pencil", "person", "pest", "pet", "pets", "pickle", "picture", "pie", "pies", "pig", "pigs", "pin", "pipe", "pizzas", "place", "plane", "planes", "plant", "plantation", "plants", "plastic", "plate", "play", "playground", "pleasure", "plot", "plough", "pocket", "point", "poison", "police", "polish", "pollution", "popcorn", "porter", "position", "pot", "potato", "powder", "power", "price", "print", "prison", "process", "produce", "profit", "property", "prose", "protest", "pull", "thugs", "scrotum", "pump", "punishment", "purpose", "push", "quarter", "quartz", "queen", "question", "quicksand", "quiet", "quill", "quilt", "quince", "quiver", "rabbit", "rabbits", "rail", "railway", "rain", "rainstorm", "rake", "range", "rat", "rate", "ray", "reaction", "reading", "reason", "receipt", "recess", "record", "regret", "relation", "religion", "representative", "request", "respect", "rest", "reward", "rhythm", "rice", "riddle", "rifle", "ring", "rings", "river", "road", "robin", "rock", "rod", "roll", "roof", "room", "root", "rose", "route", "rub", "rule", "run", "sack", "sail", "salt", "sand", "scale", "scarecrow", "scarf", "scene", "scent", "school", "science", "scissors", "screw", "sea", "seashore", "seat", "secretary", "seed", "selection", "self", "sense", "servant", "shade", "shake", "shame", "shape", "sheep", "sheet", "shelf", "ship", "shirt", "shock", "shoe", "shoes", "shop", "show", "side", "sidewalk", "sign", "silk", "silver", "sink", "sister", "sisters", "size", "skate", "skin", "skirt", "sky", "slave", "sleep", "sleet", "slip", "slope", "smash", "smell", "smile", "smoke", "snail", "snails", "snake", "snakes", "sneeze", "snow", "soap", "society", "sock", "soda", "sofa", "son", "song", "songs", "sort", "sound", "soup", "space", "spade", "spark", "spiders", "sponge", "spoon", "spot", "spring", "spy", "square", "squirrel", "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stew", "stick", "sticks", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "stove", "stranger", "straw", "stream", "street", "stretch", "string", "structure", "substance", "sugar", "suggestion", "suit", "summer", "sun", "support", "surprise", "sweater", "swim", "swing", "system", "table", "tail", "talk", "tank", "taste", "tax", "teaching", "team", "teeth", "temper", "tendency", "tent", "territory", "test", "texture", "theory", "thing", "things", "thought", "thread", "thrill", "throat", "throne", "thumb", "thunder", "ticket", "tiger", "time", "tin", "title", "toad", "toe", "toes", "tomatoes", "tongue", "tooth", "toothbrush", "toothpaste", "top", "touch", "town", "toy", "toys", "trade", "trail", "train", "trains", "tramp", "transport", "tray", "treatment", "tree", "trees", "trick", "trip", "trouble", "trousers", "truck", "trucks", "tub", "turkey", "turn", "twig", "twist", "umbrella", "uncle", "underwear", "unit", "use", "vacation", "value", "van", "vase", "vegetable", "veil", "vein", "verse", "vessel", "vest", "view", "visitor", "voice", "volcano", "volleyball", "voyage", "walk", "wall", "war", "wash", "waste", "watch", "water", "wave", "waves", "wax", "way", "wealth", "weather", "week", "weight", "wheel", "whip", "whistle", "wilderness", "wind", "window", "wine", "wing", "winter", "wire", "wish", "woman", "women", "wood", "wool", "word", "work", "worm", "wound", "wren", "wrench", "wrist", "writer", "writing", "yak", "yam", "yard", "yarn", "year", "yoke", "zebra", "zephyr", "zinc", "zipper", "zoo");
// Verbs
var V = new Array("defenestrate", "defenestrate", "defenestrate", "defenestrate", "acabide", "accelerate", "accept", "accomplish", "achieve", "acquire", "acted", "activate", "adapt", "add", "address", "administer", "admire", "admit", "adopt", "advise", "afford", "agree", "alert", "alight", "allow", "altered", "amuse", "analyze", "announce", "annoy", "answer", "anticipate", "apologize", "appear", "applaud", "applied", "appoint", "appraise", "appreciate", "approve", "arbitrate", "argue", "arise", "arrange", "arrest", "arrive", "ascertain", "ask", "assemble", "assess", "assist", "assure", "attach", "attack", "attain", "attempt", "attend", "attract", "audited", "avoid", "awake", "back", "bake", "balance", "ban", "bang", "bare", "bat", "bathe", "battle", "be", "beam", "bear", "beat", "become", "beg", "begin", "behave", "behold", "belong", "bend", "beset", "bet", "bid", "bind", "bite", "bleach", "bleed", "bless", "blind", "blink", "blot", "blow", "blush", "boast", "boil", "bolt", "bomb", "book", "bore", "borrow", "bounce", "bow", "box", "brake", "branch", "break", "breathe", "breed", "brief", "bring", "broadcast", "bruise", "brush", "bubble", "budget", "build", "bump", "burn", "burst", "bury", "bust", "buy", "buzz", "calculate", "call", "camp", "care", "carry", "carve", "cast", "catalog", "catch", "cause", "challenge", "change", "charge", "chart", "chase", "cheat", "check", "cheer", "chew", "choke", "choose", "chop", "claim", "clap", "clarify", "classify", "clean", "clear", "cling", "clip", "close", "clothe", "coach", "coil", "collect", "color", "comb", "come", "command", "communicate", "compare", "compete", "compile", "complain", "complete", "compose", "compute", "conceive", "concentrate", "conceptualize", "concern", "conclude", "conduct", "confess", "confront", "confuse", "connect", "conserve", "consider", "consist", "consolidate", "construct", "consult", "contain", "continue", "contract", "control", "convert", "coordinate", "copy", "correct", "correlate", "cost", "cough", "counsel", "count", "cover", "crack", "crash", "crawl", "create", "creep", "critique", "cross", "crush", "cry", "cure", "curl", "curve", "cut", "cycle", "dam", "damage", "dance", "dare", "deal", "decay", "deceive", "decide", "decorate", "define", "delay", "delegate", "delight", "deliver", "demonstrate", "depend", "describe", "desert", "deserve", "design", "destroy", "detail", "detect", "determine", "develop", "devise", "diagnose", "dig", "direct", "disagree", "disappear", "disapprove", "disarm", "discover", "dislike", "dispense", "display", "disprove", "dissect", "distribute", "dive", "divert", "divide", "do", "double", "doubt", "draft", "drag", "drain", "dramatize", "draw", "dream", "dress", "drink", "drip", "drive", "drop", "drown", "drum", "dry", "dust", "dwell", "earn", "eat", "edited", "educate", "eliminate", "embarrass", "employ", "empty", "enacted", "encourage", "end", "endure", "enforce", "engineer", "enhance", "enjoy", "enlist", "ensure", "enter", "entertain", "escape", "establish", "estimate", "evaluate", "examine", "exceed", "excite", "excuse", "execute", "exercise", "exhibit", "exist", "expand", "expect", "expedite", "experiment", "explain", "explode", "express", "extend", "extract", "face", "facilitate", "fade", "fail", "fancy", "fasten", "fax", "fear", "feed", "feel", "fence", "fetch", "fight", "file", "fill", "film", "finalize", "finance", "find", "fire", "fit", "fix", "flap", "flash", "flee", "fling", "float", "flood", "flow", "flower", "fly", "fold", "follow", "fool", "forbid", "force", "forecast", "forego", "foresee", "foretell", "forget", "forgive", "form", "formulate", "forsake", "frame", "freeze", "frighten", "fry", "gather", "gaze", "generate", "get", "give", "glow", "glue", "go", "govern", "grab", "graduate", "grate", "grease", "greet", "grin", "grind", "grip", "groan", "grow", "guarantee", "guard", "guess", "guide", "hammer", "hand", "handle", "handwrite", "hang", "happen", "harass", "harm", "hate", "haunt", "head", "heal", "heap", "hear", "heat", "help", "hide", "hit", "hold", "hook", "hop", "hope", "hover", "hug", "hum", "hunt", "hurry", "hurt", "hypothesize", "identify", "ignore", "illustrate", "imagine", "implement", "impress", "improve", "improvise", "include", "increase", "induce", "influence", "inform", "initiate", "inject", "injure", "inlay", "innovate", "input", "inspect", "inspire", "install", "institute", "instruct", "insure", "integrate", "intend", "intensify", "interest", "interfere", "interlay", "interpret", "interrupt", "interview", "introduce", "invent", "inventory", "investigate", "invite", "irritate", "itch", "jail", "jam", "jog", "join", "joke", "judge", "juggle", "jump", "justify", "keep", "kept", "kick", "kill", "kiss", "kneel", "knit", "knock", "knot", "know", "label", "land", "last", "laugh", "launch", "lay", "lead", "lean", "leap", "learn", "leave", "lecture", "led", "lend", "let", "level", "license", "lick", "lie", "lifted", "light", "lighten", "like", "list", "listen", "live", "load", "locate", "lock", "log", "long", "look", "lose", "love", "maintain", "make", "man", "manage", "manipulate", "manufacture", "map", "march", "mark", "market", "marry", "match", "mate", "matter", "mean", "measure", "meddle", "mediate", "meet", "melt", "melt", "memorize", "mend", "mentor", "milk", "mine", "mislead", "miss", "misspell", "mistake", "misunderstand", "mix", "moan", "model", "modify", "monitor", "moor", "motivate", "mourn", "move", "mow", "muddle", "mug", "multiply", "murder", "nail", "name", "navigate", "need", "negotiate", "nest", "nod", "nominate", "normalize", "note", "notice", "number", "obey", "object", "observe", "obtain", "occur", "offend", "offer", "officiate", "open", "operate", "order", "organize", "oriented", "originate", "overcome", "overdo", "overdraw", "overflow", "overhear", "overtake", "overthrow", "owe", "own", "pack", "paddle", "paint", "park", "part", "participate", "pass", "paste", "pat", "pause", "pay", "peck", "pedal", "peel", "peep", "perceive", "perfect", "perform", "permit", "persuade", "phone", "photograph", "pick", "pilot", "pinch", "pine", "pinpoint", "pioneer", "place", "plan", "plant", "play", "plead", "please", "plug", "point", "poke", "polish", "pop", "possess", "post", "pour", "practice", "praised", "pray", "preach", "precede", "predict", "prefer", "prepare", "prescribe", "present", "preserve", "preset", "preside", "press", "pretend", "prevent", "prick", "print", "process", "procure", "produce", "profess", "program", "progress", "project", "promise", "promote", "proofread", "propose", "protect", "prove", "provide", "publicize", "pull", "pump", "punch", "puncture", "punish", "purchase", "push", "put", "qualify", "question", "queue", "quit", "race", "radiate", "rain", "raise", "rank", "rate", "reach", "read", "realign", "realize", "reason", "receive", "recognize", "recommend", "reconcile", "record", "recruit", "reduce", "refer", "reflect", "refuse", "regret", "regulate", "rehabilitate", "reign", "reinforce", "reject", "rejoice", "relate", "relax", "release", "rely", "remain", "remember", "remind", "remove", "render", "reorganize", "repair", "repeat", "replace", "reply", "report", "represent", "reproduce", "request", "rescue", "research", "resolve", "respond", "restored", "restructure", "retire", "retrieve", "return", "review", "revise", "rhyme", "rid", "ride", "ring", "rinse", "rise", "risk", "rob", "rock", "roll", "rot", "rub", "ruin", "rule", "run", "rush", "sack", "sail", "satisfy", "save", "saw", "say", "scare", "scatter", "schedule", "scold", "scorch", "scrape", "scratch", "scream", "screw", "scribble", "scrub", "seal", "search", "secure", "see", "seek", "select", "sell", "send", "sense", "separate", "serve", "service", "set", "settle", "sew", "shade", "shake", "shape", "share", "shave", "shear", "shed", "shelter", "shine", "shiver", "shock", "shoe", "shoot", "shop", "show", "shrink", "shrug", "shut", "sigh", "sign", "signal", "simplify", "sin", "sing", "sink", "sip", "sit", "sketch", "ski", "skip", "slap", "slay", "sleep", "slide", "sling", "slink", "slip", "slit", "slow", "smash", "smell", "smile", "smite", "smoke", "snatch", "sneak", "sneeze", "sniff", "snore", "snow", "soak", "solve", "soothe", "soothsay", "sort", "sound", "sow", "spare", "spark", "sparkle", "speak", "specify", "speed", "spell", "spend", "spill", "spin", "spit", "split", "spoil", "spot", "spray", "spread", "spring", "sprout", "squash", "squeak", "squeal", "squeeze", "stain", "stamp", "stand", "stare", "start", "stay", "steal", "steer", "step", "stick", "stimulate", "sting", "stink", "stir", "stitch", "stop", "store", "strap", "streamline", "strengthen", "stretch", "stride", "strike", "string", "strip", "strive", "stroke", "structure", "study", "stuff", "sublet", "subtract", "succeed", "suck", "suffer", "suggest", "suit", "summarize", "supervise", "supply", "support", "suppose", "surprise", "surround", "suspect", "suspend", "swear", "sweat", "sweep", "swell", "swim", "swing", "switch", "symbolize", "synthesize", "systemize", "tabulate", "take", "talk", "tame", "tap", "target", "taste", "teach", "tear", "tease", "telephone", "tell", "tempt", "terrify", "test", "thank", "thaw", "think", "thrive", "throw", "thrust", "tick", "tickle", "tie", "time", "tip", "tire", "touch", "tour", "tow", "trace", "trade", "train", "transcribe", "transfer", "transform", "translate", "transport", "trap", "travel", "tread", "treat", "tremble", "trick", "trip", "trot", "trouble", "troubleshoot", "trust", "try", "tug", "tumble", "turn", "tutor", "twist", "type", "undergo", "understand", "undertake", "undress", "unfasten", "unify", "unite", "unlock", "unpack", "untidy", "update", "upgrade", "uphold", "upset", "use", "utilize", "vanish", "verbalize", "verify", "vex", "visit", "wail", "wait", "wake", "walk", "wander", "want", "warm", "warn", "wash", "waste", "watch", "water", "wave", "wear", "weave", "wed", "weep", "weigh", "welcome", "wend", "wet", "whine", "whip", "whirl", "whisper", "whistle", "win", "wind", "wink", "wipe", "wish", "withdraw", "withhold", "withstand", "wobble", "wonder", "work", "worry", "wrap", "wreck", "wrestle", "wriggle", "wring", "write", "x-ray", "yawn", "yell", "zip", "zoom");
// Prepositions
var P = new Array("aboard", "about", "above", "across", "after", "against", "along", "around", "before", "behind", "below", "beneath", "beside", "between", "beyond", "during", "except", "following", "inside", "minus", "onto", "opposite", "outside", "round", "since", "through", "toward", "under", "underneath", "unlike", "until", "upon", "without");
// Characters
var C = new Array("Charlie", "Linus", "Schroeder");
// Spices
var S = new Array("allspice", "basil", "capers", "caraway", "cardamon", "carob", "cayenne pepper", "chicory", "chili pepper", "chives", "cilantro", "cinnamon", "clove", "coriander", "curry", "fennel", "garlic", "chives", "ginger", "horseradish", "juniper", "berry", "lime", "lavender", "lemon", "lemon", "licorice", "mint", "mustard", "nutmeg", "onion", "oregano", "paprikaa", "parsley", "peppermint", "rosemary", "saffron", "sage", "sassafras", "spearmint", "tarragon", "thyme", "tumeric", "vanilla", "wasabi");
// Qualities
var Q = new Array("accountability", "affection", "agreeableness", "amiability", "benevolence", "bravery", "cleanliness", "compassion", "concern", "confidence", "consideration", "contentment", "cooperation", "courage", "courtesy", "creativity", "curiosity", "determination", "devotion", "dignity", "diligence", "discipline", "discretion", "duty", "earnest", "enthusiasm", "ethical", "excellence", "faithfulness", "flexibility", "friendliness", "focus", "forgiveness", "fortitude", "friendliness", "frugality", "generosity", "gentleness", "good", "goodwill", "grace", "graciousness", "gratitude", "helpfulness", "honesty", "honor", "honorable", "hope", "hopefulness", "humanity", "humility", "humor", "idealism", "impartiality", "industry", "innocence", "integrity", "intelligence", "joyfulness", "justice", "kindness", "leniency", "love", "loyalty", "magnanimity", "mercy", "moderation", "modesty", "moral", "morality", "nice", "nobility", "noble", "obedience", "openness", "orderliness", "patience", "peacefulness", "perseverance", "persistence", "probity", "propriety", "prudence", "purity", "purposefulness", "quiet", "reliability", "reputable", "respect", "respectfulness", "resilience", "resourcefulness", "respect", "responsibility", "restraint", "reverence", "righteousness", "sensitivity", "self-discipline", "selflessness", "simplicity", "sincerity", "spontaneity", "strength", "sympathy", "tact", "tenderness", "thrift", "tolerance", "toughness", "trustworthiness", "truthfulness", "unity", "upstanding", "virtuous", "vitality", "worthiness", "zeal")
// Custom Message
var Z = new Array("You can customize these anyway you like!, Just seperate items by a comma and a space")  

// Sample Story Template
var template = "\"The Story of [Noun]\"\r\n\r\nCharacter gazed down at the [A] fields of [Spice], and, allowing the familiar scents to [V] through his nostrils, the nostalgic feelings of [Quality] flowed through him once again. In this [A] moment, he felt like a [A] [Noun].\r\n\r\nHe lay down in the center of the field, and stared up at the clouds floating by. Enveloped by the strong scents around him, he begin to reminisce about the time the [A] [Noun] had decided to [V] [P] him. He chuckled at the very thought of it. What strange times those were!\r\n\r\nTo be continued (by you)!"
var defaults = [N, N, A, V, P, C, S, Q, Z];
var headers = ["Placeholder", "[Noun]", "[A]", "[V]", "[P]", "Character", "[Spice]", "[Quality]", "Specify Placeholder Here"];