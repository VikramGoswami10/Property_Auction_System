// Fetch auction data dynamically
export { useAuctionData } from "../hooks/useAuctionData";

export const menulists = [
  {
    id: 1,
    path: "/",
    link: "Home ",
  },
  {
    id: 2,
    link: "Property",
    submenu: [
      { id: "1", path: "/auction", link: "Live Auctions" },
      { id: "2", path: "/auction/upcoming", link: "Upcoming Auctions" },
      // { id: "3", path: "/auction/past", link: "Past Auctions" }
    ]
  },
  {
    id: 3,
    path: "/how-to-bid",
    link: "How To Bid",
  },
  {
    id: 4,
    path: "/contact",
    link: "Contact Us",
    
  },
  {
    id: 5,
    path: "/faq",
    link: "FAQ",
  }
];

  
  //CATEGORY LIST -->
  export const categorylists = [
    {
      title: "Residential",
      img: "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_640.jpg",
    },
    {
      title: "Commercial",
      img: "https://media.istockphoto.com/id/1048358188/photo/modern-building-in-paris.jpg?s=612x612&w=0&k=20&c=xQKe6UpXIZhIHQJ-pwrOMm1KIQd74Xc6haT-UcVYEMc=",
    },
    {
      title: "Land",
      img: "https://i.pinimg.com/736x/c8/30/ba/c830ba38c87f12a2b7e53c041633b634.jpg",
    },
    {
      title: "Luxury",
      img: "https://cbvalueaddrealty.in/wp-content/uploads/2021/08/Vijay-Mallyas-Penthouse.jpeg",
    },
    {
      title: "Special Use",
      img: "https://www.aambyvalley.com/images/golf/2.jpg",
    }
  ];

    // HOW IT WORKS -->
export const processList = [
  {
    id: "01",
    title: "Sign up",
    desc: "Register on our platform by creating an account. Provide basic details and start exploring properties available for auction.",
    cover: "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/01/shape-7.png",
  },
  {
    id: "02",
    title: "Auction goes online",
    desc: "Browse through properties as they go live on the auction page. Each listing includes photos, descriptions, and bidding details.",
    cover: "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/auction.png",
  },
  {
    id: "03",
    title: "Place Your Bids",
    desc: "Participate by placing bids on properties of your interest. Stay updated with the latest bids and ensure you're in the lead.",
    cover: "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/auction-2.png",
  },
  {
    id: "04",
    title: "Winning and Finalizing",
    desc: "If your bid is the highest, finalize the purchase. Complete payments and necessary paperwork to claim ownership of the property.",
    cover: "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/auction-3.png",
  },
];

// FAQ Data
export const faqData = [
  {
    question: "How do I register for an auction?",
    answer: "You can register by creating an account on our platform. Once registered, you need to verify your identity before participating in auctions."
  },
  {
    question: "How does the bidding process work?",
    answer: "After selecting a property, you can place a bid. If your bid is the highest when the auction ends, you win the property."
  },
  {
    question: "Is there a deposit required before bidding?",
    answer: "No, we do not charge an upfront deposit. However, the winning bidder must complete the payment process within the given time frame."
  },
  {
    question: "What happens if I win the auction?",
    answer: "If you win, you will receive an email with further payment and documentation instructions. The final contract will be signed, and ownership will be transferred after full payment."
  },
  {
    question: "What are the accepted payment methods?",
    answer: "We accept bank transfers, credit/debit cards, and UPI payments. The details will be provided upon winning an auction."
  },
  {
    question: "Can I visit the property before bidding?",
    answer: "Yes, you can schedule a visit before bidding. Contact our support team to arrange a viewing."
  }
];






