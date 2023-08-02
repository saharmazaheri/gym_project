const state = {
    coffee: [
        {
            imge: require('../../assets/img/coffee/gh-1.png'),
            title: "اسپرسو",
            comments: "اسپرسو",
            price: "69.000 تومان"
        },
        {
            imge: require('../../assets/img/coffee/gh-2.png'),
            title: "اسپرسو کن پانا",
            comments: "اسپرسو، خامه",
            price: "74.000 تومان"
        },
        {
            imge: require('../../assets/img/coffee/gh-3.png'),
            title: "اسپرسو ماکیاتو",
            comments: "اسپرسو، چند قطره شیر، یک لکه فوم شیر",
            price: "71.000 تومان"
        },
        {
            imge: require('../../assets/img/coffee/sh-b.png'),
            title: "شیربادام عسل دارچین",
            comments: "شیربادام،عسل،دارچین",
            price: "123.000 تومان"
        },
        {
            imge: require('../../assets/img/coffee/sh-f.png'),
            title: "شیرفندق عسل دارچین",
            comments: "شیرفندق،عسل،دارچین",
            price: "123.000 تومان"
        },
        {
            imge: require('../../assets/img/coffee/sh-n.png'),
            title: "شیرنارگیل عسل دارچین",
            comments: "شیرنارگیل،عسل،دارچین",
            price: "112.000 تومان"
        },
        {
            imge: require('../../assets/img/coffee/i-a.png'),
            title: "آیس آمریکانو",
            comments: "آمریکانو، یخ",
            price: "69.000 تومان"
        },
        {
            imge: require('../../assets/img/coffee/i-l.png'),
            title: "آیس لاته",
            comments: "اسپرسو، شیر، یخ",
            price: "84.000 تومان"
        },
        {
            imge: require('../../assets/img/coffee/i-m.png'),
            title: "آیس موکا",
            comments: "شکلات، اسپرسو، شیر، یخ",
            price: "89.000 تومان"
        },
        {
            imge: require('../../assets/img/coffee/c-z.png'),
            title: "کوکی زنجبیل عسل (عددی)",
            comments: "یک عدد کوکی زنجبیل",
            price: "39.000 تومان"
        },
        {
            imge: require('../../assets/img/coffee/c-b.png'),
            title: "کوکی براونی چاکلت (عددی)",
            comments: "یک عدد کوکی براونی چاکلت",
            price: "39.000 تومان"
        },
        {
            imge: require('../../assets/img/coffee/c-k.png'),
            title: "کوکی بادام کرنبری (عددی)",
            comments: "کوکی بادام کرنبری)",
            price: "39.000 تومان"
        },

    ]
};

const getters = {
    GetCoffee(state) {
        return state.coffee;
    }

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