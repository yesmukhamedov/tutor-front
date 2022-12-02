import React from 'react';
import Menu1_Child1_Content1_Image1 from '../assets/images/Menu1_Child1_Content1_Image1.png'
import Menu1_Child1_Content1_Image2 from '../assets/images/Menu1_Child1_Content1_Image2.png'
import Menu1_Child1_Content1_Image3 from '../assets/images/Menu1_Child1_Content1_Image3.png'
import Menu1_Child1_Content1_Image4 from '../assets/images/Menu1_Child1_Content1_Image4.png'
import Menu1_Child1_Content1_Image5 from '../assets/images/Menu1_Child1_Content1_Image5.png'
import Menu1_Child1_Content1_Image6 from '../assets/images/Menu1_Child1_Content1_Image6.png'
import Menu1_Child1_Content1_Image7 from '../assets/images/Menu1_Child1_Content1_Image7.png'

//let Menu1_Child1_Content1_Image1 = 'https://sun9-66.userapi.com/impg/Ny5SECXQyZHS3gPTa4HVtI2ma2fW_YHBEQcp3Q/7xTCPCWYg6k.jpg?size=456x517&quality=95&sign=013a18b96ef1a449722531f19bcc9899&c_uniq_tag=pr2pUeKapQFdNxcwhIo2Tzi20yM39H7sWk_tGyH3iFc&type=album';