// export const AuctionData = [
//   // ---------------------- ONGOING AUCTIONS ----------------------
//   {
//     id: 1,
//     title: "3 BHK Flat in Mumbai",
//     category: "Residential",
//     possession: "Ready to Move",
//     price: "₹ 85,00,000",
//     auctionStartDate: "2nd Feb 2025 10:00",
//     auctionEndDate: "4th Feb 2025 13:02",
//     timeLeft: "4h 28m 38s",
//     currentBid: 8000000,
//     bidIncrement: 50000,
//     status: "Ongoing",
//     images: [
//       "https://oceaninfra.co/wp-content/uploads/2023/10/3-BHK-Flat-Sale-in-Thane-1-2-BHK-Flat-in-Thane-Ocean-Infra.webp",
//       "https://5.imimg.com/data5/BE/CR/XD/SELLER-27323816/4-bhk-flat-sale-service-500x500.jpg"
//     ],
//     biddingHistory: [
//       { user: "Bidder 1", amount: "₹ 80,00,000", date: "03/02/25 14:32:13" },
//       { user: "Bidder 2", amount: "₹ 79,50,000", date: "03/02/25 14:20:10" }
//     ],
//     description: "This stunning 3BHK flat in Mumbai is available for auction. The property includes a spacious living room, modular kitchen, and balconies with a beautiful view of the city skyline."
//   },
//   {
//     id: 2,
//     title: "Luxury Villa in Goa",
//     category: "Luxury",
//     possession: "Under Construction",
//     price: "₹ 1.5 Cr",
//     auctionStartDate: "3rd Feb 2025 12:00",
//     auctionEndDate: "5th Feb 2025 18:00",
//     timeLeft: "8h 15m 20s",
//     currentBid: 14000000,
//     bidIncrement: 100000,
//     status: "Ongoing",
//     images: [
//       "https://5.imimg.com/data5/BE/CR/XD/SELLER-27323816/4-bhk-flat-sale-service-500x500.jpg",
//       "https://oceaninfra.co/wp-content/uploads/2023/10/3-BHK-Flat-Sale-in-Thane-1-2-BHK-Flat-in-Thane-Ocean-Infra.webp"
//     ],
//     biddingHistory: [
//       { user: "Bidder 3", amount: "₹ 1.4 Cr", date: "03/02/25 11:45:00" },
//       { user: "Bidder 4", amount: "₹ 1.35 Cr", date: "03/02/25 10:20:50" }
//     ],
//     description: "A beautiful luxury villa located near Goa beachside, offering top-notch amenities and serene surroundings. A perfect investment for holiday stays and rentals."
//   },
//   {
//     id: 3,
//     title: "2 BHK Apartment in Pune",
//     category: "Residential",
//     possession: "Ready to Move",
//     price: "₹ 60,00,000",
//     auctionStartDate: "3rd Feb 2025 14:00",
//     auctionEndDate: "5th Feb 2025 16:30",
//     timeLeft: "6h 45m 12s",
//     currentBid: 5500000,
//     bidIncrement: 40000,
//     status: "Ongoing",
//     images: [
//       "https://oceaninfra.co/wp-content/uploads/2023/10/3-BHK-Flat-Sale-in-Thane-1-2-BHK-Flat-in-Thane-Ocean-Infra.webp",
//       "https://5.imimg.com/data5/BE/CR/XD/SELLER-27323816/4-bhk-flat-sale-service-500x500.jpg"
//     ],
//     biddingHistory: [
//       { user: "Bidder 5", amount: "₹ 55,00,000", date: "03/02/25 16:00:00" },
//       { user: "Bidder 6", amount: "₹ 54,60,000", date: "03/02/25 15:30:10" }
//     ],
//     description: "Spacious 2BHK apartment in Pune with modern amenities and a great location."
//   },
  
