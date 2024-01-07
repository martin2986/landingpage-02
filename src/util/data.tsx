type filterType = string[];
export type itemData = {
  id: number;
  houseName: string;
  address: string;
  houseType: string;
  price: number;
  image: string;
  description: string;
};

export const locationData: filterType = ["Berlin", "Cologne", "Frankfurt"];
export const homeTypeData: filterType = ["Apartment", "House", "Villa"];

export const apartmentData: itemData[] = [
  {
    id: 1,
    houseName: "Modern brick home",
    address: "123 Main St",
    houseType: "House",
    price: 200000,
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Charming cottage with a lovely garden, perfect for a small family or a peaceful retreat. Recently renovated with modern amenities.",
  },
  {
    id: 2,
    houseName: "Modern Apartment",
    address: "456 Elm St",
    houseType: "Apartment",
    price: 350000,
    image:
      "https://images.unsplash.com/photo-1628592102751-ba83b0314276?q=80&w=1397&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Stylish and modern apartment located in the bustling city center. Offers convenience and luxury living with stunning city views.",
  },
  {
    id: 3,
    houseName: "Modern red brick home",
    address: "789 Oak St",
    houseType: "House",
    price: 450000,
    image:
      "https://images.unsplash.com/photo-1605146768851-eda79da39897?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Sprawling ranch nestled in serene landscapes, perfect for nature lovers. Abundant space for outdoor activities and relaxation.",
  },
  {
    id: 4,
    houseName: "Luxury Villa",
    address: "101 Luxury Blvd",
    houseType: "Villa",
    price: 1500000,
    image:
      "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Exquisite luxury mansion with grandeur and sophistication. Boasts lavish interiors, expansive grounds, and top-notch amenities.",
  },
  {
    id: 5,
    houseName: "Beachfront Villa",
    address: "11 Ocean View",
    houseType: "Villa",
    price: 1200000,
    image:
      "https://images.unsplash.com/photo-1503174971373-b1f69850bded?q=80&w=1513&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Captivating beachfront villa offering stunning ocean views. Ideal for luxurious beachside living and entertaining guests.",
  },
  {
    id: 6,
    houseName: "Mountain Cabin",
    address: "22 Summit Way",
    houseType: "House",
    price: 300000,
    image:
      "https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Cozy mountain cabin tucked away in tranquil surroundings. Escape to nature with hiking trails and scenic views.",
  },
  {
    id: 7,
    houseName: "Glass Villa",
    address: "33 Skyline Ave",
    houseType: "Villa",
    price: 850000,
    image:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Upscale city penthouse offering panoramic cityscapes. Experience urban luxury living at its finest.",
  },
  {
    id: 8,
    houseName: "Modern Apartment",
    address: "44 Lakeside Dr",
    houseType: "Apartment",
    price: 500000,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
    description:
      "Tranquil lake house retreat with serene water views. Perfect for relaxation and enjoying waterfront activities.",
  },
  {
    id: 9,
    houseName: "Modern Apartment",
    address: "55 Greenbelt Ln",
    houseType: "Apartment",
    price: 400000,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Modern suburban townhouse in a family-friendly neighborhood. Offers comfort and convenience with a community feel.",
  },
  {
    id: 10,
    houseName: "Cozy Wooden type apartment",
    address: "66 Farmland Rd",
    houseType: "Apartment",
    price: 275000,
    image:
      "https://images.unsplash.com/photo-1612320648993-61c1cd604b71?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Charming rustic farmhouse surrounded by fields and greenery. Embrace country living with modern comforts.",
  },
  {
    id: 11,
    houseName: "Modern Spacious Apartment",
    address: "77 Rose Garden",
    houseType: "Apartment",
    price: 225000,
    image:
      "https://images.unsplash.com/flagged/photo-1573168710465-7f7da9a23a15?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Quaint garden bungalow with a delightful outdoor space. Perfect for relaxation and enjoying nature.",
  },
  {
    id: 12,
    houseName: "Beach Side Villa",
    address: "88 Loftway",
    houseType: "Villa",
    price: 600000,
    image:
      "https://images.unsplash.com/photo-1622015663084-307d19eabbbf?q=80&w=1342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Chic urban loft in a vibrant neighborhood. Industrial design with modern amenities and urban lifestyle.",
  },
];
