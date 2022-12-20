import { liguesObject as ligues } from "./ligues.api";

const tags = {
    forSports: { _id: "67rdca188", name: "Спорт", color: "success" },
    forMusic: { _id: "67rdca200", name: "Музыка", color: "info" },
    forGames: { _id: "67rdca201", name: "Игры", color: "info" },
    forKids: { _id: "67rdca202", name: "Детское", color: "info" },
    forMeetings: { _id: "67rdca203", name: "Встречи", color: "primary" }
};

const articles = [
    {
        _id: "67rdca1815",
        title: "Музей елочных игрушек",
        text: "В последние выходные октября Национальный исторический музей Республики Беларусь уже в седьмой раз открывает двери новогоднего выставочного проекта «Музей елочных игрушек»! Традиционно проект проходит совместно с Фабрикой елочных игрушек «ГРАЙ» («Ганарыся Рэчамі АЙчыны!»).<br/>Выставка – часть крупнейшей мировой коллекции елочных игрушек, которая ежегодно пополняется новыми уникальными предметами из разных стран. В «Музее елочных игрушек» каждый ребенок сможет окунуться в волшебную новогоднюю сказку, а взрослый – вернуться в далекое детство. Экспозиция расскажет историю производства стеклянных шаров и других украшений с середины XIX века до наших дней. Познакомит с традициями новогодних праздников, как европейских, так и экзотических стран (Конго, Перу, Индонезия, Новая Зеландия, Северная Корея). Любимые и знакомые большинству родителей новогодние игрушки советского периода позволят рассказать детям традиции новогодних праздников из своего детства. Одним из акцентов проекта будет традиционный миниатюрный интерактивный рождественский городок. Прогуливаясь вдоль витрин со старинными украшениями для елок, цветными шарами и хрупкими винтажными игрушками, гости музея почувствуют атмосферу и теплоту зимних праздников, вдохновятся на поиски необычных подарков для своих близких! Новогодняя игрушка – это не только праздничное украшение елки, но и предмет гордости коллекционеров. В последнее время появилась традиция – преподносить необычные елочные шары в качестве новогоднего подарка. В рамках проекта будет работать фирменный магазин фабрики «ГРАЙ». Приглашаем погрузиться в атмосферу волшебных зимних праздников!",
        ligue: ligues.kids,
        tags: [tags.forKids],
        date: "с 28.10.2022 - 23.01.2023",
        update: "Пн. - вс.: 11:00 - 19:00",
        image: "https://ms1.relax.by/images/d4b21593f3f04b3b118e37d5e68927ff/thumb/w%3D400%2Ch%3D600%2Cq%3D90/afisha_event_photo/50/97/65/5097653883533eb729395491e4e82ea9.jpg",
        adress: "ул. К. Маркса, 12",
        bookmark: false,
        price: 50,
        value: 0
    },
    {
        _id: "67rdca1816",
        title: "Трансформационная психологическая игра",
        text: "Цель игры:- посмотреть на свою жизнь со стороны;- совершить увлекательное путешествие в подсознание, выявив негативные шаблоны ума и модели поведения;- поверить в себя, подружиться с собой и изменить свои неэффективные стереотипные модели мышления и поведения;- выйти из жертвенной, детской позиции, взрастить внутреннего Взрослого, Сильную личность! Игроки заходят в игру, видя, какой опыт и историю они имеют. Что из этого является нужным, стоящим, а что лишь повторением детского решения... От чего можно отказаться и начать действовать по-другому. Осознают, что делать со своим состоянием, сложной проблемной ситуацией, как разрешить имеющийся конфликт и стать полноправным хозяином своей жизни!",
        ligue: ligues.events,
        tags: [tags.forGames],
        date: "26.11.2022",
        update: "14:00",
        image: "https://ms1.relax.by/images/d4b21593f3f04b3b118e37d5e68927ff/thumb/w%3D400%2Ch%3D600%2Cq%3D90/afisha_event_photo/24/c3/11/24c311a5e9277d12ab5164a8a3259058.jpg",
        adress: "ул. Притыцкого, 83",
        bookmark: false,
        price: 150,
        value: 0
    },
    {
        _id: "67rdca1817",
        title: "Выставка «Экзотариум»",
        text: "В экспозиции Вы сможете понаблюдать за обитателями джунглей и пустынь, полюбоваться их грациозностью, увидеть гибрида королевского питона и суматранского короткохвостого питона, полоза Байрда, носатого полоза Буланже, крысиного полоза, жабу-рогатку, амурского полоза, а так же многое другое. Разнообразные представители Азии, Африки и Америки – яркие и экзотические – поразят Вас своим видом и повадками. Выставка заинтересует как взрослых, так и детей. Для маленьких посетителей будет организована интерактивная зона.",
        ligue: ligues.kids,
        tags: [tags.forKids],
        date: "с 28.10.2022 - 29.01.2023",
        update: "Пн. - вс.: 11:00 - 19:00",
        image: "https://ms1.relax.by/images/d4b21593f3f04b3b118e37d5e68927ff/thumb/w%3D400%2Ch%3D600%2Cq%3D90/afisha_event_photo/c5/3e/59/c53e5965ccdc58a04c4adefbf0c450a8.jpg",
        adress: "ул. Богдановича, 9А",
        bookmark: false,
        price: 20,
        value: 0
    },
    {
        _id: "67rdca1818",
        title: "Ламборгини: Человек-легенда",
        text: "История самого дерзкого стартапа в мире суперкаров. Путь страсти, проб и ошибок Ферруччо Ламборгини и его превращения из сына фермера, мастерившего тракторы, в создателя легендарной машины, бросившего вызов самому Энцо Феррари",
        ligue: ligues.cinema,
        tags: [tags.forSports],
        date: "24.11.2022",
        update: "18:40",
        image: "https://ms1.relax.by/images/d4b21593f3f04b3b118e37d5e68927ff/thumb/w%3D400%2Ch%3D600%2Cq%3D90/afisha_event_photo/62/f6/18/62f6183fab964696a1025b4215f56393.jpg",
        adress: "ул. Козлова, 4а",
        bookmark: false,
        price: 80,
        value: 0
    },
    {
        _id: "67rdca1819",
        title: "Юбилей Дом Шерлока",
        text: "Новый сезон Дома Шерлока уже стартовал! В нем мы собрали все самое лучшее, что было в прошедших сезонах, добавили кое-что новое! Встречай обновлённый формат каждую среду в 19.15! Отдыхай полезно вместе  с Домом Шерлока!",
        ligue: ligues.meetings,
        tags: [tags.forMeetings],
        date: "20.12.2022",
        update: "19:15",
        image: "https://webgate.24guru.by/uploads/events/thumbs/300x430/5N7PbCyE9.jpg",
        adress: "White hall",
        bookmark: false,
        price: 10,
        value: 0
    },
    {
        _id: "67rdca1820",
        title: "Концертная программа «Новогодний джаз»",
        text: "29 декабря в 18.00 в концертном зале «Верхний город» почитатели искрометной музыки окунуться в мир великолепного и неповторимого Новогоднего джаза! В этот вечер оркестр «Минск-Классик» предлагает послушать сказки Венского леса, увидеть чарующую голубую луну, услышать новогоднюю застольную песню,побродить по ночному зимнему Минску, с джазовым настроением… В зале, где будет царить волшебная атмосфера, наполненная радостью и весельем, прозвучат сочинения признанных мэтров джаза: Г.Миллера, Г.Манчини, Р.Роджерса, Ж.Гарланда, Б.Финегана и других. Особое место в концертной программе займут лучшие творения отечественной белорусской эстрады – это музыка Е.Глебова, Ю.Бельзацкого, Е.Гришмана, Э. Рознера. Ведущий концерта, дирижер – Максим РАССОХА,",
        ligue: ligues.concerts,
        tags: [tags.forMusic],
        date: "29.12.2022",
        update: "18:00",
        image: "https://webgate.24guru.by/uploads/events/thumbs/300x430/166860242456.jpg",
        adress: "К/з Верхний город",
        bookmark: false,
        price: 20,
        value: 0
    }
];

if (!localStorage.getItem("articles")) {
    localStorage.setItem("articles", JSON.stringify(articles));
}

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("articles")));
        }, 2000);
    });
const update = (id, data) =>
    new Promise((resolve) => {
        const articles = JSON.parse(localStorage.getItem("articles"));
        const articleIndex = articles.findIndex((u) => u._id === id);
        articles[articleIndex] = { ...articles[articleIndex], ...data };
        localStorage.setItem("articles", JSON.stringify(articles));
        resolve(articles[articleIndex]);
    });
const add = (data) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const articles = JSON.parse(localStorage.getItem("articles"));
            const newArticle = {
                ...data,
                _id: Math.random().toString(36).substr(2, 9)
            };
            articles.push(newArticle);
            localStorage.setItem("articles", JSON.stringify(articles));
            resolve(newArticle);
        }, 200);
    });
const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem("articles")).find(
                    (article) => article._id === id
                )
            );
        }, 1000);
    });
export default {
    fetchAll,
    getById,
    update,
    add
};
