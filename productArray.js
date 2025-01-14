const productArray = [
  {  
    id:1,
    name: "Musk",
    description: "Sticky Musk , long lasting notes ,light fragrance ",
    price: "₹2000",
    previousprice:"₹3000",
    category: "oil",
    image: "pics/AdobeStock_552679291_Preview.jpeg",
  },
  { id:2,
    name: "Oud Malaki",
    description: "Royal Oud takes you back to the Arabian knights",
    price: "₹2000",
    previousprice:"₹3000",
    category: "oil",
    image: "pics/image_fx_attar_oud_oil_image__950_px_width__530px_he (5).jpg",
  },

  {  
    id:3,
    name: "Musk Rose Pink",
    description: "Royal Musk takes you back to the Arabian knights",
    Sub: "bestseller",
    price: "₹1000",
    previousprice:"₹2000",
    category: "oil",
    image: "pics/oils/muskpink.jpeg",
  },
  { 
    id:4,
    name: "Rose Oil",
    description:
      "Experience the timeless elegance of Rose with this exquisite scent ",
    price: "₹750",
    previousprice:"₹1000",
    category: "oil",
    image: "pics/oils/image_fx_attar_oud_oil_image__950_px_width__530px_he.jpg",
  },

  { id:5, 
    name: "Oud Cambodi",
    description: "Exotic Cambodian oud with deep woody tones",
    Sub: "bestseller",
    price: "₹2500",
    category: "oil",
    previousprice:"₹3000",
    image: "pics/oils/AdobeStock_196059371_Preview.jpeg",
  },
  { id:6,
    name: "Oud Saffron",
    description:
      "Luxurious saffron-infused oud for a rich fragrance experience",
    price: "₹2200",
    previousprice:"₹3500",
    category: "oil",
    image: "pics/oils/banner4.jpeg",
  },
  { 
    id:7,
    name: "Oud Rose",
    description: "Elegant blend of oud and rose petals for a floral oud scent",
    price: "₹2300",
    previousprice:"₹3600",
    category: "oil",
    image: "pics/oils/240_F_234927522_Ej2COntDR8MjCSUJGFHm6qdLpn2Qxqe1.jpg",
  },
  { 
    id:8,
    name: "Oud Amber",
    description: "Warm amber notes combined with oud for a captivating aroma",
    price: "₹2400",
    previousprice:"₹3000",
    category: "oil",
    image:
      "pics/oils/image_fx_attar_oud_perfume_banner_image_landscape_mod.jpg",
  },
  {
    id:9,
    name: "Oud Vanilla",
    description: "Vanilla-infused oud with a sweet and comforting fragrance",
    price: "₹2100",
    previousprice:"₹3000",
    category: "oil",
    image: "pics/oils/AdobeStock_235631572_Preview.jpeg",
  },
  { 
    id:10,
    name: "Dehn Al Oud Hindi",
    description:
      "Rich and aromatic fragrance crafted from the finest Hindi Oud Wood",
    price: "₹2000",
    previousprice:"₹3000",
    category: "oil",
    image: "pics/oils/DeWatermark.ai_1712134307112.png",
  },

  { 
    id:11,
    name: "Madinah Musk",
    description:
      "Luxurious French oils mixed with roses and drops of Zamzam water",
    price: "₹1300",
    previousprice:"₹3000",
    category: "oil",
    image: "pics/oils/MADINAH MUSK.jpg",
  },
  { 
    id:12,
    name: "Kashab Al Oud",
    description:
      "A captivating blend of rich woody notes, deep earthy tones, and a hint of musk",
    category: "oil",
    price: "₹1500",
    previousprice:"₹3000",
    image: "pics/oils/240_F_203773123_7xas1FYYN1M63h3zSH3to6mCnk1SvGKs.jpg",
  },
  { 
    id:13,
    name: "Mukhallat Oud",
    description:
      "The strongest type of Oud, makes your scent luxurious and authentic ",
      Sub: "bestseller",
    category: "oil",
    price: "₹1300",
    previousprice:"₹3000",
    image: "pics/AdobeStock_181095222_Preview.jpeg",
  },
  { 
    id:14,
    name: "Madawi",
    description:
      "The aromatic bouquet of fruits, base of roses, patchouli and musk",
    category: "oil",
    price: "₹3000",
    previousprice:"₹3000",
    image:
      "pics/oils/image_fx_attar_oud_perfume_image_950_px_width__530px (2).jpg",
  },
  { 
    id:15, 
    name: "Amber Zamzam",
    description:
      "Oil with the luxury of musk added to it drops of Zamzam water.",
    category: "oil",
    price: "₹1400",
    previousprice:"₹3000",
    image: "pics/oils/amber zamazam.jpeg",
  },
  { 
    id:16, 
    name: "Bakhoor Ahmad",
    description:
      " Smoky woodiness of the scent, the warm amber, incense, and sandalwood ",
    Sub: "bestseller",
    category: "bakhoor",
    price: "₹1000",
    previousprice:"₹3000",
    image: "pics/Bakhoor/AdobeStock_517533453_Preview.jpeg",
  },
  { 
    id:17,
    name: "Indian Oud Wood",
    description:
      "Derived from the resinous heartwood of agarwood trees native to India",
    category: "bakhoor",
    price: "₹2000",
    previousprice:"₹3000",
    image: "pics/Bakhoor/AdobeStock_517533399_Preview.jpeg",
  },
  { 
    id:18,
    name: "Cambodian Wood",
    description:
      "Wood from the heart of Cambodia, rich in terpenes and fragrance",
    category: "bakhoor",
    price: "₹2500",
    previousprice:"₹3000",
    image: "pics/Bakhoor/AdobeStock_173535419_Preview.jpeg",
  },
  { 
    id:19,
    name: "Saffron Amber",
    description:
      "Captivating blend of saffron and amber notes, creating an enticing and alluring atmosphere.",
    category: "bakhoor",
    price: "₹1800",
    previousprice:"₹3000",
    image: "pics/Bakhoor/240_F_140258069_K60BKIVFfISApDb7a0ZCmPCwJjndeH5o.jpg",
  },
  {
    id:20,
    name: "Rose Oud Bakhoor",
    description:
      "Combination of rose essence and oud wood, offering a delicate yet potent floral fragrance.",
    category: "bakhoor",
    price: "₹2200",
    previousprice:"₹3000",
    image: "pics/Bakhoor/AdobeStock_745161057_Preview.jpeg",
  },
  { 
    id:21,
    name: "Musk Oud Bakhoor",
    description:
      "Musk-infused oud wood with a musky, sensual aroma that lingers and captivates the senses.",
    category: "bakhoor",
    price: "₹2100",
    previousprice:"₹3000",
    image: "pics/Bakhoor/AdobeStock_549362914_Preview.jpeg",
  },

  { 
    id:22,
    name: "Arabian Nights",
    description:
      "A mesmerizing blend of oud, spices, and florals, evoking the enchanting atmosphere of Arabian nights.",
    category: "perfume",
    price: "₹3000",
    previousprice:"₹4000",
    image: "pics/perfumes/arabian knight.png",
  },
  { 
    id:23,
    name: "Sultan's Oud",
    description:
      "Regal and sophisticated, Sultan's Oud combines rich oud with hints of leather and tobacco for a luxurious fragrance.",
      Sub: "bestseller",
    category: "perfume",
    price: "₹3500",
    previousprice:"₹4000",
    image: "pics/perfumes/prfme.jpeg",
  },
  { 
    id:24,
    name: "Oud Royale",
    description:
      "Exquisite and refined, Oud Royale features the finest oud wood with a touch of saffron and ambergris.",
    category: "perfume",
    price: "₹4000",
    previousprice:"₹4500",
    image: "pics/perfumes/8a0a004b-8c4c-4911-ab12-788be268b5db.jpeg",
  },
  { 
    id:25, 
    name: "Oud Musk",
    description:
      "A captivating blend of musk and oud, creating a sensual and long-lasting fragrance that lingers on the skin.",
    category: "perfume",
    price: "₹2800",
    previousprice:"₹3000",
    image: "pics/perfumes/AdobeStock_683344921_Preview.jpeg",
  },
  { 
    id:26,
    name: "Golden Oud",
    description:
      "Radiant and opulent, Golden Oud combines precious oud with golden spices and floral notes",
      Sub: "bestseller",
    category: "perfume",
    price: "₹3200",
    previousprice:"₹3500",
    image:
      "pics/perfumes/image_fx_attar_oud_perfume_image_950_px_width__530px.jpg",
  },
  { 
    id:27,
    name: "Arabian Rose Oud",
    description:
      "A delicate fusion of rose petals and oud wood, creating a romantic and enchanting floral oud fragrance.",
      Sub: "bestseller",
    category: "perfume",
    price: "₹2700",
    previousprice:"₹3000",
    image: "pics/perfumes/AdobeStock_571385880_Preview-transformed.jpeg",
  },
  { 
    id:28,
    name: "Woody Intense",
    description:
      "A mix of Heliotrope and Rosemary with Guernium and Cardamom to embrace Vanilla and Patchouli mixed with musk",
    category: "perfume",
    price: "₹4000",
    previousprice:"₹3000",
    image: "pics/perfumes/Woody_collection.jpg",
  },
  { 
    id:29,
    name: "Oud Noir",
    description:
      "A dark and mysterious fragrance, Oud Noir combines oud with deep spices and a hint of patchouli for an intense aroma.",
    category: "perfume",
    price: "₹2900",
    previousprice:"₹3000",
    image: "pics/perfumes/DeWatermark.ai_1712133733646.png",
  },
  { 
    id:30,
    name: "Oud Divine",
    description:
      "Oud Divine offers a divine blend of oud and vanilla, creating a warm and comforting fragrance.",
    category: "perfume",
    price: "₹3100",
    previousprice:"₹5000",
    image: "pics/perfumes/DeWatermark.ai_1712133585488.png",
  },
  { 
    id:31,
    name: "Incense Burner Silver",
    description: "Luxurious silver burner designed specifically for burning oud incense, creating an opulent ambiance.",
    category: "burner",
    price: "₹500",
    previousprice:"₹3000",
    image: "pics/Burners/DeWatermark.ai_1712139255406.png",
  },
  {  
    id:32,
    name: "Brass Burner",
    description: "Handcrafted brass incense burner with intricate designs, perfect for burning various types of incense.",
    category: "burner",
    price: "₹800",
    previousprice:"₹1000",
    image: "pics/Burners/DeWatermark.ai_1712139268976.png",
  },
  { 
    id:33,
    name: "Wooden Burner",
    description: "Hand-carved oud wood burner with intricate patterns, perfect for enhancing the aroma of your oud incense.",
    Sub: "bestseller",
    category: "burner",
    price: "₹1200",
    previousprice:"₹3000",
    image: "pics/Burners/DeWatermark.ai_1712139299237.png",
  },
  { 
    id:34,
    name: "Oud Burner Set",
    description: 'Modern oud burner set with multiple compartments for burning different types of oud incense',

    category: "burner",
    price: "₹1500",
    previousprice:"₹3000",
    image: "pics/Burners/AdobeStock_703865140_Preview.jpeg",
  },
  { 
    id:35,
    name: "Marble Stone Burner",
    description: "High-quality marble burner designed to complement the rich aroma of oud incense, adding a touch of sophistication",
    category: "burner",
    price: "₹2000",
    previousprice:"₹3000",
    image: "pics/Burners/AdobeStock_74300744_Preview.jpeg",
  },
  { 
    id:36,
    name: "Electric Burner",
    description: "Wireless Portable Rechargeable Electric Portable Bakhoor Burner for cars with Electric Backflow Incense Burner Portable",
    category: "burner",
    price: "₹1995",
    previousprice:"₹3000",
    image: "pics/Burners/WhatsAppImage2023-07-18at4.44.22PM_1024x1024@2x.webp",
  },
  { 
    id:37,
    name: "",
    description: "",
    category: "",
    price: "₹",
    previousprice:"₹",
    image: "",
  },
];