const Menu1_Child1_Content1 = () => {
    return (
        <>
            <b>Python бағдарламалау тілімен танысу</b>
            <b>Жоспар:</b>
            <ol>
                <li>Python тілінің алфавиті және синтаксисі.</li>
                <li>Синтаксистік ережелер</li>
                <li>Python тіліндегі программа құрылымы.</li>
                <li>Препроцессордың директивалары.</li>
                <li>Идентификаторлар.</li>
                <li>Тұрақтылар және түсініктемелер.</li>
                <li>PyCharm бағдарламалау ортасын орнату</li>
            </ol>
            <b>Python тілінің алфавиті және синтаксисі</b>
            <p>Python тілінің базалық жабдықтары: тіл құрамы,тіл алфавиті (идентификаторлар, операциялар таңбалары, тұрақтылар) және комментарийлер.</p>
            <p>Кез-келген тілдегі мәтінде төрт негізгі элементті бөліп көрсетуге болады: <i>символдар, сөздер, сөз тіркестері және сөйлемдер.</i> Алгоритмдік тіл де осындай элементтерден тұрады: <i>символдар, лексемалар, өрнектер, операторлар.</i>Лексемалар символдардан, өрнектер лексемалардан және символдардан, ал операторлар символдардан, лексемалардан,  өрнектерден тұрады (1-сурет):</p>
            <p>Python программалау тілінде программаны жазуда сақталуы тиіс негізгі синтаксистік ережелерге  төменде берілгендерді жатқызуға болады:</p>
            <table>
                <thead><tr><td colSpan={2}><b>Синтаксистік ережелер</b></td></tr></thead>
                <tbody>
                    <tr><td><b>Бас әріптер немесе кіші әріптер</b></td><td>Программаның мәтінін жазғанда бас әріптерді немесе кіші әріптерді пайдаланудың айырмашылығы бар, мысалы <b>name</b> мен <b>NAME</b> екі түрлі нәрсені білдіреді.</td></tr>
                    <tr><td><b><i>Идентификаторлар</i></b></td><td>программалық объектінің аты. Әріп немесе сызық таңбасы идентификатордың бірінші символы болуы мүмкін, бірақ цифр бола алмайды.</td></tr>
                    <tr><td><b><i>Түйінді сөздер</i></b></td><td>компилятор үшін арнайы мәні бар резервтелген идентификаторлар.</td></tr>
                    <tr><td><b><i>Операция таңбалары</i></b></td><td>операндтарға қолданылатын бір немесе бірнеше символдар.</td></tr>
                    <tr><td><b><i>Тұрақтылар</i></b></td><td>өзгермейтін шамалар.</td></tr>
                    <tr><td><b><i>Комментарийлер(түсіндірме мәтіндер)</i></b></td><td>компилятор үшін маңызы жоқ программаның бөлігі және программа мәтінін оқу ыңғайлы болуы үшін қолданылады. Ол // (екі слэш) символынан басталады.</td></tr>
                    <tr><td><b><i>«;»</i> (нүктелі үтір)</b></td><td>Программа мәтінінің әрбір мағналы сөйлемі «;» (нүктелі үтір)белгісімен аяқталады, мысалы <b>int i,j;</b></td></tr>
                    <tr><td><b><i>Блоктар</i></b></td><td>Программаның { } фигуралы жақшаларға алынып жазылған бөліктерін блоктар деп атайды. Тілдің синтаксисі бойынша бір блок бір құрама оператор сияқты қабылданады.</td></tr>
                </tbody>
            </table>
            <br/>
            <b>PYTHON тіліндегі программа құрылымы</b>
            <p>PYTHON тіліндегі кез-келген программа-бұл программаға катысатын барлық айнымалылардың, типтерін, тұрақтыларын, функциялардын жариялануынан және функциялардын өздерінен тұрады. Бұл функциялардын арасында міндетті түрде бір негізгі функция болады, олWIN32-дегі консолдық қосымшалар үшін main(), ал Windows қосымшалары үшін WinMain() функциялары болады. Программа іске қосылғаннан кейін ең бірінші болып осы функциялар орындалады.</p>
            <br/>
            <table>
                <thead><tr><td colSpan={2}><b>PYTHON тіліндегі программа құрылымы</b></td></tr></thead>
                <tbody>
                    <tr><td><b>Директивалар</b></td><td><p>Программа тілдерінде программа мәтінін машиналық кодқа аударатын компиляторларға арналған командалар болады, бұл командаларды <i>директивалар</i> деп атайды, PYTHON программалау тілінде директивалардыңаты # (диез  немесе фунт) белгісінен бастап жазылады.</p></td></tr>
                    <tr><td><b>Деректердің типтері</b></td><td><p>Программа қатысатын барлық шамалар белгілі бір типтерге жатады, мысалы сандық шамалар үшін бүгін және нақты типтер анықталған, сондай- ақ жекелеген символдармен жұмыс жасауға арналған символдық тип,мәтінмен жұмыс жасайтын <i>жолдық тип, бульдік тип</i> және т.б қолданылады. Бұл қарапайым типтерден басқа осы типтер негізінде құрылаты массив, жазба деп аталатын және т.б көптеген <i>құрлымдық типтер</i> болады.</p></td></tr>
                    <tr><td><b>Тұрақтылар</b></td><td><p>Тұрақтыларды мәні белгілі, алдын-ала анықталған <i>идентификатор</i> ретінде қарастыруға болады. PYTHONпрограммалау тілінде тұрақтының мәндері ретінде бүтін сандар, нақты сандар, он алтылық сандар, логикалық тұрақтылар жол түріндегі символдар тізбегі, символдардың өздері және т.б қолданылады.</p></td></tr>
                    <tr><td><b>Айнымалылар</b></td><td><p>Программа орындалуы барысында мәндері өзгеріп отыратын шамаларды айнымалылар деп атайды. Программада міндетті түрде айнымалылардың атауы, типі көрсетіледі. Айнымалылар түрлі типтерге жатады.</p></td></tr>
                    <tr><td><b>Амалдар</b></td><td><p>PYTHON тегі амалдарды арнайы құрылған функциялар ( встроенные функции) деп қарастыруға болады. Амалдар көбінесе екі операндасы бар бинарлық болып келеді, одан баска унарлық амалдар да бар. PYTHON программалау тілінде әдеттегі стандарт қосу, азайту, көбейту және бөлу амалдарынан басқа тағы да көптеген амалдар қолданылады.</p></td></tr>
                    <tr><td><b>Операторлар</b></td><td><p>Программадағы әректтердің орындалу тәртібін <i>операторлар</i> анықтайды. PYTHONтегі операторлар мысалы шартты түрде басқару операторлары, цикл операторлары деп бөлуге болады. Операторлардың жазылуының қабылданған ситаксисі болады.</p></td></tr>
                    <tr><td><b>Функциялар</b></td><td><p><i>Функциялар</i> - бұл программаның кез-келген жерінде шақырып алып пайдалана беруге болатындай өз алдына жеке программалық блоктар. Бұл программалық блоктар белгілі бір әрекеттерді орындап, мідетті түрде белгілі бір типке жататын нәтижелер беру керек. Программалық көптеген функциядан құралады.</p></td></tr>
                </tbody>
            </table>
            <br/>
            <b>Препроцессордың директивалары</b>
            <p>Программа мәтініндегі # (диез немесе фунт) белгісінен бастап жазылатын кез-келген жолды,компилятор, <b><i>препроцессордың директивасы</i></b> деп қабылдайды. Тілдің синтаксисі бойынша препроцессор директивасынан кейін «;» (нүктелі үтір) белгісі қойылмайды.</p>
            <p><b>#Include 	{'<'}файлдың аты{'>'} </b>директивасының қызметі аты көрсетілген файлды тауып алып сол директива тұрған жерге кірістіру болып табылады. Бұл директиваның жазылуының үш түрі кездеседі:</p>
            <br/>
            <table>
                <thead><tr><td colSpan={2}><b>Директива жазылуының үш түрі:</b></td></tr></thead>
                <tbody>
                    <tr><td><b>#include {'<'}файлдың аты{'>'}</b></td><td><p>егер файлдың аты {'<>'} белгілеріне алынып жазылса,онда файлды іздеу реті, алдын-ала берілген кірістірілетін стандарт кітапханалар каталогтары (include directories) бойынша жүргізіледі.</p></td></tr>
                    <tr><td><b>#include “файлдың аты”</b></td><td><p>Егер де, файлдың аты “ ” (тырнақша) белгілеріне алынып жазылса, онда бұл файлды іздеу реті басқаша болады, яғни, бірінші сол <b>#include</b> директивасы қосылып тұрған программаның файлы сақталған каталогтан ізделеді; екінші осы программаға <b>#include</b> директивасы арқылы қосылған басқа да файлдардың каталогтарынан қарастырылады; үшінші ретте ағымдағы каталогтан іздейді; төртінші ретте компилятордың / опциясында көрсетілген каталогтар тексеріледі; соңғы болып <b>include</b> айнымалысындағы каталогтар қаралады.</p></td></tr>
                    <tr><td><b>#include макрос идентификаторы</b></td><td><p>#include макрос идентификаторы түріндегі жазылу егер макрос алдын ала анықталған жағдайда  ғана қолданылады, мысалы: <b>#define myFile “D:\Example5\ myFe.h” #include myFile</b> Директивалары программаға көрсетілген <b>D:\ Example5</b> каталогындағы <b>myFe.h</b> файлын қосатын болады.</p></td></tr>
                    <tr><td><b>Define</b></td><td><p>Препроцессордың директивасы программада символдық тұрақтыларды және параметрлі макростарды құру үшін қолданылады</p></td></tr>
                </tbody>
            </table>
            <br/>
            <b>PyCharm бағдарламалау ортасын орнату</b>
            <p>Python тілінде бағдарламалау негіздерін үйрену үшін ең алдымен бізге бағдараламалау ортасын орнату қажет. Бағдарламалау ортасын орнатудан бұрын, pip көмегімен python – пакеттерін орнату қажет. Pip - бұл Python-да жазылған бағдарламалық пакеттерді орнату және басқару үшін қолданылатын пакеттерді басқару жүйесі. Pip көмегімен python – пакеттерін орнату үшін ең алдымен бізге pip – ті орнату қажет. Орнату реті төменде көрсетілген.</p>
            <p>Ресми нұсқаулық осы сайтта көрсетілген <a href={'https://pip.pypa.io/en/latest/installing.html'}>https://pip.pypa.io/en/latest/installing.html</a></p>
            <ul>
                <li>get-pip.py файлын жүктеу (.py кеңейтімімен сақтауды ұмытпаңыз)</li>
                <li>Файлды іске қосу (әкімші құқықтары қажет болуы мүмкін)</li>
            </ul>
            <p>Ендігі кезекте python - пакетін орнату қажет. Ол үшін ресми сайттан (<a href={'https://python.org/downloads/windows/'}>https://python.org/downloads/windows/</a>)  нұсқасы ең жаңасын (latest python release) таңдай отырып өзімізге жүктеп аламыз.</p>
            <div>
                <img src={Menu1_Child1_Content1_Image1} alter={'Menu1_Child1_Content1_Image1.png'}/>
                Сурет 1.1.1
            </div>
            <p>Сіз төмендегі (1.1.1) суреттегідей файлдар тізімін көресіз. Егер сіздің компьютеріңіздің операциялық жүйесі Windows немесе Мас OS болса сәйкесінше битін таңдап python – ды орнату файлын жүктейміз.</p>
            <div className='imgCenter'>
                <img src={Menu1_Child1_Content1_Image2} alter={'Menu1_Child1_Content1_Image2.png'}/>
                Сурет 1.1.2
            </div>
            <p>Файлды жүктеп болған соң компьютеріміздегі “Загрузки” файлына өтіп, сондағы жоғарыда (1.1.2) жүктелінген файлды ашамыз. Сонда бізде төмендегідей (1.1.3) терезеше пайда болады:</p>
            <div>
                <img src={Menu1_Child1_Content1_Image3} alter={'Menu1_Child1_Content1_Image3.png'}/>
                Сурет 1.1.3
            </div>
            <p>“Modify” таңдамасын таңдаймыз.Төмендегі (1.1.4) терезе ашылады.</p>
            <div>
                <img src={Menu1_Child1_Content1_Image4} alter={'Menu1_Child1_Content1_Image4.png'}/>
                Сурет 1.1.4
            </div>
            <p>Өзімізге қажетті пункттерді таңдап, Next батырмасын басамыз. Ескере кететін жағдай жоғарыда біз pip – ті орнатқандықтан, бізге бұл пунктті таңдаудың қажеттілігі жоқ.</p>
            <div>
                <img src={Menu1_Child1_Content1_Image5} alter={'Menu1_Child1_Content1_Image5.png'}/>
                Сурет 1.1.5
            </div>
            <p>Жоғарыдағы (1.1.5) суреттегідей қажетті пункттерді таңдап болған соң Install батырмасын басамыз.</p>
            <p>Ендігі кезекте бағдарламалау ортасын жүктеу қажет осы сілтеме бойынша (<a href={'https://www.jetbrains.com/pycharm-edu/'}>https://www.jetbrains.com/pycharm-edu/</a>). Біздің жағдайымызда таңдалынып алынған орта PyCharm Educational Edition. PyCharm – Python тілінде бағдарламалауға арналған біріктірілген дамыту ортасы. Біз оны бірге орнатамыз, сонымен бірге осы керемет редактормен танысамыз.</p>
            <p>Жүктеп алынған файлды ашып, әкімші құқықтарын растау арқылы төмендегі терезеге өтеміз.</p>
            <div>
                <img src={Menu1_Child1_Content1_Image6} alter={'Menu1_Child1_Content1_Image6.png'}/>
                Сурет 1.1.6
            </div>
            <p>Next батырмасын басамыз.</p>
            <div>
                <img src={Menu1_Child1_Content1_Image7} alter={'Menu1_Child1_Content1_Image7.png'}/>
                Сурет 1.1.7
            </div>
            <p>PyCharm ортасын орнату осымен аяқталды.</p>
            <div><b>Әдебиеттер:</b></div>
            <ol>
                <li>Брайан Керниган, Деннис Ритчи - Язык программирования Си. изд. : 2-е. М.: Вильямс, 2016. 288 с.</li>
                <li>Стивен Прата. Язык программирования PYTHON. Лекции и упражнения. .Вильямс, 2017. 1248 с.</li>
                <li>Стенли Липпман - Язык программирования C++. Базовый курс. Изд.:5-е. Вильямс, 2017. 1120 с.</li>
                <li>Бьярне Страуструп - Программирование. Принципы и практика с использованием C++. Изд.:2-е. Вильямс, 2016. 1328 с.</li>
            </ol>
        </>
    )
}

export default Menu1_Child1_Content1;