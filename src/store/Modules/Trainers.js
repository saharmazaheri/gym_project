const state = {
    trainers: [
        {
            imge: require('../../assets/img/trainer/woman/w-1.png'),
            type: "عمومی",
            NameFamily: "عاطفه فدایی"
        },
        {
            imge: require('../../assets/img/trainer/woman/w-2.jpg'),
            type: "خصوصی",
            NameFamily: "لیلا محمدی"
        },
        {
            imge: require('../../assets/img/trainer/woman/w-3.jpg'),
            type: "عمومی",
            NameFamily: "الیسا جعفری"
        },
        {
            imge: require('../../assets/img/trainer/woman/w-4.jpg'),
            type: "عمومی",
            NameFamily: "مهسا سلطانی"
        },
        {
            imge: require('../../assets/img/trainer/woman/w-5.jpg'),
            type: "خصوصی",
            NameFamily: "فاطمه ابراهیمی"
        },
        {
            imge: require('../../assets/img/trainer/woman/w-6.jpg'),
            type: "خصوصی",
            NameFamily: "مریم حسینی"
        },
        {
            imge: require('../../assets/img/trainer/man/m-1.jpg'),
            type: "عمومی",
            NameFamily: "علی شریفی"
        },
        {
            imge: require('../../assets/img/trainer/man/m-2.jpg'),
            type: "عمومی",
            NameFamily: "حسین محمودی"
        },
        {
            imge: require('../../assets/img/trainer/man/m-3.jpg'),
            type: "عمومی",
            NameFamily: "ماهان مهدوی"
        },
        {
            imge: require('../../assets/img/trainer/man/m-4.jpg'),
            type: "خصوصی",
            NameFamily: "عادل احمدی"
        },
        {
            imge: require('../../assets/img/trainer/man/m-5.png'),
            type: "خصوصی",
            NameFamily: "مهران صالحی"
        },
        {
            imge: require('../../assets/img/trainer/man/m-6.jpg'),
            type: "خصوصی",
            NameFamily: "محمد ساسانی"
        }
    ],
    days: [
        {
            time: "8.00am - 10.00am",
            type1: "عمومی",
            NameFamily1: "عاطفه فدایی",
            type2: "خصوصی",
            NameFamily2: "مریم حسینی",
            type3: "عمومی",
            NameFamily3: "الیسا جعفری",
            type4: "خصوصی",
            NameFamily4: "لیلا محمدی",
            type5: "عمومی",
            NameFamily5: "مهسا سلطانی",
            type6: "خصوصی",
            NameFamily6: "فاطمه ابراهیمی"
        },
        {
            time: "10.00am - 12.00am",
            type1: "خصوصی",
            NameFamily1: "لیلا محمدی",
            type2: "عمومی",
            NameFamily2: "حسین محمودی",
            type3: "خصوصی",
            NameFamily3: "فاطمه ابراهیمی",
            type4: "عمومی",
            NameFamily4: "عاطفه فدایی",
            type5: "خصوصی",
            NameFamily5: "مریم حسینی",
            type6: "عمومی",
            NameFamily6: "الیسا جعفری",
        },
        {
            time: "5.00pm - 7.00pm",
            type1: "عمومی",
            NameFamily1: "ماهان مهدوی",
            type2: "خصوصی",
            NameFamily2: "عادل احمدی",
            type3: "عمومی",
            NameFamily3: "علی شریفی",
            type4: "خصوصی",
            NameFamily4: "مهران صالحی",
            type5: "عمومی",
            NameFamily5: "حسین محمودی",
            type6: "خصوصی",
            NameFamily6: "محمد ساسانی",
        },
        {
            time: "7.00pm - 9.00pm",
            type1: "خصوصی",
            NameFamily1: "مهران صالحی",
            type2: "عمومی",
            NameFamily2: "ماهان مهدوری",
            type3: "خصوصی",
            NameFamily3: "محمد ساسانی",
            type4: "عمومی",
            NameFamily4: "علی شریفی",
            type5: "خصوصی",
            NameFamily5: "عادل احمدی",
            type6: "عمومی",
            NameFamily6: "حسین محمودی",
        },
    ]

};

const getters = {
    GetTrainers(state) {
        return state.trainers;
    },
    GetDays(state) {
        return state.days;
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