//   // Past Auctions (4-16)
//   ...Array.from({ length: 13 }, (_, i) => ({
//     id: 4 + i,
//     title: `Auctioned Property ${4 + i}`,
//     category: i % 2 === 0 ? "Residential" : "Commercial",
//     possession: "Sold",
//     price: `₹ ${50 + i * 5} Lakh`,
//     auctionStartDate: `1st Jan 2025 10:00`,
//     auctionEndDate: `3rd Jan 2025 18:00`,
//     timeLeft: "Auction Ended",
//     currentBid: 4800000 + i * 200000,
//     bidIncrement: 25000,
//     status: "Past",
//     images: [
//       "https://5.imimg.com/data5/BE/CR/XD/SELLER-27323816/4-bhk-flat-sale-service-500x500.jpg",
//       "https://oceaninfra.co/wp-content/uploads/2023/10/3-BHK-Flat-Sale-in-Thane-1-2-BHK-Flat-in-Thane-Ocean-Infra.webp"
//     ],
//     biddingHistory: [
//       { user: "Bidder", amount: `₹ ${48 + i * 2} Lakh`, date: "03/01/25 15:00:00" }
//     ],
//     description: `Well-located property with high potential value.`
//   })),
  
  
//   // ---------------------- PAST AUCTIONS ----------------------
//   {
//     id: 9,
//     title: "1 BHK Flat in Delhi",
//     category: "Residential",
//     possession: "Sold",
//     price: "₹ 55,00,000",
//     auctionStartDate: "1st Jan 2025 09:00",
//     auctionEndDate: "3rd Jan 2025 18:00",
//     timeLeft: "Auction Ended",
//     currentBid: 5300000,
//     bidIncrement: 25000,
//     status: "Past",
//     images: [
//       "https://oceaninfra.co/wp-content/uploads/2023/10/3-BHK-Flat-Sale-in-Thane-1-2-BHK-Flat-in-Thane-Ocean-Infra.webp",
//       "https://5.imimg.com/data5/BE/CR/XD/SELLER-27323816/4-bhk-flat-sale-service-500x500.jpg"
//     ],
//     biddingHistory: [
//       { user: "Bidder 7", amount: "₹ 53,00,000", date: "03/01/25 14:45:00" },
//       { user: "Bidder 8", amount: "₹ 52,50,000", date: "02/01/25 13:20:10" }
//     ],
//     description: "Fully furnished 1BHK flat in Delhi with excellent metro connectivity."
//   },
//   // More past auction entries (total 8)...
  
//   // ---------------------- UPCOMING AUCTIONS ----------------------
//   // {
//   //   id: 17,
//   //   title: "Luxury Beachfront Villa in Kerala",
//   //   category: "Luxury",
//   //   possession: "Under Construction",
//   //   price: "₹ 3.5 Cr",
//   //   auctionStartDate: "10th Feb 2025 09:00",
//   //   auctionEndDate: "15th Feb 2025 18:00",
//   //   timeLeft: "Auction Yet to Start",
//   //   currentBid: 0,
//   //   bidIncrement: 250000,
//   //   status: "Upcoming",
//   //   images: [
//   //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjwc_Zqb7ld7__xh_xkRg3_Yz7zXaT9SQVzw&s"
//   //   ],
//   //   biddingHistory: [],
//   //   description: "A breathtaking beachfront villa in Kerala. Ultimate luxury for high-end buyers."
//   // },
//     // Upcoming Auctions (17-24)
//     ...Array.from({ length: 8 }, (_, i) => ({
//       id: 17 + i,
//       title: `Upcoming Property ${17 + i}`,
//       category: i % 2 === 0 ? "Luxury" : "Residential",
//       possession: "Under Construction",
//       price: `₹ ${1.5 + i * 0.5} Cr`,
//       auctionStartDate: `10th Feb 2025 09:00`,
//       auctionEndDate: `15th Feb 2025 18:00`,
//       timeLeft: "Auction Yet to Start",
//       currentBid: 0,
//       bidIncrement: 50000,
//       status: "Upcoming",
//       images: [
//         "https://5.imimg.com/data5/BE/CR/XD/SELLER-27323816/4-bhk-flat-sale-service-500x500.jpg",
//         "https://oceaninfra.co/wp-content/uploads/2023/10/3-BHK-Flat-Sale-in-Thane-1-2-BHK-Flat-in-Thane-Ocean-Infra.webp"
//       ],
//       biddingHistory: [],
//       description: `A premium property in a prime location.`
//     }))
// ];






  