export default productArray;
//console.log(productArray.length);
//var product = document.querySelector(".row");

// productArray.forEach((ele) => {
//   var card = document.createElement("div");
//   var name = document.createElement("h3");
//   var descrp = document.createElement("p");
//   var img = document.createElement("img");
//   var price = document.createElement("p");
//   var button = document.createElement("button");

//   card.setAttribute("class", "col px-0  m-3 text-center");
//   img.setAttribute("class", "img-fluid");
//   img.style.height = "250px";
//   img.style.width = "300px";
//   name.setAttribute("class", "card-title px-2 mt-1 h3");
//   descrp.setAttribute("class", "caption px-2 lead fs-6");
//   price.setAttribute("class", "price");
//   button.setAttribute("class", "btn btn-secondary mb-3");

//   name.innerHTML = ele.name;
//   descrp.innerHTML = ele.description;
//   button.innerText = "Add To Cart";
//   img.src = ele.image;
//   price.innerHTML = ele.price;

//   card.appendChild(img);
//   card.appendChild(name);
//   card.appendChild(descrp);
//   card.appendChild(price);
//   card.appendChild(button);
//   product.appendChild(card);
// });





// let productArray = [
//   {
//     name: "Musk",
//     description: "Sticky Musk , long lasting notes ,light fragrance ",
//     price: "₹2000",
//     category: "oil",
//     image: "pics/AdobeStock_552679291_Preview.jpeg",
//   },
//   {
//     name: "Oud Malaki",
//     description: "Royal Oud takes you back to the Arabian knights",
//     price: "₹2000",
//     category: "oil",
//     image: "pics/image_fx_attar_oud_oil_image__950_px_width__530px_he (5).jpg",
//   },

