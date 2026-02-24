export type CarCategory = "Economy" | "Sedan" | "SUV" | "Luxury" | "Van" | "Pickup";

export interface Car {
  id: string;
  name: string;
  price: string;
  priceNum: number | null;
  image: string;
  category: CarCategory;
  seats: number;
  transmission: string;
  ac: boolean;
  featured?: boolean;
}

export const cars: Car[] = [
  { id: "alto", name: "Suzuki Alto", price: "4,000/day", priceNum: 4000, image: "https://isbrentacar.pk/wp-content/uploads/2023/09/Studio-Session-524_04-removebg-preview.png", category: "Economy", seats: 4, transmission: "Manual", ac: true },
  { id: "cultus", name: "Suzuki Cultus", price: "4,500/day", priceNum: 4500, image: "https://isbrentacar.pk/wp-content/uploads/2023/08/suzuki_cultus.png", category: "Economy", seats: 4, transmission: "Manual", ac: true },
  { id: "honda-city", name: "Honda City New", price: "6,000/day", priceNum: 6000, image: "https://isbrentacar.pk/wp-content/uploads/2023/08/Honda-City-2023.png", category: "Sedan", seats: 5, transmission: "Automatic", ac: true, featured: true },
  { id: "gli-2014", name: "Toyota GLI 2014", price: "5,000/day", priceNum: 5000, image: "https://isbrentacar.pk/wp-content/uploads/2023/08/Toyota-GLI-2014.png", category: "Sedan", seats: 5, transmission: "Manual", ac: true },
  { id: "apv", name: "Suzuki APV", price: "7,000/day", priceNum: 7000, image: "https://isbrentacar.pk/wp-content/uploads/2023/08/Suzuki_APV-e1693062261947.png", category: "Van", seats: 8, transmission: "Manual", ac: true },
  { id: "brv-new", name: "Honda BRV New Model", price: "7,000/day", priceNum: 7000, image: "https://isbrentacar.pk/wp-content/uploads/2023/08/Honda_BRV_Latest.png", category: "SUV", seats: 7, transmission: "Automatic", ac: true, featured: true },
  { id: "brv-7", name: "Honda BRV 7 Seater", price: "8,000/day", priceNum: 8000, image: "https://isbrentacar.pk/wp-content/uploads/2023/09/BRV-768x494.png", category: "SUV", seats: 7, transmission: "Automatic", ac: true },
  { id: "karvaan", name: "Changan Karvaan", price: "6,000/day", priceNum: 6000, image: "https://isbrentacar.pk/wp-content/uploads/2023/08/Changan_Karvaan-240x145.png", category: "Van", seats: 7, transmission: "Manual", ac: true },
  { id: "yaris", name: "Toyota Yaris", price: "6,000/day", priceNum: 6000, image: "https://isbrentacar.pk/wp-content/uploads/2023/08/TOYOTA-YARIS.png", category: "Sedan", seats: 5, transmission: "Automatic", ac: true, featured: true },
  { id: "gli-2017", name: "Toyota GLI 2017", price: "6,000/day", priceNum: 6000, image: "https://isbrentacar.pk/wp-content/uploads/2023/08/2017_Toyota_Corolla_Gli.png", category: "Sedan", seats: 5, transmission: "Automatic", ac: true },
  { id: "gli-2022", name: "Toyota GLI 2022", price: "7,000/day", priceNum: 7000, image: "https://isbrentacar.pk/wp-content/uploads/2023/08/toyota_gli_2022.png", category: "Sedan", seats: 5, transmission: "Automatic", ac: true },
  { id: "civic-2018", name: "Honda Civic 2018", price: "7,000/day", priceNum: 7000, image: "https://isbrentacar.pk/wp-content/uploads/2023/09/ec2704cfe58c409ba628917db0b374de_1125x630-removebg-preview.png", category: "Sedan", seats: 5, transmission: "Automatic", ac: true },
  { id: "civic", name: "Honda Civic", price: "12,000/day", priceNum: 12000, image: "https://isbrentacar.pk/wp-content/uploads/2023/08/Honda_Civic-e1693062592221.png", category: "Sedan", seats: 5, transmission: "Automatic", ac: true, featured: true },
  { id: "oshan", name: "Changan Oshan X7", price: "12,000/day", priceNum: 12000, image: "https://isbrentacar.pk/wp-content/uploads/2023/08/changan_oshan.png", category: "SUV", seats: 7, transmission: "Automatic", ac: true },
  { id: "fortuner", name: "Toyota Fortuner", price: "15,000/day", priceNum: 15000, image: "https://isbrentacar.pk/wp-content/uploads/2023/09/toyota-fortuner-1024x631.png", category: "SUV", seats: 7, transmission: "Automatic", ac: true, featured: true },
  { id: "vigo", name: "Toyota Vigo 2014", price: "9,000/day", priceNum: 9000, image: "https://isbrentacar.pk/wp-content/uploads/2023/08/Toyota-Hilux_2015-e1694084569661.png", category: "Pickup", seats: 5, transmission: "Manual", ac: true },
  { id: "revo", name: "Toyota Revo New Model", price: "12,000/day", priceNum: 12000, image: "https://isbrentacar.pk/wp-content/uploads/2023/09/Revo_Rocco_Super-White-1024x519.png", category: "Pickup", seats: 5, transmission: "Automatic", ac: true },
  { id: "prado", name: "Land Cruiser Prado 2019", price: "15,000/day", priceNum: 15000, image: "https://isbrentacar.pk/wp-content/uploads/2023/08/toyota-prado-tx-2019-e1696099229582-300x225.png", category: "SUV", seats: 7, transmission: "Automatic", ac: true },
  { id: "v8", name: "Toyota Land Cruiser V8", price: "25,000/day", priceNum: 25000, image: "https://isbrentacar.pk/wp-content/uploads/2023/08/Toyota-Land-Cruiser-V8-2023-Price-in-Pakistan-removebg-preview.png", category: "Luxury", seats: 7, transmission: "Automatic", ac: true, featured: true },
  { id: "hiace-200", name: "Toyota Hiace 200", price: "8,000/day", priceNum: 8000, image: "https://isbrentacar.pk/wp-content/uploads/2023/08/hi_roof_200_series.png", category: "Van", seats: 14, transmission: "Manual", ac: true },
  { id: "hiace-214", name: "Toyota Hiace 214", price: "9,000/day", priceNum: 9000, image: "https://isbrentacar.pk/wp-content/uploads/2023/08/hiroof.png", category: "Van", seats: 14, transmission: "Manual", ac: true },
  { id: "grand-cabin", name: "Toyota Grand Cabin 224", price: "10,000/day", priceNum: 10000, image: "https://isbrentacar.pk/wp-content/uploads/2023/08/Toyota-Hiace-2004.png", category: "Van", seats: 14, transmission: "Manual", ac: true },
  { id: "coaster-4c", name: "Toyota Coaster 4C Saloon", price: "15,000/day", priceNum: 15000, image: "https://isbrentacar.pk/wp-content/uploads/2023/08/saloon-coaster-removebg-preview.png", category: "Van", seats: 29, transmission: "Manual", ac: true },
  { id: "coaster-5c", name: "Toyota Coaster 5C Saloon", price: "18,000/day", priceNum: 18000, image: "https://isbrentacar.pk/wp-content/uploads/2023/08/4th-generation-Toyota-Coaster.png", category: "Van", seats: 29, transmission: "Manual", ac: true },
  { id: "c300", name: "Mercedes C300", price: "On Call", priceNum: null, image: "https://isbrentacar.pk/wp-content/uploads/2023/10/ezgif.com-webp-to-jpg__9_-removebg-preview.png", category: "Luxury", seats: 5, transmission: "Automatic", ac: true },
  { id: "e300", name: "Mercedes E300", price: "On Call", priceNum: null, image: "https://isbrentacar.pk/wp-content/uploads/2023/10/ezgif.com-webp-to-jpg__9_-removebg-preview.png", category: "Luxury", seats: 5, transmission: "Automatic", ac: true },
  { id: "s400", name: "Mercedes S400", price: "On Call", priceNum: null, image: "https://isbrentacar.pk/wp-content/uploads/2023/10/HD-wallpaper-mercedes-benz-s400-bluehyrbid-front-left-quarter-car-removebg-preview.png", category: "Luxury", seats: 5, transmission: "Automatic", ac: true },
  { id: "s500", name: "Mercedes S500", price: "On Call", priceNum: null, image: "https://isbrentacar.pk/wp-content/uploads/2023/08/mercedes_benz_s500.png", category: "Luxury", seats: 5, transmission: "Automatic", ac: true },
  { id: "velar", name: "Range Rover Velar", price: "On Call", priceNum: null, image: "https://isbrentacar.pk/wp-content/uploads/2023/08/Land-Rover-Range-Rover-Velar.png", category: "Luxury", seats: 5, transmission: "Automatic", ac: true },
  { id: "sv-coupe", name: "Range Rover SV Coupé", price: "On Call", priceNum: null, image: "https://isbrentacar.pk/wp-content/uploads/2023/08/Range_Rover_SV.png", category: "Luxury", seats: 5, transmission: "Automatic", ac: true },
  { id: "evoque", name: "Range Rover Evoque", price: "On Call", priceNum: null, image: "https://isbrentacar.pk/wp-content/uploads/2023/08/Range_Rover_Evoque.png", category: "Luxury", seats: 5, transmission: "Automatic", ac: true },
  { id: "a3", name: "Audi A3", price: "30,000/day", priceNum: 30000, image: "https://isbrentacar.pk/wp-content/uploads/2023/09/AUDI_A3.png", category: "Luxury", seats: 5, transmission: "Automatic", ac: true },
  { id: "a4", name: "Audi A4", price: "40,000/day", priceNum: 40000, image: "https://isbrentacar.pk/wp-content/uploads/2023/09/Audi-A4.png", category: "Luxury", seats: 5, transmission: "Automatic", ac: true },
  { id: "a5", name: "Audi A5", price: "50,000/day", priceNum: 50000, image: "https://isbrentacar.pk/wp-content/uploads/2023/09/Audi_A5.png", category: "Luxury", seats: 5, transmission: "Automatic", ac: true },
  { id: "a6", name: "Audi A6", price: "60,000/day", priceNum: 60000, image: "https://isbrentacar.pk/wp-content/uploads/2023/09/audi_a6.png", category: "Luxury", seats: 5, transmission: "Automatic", ac: true },
];

export const categories: CarCategory[] = ["Economy", "Sedan", "SUV", "Luxury", "Van", "Pickup"];
