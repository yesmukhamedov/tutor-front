import React from 'react';
import Test from '../Test';
import Quiz from '../Quiz';
import NotFound from '../NotFoundPage';
import Menu1_Child1_Content1 from './Menu1_Child1_Content1';
import Menu1_Child2_Content1 from './Menu1_Child2_Content1';
import Menu1_Child3_Content1 from './Menu1_Child3_Content1';
import Menu1_Child3_Content2 from './Menu1_Child3_Content2';
import Menu1_Child4_Content1 from './Menu1_Child4_Content1';
import Menu1_Child5_Content1 from './Menu1_Child5_Content1';
import Menu1_Child5_Content2 from './Menu1_Child5_Content2';
import Menu1_Child6_Content1 from './Menu1_Child6_Content1';
import Menu1_Child7_Content1 from './Menu1_Child7_Content1';
import Menu1_Child7_Content2 from './Menu1_Child7_Content2';
import Menu2_Child1_Content1 from './Menu2_Child1_Content1';
import Menu2_Child1_Content2 from './Menu2_Child1_Content2';
import Menu2_Child1_Content3 from './Menu2_Child1_Content3';
import Menu2_Child1_Content4 from './Menu2_Child1_Content4';
import Menu2_Child2_Content1 from './Menu2_Child2_Content1';


