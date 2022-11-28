const ProductList = [
    {   
        name:"Potion",
        description:"Restores 20HP.",
        type:"Healing",
        price:"$300"
    },
    {
        name:"Full Restore",
        description:"Restores HP to full and cures any status ailment and confusion.",
        type:"Healing",
        price:"$3000"
    },
    {
        name:"Max Potion",
        description:"Restores HP to full.",
        type:"Healing",
        price:"$2500"
    },
    {
        name:"Hyper Potion",
        description:"Restores 200 HP.",
        type:"Healing",
        price:"$1500"
    },
    {
        name:"Super Potion",
        description:"Restores 50 HP.",
        type:"Healing",
        price:"$700"
    },
    {
        name:"Full Heal",
        description:"Cures any status ailment and confusion.",
        type:"Healing",
        price:"$600"
    },
    {
        name:"Revive",
        description:"Revives with half HP.",
        type:"Healing",
        price:"$1500"
    },
    {
        name:"Max Revive",
        description:"Revives with full HP.",
        type:"Healing",
        price:"$2000"
    },
    {
        name:"Antidote",
        description:"Cures poison.",
        type:"Healing",
        price:"$100"
    },
    {
        name:"Energy Powder",
        description:"Restores 50 HP, but lowers happiness.",
        type:"Healing",
        price:"$500"
    },
    ///////////////////////////////////////
    {
        name:"Guard Spec.",
        description:"Prevents stat changes in battle for five turns in battle. Raises happiness.",
        type:"Stat Boosts",
        price:"$700"
    },
    {
        name:"Dire Hit",
        description:"Increases the chance of a critical hit in battle. Raises happiness.",
        type:"Stat Boosts",
        price:"$650"
    },
    {
        name:"X Attack",
        description:"Raises Attack by one stage in battle. Raises happiness.",
        type:"Stat Boosts",
        price:"$500"
    },
    {
        name:"X Defense",
        description:"Raises Defense by one stage in battle. Raises happiness.",
        type:"Stat Boosts",
        price:"$550"
    },
    {
        name:"X Speed",
        description:"Raises Speed by one stage in battle. Raises happiness.",
        type:"Stat Boosts",
        price:"$350"
    },
    {
        name:"X Accuracy",
        description:"Raises accuracy by one stage in battle. Raises happiness.",
        type:"Stat Boosts",
        price:"$950"
    },
    {
        name:"X Sp. Atk",
        description:"Raises Special Attack by one stage in battle. Raises happiness.",
        type:"Stat Boosts",
        price:"$350"
    },
    {
        name:"X Sp. Def",
        description:"Raises Special Defense by one stage in battle. Raises happiness.",
        type:"Stat Boosts",
        price:"$350"
    },
    {
        name:"Master Ball",
        description:"Catches a wild Pokémon every time.",
        type:"Balls",
        price:"$5000"
    },
    {
        name:"Ultra Ball",
        description:"Tries to catch a wild Pokémon. Success rate is 2×.",
        type:"Balls",
        price:"$1200"
    },
    {
        name:"Great Ball",
        description:"Tries to catch a wild Pokémon. Success rate is 1.5×.",
        type:"Balls",
        price:"$600"
    },
    {
        name:"Poké Ball",
        description:"Tries to catch a wild Pokémon.",
        type:"Balls",
        price:"$100"
    },
    {
        name:"Safari Ball",
        description:"Tries to catch a wild Pokémon in the Great Marsh or Safari Zone. Success rate is 1.5×.",
        type:"Balls",
        price:"$800"
    },
    {
        name:"Net Ball",
        description:"Tries to catch a wild Pokémon. Success rate is 3× for water and bug Pokémon.",
        type:"Balls",
        price:"$1000"
    },
    {
        name:"Dive Ball",
        description:"Tries to catch a wild Pokémon. Success rate is 3.5× when underwater, fishing, or surfing.",
        type:"Balls",
        price:"$1000"
    },
    {
        name:"Nest Ball",
        description:"Tries to catch a wild Pokémon. Success rate is 3.9× for level 1 Pokémon, and drops steadily to 1× at level 30.",
        type:"Balls",
        price:"$1000"
    },
    {
        name:"Repeat Ball",
        description:"Tries to catch a wild Pokémon. Success rate is 3× for previously-caught Pokémon.",
        type:"Balls",
        price:"$1000"
    },
    {
        name:"Timer Ball",
        description:"Tries to catch a wild Pokémon. Success rate increases by 0.1× (Gen V: 0.3×) every turn, to a max of 4×.",
        type:"Balls",
        price:"$1000"
    },
    {
        name:"Luxury Ball",
        description:"Tries to catch a wild Pokémon. Caught Pokémon start with 200 happiness.",
        type:"Balls",
        price:"$1000"
    },
    /////////////////////////////////////////////////////
    {
        name:"Poké Doll",
        description:"Ends a wild battle.",
        type:"Spelunking",
        price:"$1000"
    },
    {
        name:"Blue Flute",
        description:"Cures sleep.",
        type:"Spelunking",
        price:"$100"
    },
    {
        name:"Black Flute",
        description:"Halves the wild Pokémon encounter rate.",
        type:"Spelunking",
        price:"$400"
    },
    {
        name:"Super Repel",
        description:"For 200 steps, prevents wild encounters of level lower than your party's lead Pokémon.",
        type:"Spelunking",
        price:"$500"
    },
    {
        name:"White Flute",
        description:"Doubles the wild Pokémon encounter rate.",
        type:"Spelunking",
        price:"$500"
    },
    {
        name:"Max Repel",
        description:"For 250 steps, prevents wild encounters of level lower than your party's lead Pokémon.",
        type:"Spelunking",
        price:"$700"
    },
    {
        name:"Escape Rope",
        description:"Transports user to the outside entrance of a cave.",
        type:"Spelunking",
        price:"$550"
    },
    {
        name:"Repel",
        description:"For 100 steps, prevents wild encounters of level lower than your party's lead Pokémon.",
        type:"Spelunking",
        price:"$350"
    },
    {
        name:"Red Flute",
        description:"Cures attraction.",
        type:"Spelunking",
        price:"$200"
    },
    {
        name:"Red Flute",
        description:"",
        type:"Spelunking",
        price:"$200"
    },
    //////////////////////////////////////
    {
        name:"Ether",
        description:"Restores 10 PP for one move.",
        type:"PPRecovery",
        price:"$1200"
    },
    {
        name:"Max Ether",
        description:"Restores PP to full for one move.",
        type:"PPRecovery",
        price:"$2000"
    },
    {
        name:"Elixir",
        description:"Restores 10 PP for each move.",
        type:"PPRecovery",
        price:"$3000"
    },
    {
        name:"Max Elixir",
        description:"Restores PP to full for each move.",
        type:"PPRecovery",
        price:"$4500"
    },
    ///////////////////////////////////////////
    {
        name:"Fire Gem",
        description:"Held: When the holder uses a damaging []{type:fire}-type move, the move has 1.5× power and this item is consumed.",
        type:"Jewels",
        price:"$200"
    },
    {
        name:"Water Gem",
        description:"Held: When the holder uses a damaging []{type:water}-type move, the move has 1.5× power and this item is consumed.",
        type:"Jewels",
        price:"$200"
    },
    {
        name:"Electric Gem",
        description:"Held: When the holder uses a damaging []{type:electric}-type move, the move has 1.5× power and this item is consumed.",
        type:"Jewels",
        price:"$200"
    },
    {
        name:"Grass Gem",
        description:"Held: When the holder uses a damaging []{type:grass}-type move, the move has 1.5× power and this item is consumed.",
        type:"Jewels",
        price:"$200"
    },
    {
        name:"Ice Gem",
        description:"Held: When the holder uses a damaging []{type:ice}-type move, the move has 1.5× power and this item is consumed.",
        type:"Jewels",
        price:"$200"
    },
    {
        name:"Fighting Gem",
        description:"Held: When the holder uses a damaging []{type:fighting}-type move, the move has 1.5× power and this item is consumed.",
        type:"Jewels",
        price:"$200"
    },
    {
        name:"Poison Gem",
        description:"Held: When the holder uses a damaging []{type:poison}-type move, the move has 1.5× power and this item is consumed.",
        type:"Jewels",
        price:"$200"
    },
    {
        name:"Ground Gem",
        description:"Held: When the holder uses a damaging []{type:ground}-type move, the move has 1.5× power and this item is consumed.",
        type:"Jewels",
        price:"$200"
    },
    {
        name:"Flying Gem",
        description:"Held: When the holder uses a damaging []{type:flying}-type move, the move has 1.5× power and this item is consumed.",
        type:"Jewels",
        price:"$200"
    },
    {
        name:"Psychic Gem",
        description:"Held: When the holder uses a damaging []{type:psychic}-type move, the move has 1.5× power and this item is consumed.",
        type:"Jewels",
        price:"$200"
    },
    ////////////////////////////////////////////
    {
        name:"Red Apricorn",
        description:"Used to make a Level Ball.",
        type:"Apricorns",
        price:"$300"
    },
    {
        name:"Blue Apricorn",
        description:"Used to make a Lure Ball.",
        type:"Apricorns",
        price:"$300"
    },
    {
        name:"Yellow Apricorn",
        description:"Used to make a Moon Ball.",
        type:"Apricorns",
        price:"$300"
    },
    {
        name:"Green Apricorn",
        description:"Used to make a Friend Ball.",
        type:"Apricorns",
        price:"$300"
    },
    {
        name:"Pink Apricorn",
        description:"Used to make a Love Ball.",
        type:"Apricorns",
        price:"$300"
    },
    {
        name:"White Apricorn",
        description:"Used to make a Fast Ball.",
        type:"Apricorns",
        price:"$300"
    },
    {
        name:"Black Apricorn",
        description:"Used to make a Heavy Ball.",
        type:"Apricorns",
        price:"$300"
    },
]