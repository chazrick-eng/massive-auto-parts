/* ============================================================
   SAMPLE DATA — Massive Auto Parts & Car Sales
   ⚠️ ALL products, prices, and stock below are PLACEHOLDERS for
   layout demonstration only. Replace with real owner-supplied
   inventory before launch (see README). Prices shown in JMD.
   ============================================================ */

// Categories used across the parts catalog
window.PART_CATEGORIES = [
  "Engines", "Body Parts", "Suspension", "Electrical", "Brakes", "Tires & Rims", "Interior", "Accessories"
];

window.MAKES = ["Toyota", "Honda", "Nissan", "Mitsubishi", "Mazda", "Subaru", "Suzuki", "Mercedes-Benz", "Infiniti", "BMW"];

// ---------------- PARTS (e-commerce) ----------------
window.PARTS = [
  {
    id: "p-tire-combo",
    name: "Tire & Rim Combo",
    category: "Tires & Rims",
    condition: "New",
    price: 30000,
    compatibility: ["Multiple sizes — most makes/models"],
    images: 1,
    image: "assets/img/promo-tires.jpg",
    description: "Best tire, rim & combo special — affordable, 100% quality. Price shown is the advertised combo special; confirm exact size/fitment with our team.",
    stock: "In stock",
    sku: "TIR-COMBO-30",
    featured: true
  },
  {
    id: "p-seats-pair",
    name: "Car Seats — Sold by Pair",
    category: "Interior",
    condition: "New",
    price: 14000,
    compatibility: ["Wide variety — universal fit"],
    images: 1,
    image: "assets/img/promo-seats.jpg",
    description: "Car seats on sale — wide variety of styles and colours. From $14,000 up to $25,000 depending on style. Sold by pair. Call to check current stock.",
    stock: "In stock",
    sku: "INT-SEAT-PR",
    featured: true
  },
  {
    id: "p-eng-2az",
    image: "assets/img/part-p-eng-2az.jpg",
    name: "Toyota 2AZ-FE Engine — Used Japanese",
    category: "Engines",
    condition: "Used Japanese",
    price: 145000,
    compatibility: ["Toyota Camry 2002–2009", "Toyota RAV4 2006–2012", "Toyota Scion tC 2005–2010"],
    images: 4,
    description: "Low-mileage Japanese-import 2.4L 2AZ-FE long block. Compression-tested. Sold as engine assembly; ancillaries vary. Sample listing for layout reference.",
    stock: "In stock",
    sku: "ENG-2AZ-001",
    featured: true
  },
  {
    id: "p-eng-k24",
    image: "assets/img/part-p-eng-k24.jpg",
    name: "Honda K24A Engine — Used Japanese",
    category: "Engines",
    condition: "Used Japanese",
    price: 168000,
    compatibility: ["Honda Accord 2003–2007", "Honda CR-V 2002–2006", "Honda Element 2003–2011"],
    images: 4,
    description: "Japanese-import 2.4L K24A engine assembly. Authorized used-engine sourcing. Sample listing.",
    stock: "In stock",
    sku: "ENG-K24-002",
    featured: true
  },
  {
    id: "p-body-headlamp",
    image: "assets/img/part-p-body-headlamp.jpg",
    name: "Front Headlamp Assembly — RH",
    category: "Body Parts",
    condition: "New",
    price: 18500,
    compatibility: ["Toyota Corolla 2014–2019"],
    images: 3,
    description: "New aftermarket right-hand headlamp assembly, halogen type. Sample listing for layout reference.",
    stock: "In stock",
    sku: "BDY-HL-014",
    featured: true
  },
  {
    id: "p-susp-strut",
    image: "assets/img/part-p-susp-strut.jpg",
    name: "Front Strut Assembly (Pair)",
    category: "Suspension",
    condition: "New",
    price: 32000,
    compatibility: ["Honda Civic 2012–2015", "Honda Civic 2016–2021"],
    images: 3,
    description: "Complete front strut + coil assemblies, sold as a pair. Sample listing.",
    stock: "Order",
    sku: "SUS-ST-008",
    featured: true
  },
  {
    id: "p-elec-alt",
    image: "assets/img/part-p-elec-alt.jpg",
    name: "Alternator — Used Japanese",
    category: "Electrical",
    condition: "Used Japanese",
    price: 14500,
    compatibility: ["Nissan Tiida 2007–2012", "Nissan Note 2005–2012"],
    images: 3,
    description: "Tested Japanese-import alternator. Sample listing.",
    stock: "In stock",
    sku: "ELE-ALT-021"
  },
  {
    id: "p-brk-pads",
    image: "assets/img/part-p-brk-pads.jpg",
    name: "Ceramic Brake Pad Set — Front",
    category: "Brakes",
    condition: "New",
    price: 7800,
    compatibility: ["Toyota Corolla 2009–2019", "Toyota Axio 2012–2019"],
    images: 2,
    description: "New ceramic front brake pad set. Low dust, quiet. Sample listing.",
    stock: "In stock",
    sku: "BRK-PD-031"
  },
  {
    id: "p-body-bumper",
    image: "assets/img/part-p-body-bumper.jpg",
    name: "Front Bumper Cover — Used Japanese",
    category: "Body Parts",
    condition: "Used Japanese",
    price: 22000,
    compatibility: ["Mazda Demio 2015–2019"],
    images: 3,
    description: "Japanese-import front bumper cover, unpainted. Minor fitment prep may be required. Sample listing.",
    stock: "In stock",
    sku: "BDY-BMP-019"
  },
  {
    id: "p-susp-control",
    image: "assets/img/part-p-susp-control.jpg",
    name: "Lower Control Arm — RH",
    category: "Suspension",
    condition: "New",
    price: 12500,
    compatibility: ["Nissan March 2010–2017", "Nissan Micra 2010–2017"],
    images: 2,
    description: "New right-hand lower control arm with ball joint. Sample listing.",
    stock: "Order",
    sku: "SUS-LCA-006"
  },
  {
    id: "p-elec-starter",
    image: "assets/img/part-p-elec-starter.jpg",
    name: "Starter Motor — Used Japanese",
    category: "Electrical",
    condition: "Used Japanese",
    price: 11800,
    compatibility: ["Toyota Vitz 2005–2010", "Toyota Yaris 2005–2011"],
    images: 2,
    description: "Tested Japanese-import starter motor. Sample listing.",
    stock: "In stock",
    sku: "ELE-STR-027"
  },
  {
    id: "p-acc-mats",
    image: "assets/img/part-p-acc-mats.jpg",
    name: "All-Weather Floor Mat Set",
    category: "Accessories",
    condition: "New",
    price: 6500,
    compatibility: ["Universal — most sedans/SUVs"],
    images: 2,
    description: "Heavy-duty all-weather rubber floor mats, 4-piece. Sample listing.",
    stock: "In stock",
    sku: "ACC-MAT-002"
  },
  {
    id: "p-acc-battery",
    image: "assets/img/part-p-acc-battery.jpg",
    name: "Maintenance-Free Battery — NS60",
    category: "Accessories",
    condition: "New",
    price: 16500,
    compatibility: ["Many Toyota / Honda / Nissan models"],
    images: 2,
    description: "New NS60 maintenance-free battery. Sample listing.",
    stock: "Order",
    sku: "ACC-BAT-011"
  },
  {
    id: "p-brk-rotor",
    image: "assets/img/part-p-brk-rotor.jpg",
    name: "Brake Rotor — Front (Pair)",
    category: "Brakes",
    condition: "New",
    price: 13900,
    compatibility: ["Honda Fit 2008–2013", "Honda Fit 2014–2020"],
    images: 2,
    description: "New vented front brake rotors, sold as a pair. Sample listing.",
    stock: "In stock",
    sku: "BRK-RT-018"
  }
];

