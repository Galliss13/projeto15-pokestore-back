import {
    black_apricorn, dive_ball,  timer_ball, max_potion, flying_gem, water_gem,
    blue_apricorn, great_ball, ultra_ball, potion, fighting_gem,
    green_apricorn, luxury_ball, antidote, super_potion, grass_gem,
    pink_apricorn, master_ball, energy_powder, revive, ground_gem,
    red_apricorn, net_ball, hyper_potion, max_revive, poison_gem,
    white_apricorn, repeat_ball,full_heal, electric_gem, psychic_gem,
    yellow_apricorn, safari_ball, full_restore, fire_gem,ice_gem, poke_ball,

} from "../images";

const ProductList = [
  {
    image: `${potion}`,
    name: "Potion",
    description: "Restores 20HP.",
    type: "Healing",
    price: "$300",
  },
  {
    image: `${full_restore}`,
    name: "Full Restore",
    description:
      "Restores HP to full and cures any status ailment and confusion.",
    type: "Healing",
    price: "$3000",
  },
  {
    image: `${max_potion}`,
    name: "Max Potion",
    description: "Restores HP to full.",
    type: "Healing",
    price: "$2500",
  },
  {
    image: `${hyper_potion}`,
    name: "Hyper Potion",
    description: "Restores 200 HP.",
    type: "Healing",
    price: "$1500",
  },
  {
    image: `${super_potion}`,
    name: "Super Potion",
    description: "Restores 50 HP.",
    type: "Healing",
    price: "$700",
  },
  {
    image: `${full_heal}`,
    name: "Full Heal",
    description: "Cures any status ailment and confusion.",
    type: "Healing",
    price: "$600",
  },
  {
    image: `${revive}`,
    name: "Revive",
    description: "Revives with half HP.",
    type: "Healing",
    price: "$1500",
  },
  {
    image: `${max_revive}`,
    name: "Max Revive",
    description: "Revives with full HP.",
    type: "Healing",
    price: "$2000",
  },
  {
    image: `${antidote}`,
    name: "Antidote",
    description: "Cures poison.",
    type: "Healing",
    price: "$100",
  },
  {
    image: `${energy_powder}`,
    name: "Energy Powder",
    description: "Restores 50 HP, but lowers happiness.",
    type: "Healing",
    price: "$500",
  },
  ///////////////////////////////////////
  {
    image: ``,
    name: "Guard Spec.",
    description:
      "Prevents stat changes in battle for five turns in battle. Raises happiness.",
    type: "Stat Boosts",
    price: "$700",
  },
  {
    image: ``,
    name: "Dire Hit",
    description:
      "Increases the chance of a critical hit in battle. Raises happiness.",
    type: "Stat Boosts",
    price: "$650",
  },
  {
    image: ``,
    name: "X Attack",
    description: "Raises Attack by one stage in battle. Raises happiness.",
    type: "Stat Boosts",
    price: "$500",
  },
  {
    image: ``,
    name: "X Defense",
    description: "Raises Defense by one stage in battle. Raises happiness.",
    type: "Stat Boosts",
    price: "$550",
  },
  {
    image: ``,
    name: "X Speed",
    description: "Raises Speed by one stage in battle. Raises happiness.",
    type: "Stat Boosts",
    price: "$350",
  },
  {
    image: ``,
    name: "X Accuracy",
    description: "Raises accuracy by one stage in battle. Raises happiness.",
    type: "Stat Boosts",
    price: "$950",
  },
  {
    image: ``,
    name: "X Sp. Atk",
    description:
      "Raises Special Attack by one stage in battle. Raises happiness.",
    type: "Stat Boosts",
    price: "$350",
  },
  {
    image: ``,
    name: "X Sp. Def",
    description:
      "Raises Special Defense by one stage in battle. Raises happiness.",
    type: "Stat Boosts",
    price: "$350",
  },
  //////////////////////////////////////////
  {
    image: `${master_ball}`,
    name: "Master Ball",
    description: "Catches a wild Pokémon every time.",
    type: "Balls",
    price: "$5000",
  },
  {
    image: `${ultra_ball}`,
    name: "Ultra Ball",
    description: "Tries to catch a wild Pokémon. Success rate is 2×.",
    type: "Balls",
    price: "$1200",
  },
  {
    image: `${great_ball}`,
    name: "Great Ball",
    description: "Tries to catch a wild Pokémon. Success rate is 1.5×.",
    type: "Balls",
    price: "$600",
  },
  {
    image: `${poke_ball}`,
    name: "Poké Ball",
    description: "Tries to catch a wild Pokémon.",
    type: "Balls",
    price: "$100",
  },
  {
    image: `${safari_ball}`,
    name: "Safari Ball",
    description:
      "Tries to catch a wild Pokémon in the Great Marsh or Safari Zone. Success rate is 1.5×.",
    type: "Balls",
    price: "$800",
  },
  {
    image: `${net_ball}`,
    name: "Net Ball",
    description:
      "Tries to catch a wild Pokémon. Success rate is 3× for water and bug Pokémon.",
    type: "Balls",
    price: "$1000",
  },
  {
    image: `${dive_ball}`,
    name: "Dive Ball",
    description:
      "Tries to catch a wild Pokémon. Success rate is 3.5× when underwater, fishing, or surfing.",
    type: "Balls",
    price: "$1000",
  },
  {
    image: `${repeat_ball}`,
    name: "Repeat Ball",
    description:
      "Tries to catch a wild Pokémon. Success rate is 3× for previously-caught Pokémon.",
    type: "Balls",
    price: "$1000",
  },
  {
    image: `${timer_ball}`,
    name: "Timer Ball",
    description:
      "Tries to catch a wild Pokémon. Success rate increases by 0.1× (Gen V: 0.3×) every turn, to a max of 4×.",
    type: "Balls",
    price: "$1000",
  },
  {
    image: `${luxury_ball}`,
    name: "Luxury Ball",
    description:
      "Tries to catch a wild Pokémon. Caught Pokémon start with 200 happiness.",
    type: "Balls",
    price: "$1000",
  },
  /////////////////////////////////////////////////////
  {
    image: ``,
    name: "Poké Doll",
    description: "Ends a wild battle.",
    type: "Spelunking",
    price: "$1000",
  },
  {
    image: ``,
    name: "Blue Flute",
    description: "Cures sleep.",
    type: "Spelunking",
    price: "$100",
  },
  {
    image: ``,
    name: "Black Flute",
    description: "Halves the wild Pokémon encounter rate.",
    type: "Spelunking",
    price: "$400",
  },
  {
    image: ``,
    name: "Super Repel",
    description:
      "For 200 steps, prevents wild encounters of level lower than your party's lead Pokémon.",
    type: "Spelunking",
    price: "$500",
  },
  {
    image: ``,
    name: "White Flute",
    description: "Doubles the wild Pokémon encounter rate.",
    type: "Spelunking",
    price: "$500",
  },
  {
    image: ``,
    name: "Max Repel",
    description:
      "For 250 steps, prevents wild encounters of level lower than your party's lead Pokémon.",
    type: "Spelunking",
    price: "$700",
  },
  {
    image: ``,
    name: "Escape Rope",
    description: "Transports user to the outside entrance of a cave.",
    type: "Spelunking",
    price: "$550",
  },
  {
    image: ``,
    name: "Repel",
    description:
      "For 100 steps, prevents wild encounters of level lower than your party's lead Pokémon.",
    type: "Spelunking",
    price: "$350",
  },
  {
    image: ``,
    name: "Red Flute",
    description: "Cures attraction.",
    type: "Spelunking",
    price: "$200",
  },
  {
    image: ``,
    name: "Red Flute",
    description: "",
    type: "Spelunking",
    price: "$200",
  },
  //////////////////////////////////////
  {
    image: ``,
    name: "Ether",
    description: "Restores 10 PP for one move.",
    type: "PPRecovery",
    price: "$1200",
  },
  {
    image: ``,
    name: "Max Ether",
    description: "Restores PP to full for one move.",
    type: "PPRecovery",
    price: "$2000",
  },
  {
    image: ``,
    name: "Elixir",
    description: "Restores 10 PP for each move.",
    type: "PPRecovery",
    price: "$3000",
  },
  {
    image: ``,
    name: "Max Elixir",
    description: "Restores PP to full for each move.",
    type: "PPRecovery",
    price: "$4500",
  },
  ///////////////////////////////////////////
  {
    image: `${fire_gem}`,
    name: "Fire Gem",
    description:
      "Held: When the holder uses a damaging []{type:fire}-type move, the move has 1.5× power and this item is consumed.",
    type: "Jewels",
    price: "$200",
  },
  {
    image: `${water_gem}`,
    name: "Water Gem",
    description:
      "Held: When the holder uses a damaging []{type:water}-type move, the move has 1.5× power and this item is consumed.",
    type: "Jewels",
    price: "$200",
  },
  {
    image: `${electric_gem}`,
    name: "Electric Gem",
    description:
      "Held: When the holder uses a damaging []{type:electric}-type move, the move has 1.5× power and this item is consumed.",
    type: "Jewels",
    price: "$200",
  },
  {
    image: `${grass_gem}`,
    name: "Grass Gem",
    description:
      "Held: When the holder uses a damaging []{type:grass}-type move, the move has 1.5× power and this item is consumed.",
    type: "Jewels",
    price: "$200",
  },
  {
    image: `${ice_gem}`,
    name: "Ice Gem",
    description:
      "Held: When the holder uses a damaging []{type:ice}-type move, the move has 1.5× power and this item is consumed.",
    type: "Jewels",
    price: "$200",
  },
  {
    image: `${fighting_gem}`,
    name: "Fighting Gem",
    description:
      "Held: When the holder uses a damaging []{type:fighting}-type move, the move has 1.5× power and this item is consumed.",
    type: "Jewels",
    price: "$200",
  },
  {
    image: `${poison_gem}`,
    name: "Poison Gem",
    description:
      "Held: When the holder uses a damaging []{type:poison}-type move, the move has 1.5× power and this item is consumed.",
    type: "Jewels",
    price: "$200",
  },
  {
    image: `${ground_gem}`,
    name: "Ground Gem",
    description:
      "Held: When the holder uses a damaging []{type:ground}-type move, the move has 1.5× power and this item is consumed.",
    type: "Jewels",
    price: "$200",
  },
  {
    image: `${flying_gem}`,
    name: "Flying Gem",
    description:
      "Held: When the holder uses a damaging []{type:flying}-type move, the move has 1.5× power and this item is consumed.",
    type: "Jewels",
    price: "$200",
  },
  {
    image: `${psychic_gem}`,
    name: "Psychic Gem",
    description:
      "Held: When the holder uses a damaging []{type:psychic}-type move, the move has 1.5× power and this item is consumed.",
    type: "Jewels",
    price: "$200",
  },
  ////////////////////////////////////////////
  {
    image: `${red_apricorn}`,
    name: "Red Apricorn",
    description: "Used to make a Level Ball.",
    type: "Apricorns",
    price: "$300",
  },
  {
    image: `${blue_apricorn}`,
    name: "Blue Apricorn",
    description: "Used to make a Lure Ball.",
    type: "Apricorns",
    price: "$300",
  },
  {
    image: `${yellow_apricorn}`,
    name: "Yellow Apricorn",
    description: "Used to make a Moon Ball.",
    type: "Apricorns",
    price: "$300",
  },
  {
    image: `${green_apricorn}`,
    name: "Green Apricorn",
    description: "Used to make a Friend Ball.",
    type: "Apricorns",
    price: "$300",
  },
  {
    image: `${pink_apricorn}`,
    name: "Pink Apricorn",
    description: "Used to make a Love Ball.",
    type: "Apricorns",
    price: "$300",
  },
  {
    image: `${white_apricorn}`,
    name: "White Apricorn",
    description: "Used to make a Fast Ball.",
    type: "Apricorns",
    price: "$300",
  },
  {
    image: `${black_apricorn}`,
    name: "Black Apricorn",
    description: "Used to make a Heavy Ball.",
    type: "Apricorns",
    price: "$300",
  },
];

export default ProductList