//   {
//     name: "Musk Rose Pink",
//     description: "Royal Musk takes you back to the Arabian knights",
//     price: "₹1000",
//     category: "oil",
//     image: "pics/oils/muskpink.jpeg",
//   },
//   {
//     name: "Rose Oil",
//     description:
//       "Experience the timeless elegance of Rose with this exquisite scent ",
//     price: "₹750",
//     category: "oil",
//     image: "pics/oils/image_fx_attar_oud_oil_image__950_px_width__530px_he.jpg",
//   },

//   {
//     name: "Oud Cambodi",
//     description: "Exotic Cambodian oud with deep woody tones",
//     price: "₹2500",
//     category: "oil",
//     image: "pics/oils/AdobeStock_196059371_Preview.jpeg",
//   },
//   {
//     name: "Oud Saffron",
//     description:
//       "Luxurious saffron-infused oud for a rich fragrance experience",
//     price: "₹2200",
//     category: "oil",
//     image: "pics/oils/banner4.jpeg",
//   },
//   {
//     name: "Oud Rose",
//     description: "Elegant blend of oud and rose petals for a floral oud scent",
//     price: "₹2300",
//     category: "oil",
//     image: "pics/oils/240_F_234927522_Ej2COntDR8MjCSUJGFHm6qdLpn2Qxqe1.jpg",
//   },
//   {
//     name: "Oud Amber",
//     description: "Warm amber notes combined with oud for a captivating aroma",
//     price: "₹2400",
//     category: "oil",
//     image:
//       "pics/oils/image_fx_attar_oud_perfume_banner_image_landscape_mod.jpg",
//   },
//   {
//     name: "Oud Vanilla",
//     description: "Vanilla-infused oud with a sweet and comforting fragrance",
//     price: "₹2100",
//     category: "oil",
//     image: "pics/oils/AdobeStock_235631572_Preview.jpeg",
//   },
//   {
//     name: "Dehn Al Oud Hindi",
//     description:
//       "Rich and aromatic fragrance crafted from the finest Hindi Oud Wood",
//     price: "₹2000",
//     category: "oil",
//     image: "pics/oils/DeWatermark.ai_1712134307112.png",
//   },