//   // PRODUCT LIST -->
//   export const productlists = [
//     {
//       id: 1,
//       image: "https://oceaninfra.co/wp-content/uploads/2023/10/3-BHK-Flat-Sale-in-Thane-1-2-BHK-Flat-in-Thane-Ocean-Infra.webp",
//       title: "3BHK Flat in Surshree For Sale",
//       bprice: 853,
//       price: 5000,
//       catgeory: "Residential",
//     },
//     {
//       id: 2,
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSTCwgZVKjZyDVGK6mUA60EUkeDh4RxhNZHA&s",
//       title: "3 Bedroom Semi-Detached in Pune",
//       bprice: 452,
//       price: 1420,
//       catgeory: "Residential",
//     },
//     {
//       id: 3,
//       image: "https://5.imimg.com/data5/BE/CR/XD/SELLER-27323816/4-bhk-flat-sale-service-500x500.jpg",
//       title: "4 Bedroom Semi-Detached in Mumbai",
//       bprice: 105,
//       price: 100,
//       catgeory: "Residential",
//     },
//     {
//       id: 4,
//       image: "https://5.imimg.com/data5/VR/OL/GLADMIN-40046361/2-bhk-500x500.png",
//       title: "2 BHK Flat For Sale",
//       bprice: 40000,
//       price: 50000,
//       catgeory: "Residential",
//     },
//     {
//       id: 5,
//       image: "https://jll-global-gdim-res.cloudinary.com/image/upload/t_ip-resi-v2-search-p2-web/v1682076746/IN/Horizon/Resi/PROD/JLL_Pune_VTP%20VELVET%20VILLA_8645_EXT_1.jpg",
//       title: "Villa in Lonavala On SALE",
//       bprice: 4000,
//       price: 80000,
//       catgeory: "Luxury",
//     },
//     {
//       id: 6,
//       image: "https://admin.purplerealtors.in/admin/upload/Main/new_20277462061564141586.png  ",
//       title: "Commercial Shops on Sale",
//       bprice: 40000,
//       price: 80000,
//       catgeory: "Commercial",
//     },
//     {
//       id: 6,
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj5EcAeOH5rk-Nw1UAcGA4HgehCb_kD_kjsw&s",
//       title: "Plots are on Sale",
//       bprice: 400,
//       price: 800,
//       catgeory: "Land",
//     },
//     {
//       id: 7,
//       image: "https://www.villasingoa.com/buy-goa-villas/assets/images/villa-for-sale-goa1.jpg",
//       title: "Villa in Goa Available for SALE",
//       bprice: 200,
//       price: 800,
//       catgeory: "Luxury",
//     },
//     // {
//     //   id: 8,
//     //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9pvfp9theVhtVb_dKUDJoOzLVe6Gt3mWD7A&s",
//     //   title: "Office Space Available for Sale",
//     //   bprice: 200,
//     //   price: 800,
//     //   catgeory: "Commercial",
//     // },
//     // {
//     //   id: 9,
//     //   image: "https://dyimg2.realestateindia.com/prop_images/2433055/1283367_6-350x350.jpg",
//     //   title: "Showroom for Sale",
//     //   bprice: 853,
//     //   price: 5000,
//     //   catgeory: "Special Use",
//     // },
//     // {
//     //   id: 10,
//     //   image: "https://www.conradvillas.com/uploads/properties/71/luxury-beachfront-villa-for-sale-in-bali-15234049.jpg  ",
//     //   title: "Beach front Villa for Sale",
//     //   bprice: 853,
//     //   price: 5000,
//     //   catgeory: "Luxury",
//     // },
//     // {
//     //   id: 11,
//     //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjwc_Zqb7ld7__xh_xkRg3_Yz7zXaT9SQVzw&s",
//     //   title: "1 BHK Flat for Sale",
//     //   bprice: 853,
//     //   price: 5000,
//     //   catgeory: "Residential",
//     // }
//   ];

        


  
//     // Upcoming Auction --> 
//   export const upcomingAuctions = [
//     {
//       id: 1,
//       image: "https://www.guptasen.com/wp-content/uploads/2023/01/luxury-villas-for-sale-manor-palghar.webp",
//       title: "Luxury Villa On Sale",
//       bprice: 853,
//       price: 5000,
//       catgeory: "Luxury",
//     },
//     {
//       id: 2,
//       image: "https://assets.land.com/resizedimages/304/430/h/80/w/1-5232578215",
//       title: "Land Property on Sale",
//       bprice: 452,
//       price: 1420,
//       catgeory: "Land",
//     },
//     {
//       id: 3,
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBs84XpbrXcTkS9i5bV0lrM0cdgWAeFc8dbQ&s",
//       title: "Commercial Shops on Sale",
//       bprice: 105,
//       price: 100,
//       catgeory: "Commercial",
//     },
//     {
//       id: 4,
//       image: "https://5.imimg.com/data5/SELLER/Default/2024/4/406348065/FW/WO/ZQ/183085037/3-bhk-residential-flat-sales-service-500x500.jpg",
//       title: "3 BHK Flat On Sale",
//       bprice: 40000,
//       price: 50000,
//       catgeory: "Residential",
//     },
//     {
//       id: 5,
//       image: "https://housing-images.n7net.in/354cef8f/6cc7e596db5c29e346e4c7646a032b8c/v0/medium.jpg ",
//       title: "Commercial Showroom for Sale",
//       bprice: 4000,
//       price: 8000,
//       catgeory: "Commercial",
//     },
//     {
//       id: 6,
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrjRN5hKf8Ygu0jvwNKFizPrBVDOIQcvsVcQ&s",
//       title: "Land Property on Sale",
//       bprice: 40000,
//       price: 80000,
//       catgeory: "Land",
//     },
//     {
//       id: 6,
//       image: "https://5.imimg.com/data5/SELLER/Default/2022/2/FH/DT/TG/589760/new-product.jpeg",
//       title: "5 BHK Flat for Sale in Hitech City",
//       bprice: 400,
//       price: 800,
//       catgeory: "Residential",
//     },
//     {
//       id: 7,
//       image: "https://www.montverthomes.com/ongoing-properties-in-pune/mont-vert-sonnet/images/2bhk-flats-in-wakad-3d-view.jpg",
//       title: "3 BHK Flat on Sale",
//       bprice: 200,
//       price: 800,
//       catgeory: "Residential",
//     }
//   ];
   
    
//    // Past Auctions
//   export const pastAuctions = [
//     {
//       id: 1,
//       image: "https://gladwinsrealty.com/app/web/upload/large/184_be2efbdd7dfea3586ff22d89758600b0.jpg",
//       title: "1 BHK Flat on Sale",
//       bprice: 853,
//       price: 50000,
//       catgeory: "Residential",
//     },
//     {
//       id: 2,
//       image: "https://www.sastaghar.in/wp-content/uploads/2022/06/SG-39.jpg",
//       title: "4 BHK Flat On Sale",
//       bprice: 452,
//       price: 14200,
//       catgeory: "Residential",
//     },
//     {
//       id: 3,
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGmTgcIJw4h9E9lbX3KOLR68rZ3i9MEKmhug&s",
//       title: "Commercial Office on Sale",
//       bprice: 105,
//       price: 10000,
//       catgeory: "Commercial",
//     },
//     {
//       id: 4,
//       image: "https://www.swfwmd.state.fl.us/sites/default/files/styles/hero_tablet_768x432_x2/public/fsbo-000067132033.jpg?itok=6VIRUBXZ",
//       title: "Land Property On Sale",
//       bprice: 40000,
//       price: 50000,
//       catgeory: "Land",
//     },
//     {
//       id: 5,
//       image: "https://i.ibb.co/RNN6vsf/Luxury-Villas.jpg ",
//       title: "Luxury villa on Sale",
//       bprice: 4000,
//       price: 800000,
//       catgeory: "Luxury",
//     },
//     {
//       id: 6,
//       image: "https://arvgroupindia.com/wp-content/uploads/2023/01/Newtown-image-1.jpg",
//       title: "Commercial Shops on Sale",
//       bprice: 40000,
//       price: 80000,
//       catgeory: "Commercial",
//     },
//     {
//       id: 6,
//       image: "https://img.jamesedition.com/listing_images/2023/11/15/10/59/05/c5c1a28d-367b-4f1e-b9f6-5541ceca12a2/je/760x470xc.jpg",
//       title: "Land Property On Sale",
//       bprice: 400,
//       price: 800000,
//       catgeory: "Land",
//     },
//     {
//       id: 7,
//       image: "https://www.villasinbangalore.co.in/wp-content/uploads/2016/04/Prestige-Augusta-Golf-Village-ed.jpg",
//       title: "Luxury Villa on Sale",
//       bprice: 20000,
//       price: 80000000,
//       catgeory: "Residential",
//     }
//   ];
  

