import L00_p00_t00 from "./l00_p00_t00";
import L01_p01_t00 from "./l01_p01_t00";
import L01_p01_t01 from "./l01_p01_t01";
import L01_p01_t02 from "./l01_p01_t02";
import L01_p01_t03 from "./l01_p01_t03";
import L01_p02_t00 from "./l01_p02_t00";
import L01_p03_t00 from "./l01_p03_t00";
import L02_p01_t00 from "./l02_p01_t00";
import L02_p01_t01 from "./l02_p01_t01";
import L02_p01_t02 from "./l02_p01_t02";
import L03_p01_t01 from "./l03_p01_t00";
import L03_p02_t01 from "./l03_p02_t00";

export const list = [
    {
        label: 'Кіріспе',
        value: 'l00_p00_t00',
        subList: []
    },
    {
        label: 'Дәріс #1',
        value: 'l01_p00_t00',
        subList: [
            {
                label: 'Бөлім #1',
                value: 'l01_p01_t00',
                subList: []
            },
            {
                label: 'Бөлім #2',
                value: 'l01_p02_t00',
                subList: []
            },
            {
                label: 'Бөлім #3',
                value: 'l01_p03_t00',
                subList: []
            },
            {
                label: 'Дәріс бойынша тапсырмалар',
                value: 'l01_p01_task',
                subList: [
                    {
                        label: 'Тапсырма #1',
                        value: 'l01_p01_t01',
                        subList: []
                    },
                    {
                        label: 'Тапсырма #2',
                        value: 'l01_p01_t02',
                        subList: []
                    },
                    {
                        label: 'Тапсырма #3',
                        value: 'l01_p01_t03',
                        subList: []
                    }
                ]
            }
        ]
    },
    {
        label: 'Дәріс #2',
        value: 'l02_p00_t00',
        subList: [
            {
                label: 'Бөлім #1',
                value: 'l02_p01_t00',
                subList: []
            },
            {
                label: 'Дәріс бойынша тапсырмалар',
                value: 'l02_p01_task',
                subList: [
                    {
                        label: 'Тапсырма #1',
                        value: 'l02_p01_t01',
                        subList: []
                    },
                    {
                        label: 'Тапсырма #2',
                        value: 'l02_p01_t02',
                        subList: []
                    }
                ]
            }
        ]
    },
    {
        label: 'Дәріс #3',
        value: 'l03_p00_t00',
        subList: [
            {
                label: 'Бөлім #1',
                value: 'l03_p01_t00',
                subList: []
            },
            {
                label: 'Бөлім #2',
                value: 'l03_p02_t00',
                subList: []
            }
        ]
    }
];

function Content({content, ...props}){
    switch(content){
        case  'l00_p00_t00': return <L00_p00_t00/>;
        case  'l01_p01_t00': return <L01_p01_t00/>;
        case  'l01_p01_t01': return <L01_p01_t01/>;
        case  'l01_p01_t02': return <L01_p01_t02/>;
        case  'l01_p01_t03': return <L01_p01_t03/>;
        case  'l01_p02_t00': return <L01_p02_t00/>;
        case  'l01_p03_t00': return <L01_p03_t00/>;
        case  'l02_p01_t00': return <L02_p01_t00/>;
        case  'l02_p01_t01': return <L02_p01_t01/>;
        case  'l02_p01_t02': return <L02_p01_t02/>;
        case  'l03_p01_t01': return <L03_p01_t01/>;
        case  'l03_p02_t01': return <L03_p02_t01/>;
        default: return <L00_p00_t00/>;
    }
}

export default Content;