//   {
//     name: "Madinah Musk",
//     description:
//       "Luxurious French oils mixed with roses and drops of Zamzam water",
//     price: "₹1300",
//     category: "oil",
//     image: "pics/oils/MADINAH MUSK.jpg",
//   },
//   {
//     name: "Kashab Al Oud",
//     description:
//       "A captivating blend of rich woody notes, deep earthy tones, and a hint of musk",
//     category: "oil",
//     price: "₹1500",
//     image: "pics/oils/240_F_203773123_7xas1FYYN1M63h3zSH3to6mCnk1SvGKs.jpg",
//   },
//   {
//     name: "Mukhallat Oud",
//     description:
//       "The strongest type of Oud, makes your scent luxurious and authentic ",
//     category: "oil",
//     price: "₹1300",
//     image: "pics/oils/oud mukhallat.jpg",
//   },
//   {
//     name: "Madawi",
//     description:
//       "The aromatic bouquet of fruits, base of roses, patchouli and musk",
//     category: "oil",
//     price: "₹3000",
//     image:
//       "pics/oils/image_fx_attar_oud_perfume_image_950_px_width__530px (2).jpg",
//   },
//   {
//     name: "Amber Zamzam",
//     description:
//       "Oil with the luxury of musk added to it drops of Zamzam water.",
//     category: "oil",
//     price: "₹1400",
//     image: "pics/oils/amber zamazam.jpeg",
//   },
//   {
//     name: "Bakhoor Ahmad",
//     description:
//       " Smoky woodiness of the scent, the warm amber, incense, and sandalwood ",
//     Sub: "bestseller",
//     category: "bakhoor",
//     price: "₹1000",
//     image: "pics/Bakhoor/AdobeStock_517533453_Preview.jpeg",
//   },
//   {
//     name: "Indian Oud Wood",
//     description:
//       "Derived from the resinous heartwood of agarwood trees native to India",
//     category: "bakhoor",
//     price: "₹2000",
//     image: "pics/Bakhoor/AdobeStock_517533399_Preview.jpeg",
//   },
//   {
//     name: "Cambodian Wood",
//     description:
//       "Wood from the heart of Cambodia, rich in terpenes and fragrance",
//     category: "bakhoor",
//     price: "₹2500",
//     image: "pics/Bakhoor/AdobeStock_173535419_Preview.jpeg",
//   },
//   {
//     name: "Saffron Amber",
//     description:
//       "Captivating blend of saffron and amber notes, creating an enticing and alluring atmosphere.",
//     category: "bakhoor",
//     price: "₹1800",
//     image: "pics/Bakhoor/240_F_140258069_K60BKIVFfISApDb7a0ZCmPCwJjndeH5o.jpg",
//   },
//   {
//     name: "Rose Oud Bakhoor",
//     description:
//       "Combination of rose essence and oud wood, offering a delicate yet potent floral fragrance.",
//     category: "bakhoor",
//     price: "₹2200",
//     image: "pics/Bakhoor/AdobeStock_745161057_Preview.jpeg",
//   },
//   {
//     name: "Musk Oud Bakhoor",
//     description:
//       "Musk-infused oud wood with a musky, sensual aroma that lingers and captivates the senses.",
//     category: "bakhoor",
//     price: "₹2100",
//     image: "pics/Bakhoor/AdobeStock_549362914_Preview.jpeg",
//   },