//  export const auctionData = [
//     {
//       id: 1,
//       title: "Flat for Sale in RAIGAD Karjat",
//       possession: "Symbolic",
//       bank: "Canara Bank",
//       price: "₹19.56 Lakh",
//       bankPropertyId: "CNRB160001899946",
//       image: "https://oceaninfra.co/wp-content/uploads/2023/10/3-BHK-Flat-Sale-in-Thane-1-2-BHK-Flat-in-Thane-Ocean-Infra.webp",
//     },
//     {
//       id: 2,
//       title: "Flat for Sale in Mahim Palghar",
//       possession: "Symbolic",
//       bank: "Canara Bank",
//       price: "₹22.50 Lakh",
//       bankPropertyId: "CNRB16000176339",
//       image: "https://5.imimg.com/data5/BE/CR/XD/SELLER-27323816/4-bhk-flat-sale-service-500x500.jpg",
//     },
//   ];

//   export const propertyData = [
//     {
//       id: 1,
//       title: "3 BHK Flat in Mumbai",
//       image: "https://oceaninfra.co/wp-content/uploads/2023/10/3-BHK-Flat-Sale-in-Thane-1-2-BHK-Flat-in-Thane-Ocean-Infra.webp",
//       bank: "HDFC Bank",
//       possession: "Ready to Move",
//       price: "₹ 85,00,000",
//       bankPropertyId: "HDFC123456",
//       currentBid: 8000000,  // Current bid price for the property
//       bprice: 8000000,  // Starting price for bidding (this is used as the initial bid in the PropertyDetails component)
//       bidIncrement: 50000,
//       extraImages: [
//         "https://5.imimg.com/data5/BE/CR/XD/SELLER-27323816/4-bhk-flat-sale-service-500x500.jpg",  // Add actual URLs for extra images
//         "https://5.imimg.com/data5/BE/CR/XD/SELLER-27323816/4-bhk-flat-sale-service-500x500.jpg",
//         "https://5.imimg.com/data5/BE/CR/XD/SELLER-27323816/4-bhk-flat-sale-service-500x500.jpg"
//       ],
//       timeLeft: "4h 28m 38s",
//       endDate: "4th Feb 2025 13:02",
//       biddingHistory: [
//         { user: "Bidder 1", amount: "₹ 80,00,000", date: "03/02/25 14:32:13" },
//         { user: "Bidder 2", amount: "₹ 79,50,000", date: "03/02/25 14:20:10" }
//       ],
//       description: `This stunning 3BHK flat in Mumbai is available for auction. The property includes a spacious living room, modular kitchen, and balconies with a beautiful view of the city skyline.`,
//     },
//     {
//       id: 2,
//       title: "Luxury Villa in Goa",
//       image: "https://5.imimg.com/data5/BE/CR/XD/SELLER-27323816/4-bhk-flat-sale-service-500x500.jpg",
//       bank: "ICICI Bank",
//       possession: "Under Construction",
//       price: "₹ 1.5 Cr",
//       bankPropertyId: "ICICI789012",
//       currentBid: 14000000,  // Current bid price for the property
//       bprice: 14000000,  // Starting price for bidding (this is used as the initial bid in the PropertyDetails component)
//       bidIncrement: 100000,
//       extraImages: [
//         "https://oceaninfra.co/wp-content/uploads/2023/10/3-BHK-Flat-Sale-in-Thane-1-2-BHK-Flat-in-Thane-Ocean-Infra.webp",  // Add actual URLs for extra images
//         "https://oceaninfra.co/wp-content/uploads/2023/10/3-BHK-Flat-Sale-in-Thane-1-2-BHK-Flat-in-Thane-Ocean-Infra.webp",
//         "https://oceaninfra.co/wp-content/uploads/2023/10/3-BHK-Flat-Sale-in-Thane-1-2-BHK-Flat-in-Thane-Ocean-Infra.webp"
//       ],
//       timeLeft: "8h 15m 20s",
//       endDate: "5th Feb 2025 18:00",
//       biddingHistory: [
//         { user: "Bidder 3", amount: "₹ 1.4 Cr", date: "03/02/25 11:45:00" },
//         { user: "Bidder 4", amount: "₹ 1.35 Cr", date: "03/02/25 10:20:50" }
//       ],
//       description: `A beautiful luxury villa located near Goa beachside, offering top-notch amenities and serene surroundings. A perfect investment for holiday stays and rentals.`,
//     }
//   ];
  
  

