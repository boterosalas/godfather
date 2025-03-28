export interface PRODUCT_INTERFACE extends PRODUCT_INTERFACE_DB {
  id: string;
}

export interface PRODUCT_INTERFACE_DB {
  name: string;
  category: PRODUCT_CATEGORY;
  image: string;
  models: {
    model: string;
    availableIn?: string[];
    description?: string;
    dimensions?: string[];
    altDimensions?: {
      name: string;
      dimensions: string[];
    }[];
    features?: string[];
    functions?: string[];
    images: string[];
    subname?: string;
  }[];
}

export interface DIMENSIONS {
  width: string;
  depth: string;
  height: string;
}

export enum PRODUCT_CATEGORY {
  BAKERY_EQUIPMENT = 'Bakery Equipment',
  FOOD_DISPLAY = 'Food Display',
  OVENS = 'Ovens',
}

export const PRODUCTS_LIST: PRODUCT_INTERFACE_DB[] = [
  {
    name: 'Spiral Mixer',
    image: 'spiral-mixer-sh.jpeg',
    models: [
      {
        model: 'SH20',
        images: ['spiral-mixer-hx20.png'],
        features: [
          'Bowl capacity: 20L',
          'Power: 1.5KW',
          'Voltage: 110V /60Hz',
          'Bowl speed: 25/12 rpm',
          'Mixing speed: 250/125 rpm',
        ],
      },
      {
        model: 'SH30',
        images: ['spiral-mixer-hx20.png'],
        features: [
          'Dough capacity: 30L',
          'Voltage: 110V / 60Hz ',
          'Bowls speed: 25/12 rpm ',
          'Mixing speed: 250/125 rpm',
        ],
      },
      {
        model: 'SH50',
        images: ['spiral-mixer-hx20.png'],
        features: [
          'Dough capacity: 50L',
          'Mixing speed: 250/125 rpm',
          'Power: 3.0 kW',
          'Voltage: 220V / 60Hz',
          'Bowl’s speed: 25/12 rpm',
        ],
      },
    ],
    category: PRODUCT_CATEGORY.BAKERY_EQUIPMENT,
  },
  {
    name: 'Dough Sheeter',
    image: 'dough-sheeter-qs-400b.png',
    models: [
      {
        model: 'QS-520B2',
        images: [
          'dough-sheeter-qs-400b-1.jpg',
          'dough-sheeter-qs-400b-2.jpg',
          'dough-sheeter-qs-400b-3.jpg',
          'dough-sheeter-qs-400b-4.jpg',
          'dough-sheeter-qs-400b-5.jpg',
          'dough-sheeter-qs-400b-6.jpg',
          'dough-sheeter-qs-400b-7.jpg',
        ],
        features: [
          'Full Stainless Steel #201 body',
          'Overload protection, open-phase protection function.',
          'protection function.',
          'Voltage: 110V 60HZ',
          'Power: 0.55 KW',
          'Max. Dough capacity 13.22 LBS',
          'Net Weight: 570 LBS',
        ],
        dimensions: [
          'Stowed size: 38 x 29 x 65 Inches',
          'With Pu-Belt, size 15.7 x 63 Inches',
          'Roller adjustable gap 1-40mm',
          'Expanded size: 32 x 78 x 40 Inches',
        ],
      },
      {
        model: 'QS-400B',
        images: [
          'dough-sheeter-qs-400b-1.jpg',
          'dough-sheeter-qs-400b-2.jpg',
          'dough-sheeter-qs-400b-3.jpg',
          'dough-sheeter-qs-400b-4.jpg',
          'dough-sheeter-qs-400b-5.jpg',
          'dough-sheeter-qs-400b-6.jpg',
          'dough-sheeter-qs-400b-7.jpg',
        ],
        features: [
          'Full Stainless Steel #201 body',
          'Overload protection, open-phase protection function.',
          'Max. dough capacity 12.12 LBS',
          'Voltage: 110V 60HZ',
          'Power: 0.4 KW',
          'Weight 375 LBS',
        ],
        dimensions: [
          'Stowed size: 38 x 29 x 65 Inches',
          'With Pu-Belt, size 15.7 x 63 Inches',
          'Roller adjustable gap 1-40mm',
          'Expanded size: 32 x 78 x 40 Inches',
        ],
      },
    ],
    category: PRODUCT_CATEGORY.BAKERY_EQUIPMENT,
  },
  {
    name: 'Spiral Mixer',
    image: 'spiral-mixer-hx20.png',
    models: [
      {
        model: 'HX20',
        images: ['spiral-mixer-hx20.png'],
        features: [
          'Bowl Capacity: 20QT',
          'Power: 1300 W',
          'Voltage: 220V/60HZ',
          'Bowl Speed : 13-32 RPM',
          'Follow the Spiral',
          'Mixing Speed: 130-320 RPM',
        ],
        functions: [
          'Digital Control',
          'Gear and Belt Drive',
          '10 Variable Speed',
          'With Safety Guard',
        ],
      },
      {
        model: 'HX30',
        images: ['spiral-mixer-hx20.png'],
        features: [
          'Bowl Capacity: 30QT',
          'Power: 1800 W',
          'Voltage: 220V/60HZ',
          'Bowl Speed : 13-32 RPM',
          'Follow the Spiral',
          'Mixing Speed: 130-320 RPM',
        ],
        functions: [
          'Digital Control',
          'Gear and Belt Drive',
          '10 Variable Speed',
          'With Safety Guard',
        ],
      },
      {
        model: 'HX40',
        images: ['spiral-mixer-hx20.png'],
        features: [
          'Bowl Capacity: 40QT',
          'Power: 2600 W',
          'Voltage: 220V/60HZ',
          'Bowl Speed : 13-32 RPM',
          'Follow the Spiral',
          'Mixing Speed: 130-320 RPM',
        ],
        functions: [
          'Digital Control',
          'Gear and Belt Drive',
          '10 Variable Speed',
          'With Safety Guard',
        ],
      },
      {
        model: 'HX60',
        images: ['spiral-mixer-hx20.png'],
        features: [
          'Bowl Capacity: 60QT',
          'Power: 3300 W',
          'Voltage: 220V/60HZ',
          'Size: 4.55 X 24.8 X 40.55 inches',
          'Bowl Speed : 13-23 RPM',
          'Follow the Spiral',
          'Mixing Speed: 130-230 RPM',
        ],
        functions: [
          'Digital Control',
          'Gear and Belt Drive',
          '10 Variable Speed',
          'With Safety Guard',
        ],
      },
    ],
    category: PRODUCT_CATEGORY.BAKERY_EQUIPMENT,
  },
  {
    name: 'Planetary Mixer',
    image: '',
    models: [
      {
        model: 'BM20',
        images: [''],
        features: [
          'Capacity 20QT',
          'Heavy duty',
          'Power:0.38KW',
          'Voltage: 110V/60Hz/1PH',
          '3 Speeds',
          'Built in cast iron of high strength and durability',
          'Reinforced stainless steel bowl',
          'Rotary handle to raise and lower the bowl',
          'Ventilaon system by design',
          'With 3 accessories, Hook, Puffer and paddle',
        ],
        dimensions: [
          'Width: 22.83 Inches',
          'Depth: 26.77 Inches',
          'Height: 38.97 Inches',
        ],
      },
      {
        model: 'BM30',
        images: [''],
        features: [
          'Capacity 30QT',
          'Heavy duty',
          'Power: 0.75KW',
          'Voltage: 110V/60Hz/1PH',
          '3 Speeds',
          'Built in cast iron of high strength and durability',
          'Reinforced stainless steel bowl',
          'Rotary handle to raise and lower the bowl',
          'Ventilation system by design',
          'With 3 accessories, Hook, Puffer and paddle',
        ],
        dimensions: [
          'Width: 29.13 Inches',
          'Depth: 30.31 Inches',
          'Height: 47.63 Inches',
        ],
      },
      {
        model: 'BM40',
        images: [''],
        features: [
          'Capacity 40QT',
          'Heavy duty',
          'Power: 1.13KW',
          'Voltage: 220V/60Hz/1PH',
          '3 Speeds',
          'Built in cast iron of high strength and durability',
          'Reinforced stainless steel bowl',
          'Rotary handle to raise and lower the bowl',
          'Ventilation system by design',
          'With 3 accessories, Hook, Puffer and paddle',
        ],
        dimensions: [
          'Width: 29.13 Inches',
          'Depth: 30.31 Inches',
          'Height: 47.63 Inches',
        ],
      },
      {
        model: 'BM60',
        images: [''],
        features: [
          'Capacity 60QT',
          'Heavy duty',
          'Power: 2.25KW',
          'Voltage: 220V/60Hz/1PH',
          '3 Speeds',
          'Built in cast iron of high strength and durability',
          'Reinforced stainless steel bowl',
          'Rotary handle to raise and lower the bowl',
          'Ventilation system by design',
          'With 3 accessories, Hook, Puffer and paddle',
        ],
        dimensions: [
          'Width: 35.5 Inches',
          'Depth: 30 Inches',
          'Height: 55 Inches',
        ],
      },
      {
        model: 'BM80',
        images: [''],
        features: [
          'Capacity 80QT',
          'Heavy duty.',
          'Power: 3.75KW',
          'Voltage: 220V/60Hz/1PH',
          '3 Speeds',
          'Built in cast iron of high strength and durability',
          'Reinforced stainless steel bowl',
          'Rotary handle to raise and lower the bowl',
          'Ventilation system by design',
          'With 3 accessories, Hook, Puffer and paddle',
        ],
        dimensions: [
          'Width: 35.8 Inches',
          'Depth: 35.4 Inches',
          'Height: 58.6 Inches',
        ],
      },
    ],
    category: PRODUCT_CATEGORY.BAKERY_EQUIPMENT,
  },
  {
    name: 'Gas Deep Fryer',
    image: '3-burners-gas-deep-fryer.png',
    models: [
      {
        model: 'HFRF-90B-P',
        images: ['3-burners-gas-deep-fryer.png'],
        features: [
          'Full stainless steel body',
          'Temperature Setting 200°F to 400°F',
          'Burners: 3 tubes',
          'Power: 30.000×3 BTU =90.000BTU/35.16KW',
          'Oil Capacity: 18.5 – 23L',
          'Gas consumption (NG): 156m3/h',
          'Gas consumption (LPG): 36m3/h',
          'Gross Weight1: 144 pounds',
          'Recommended pounds per basket are 1.5 pounds',
        ],
        dimensions: [
          'Width: 15.5 Inches',
          'Depth: 29.8 Inches',
          'Height: 47 Inches',
        ],
      },
      {
        model: 'HFRF-120B',
        images: ['3-burners-gas-deep-fryer.png'],
        features: [
          'Full stainless steel body',
          'Temperature Setting 200°F to 400°F',
          'Burners: 4 tubes',
          'Power: 30,000×4 BTU =120000BTU/35.16KW',
          'Oil Capacity: 21.3 – 25L',
          'Gas consumption (NG): 156m3/h',
          'Gas consumption (LPG): 36m3/h',
          'Gross Weight: 157 pounds',
          'Recommended pounds per basket are 2.5 pounds',
        ],
        dimensions: [
          'Width: 15.5 Inches',
          'Depth: 29.8 Inches',
          'Height: 47 Inches',
        ],
      },
      {
        model: 'HFRF-150B',
        images: ['3-burners-gas-deep-fryer.png'],
        features: [
          'Full stainless steel body',
          'Temperature Setting 200°F to 400°F',
          'Burners: 5 tubes',
          'Power: 30,000×5 BTU =150000BTU/43.96KW',
          'Oil Capacity 31 – 37L',
          'Gas consumption (NG): 946m3/H',
          'Gas consumption (LPG): 7m3/H',
          'Gross Weight: 205.03 pounds',
          'Net Weight: 172 pounds',
          'Recommended pounds per basket are 3.0 pounds',
        ],
        dimensions: [
          'Width: 21.5 Inches',
          'Depth: 30.12 Inches',
          'Height: 45.75 Inches',
        ],
      },
      {
        model: 'HFRF-150B-F-T Double Tank',
        images: ['3-burners-gas-deep-fryer.png'],
        features: [
          'Full stainless steel body',
          'Temperature Setting 200°F to 400°F',
          'Burners: 4 tubes',
          'Power: 30,000×4 BTU =120000BTU/35.16KW',
          'Oil Capacity: 31 – 37L',
          'Gas consumption (NG): 156m3/H',
          'Gas consumption (LPG): 36m3/H',
          'Gross Weight: 157 pounds',
          'Recommended pounds per basket are 2.5 pounds',
        ],
        dimensions: [
          'Width: 21 Inches',
          'Depth: 30 Inches',
          'Height: 47 Inches',
        ],
      },
    ],
    category: PRODUCT_CATEGORY.BAKERY_EQUIPMENT,
  },
  {
    name: 'Dough Roller',
    image: 'dough-roller-24lb.jpg',
    models: [
      {
        model: '24LB',
        images: ['dough-roller-24lb.jpg'],
        features: [
          'Body made of Iron, has a double emergency stop',
          'Provided with power switch',
          'Capacity 24LB',
          'Power 3 horsepower',
          'Weg brand Motor',
          'Connection: 220 volts',
          '60 HZ/2.20KW/1PH',
          '110/220V',
          'RPM: 1730',
        ],
        dimensions: [
          'Width: 36.22 Inches',
          'Depth: 48.03 Inches',
          'Height: 59.05 Inches',
        ],
      },
    ],
    category: PRODUCT_CATEGORY.BAKERY_EQUIPMENT,
  },
  {
    name: 'Toast Moulder',
    image: 'toast-moulder.jpg',
    models: [
      {
        model: 'MD380',
        images: [
          'toast-moulder-1.jpg',
          'toast-moulder-2.jpg',
          'toast-moulder-3.jpg',
        ],
        features: [
          'Power 0.37kW',
          'Voltage: 110 v 60HZ',
          'Net Weight: 485LBS',
          'Capacity: 50gr - 1.200gr of dough',
        ],
        dimensions: [
          'Width: 22.8 Inches',
          'Depth: 53 Inches',
          'Height: 43 Inches',
        ],
      },
    ],
    category: PRODUCT_CATEGORY.BAKERY_EQUIPMENT,
  },
  {
    name: 'Dough Divider',
    image: 'dough-divider-hlm36.png',
    models: [
      {
        model: 'HLM36',
        images: ['dough-divider-hlm36.png'],
        features: [
          '36 pcs/time',
          'Dough Range 30-190G',
          'Voltage 110V / 60HZ',
          'Power: 0.75KW',
          'Net Weight: 375LB',
        ],
        dimensions: [
          'Width: 16 Inches',
          'Depth: 20 Inches',
          'Height: 48.8 Inches',
        ],
      },
    ],
    category: PRODUCT_CATEGORY.BAKERY_EQUIPMENT,
  },
  {
    name: 'Semi-Auto Dough Divider',
    image: 'semi-auto-dough-divider-and-rounder.jpg',
    models: [
      {
        model: 'Semi-Auto',
        images: [
          'semi-auto-dough-divider-and-rounder.jpg',
          'semi-auto-dough-divider-and-rounder-1.jpg',
          'semi-auto-dough-divider-and-rounder-2.jpg',
          'semi-auto-dough-divider-and-rounder-3.jpg',
          'semi-auto-dough-divider-and-rounder-4.jpg',
          'semi-auto-dough-divider-and-rounder-5.jpg',
          'semi-auto-dough-divider-and-rounder-6.jpg',
          'semi-auto-dough-divider-and-rounder-7.jpg',
        ],
        features: [
          'Dough Range: 30-100G',
          'Capacity: 30 pcs/time',
          'Voltage 110V/60HZ',
          'Power: 0.75KW',
          'Net Weight: 705 pounds',
        ],
        dimensions: [
          'Width: 23.62 Inches',
          'Depth: 24.8 Inches',
          'Height: 53.2 Inches',
        ],
      },
    ],
    category: PRODUCT_CATEGORY.BAKERY_EQUIPMENT,
  },
  {
    name: 'Manual Dough Divider',
    image: 'manual-dough-divider.jpg',
    models: [
      {
        model: 'Manual',
        images: ['manual-dough-divider.jpg', 'manual-dough-divider.jpg-1'],
        features: [
          '36 pcs',
          'Steel Disc',
          'Aluminum plate',
          'Body made in Iron',
        ],
        dimensions: [
          'Width: 35 Inches',
          'Depth: 25 Inches',
          'Height: 23 Inches',
          'Aprox. weight: 125 pounds',
        ],
      },
    ],
    category: PRODUCT_CATEGORY.BAKERY_EQUIPMENT,
  },
  {
    name: 'Heating Display',
    image: 'warm-food-26.png',
    models: [
      {
        model: '26 Inches',
        images: [
          'warm-food-26.png',
          'warm-food-26.png-1',
          'warm-food-26.png-2',
          'warm-food-26.png-3',
          'warm-food-26.png-4',
          'warm-food-26.png-5',
          'warm-food-26.png-6',
          'warm-food-26.png-7',
          'warm-food-26.png-8',
          'warm-food-26.png-9',
        ],
        features: [
          'European-style Square Display',
          'Temperature Control',
          'Uniform Heating: Ensures even distribution of heat to prevent cold spots',
          'Stainless Steel Structure',
          'Lighting: LED',
          '110V',
          'Clear Glass Panels: Offers a view of the food while keeping it protected',
          'Decorative Formica In Rh Wood Style',
        ],
        dimensions: [
          'Width: 26 Inches',
          'Depth: 28 Inches',
          'Height: 48 Inches',
        ],
      },
      {
        model: '38 Inches',
        images: [],
        features: [
          'European-style Square Display',
          'Temperature Control',
          'Uniform Heating: Ensures even distribution of heat to prevent cold spots',
          'Stainless Steel Structure',
          'Lighting: LED',
          '110V',
          'Clear Glass Panels: Offers a view of the food while keeping it protected',
          'Decorative Formica In Rh Wood Style',
        ],
        dimensions: [
          'Width: 38 Inches',
          'Depth: 28 Inches',
          'Height: 47 Inches',
        ],
      },
    ],
    category: PRODUCT_CATEGORY.FOOD_DISPLAY,
  },
  {
    name: 'Bakery Dry',
    image: '',
    models: [
      {
        model: '48 Inches',
        images: [],
        features: [
          'European-style square display',
          'Clear Glass Fronts: Provides an unobstructed view of the items, enhancing visual appeal',
          'Structure made of stainless steel',
          'Doors with aluminum frame',
          'Lighting: LED',
          'Decorative Formica in RH wood style',
        ],
        dimensions: [
          'Width: 47.5 Inches',
          'Depth: 47.5 Inches',
          'Height: 28 Inches',
        ],
      },
      {
        model: '60 Inches',
        images: [],
        features: [
          'European-style square display',
          'Clear Glass Fronts: Provides an unobstructed view of the items, enhancing visual appeal',
          'Structure made of stainless steel',
          'Doors with aluminum frame',
          'Lighting: LED',
          'Decorative Formica in RH wood style',
        ],
        dimensions: [
          'Width: 59.5 Inches',
          'Depth: 47.5 Inches',
          'Height: 28 Inches',
        ],
      },
    ],
    category: PRODUCT_CATEGORY.FOOD_DISPLAY,
  },
  {
    name: 'Cold Display',
    image: '',
    models: [
      {
        model: '48 Inches',
        images: [],
        features: [
          'European-style square display',
          'Structure made of stainless steel',
          'Adjustable Thermostat: Ensure optimal storage temperature for cakes',
          'Humidity Regulation: Helps maintain the freshness and texture of cakes',
          'Doors with aluminum frame',
          'Lighting: LED',
          'Environmentally Friendly R290 refrigerant',
          'Cooling: 35 to 42 °F',
          'Formica in RH wood',
        ],
        dimensions: [
          'Width: 47.5 Inches',
          'Depth: 28 Inches',
          'Height: 47 Inches',
        ],
      },
      {
        model: '60 Inches',
        images: [],
        features: [
          'European-style square display',
          'Structure made of stainless steel',
          'Adjustable Thermostat: Ensure optimal storage temperature for cakes',
          'Humidity Regulation: Helps maintain the freshness and texture of cakes',
          'Doors with aluminum frame',
          'Lighting: LED',
          'Environmentally Friendly R290 refrigerant',
          'Cooling: 35 to 42 °F',
          'Formica in RH wood',
        ],
        dimensions: [
          'Width: 59.5 Inches',
          'Depth: 28 Inches',
          'Height: 47 Inches',
        ],
      },
    ],
    category: PRODUCT_CATEGORY.FOOD_DISPLAY,
  },
  {
    name: 'Bakery Boor Display',
    image: 'bakery-door-display-21-trays-dark.png',
    models: [
      {
        model: '14 Trays',
        images: [
          'bakery-door-display-14-trays.png',
          'bakery-door-display-14-trays-1.png',
          'bakery-door-display-14-trays-2.png',
          'bakery-door-display-14-trays-3.png',
          'bakery-door-display-14-trays-4.png',
          'bakery-door-display-14-trays-5.png',
          'bakery-door-display-14-trays-6.png',
          'bakery-door-display-14-trays-7.png',
          'bakery-door-display-14-trays-8.png',
          'bakery-door-display-14-trays-9.png',
        ],
        features: [
          'European-style square display',
          'For 14 trays',
          'Structure made of stainless steel',
          'Front Doors with aluminum frame',
          'Lighting: LED',
          'Formica in RH wood style.',
          'Self-Service display',
        ],
        dimensions: [
          'Width: 46 Inches',
          'Depth: 30 Inches',
          'Height: 80 Inches',
        ],
      },
      {
        model: '21 Trays',
        images: [
          'bakery-door-display-21-trays-dark.png',
          'bakery-door-display-21-trays-dark-1.png',
          'bakery-door-display-21-trays-dark-2.png',
          'bakery-door-display-21-trays-dark-3.png',
          'bakery-door-display-21-trays-dark-4.png',
          'bakery-door-display-21-trays-dark-5.png',
          'bakery-door-display-21-trays-dark-6.png',
          'bakery-door-display-21-trays-light.png',
          'bakery-door-display-21-trays-light-1.png',
          'bakery-door-display-21-trays-light-2.png',
          'bakery-door-display-21-trays-light-3.png',
          'bakery-door-display-21-trays-light-4.png',
          'bakery-door-display-21-trays-light-5.png',
          'bakery-door-display-21-trays-light-6.png',
          'bakery-door-display-21-trays-light-7.png',
          'bakery-door-display-21-trays-light-8.png',
        ],
        features: [
          'European-style square display',
          'For 21 trays',
          'Structure made of stainless steel',
          'Front Doors with aluminum frame',
          'Lighting: LED',
          'Formica in RH wood style.',
          'Self-Service display',
        ],
        dimensions: [
          'Width: 60 Inches',
          'Depth: 30 Inches',
          'Height: 80 Inches',
        ],
      },
      {
        model: '28 Trays',
        images: [],
        features: [
          'European-style square display',
          'For 28 trays',
          'Structure made of stainless steel',
          'Front Doors with aluminum frame',
          'Lighting: LED',
          'Formica in RH wood style.',
          'Self-Service display',
        ],
        dimensions: [
          'Width: 80 Inches',
          'Depth: 30 Inches',
          'Height: 80 Inches',
        ],
      },
    ],
    category: PRODUCT_CATEGORY.FOOD_DISPLAY,
  },
  {
    name: 'Rotatory Ovens',
    image: 'rotary-oven-5-trays.png',
    models: [
      {
        model: '5 Trays',
        images: [
          'rotary-oven-5-trays.png',
          'rotary-oven-5-trays-1.png',
          'rotary-oven-5-trays-2.png',
          'rotary-oven-5-trays-3.png',
          'rotary-oven-5-trays-4.png',
          'rotary-oven-5-trays-5.png',
          'rotary-oven-5-trays-6.png',
        ],
        features: [
          'Electric Rotatory oven 5 trays',
          'With fix oven rack',
          'Capacity: 5 trays (25.29 x 17.71 inches with 3.93 inches of separation Between Each Tray)',
          'Made of Stainless Steel',
          'Convection type system and rotation system with direct heating',
          'Type of electrical connection: 220V/Single phase',
        ],
        altDimensions: [
          {
            name: 'Oven',
            dimensions: [
              'Width: 38.5 Inches',
              'Depth: 52.5 Inches (46.5’ + 6’ electric box)',
              'Height: 37.5 Inches (33.5’ + 4’ engine)',
            ],
          },
          {
            name: 'Base',
            dimensions: [
              'Width: 38.5 Inches',
              'Depth: 46.5 Inches',
              'Height: 36 Inches',
            ],
          },
          {
            name: 'Oven & Base',
            dimensions: [
              'Width: 38.5 Inches',
              'Depth: 52.5 Inches (46.5’ + 6’ electric box)',
              'Height: 75.5 Inches (69.5’ + 6’ engine)',
            ],
          },
        ],
      },
      {
        model: '10 Trays',
        images: [
          'rotary-oven-10-trays.png',
          'rotary-oven-10-trays-1.png',
          'rotary-oven-10-trays-2.png',
          'rotary-oven-10-trays-3.png',
        ],
        features: [
          'Rotary oven for 10 trays',
          'With 2 Removable rotary oven racks with 8 & 10 trays',
          'Capacity: 10 trays (25.59 x 17.71 Inches with 3.93 Inches of separation between each tray)',
          'Made of stainless steel',
          'Convection type system and rotation system, with direct heating',
        ],
        dimensions: [
          'Width: 41 Inches',
          'Depth: 59 Inches',
          'Height: 67 Inches',
        ],
        availableIn: [
          'Gas type: Natural or propane',
          'Electric power: 220V / Single-phase',
        ],
      },
      {
        model: '12 Trays',
        images: [
          'rotary-oven-12-trays.png',
          'rotary-oven-12-trays-1.png',
          'rotary-oven-12-trays-2.png',
          'rotary-oven-12-trays-3.png',
          'rotary-oven-12-trays-4.png',
          'rotary-oven-12-trays-5.png',
          'rotary-oven-12-trays-6.png',
        ],
        features: [
          'Rotary oven for 12 trays',
          'With 2 Removable rotary oven racks with 10 & 12 trays',
          'Capacity: 12 trays (25.59 x 17.71 Inches with 3.93 Inches of separation between each tray)',
          'Made of stainless steel',
          'Convection type system and rotation system, with direct heating',
        ],
        dimensions: [
          'Width: 41 Inches',
          'Depth: 59 Inches',
          'Height: 74 Inches',
        ],
        availableIn: [
          'Gas type: Natural or propane',
          'Electric power: 220V / Single-phase',
        ],
      },
      {
        model: '18 Trays',
        images: [''],
        features: [
          'Rotary oven for 18 trays',
          'With 2 Removable rotary oven racks with 18 & 15 trays',
          'Capacity: 18 trays (25.59 x 17.71 Inches with 3.93 Inches of separation between each tray)',
          'Made of stainless steel',
          'Convection type system and rotation system, with direct heating',
        ],
        dimensions: [
          'Width: 46 Inches',
          'Depth: 68 Inches',
          'Height: 96 Inches',
        ],
        availableIn: [
          'Gas type: Natural or propane',
          'Electric power: 220V / 60HZ',
        ],
      },
    ],
    category: PRODUCT_CATEGORY.OVENS,
  },
  {
    name: 'Electric Convection Oven',
    image: 'electric-convection-oven.png',
    models: [
      {
        model: 'HECO4A',
        images: ['electric-convection-oven.png'],
        features: [
          'Full stainless steel body',
          'Material: Stainless steel',
          'Chamber size(MM):460x373x358',
          'Temperature range:50-300 Celsius',
          'Power: 2670/2000W',
          'Voltage: 220V/60HZ',
        ],
        dimensions: [
          'Width: 23.42 Inches',
          'Depth: 23.62 Inches',
          'Height: 22.48 Inches',
        ],
      },
    ],
    category: PRODUCT_CATEGORY.OVENS,
  },
  {
    name: 'Gas Convection Oven',
    image: '',
    models: [
      {
        model: 'HRCO-60K',
        images: [],
        features: [
          'Full stainless steel body.',
          'Gross Weight: 529.10 pounds',
          'Main material: Ss201',
          'Heating Power: 60000 BTU',
          'Temp. Range: 150°F~500°F',
          'Deck: 10tiers',
          'Baking way: Hot Air',
          'Convection',
          'Natural gas / Propane gas',
        ],
        dimensions: [
          'Width: 38.11 Inches',
          'Depth: 41.69 Inches',
          'Height: 57.16 Inches',
        ],
      },
      {
        model: 'HRCO-60KD/LPG',
        images: [],
        features: [
          'Full stainless steel body',
          'Main material: Ss201',
          'Heating Power: 60000 BTU',
          'Temp. Range: 150°F~500°F',
          'Deck: 10tiers',
          'Baking way: Hot Air',
          'Convection',
          'Natural gas / Propane gas',
        ],
        dimensions: [
          'Width: 38.11 Inches',
          'Depth: 41.69 Inches',
          'Height: 61 Inches',
        ],
      },
    ],
    category: PRODUCT_CATEGORY.OVENS,
  },
];