//   {
//     name: "Arabian Nights",
//     description:
//       "A mesmerizing blend of oud, spices, and florals, evoking the enchanting atmosphere of Arabian nights.",
//     category: "perfume",
//     price: "₹3000",
//     image: "pics/perfumes/arabian knight.png",
//   },
//   {
//     name: "Sultan's Oud",
//     description:
//       "Regal and sophisticated, Sultan's Oud combines rich oud with hints of leather and tobacco for a luxurious fragrance.",
//     category: "perfume",
//     price: "₹3500",
//     image: "pics/perfumes/prfme.jpeg",
//   },
//   {
//     name: "Oud Royale",
//     description:
//       "Exquisite and refined, Oud Royale features the finest oud wood with a touch of saffron and ambergris.",
//     category: "perfume",
//     price: "₹4000",
//     image: "pics/perfumes/8a0a004b-8c4c-4911-ab12-788be268b5db.jpeg",
//   },
//   {
//     name: "Oud Musk",
//     description:
//       "A captivating blend of musk and oud, creating a sensual and long-lasting fragrance that lingers on the skin.",
//     category: "perfume",
//     price: "₹2800",
//     image: "pics/perfumes/AdobeStock_683344921_Preview.jpeg",
//   },
//   {
//     name: "Golden Oud",
//     description:
//       "Radiant and opulent, Golden Oud combines precious oud with golden spices and floral notes",
//     category: "perfume",
//     price: "₹3200",
//     image:
//       "pics/perfumes/image_fx_attar_oud_perfume_image_950_px_width__530px.jpg",
//   },
//   {
//     name: "Arabian Rose Oud",
//     description:
//       "A delicate fusion of rose petals and oud wood, creating a romantic and enchanting floral oud fragrance.",
//     category: "perfume",
//     price: "₹2700",
//     image: "pics/perfumes/AdobeStock_571385880_Preview-transformed.jpeg",
//   },
//   {
//     name: "Woody Intense",
//     description:
//       "A mix of Heliotrope and Rosemary with Guernium and Cardamom to embrace Vanilla and Patchouli mixed with musk",
//     category: "perfume",
//     price: "₹4000",
//     image: "pics/perfumes/Woody_collection.jpg",
//   },
//   {
//     name: "Oud Noir",
//     description:
//       "A dark and mysterious fragrance, Oud Noir combines oud with deep spices and a hint of patchouli for an intense aroma.",
//     category: "perfume",
//     price: "₹2900",
//     image: "pics/perfumes/DeWatermark.ai_1712133733646.png",
//   },
//   {
//     name: "Oud Divine",
//     description:
//       "Oud Divine offers a divine blend of oud and vanilla, creating a warm and comforting fragrance.",
//     category: "perfume",
//     price: "₹3100",
//     image: "pics/perfumes/DeWatermark.ai_1712133585488.png",
//   },
//   {
//     name: "Incense Burner Silver",
//     description: "Luxurious silver burner designed specifically for burning oud incense, creating an opulent ambiance.",
//     category: "burner",
//     price: "₹500",
//     image: "pics/Burners/DeWatermark.ai_1712139255406.png",
//   },
//   {
//     name: "Brass Burner",
//     description: "Handcrafted brass incense burner with intricate designs, perfect for burning various types of incense.",
//     category: "burner",
//     price: "₹800",
//     image: "pics/Burners/DeWatermark.ai_1712139268976.png",
//   },
//   {
//     name: "Wooden Burner",
//     description: "Hand-carved oud wood burner with intricate patterns, perfect for enhancing the aroma of your oud incense.",
//     category: "burner",
//     price: "₹1200",
//     image: "pics/Burners/DeWatermark.ai_1712139299237.png",
//   },
//   {
//     name: "Oud Burner Set",
//     description: 'Modern oud burner set with multiple compartments for burning different types of oud incense',

