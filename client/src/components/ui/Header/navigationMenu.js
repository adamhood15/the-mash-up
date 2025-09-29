const navMenu = [  
    {
        id: 2,
        title: "Instruments",
        link: "/instruments",
        needLogIn: false,
        align: 'center',
        dropdownList: [
        "Guitars and Basses",
        "Percussion",
        "Piano",
        "String",
        "Brass",
        ],
    },
    {
        id: 3,
        title: "Equipment",
        link: "/equipment",
        needLogIn: false,
        align: 'center',
        dropdownList: [
        "DJ Equipment",
        "Lighting",
        "Microphones",
        "Headphones",
        "Cables",
        "Accessories",
        ],
    },
    {
        id: 4,
        title: "Music",
        link: "/music",
        needLogIn: false,
        align: 'center',
        dropdownList: [
        "Rock", "Pop", "Rap", "Hip Hop", "Electronic",
        "Jazz", "Classical", "Folk", "Country", "Latin", "Reggae",
        ],
    },
    {
        id: 5,
        title: "Merch",
        link: "/merch",
        needLogIn: false,
        align: 'center',
        dropdownList: ["T-Shirts", "Hoodies", "Caps", "Bags", "Accessories"],
    },
    {
        id: 7,
        title: "My Account",
        needLogIn: true,
        dropdownList: ["Profile", "Orders", "Sell", "Collection"]
    },
   
        {
        id: 10,
        title: "Log Out",
        needLogIn: true,
        align: 'center'

    },
    {
        id: 11,
        title: "Cart",
        needLogIn: true,
        align: 'center'

    }
];

export default navMenu;