export const list = user => [
    {
        label: 'Тілдің негіздері',
        value: 'Menu1_Child0_Content0',
        subList: [
            {
                label: 'Python бағдарламалау тілімен танысу және бағдарламалауды қамтамасыз ету',
                value: 'Menu1_Child1_Content0',
                subList: [
                    {
                        label: 'Python бағдарламалау тілімен танысу',
                        value: 'Menu1_Child1_Content1',
                        subList: []
                    },
                    ...user?._id? user?.supervisor? [{
                        label: 'Тақырып бойынша білім тексеру',
                        value: 'Menu1_Child1_Content1_Quiz1',
                        subList: []
                    }] : [{
                        label: 'Тақырып бойынша тесттерді дайындау',
                        value: 'Menu1_Child1_Content1_Quiz1',
                        subList: []
                    }] : []
                ]
            },
            {
                label: 'Бірінші бағдарлама',
                value: 'Menu1_Child2_Content0',
                subList: [
                    {
                        label: 'Мәліметтер енгізу, өңдеу және шығару print() функциясы',
                        value: 'Menu1_Child2_Content1',
                        subList: []
                    },
                    ...user?._id? user?.supervisor? [{
                        label: 'Тақырып бойынша білім тексеру',
                        value: 'Menu1_Child2_Content1_Quiz1',
                        subList: []
                    }] : [{
                        label: 'Тақырып бойынша тесттерді дайындау',
                        value: 'Menu1_Child2_Content1_Quiz1',
                        subList: []
                    }] : []
                ]
            },
            {
                label: 'Деректер түрлері, мәндері, айнамалылары және атаулары',
                value: 'Menu1_Child3_Content0',
                subList: [
                    {
                        label: 'Типтер, мәліметтер - литералдар',
                        value: 'Menu1_Child3_Content1',
                        subList: []
                    },
                    ...user?._id? user?.supervisor? [{
                        label: 'Тақырып бойынша білім тексеру',
                        value: 'Menu1_Child3_Content1_Quiz1',
                        subList: []
                    }] : [{
                        label: 'Тақырып бойынша тесттерді дайындау',
                        value: 'Menu1_Child3_Content1_Quiz1',
                        subList: []
                    }] : [],
                    {
                        label: 'Меншіктеу, бірнеше есімдерді меншіктеу',
                        value: 'Menu1_Child3_Content2',
                        subList: []
                    },
                    ...user?._id? user?.supervisor? [{
                        label: 'Тақырып бойынша білім тексеру',
                        value: 'Menu1_Child3_Content2_Quiz1',
                        subList: []
                    }] : [{
                        label: 'Тақырып бойынша тесттерді дайындау',
                        value: 'Menu1_Child3_Content2_Quiz1',
                        subList: []
                    }] : []
                ]
            },
            {
                label: 'Сандық типтер',
                value: 'Menu1_Child4_Content0',
                subList: [
                    {
                        label: 'Бүтін сандар, нақты сандар және логикалық мәндерге қолданылатын математикалық операциялар',
                        value: 'Menu1_Child4_Content1',
                        subList: []
                    },
                    ...user?._id? user?.supervisor? [{
                        label: 'Тақырып бойынша білім тексеру',
                        value: 'Menu1_Child4_Content1_Quiz1',
                        subList: []
                    }] : [{
                        label: 'Тақырып бойынша тесттерді дайындау',
                        value: 'Menu1_Child1_Content1_Quiz1',
                        subList: []
                    }] : []
                ]
            },
            {
                label: 'Мәтін жолдары',
                value: 'Menu1_Child5_Content0',
                subList: [
                    {
                        label: 'Тырнақша көмегімен жолдарды құру',
                        value: 'Menu1_Child5_Content1',
                        subList: []
                    },
                    ...user?._id? user?.supervisor? [{
                        label: 'Тақырып бойынша білім тексеру',
                        value: 'Menu1_Child5_Content1_Quiz1',
                        subList: []
                    }] : [{
                        label: 'Тақырып бойынша тесттерді дайындау',
                        value: 'Menu1_Child5_Content1_Quiz1',
                        subList: []
                    }] : [],
                    {
                        label: 'Жолдарға қолданылатын амалдар және өңдеуге арналған функциялар',
                        value: 'Menu1_Child5_Content2',
                        subList: []
                    },
                    ...user?._id? user?.supervisor? [{
                        label: 'Тақырып бойынша білім тексеру',
                        value: 'Menu1_Child5_Content2_Quiz1',
                        subList: []
                    }] : [{
                        label: 'Тақырып бойынша тесттерді дайындау',
                        value: 'Menu1_Child5_Content2_Quiz1',
                        subList: []
                    }] : []
                ]
            },
            {
                label: 'Шартты операторлар if...else',
                value: 'Menu1_Child6_Content0',
                subList: [
                    {
                        label: 'if, elif, else... операторларының көмегімен салыстыру',
                        value: 'Menu1_Child6_Content1',
                        subList: []
                    },
                    ...user?._id? user?.supervisor? [{
                        label: 'Тақырып бойынша білім тексеру',
                        value: 'Menu1_Child6_Content1_Quiz1',
                        subList: []
                    }] : [{
                        label: 'Тақырып бойынша тесттерді дайындау',
                        value: 'Menu1_Child6_Content1_Quiz1',
                        subList: []
                    }] : []
                ]
            },
            {
                label: 'while және for көмегімен қайталау операторларын құру',
                value: 'Menu1_Child7_Content0',
                subList: [
                    {
                        label: 'while циклінің көмегімен әрекеттерді қайталау',
                        value: 'Menu1_Child7_Content1',
                        subList: []
                    },
                    ...user?._id? user?.supervisor? [{
                        label: 'Тақырып бойынша білім тексеру',
                        value: 'Menu1_Child7_Content1_Quiz1',
                        subList: []
                    }] : [{
                        label: 'Тақырып бойынша тесттерді дайындау',
                        value: 'Menu1_Child7_Content1_Quiz1',
                        subList: []
                    }] : [],
                    {
                        label: 'for және шт кілт сөздерін қолданып итерация жасау',
                        value: 'Menu1_Child7_Content2',
                        subList: []
                    },
                    ...user?._id? user?.supervisor? [{
                        label: 'Тақырып бойынша білім тексеру',
                        value: 'Menu1_Child7_Content2_Quiz1',
                        subList: []
                    }] : [{
                        label: 'Тақырып бойынша тесттерді дайындау',
                        value: 'Menu1_Child7_Content2_Quiz1',
                        subList: []
                    }] : []
                ]
            },
        ]
    },
    {
        label: 'Функциялар, кортеждер, тізімдер, сөздіктер және жиындар',
        value: 'Menu2_Child0_Content0',
        subList: [
            {
                label: 'Тізімдер, сөздіктер, кортеждер, жиындар',
                value: 'Menu2_Child1_Content0',
                subList: [
                    {
                        label: 'Тізімдер',
                        value: 'Menu2_Child1_Content1',
                        subList: [  
                            ...user?._id? user?.supervisor? [{
                                label: 'Тақырып бойынша білім тексеру',
                                value: 'Menu2_Child1_Content1_Quiz1',
                                subList: []
                            }] : [{
                                label: 'Тақырып бойынша тесттерді дайындау',
                                value: 'Menu2_Child1_Content1_Quiz1',
                                subList: []
                            }] : []
                        ]
                    },
                    {
                        label: 'Сөздіктер',
                        value: 'Menu2_Child1_Content2',
                        subList: [
                            ...user?._id? user?.supervisor? [{
                                label: 'Тақырып бойынша білім тексеру',
                                value: 'Menu2_Child1_Content2_Quiz1',
                                subList: []
                            }] : [{
                                label: 'Тақырып бойынша тесттерді дайындау',
                                value: 'Menu2_Child1_Content2_Quiz1',
                                subList: []
                            }] : []
                        ]
                    },
                    {
                        label: 'Кортеждер',
                        value: 'Menu2_Child1_Content3',
                        subList: [
                            ...user?._id? user?.supervisor? [{
                                label: 'Тақырып бойынша білім тексеру',
                                value: 'Menu2_Child1_Content3_Quiz1',
                                subList: []
                            }] : [{
                                label: 'Тақырып бойынша тесттерді дайындау',
                                value: 'Menu2_Child1_Content3_Quiz1',
                                subList: []
                            }] : []
                        ]
                    },
                    {
                        label: 'Жиындар',
                        value: 'Menu2_Child1_Content4',
                        subList: [
                            ...user?._id? user?.supervisor? [{
                                label: 'Тақырып бойынша білім тексеру',
                                value: 'Menu2_Child1_Content4_Quiz1',
                                subList: []
                            }] : [{
                                label: 'Тақырып бойынша тесттерді дайындау',
                                value: 'Menu2_Child1_Content4_Quiz1',
                                subList: []
                            }] : []
                        ]
                    },
                ]
            },
            {
                label: 'Функция',
                value: 'Menu2_Child2_Content0',
                subList: [
                    {
                        label: 'Функция',
                        value: 'Menu2_Child2_Content1',
                        subList: []
                    },
                    user._id? user.supervisor? {
                        label: 'Тақырып бойынша тесттер',
                        value: 'Menu2_Child2_Content1_Quiz1',
                        subList: []
                    } : {
                        label: 'Тақырып бойынша білім тексеру',
                        value: 'Menu2_Child2_Content1_Quiz1',
                        subList: []
                    } : {}
                ]
            },
        ]
    },
];