//     category: "burner",
//     price: "₹1500",
//     image: "pics/Burners/AdobeStock_703865140_Preview.jpeg",
//   },
//   {
//     name: "Marble Stone Burner",
//     description: "High-quality marble burner designed to complement the rich aroma of oud incense, adding a touch of sophistication",
//     category: "burner",
//     price: "₹2000",
//     image: "pics/Burners/AdobeStock_74300744_Preview.jpeg",
//   },
//   {
//     name: "Electric Burner",
//     description: "Wireless Portable Rechargeable Electric Portable Bakhoor Burner for cars with Electric Backflow Incense Burner Portable",
//     category: "burner",
//     price: "₹1995",
//     image: "pics/Burners/WhatsAppImage2023-07-18at4.44.22PM_1024x1024@2x.webp",
//   },
//   {
//     name: "",
//     description: "",
//     category: "",
//     price: "₹",
//     image: "",
//   },
// ];


   
   
   
   
// const productArray = [
//   {  
//     id:1,
//     name: "Musk",
//     description: "Sticky Musk , long lasting notes ,light fragrance ",
//     price: "₹2000",
//     category: "oil",
//     image: "pics/AdobeStock_552679291_Preview.jpeg",
//   },
//   { id:2,
//     name: "Oud Malaki",
//     description: "Royal Oud takes you back to the Arabian knights",
//     price: "₹2000",
//     category: "oil",
//     image: "pics/image_fx_attar_oud_oil_image__950_px_width__530px_he (5).jpg",
//   },

//   {  
//     id:3,
//     name: "Musk Rose Pink",
//     description: "Royal Musk takes you back to the Arabian knights",
//     price: "₹1000",
//     category: "oil",
//     image: "pics/oils/muskpink.jpeg",
//   },
//   { 
//     id:4,
//     name: "Rose Oil",
//     description:
//       "Experience the timeless elegance of Rose with this exquisite scent ",
//     price: "₹750",
//     category: "oil",
//     image: "pics/oils/image_fx_attar_oud_oil_image__950_px_width__530px_he.jpg",
//   },

//   { id:5, 
//     name: "Oud Cambodi",
//     description: "Exotic Cambodian oud with deep woody tones",
//     price: "₹2500",
//     category: "oil",
//     image: "pics/oils/AdobeStock_196059371_Preview.jpeg",
//   },
//   { id:6,
//     name: "Oud Saffron",
//     description:
//       "Luxurious saffron-infused oud for a rich fragrance experience",
//     price: "₹2200",
//     category: "oil",
//     image: "pics/oils/banner4.jpeg",
//   },
//   { 
//     id:7,
//     name: "Oud Rose",
//     description: "Elegant blend of oud and rose petals for a floral oud scent",
//     price: "₹2300",
//     category: "oil",
//     image: "pics/oils/240_F_234927522_Ej2COntDR8MjCSUJGFHm6qdLpn2Qxqe1.jpg",
//   },
//   { 
//     id:8,
//     name: "Oud Amber",
//     description: "Warm amber notes combined with oud for a captivating aroma",
//     price: "₹2400",
//     category: "oil",
//     image:
//       "pics/oils/image_fx_attar_oud_perfume_banner_image_landscape_mod.jpg",
//   },
//   {
//     id:9,
//     name: "Oud Vanilla",
//     description: "Vanilla-infused oud with a sweet and comforting fragrance",
//     price: "₹2100",
//     category: "oil",
//     image: "pics/oils/AdobeStock_235631572_Preview.jpeg",
//   },
//   { 
//     id:10,
//     name: "Dehn Al Oud Hindi",
//     description:
//       "Rich and aromatic fragrance crafted from the finest Hindi Oud Wood",
//     price: "₹2000",
//     category: "oil",
//     image: "pics/oils/DeWatermark.ai_1712134307112.png",
//   },