// ---------------- VEHICLES (enquire / reserve) ----------------
// Photos are REAL Massive inventory shots. Year/mileage/price are sample
// placeholders — confirm exact figures with the owner before launch.
// VEHICLES — photos are REAL Massive inventory shots.
// The Honda/Toyota/Subaru batch carries REAL advertised prices (from the
// business's own posts). The Mercedes/Impreza/Infiniti/Corolla prices are
// still sample placeholders — confirm all figures with the owner before launch.
window.VEHICLES = [
  {
    id: "v-mercedes-a",
    title: "Mercedes-Benz A-Class",
    make: "Mercedes-Benz", model: "A-Class", year: 2017,
    mileage: "62,000 km", transmission: "Automatic", fuel: "Petrol",
    engine: "1.6L Turbo", colour: "Cirrus White", bodyType: "Hatchback",
    condition: "Used", price: 3850000, images: 1, image: "assets/img/car-mercedes.jpg",
    description: "Sharp white Mercedes-Benz A-Class with AMG-style alloys. In our Ocho Rios lot now. Year, mileage & price shown are samples — confirm with our team.",
    status: "Available", featured: true
  },
  {
    id: "v-subaru-impreza",
    title: "Subaru Impreza Sport",
    make: "Subaru", model: "Impreza", year: 2018,
    mileage: "58,000 km", transmission: "Automatic (CVT)", fuel: "Petrol",
    engine: "2.0L Boxer AWD", colour: "Quartz Blue", bodyType: "Hatchback",
    condition: "Used", price: 3450000, images: 1, image: "assets/img/car-subaru.jpg",
    description: "Symmetrical AWD Subaru Impreza Sport in striking blue. On the lot now. Year, mileage & price shown are samples — confirm with our team.",
    status: "Available", featured: false
  },
  {
    id: "v-infiniti-q70",
    title: "Infiniti Q70 Hybrid",
    make: "Infiniti", model: "Q70", year: 2016,
    mileage: "71,000 km", transmission: "Automatic", fuel: "Hybrid",
    engine: "3.5L V6 Hybrid", colour: "Black Obsidian", bodyType: "Sedan",
    condition: "Used", price: 4250000, images: 1, image: "assets/img/car-infiniti.jpg",
    description: "Luxury Infiniti Q70 Hybrid on custom alloys — full-size comfort, hybrid economy. In our lot now. Year, mileage & price shown are samples — confirm with our team.",
    status: "Available", featured: false
  },
  {
    id: "v-corolla-hybrid",
    title: "Toyota Corolla Hybrid",
    make: "Toyota", model: "Corolla", year: 2020,
    mileage: "46,000 km", transmission: "Automatic (CVT)", fuel: "Hybrid",
    engine: "1.8L Hybrid", colour: "Silver Metallic", bodyType: "Hatchback",
    condition: "Used", price: 3650000, images: 1, image: "assets/img/car-corolla.jpg",
    description: "Economical Toyota Corolla Hybrid hatch in silver. Low running costs, on the lot now. Year, mileage & price shown are samples — confirm with our team.",
    status: "Available", featured: false
  },
  {
    id: "v-honda-grace",
    title: "Honda Grace Hybrid",
    make: "Honda", model: "Grace", year: 2019,
    mileage: "Ask", transmission: "Automatic", fuel: "Hybrid",
    engine: "1.5L i-DCD Hybrid", colour: "Black", bodyType: "Sedan",
    condition: "Used", price: 2800000, images: 1, image: "assets/img/car-honda-grace.jpg",
    description: "For sale: 2019 Honda Grace Hybrid — economical hybrid sedan on alloys, in our Ocho Rios lot now. Mileage available on request.",
    status: "Available", featured: false
  },
  {
    id: "v-honda-vezel",
    title: "Honda Vezel Hybrid",
    make: "Honda", model: "Vezel", year: 2017,
    mileage: "Ask", transmission: "Automatic", fuel: "Hybrid",
    engine: "1.5L i-DCD Hybrid", colour: "Silver", bodyType: "SUV",
    condition: "Used", price: 3100000, images: 1, image: "assets/img/car-honda-vezel.jpg",
    description: "2017 Honda Vezel Hybrid — stylish, fuel-efficient compact SUV. On the lot now. Mileage available on request.",
    status: "Available", featured: true
  },
  {
    id: "v-toyota-velfire",
    title: "Toyota Vellfire",
    make: "Toyota", model: "Vellfire", year: 2016,
    mileage: "Ask", transmission: "Automatic", fuel: "Petrol",
    engine: "3.5L V6", colour: "Pearl White", bodyType: "Van",
    condition: "Used", price: 5800000, images: 1, image: "assets/img/car-toyota-velfire.jpg",
    description: "2016 Toyota Vellfire — luxury, comfort and performance all in one. Premium full-size people-mover, in our lot now. Mileage available on request.",
    status: "Available", featured: true
  },
  {
    id: "v-toyota-esquire",
    title: "Toyota Esquire Hybrid",
    make: "Toyota", model: "Esquire", year: 2015,
    mileage: "Ask", transmission: "Automatic", fuel: "Hybrid",
    engine: "1.8L Hybrid", colour: "Black", bodyType: "Van",
    condition: "Used", price: 2900000, images: 1, image: "assets/img/car-toyota-esquire.jpg",
    description: "2015 Toyota Esquire Hybrid — spacious, economical family van. On the lot now. Mileage available on request.",
    status: "Available", featured: false
  },
  {
    id: "v-subaru-xv",
    title: "Subaru XV",
    make: "Subaru", model: "XV", year: 2019,
    mileage: "Ask", transmission: "Automatic (CVT)", fuel: "Petrol",
    engine: "2.0L Boxer AWD", colour: "Dark Grey", bodyType: "SUV",
    condition: "Used", price: null, images: 1, image: "assets/img/car-subaru-xv.jpg",
    description: "2019 Subaru XV — symmetrical AWD crossover, well-equipped. On the lot now. Contact us for current price and full features.",
    status: "Available", featured: false
  }
];