function Content({content, user, ...props}){
    switch(content){
        case  'Menu1_Child1_Content1': return <Menu1_Child1_Content1/>;
        case  'Menu1_Child2_Content1': return <Menu1_Child2_Content1/>;
        case  'Menu1_Child3_Content1': return <Menu1_Child3_Content1/>;
        case  'Menu1_Child3_Content2': return <Menu1_Child3_Content2/>;
        case  'Menu1_Child4_Content1': return <Menu1_Child4_Content1/>;
        case  'Menu1_Child5_Content1': return <Menu1_Child5_Content1/>;
        case  'Menu1_Child5_Content2': return <Menu1_Child5_Content2/>;
        case  'Menu1_Child6_Content1': return <Menu1_Child6_Content1/>;
        case  'Menu1_Child7_Content1': return <Menu1_Child7_Content1/>;
        case  'Menu1_Child7_Content2': return <Menu1_Child7_Content2/>;
        case  'Menu2_Child1_Content1': return <Menu2_Child1_Content1/>;
        case  'Menu2_Child1_Content2': return <Menu2_Child1_Content2/>;
        case  'Menu2_Child1_Content3': return <Menu2_Child1_Content3/>;
        case  'Menu2_Child1_Content4': return <Menu2_Child1_Content4/>;
        case  'Menu2_Child2_Content1': return <Menu2_Child2_Content1/>;
        default: return content.includes('Quiz')? user._id? user.supervisor? <Quiz className={'test'} test={content}/> : <Test test={content}/> : <NotFound/> : <Menu1_Child1_Content1/>;
    }
}

export default Content;