//   { 
//     id:11,
//     name: "Madinah Musk",
//     description:
//       "Luxurious French oils mixed with roses and drops of Zamzam water",
//     price: "₹1300",
//     category: "oil",
//     image: "pics/oils/MADINAH MUSK.jpg",
//   },
//   { 
//     id:12,
//     name: "Kashab Al Oud",
//     description:
//       "A captivating blend of rich woody notes, deep earthy tones, and a hint of musk",
//     category: "oil",
//     price: "₹1500",
//     image: "pics/oils/240_F_203773123_7xas1FYYN1M63h3zSH3to6mCnk1SvGKs.jpg",
//   },
//   { 
//     id:13,
//     name: "Mukhallat Oud",
//     description:
//       "The strongest type of Oud, makes your scent luxurious and authentic ",
//     category: "oil",
//     price: "₹1300",
//     image: "pics/oils/oud mukhallat.jpg",
//   },
//   { 
//     id:14,
//     name: "Madawi",
//     description:
//       "The aromatic bouquet of fruits, base of roses, patchouli and musk",
//     category: "oil",
//     price: "₹3000",
//     image:
//       "pics/oils/image_fx_attar_oud_perfume_image_950_px_width__530px (2).jpg",
//   },
//   { 
//     id:15, 
//     name: "Amber Zamzam",
//     description:
//       "Oil with the luxury of musk added to it drops of Zamzam water.",
//     category: "oil",
//     price: "₹1400",
//     image: "pics/oils/amber zamazam.jpeg",
//   },
//   { 
//     id:16, 
//     name: "Bakhoor Ahmad",
//     description:
//       " Smoky woodiness of the scent, the warm amber, incense, and sandalwood ",
//     Sub: "bestseller",
//     category: "bakhoor",
//     price: "₹1000",
//     image: "pics/Bakhoor/AdobeStock_517533453_Preview.jpeg",
//   },
//   { 
//     id:17,
//     name: "Indian Oud Wood",
//     description:
//       "Derived from the resinous heartwood of agarwood trees native to India",
//     category: "bakhoor",
//     price: "₹2000",
//     image: "pics/Bakhoor/AdobeStock_517533399_Preview.jpeg",
//   },
//   { 
//     id:18,
//     name: "Cambodian Wood",
//     description:
//       "Wood from the heart of Cambodia, rich in terpenes and fragrance",
//     category: "bakhoor",
//     price: "₹2500",
//     image: "pics/Bakhoor/AdobeStock_173535419_Preview.jpeg",
//   },
//   { 
//     id:19,
//     name: "Saffron Amber",
//     description:
//       "Captivating blend of saffron and amber notes, creating an enticing and alluring atmosphere.",
//     category: "bakhoor",
//     price: "₹1800",
//     image: "pics/Bakhoor/240_F_140258069_K60BKIVFfISApDb7a0ZCmPCwJjndeH5o.jpg",
//   },
//   {
//     id:20,
//     name: "Rose Oud Bakhoor",
//     description:
//       "Combination of rose essence and oud wood, offering a delicate yet potent floral fragrance.",
//     category: "bakhoor",
//     price: "₹2200",
//     image: "pics/Bakhoor/AdobeStock_745161057_Preview.jpeg",
//   },
//   { 
//     id:21,
//     name: "Musk Oud Bakhoor",
//     description:
//       "Musk-infused oud wood with a musky, sensual aroma that lingers and captivates the senses.",
//     category: "bakhoor",
//     price: "₹2100",
//     image: "pics/Bakhoor/AdobeStock_549362914_Preview.jpeg",
//   },

