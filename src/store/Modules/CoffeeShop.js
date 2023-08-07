const state = {
    coffee: [
        {
            imge: require('../../assets/img/coffee/gh-1.png'),
            title: "اسپرسو",
            comments: "اسپرسو",
            price: "69000",
            id:"0"
        },
        {
            imge: require('../../assets/img/coffee/gh-2.png'),
            title: "اسپرسو کن پانا",
            comments: "اسپرسو، خامه",
            price: "74000",
            id:"1"
        },
        {
            imge: require('../../assets/img/coffee/gh-3.png'),
            title: "اسپرسو ماکیاتو",
            comments: "اسپرسو، چند قطره شیر، یک لکه فوم شیر",
            price: "71000",
            id:"2"
        },
        {
            imge: require('../../assets/img/coffee/sh-b.png'),
            title: "شیربادام عسل دارچین",
            comments: "شیربادام،عسل،دارچین",
            price: "123000",
            id:"3"
        },
        {
            imge: require('../../assets/img/coffee/sh-f.png'),
            title: "شیرفندق عسل دارچین",
            comments: "شیرفندق،عسل،دارچین",
            price: "123000",
            id:"4"
        },
        {
            imge: require('../../assets/img/coffee/sh-n.png'),
            title: "شیرنارگیل عسل دارچین",
            comments: "شیرنارگیل،عسل،دارچین",
            price: "112000",
            id:"5"
        },
        {
            imge: require('../../assets/img/coffee/i-a.png'),
            title: "آیس آمریکانو",
            comments: "آمریکانو، یخ",
            price: "69000",
            id:"6"
        },
        {
            imge: require('../../assets/img/coffee/i-l.png'),
            title: "آیس لاته",
            comments: "اسپرسو، شیر، یخ",
            price: "84000",
            id:"7"
        },
        {
            imge: require('../../assets/img/coffee/i-m.png'),
            title: "آیس موکا",
            comments: "شکلات، اسپرسو، شیر، یخ",
            price: "89000",
            id:"8"
        },
        {
            imge: require('../../assets/img/coffee/c-z.png'),
            title: "کوکی زنجبیل عسل (عددی)",
            comments: "یک عدد کوکی زنجبیل",
            price: "39000",
            id:"9"
        },
        {
            imge: require('../../assets/img/coffee/c-b.png'),
            title: "کوکی براونی چاکلت (عددی)",
            comments: "یک عدد کوکی براونی چاکلت",
            price: "39000",
            id:"10"
        },
        {
            imge: require('../../assets/img/coffee/c-k.png'),
            title: "کوکی بادام کرنبری (عددی)",
            comments: "کوکی بادام کرنبری)",
            price: "39000",
            id:"11"
        },

    ],
    shopcart:[],
    Total:[],
    
};

const getters = {
    GetCoffee(state) {
        return state.coffee;
    },
    Getshopcart(state){
        return state.shopcart;
    },
    GetTotal(state){
        return state.Total;
    },
   
    
};
const mutations = {

};
const actions = {

};

export default {
    state,
    getters,
    mutations,
    actions
};