//   { 
//     id:22,
//     name: "Arabian Nights",
//     description:
//       "A mesmerizing blend of oud, spices, and florals, evoking the enchanting atmosphere of Arabian nights.",
//     category: "perfume",
//     price: "₹3000",
//     image: "pics/perfumes/arabian knight.png",
//   },
//   { 
//     id:23,
//     name: "Sultan's Oud",
//     description:
//       "Regal and sophisticated, Sultan's Oud combines rich oud with hints of leather and tobacco for a luxurious fragrance.",
//     category: "perfume",
//     price: "₹3500",
//     image: "pics/perfumes/prfme.jpeg",
//   },
//   { 
//     id:24,
//     name: "Oud Royale",
//     description:
//       "Exquisite and refined, Oud Royale features the finest oud wood with a touch of saffron and ambergris.",
//     category: "perfume",
//     price: "₹4000",
//     image: "pics/perfumes/8a0a004b-8c4c-4911-ab12-788be268b5db.jpeg",
//   },
//   { 
//     id:25, 
//     name: "Oud Musk",
//     description:
//       "A captivating blend of musk and oud, creating a sensual and long-lasting fragrance that lingers on the skin.",
//     category: "perfume",
//     price: "₹2800",
//     image: "pics/perfumes/AdobeStock_683344921_Preview.jpeg",
//   },
//   { 
//     id:26,
//     name: "Golden Oud",
//     description:
//       "Radiant and opulent, Golden Oud combines precious oud with golden spices and floral notes",
//     category: "perfume",
//     price: "₹3200",
//     image:
//       "pics/perfumes/image_fx_attar_oud_perfume_image_950_px_width__530px.jpg",
//   },
//   { 
//     id:27,
//     name: "Arabian Rose Oud",
//     description:
//       "A delicate fusion of rose petals and oud wood, creating a romantic and enchanting floral oud fragrance.",
//     category: "perfume",
//     price: "₹2700",
//     image: "pics/perfumes/AdobeStock_571385880_Preview-transformed.jpeg",
//   },
//   { 
//     id:28,
//     name: "Woody Intense",
//     description:
//       "A mix of Heliotrope and Rosemary with Guernium and Cardamom to embrace Vanilla and Patchouli mixed with musk",
//     category: "perfume",
//     price: "₹4000",
//     image: "pics/perfumes/Woody_collection.jpg",
//   },
//   { 
//     id:29,
//     name: "Oud Noir",
//     description:
//       "A dark and mysterious fragrance, Oud Noir combines oud with deep spices and a hint of patchouli for an intense aroma.",
//     category: "perfume",
//     price: "₹2900",
//     image: "pics/perfumes/DeWatermark.ai_1712133733646.png",
//   },
//   { 
//     id:30,
//     name: "Oud Divine",
//     description:
//       "Oud Divine offers a divine blend of oud and vanilla, creating a warm and comforting fragrance.",
//     category: "perfume",
//     price: "₹3100",
//     image: "pics/perfumes/DeWatermark.ai_1712133585488.png",
//   },
//   { 
//     id:31,
//     name: "Incense Burner Silver",
//     description: "Luxurious silver burner designed specifically for burning oud incense, creating an opulent ambiance.",
//     category: "burner",
//     price: "₹500",
//     image: "pics/Burners/DeWatermark.ai_1712139255406.png",
//   },
//   {  
//     id:32,
//     name: "Brass Burner",
//     description: "Handcrafted brass incense burner with intricate designs, perfect for burning various types of incense.",
//     category: "burner",
//     price: "₹800",
//     image: "pics/Burners/DeWatermark.ai_1712139268976.png",
//   },
//   { 
//     id:33,
//     name: "Wooden Burner",
//     description: "Hand-carved oud wood burner with intricate patterns, perfect for enhancing the aroma of your oud incense.",
//     category: "burner",
//     price: "₹1200",
//     image: "pics/Burners/DeWatermark.ai_1712139299237.png",
//   },
//   { 
//     id:34,
//     name: "Oud Burner Set",
//     description: 'Modern oud burner set with multiple compartments for burning different types of oud incense',

//     category: "burner",
//     price: "₹1500",
//     image: "pics/Burners/AdobeStock_703865140_Preview.jpeg",
//   },
//   { 
//     id:35,
//     name: "Marble Stone Burner",
//     description: "High-quality marble burner designed to complement the rich aroma of oud incense, adding a touch of sophistication",
//     category: "burner",
//     price: "₹2000",
//     image: "pics/Burners/AdobeStock_74300744_Preview.jpeg",
//   },
//   { 
//     id:36,
//     name: "Electric Burner",
//     description: "Wireless Portable Rechargeable Electric Portable Bakhoor Burner for cars with Electric Backflow Incense Burner Portable",
//     category: "burner",
//     price: "₹1995",
//     image: "pics/Burners/WhatsAppImage2023-07-18at4.44.22PM_1024x1024@2x.webp",
//   },
//   { 
//     id:37,
//     name: "",
//     description: "",
//     category: "",
//     price: "₹",
//     image: "",
//   },
// ];
  