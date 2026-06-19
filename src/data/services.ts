import type { ServiceItem } from "@/types/site";

export const services: ServiceItem[] = [
  {
    id: "helicopter-rental",
    title: "Аренда вертолета",
    href: "/services/helicopter-rental/",
    image: "/images/hero/helicopter-main.png",
    summary:
      "Индивидуальные пассажирские и корпоративные перелеты с подготовкой маршрута и документов.",
    scenarios: ["Деловая поездка", "Трансфер", "Туристический маршрут"],
    audience: "Частные и корпоративные клиенты",
    aircraft: "Подбирается под маршрут",
    requiredData: ["откуда и куда", "дата", "пассажиры", "багаж"],
    limits: "Маршрут, погода, доступность площадки и разрешения уточняются менеджером.",
    accent: true,
  },
  {
    id: "passenger",
    title: "Пассажирские перевозки",
    href: "/services/helicopter-rental/",
    image: "/images/hero/helicopter-main.png",
    summary:
      "Перевозка людей в точки, где обычная логистика занимает слишком много времени.",
    scenarios: ["Событийный полет", "Рабочая поездка", "Доставка специалистов"],
    audience: "Пассажиры, команды, экспедиции",
    aircraft: "Пассажирская компоновка",
    requiredData: ["маршрут", "список пассажиров", "багаж"],
    limits: "Требуется проверка посадочных площадок и погодных условий.",
  },
  {
    id: "cargo",
    title: "Грузовые перевозки",
    href: "/services/aviation-operations/",
    image: "/images/services/cargo-flight.png",
    summary:
      "Доставка оборудования, материалов и нестандартного груза в труднодоступные районы.",
    scenarios: ["Оборудование", "Материалы", "Экспедиционный груз"],
    audience: "Бизнес, подрядчики, государственные организации",
    aircraft: "Грузовая или внешняя подвеска",
    requiredData: ["масса", "габариты", "упаковка", "точки погрузки"],
    limits: "Требуется согласование веса, крепления и площадок.",
  },
  {
    id: "aviation-operations",
    title: "Авиационные работы",
    href: "/services/aviation-operations/",
    image: "/images/services/cargo-flight.png",
    summary:
      "Мониторинг, съемка, поисково-спасательные, лесоавиационные и монтажные задачи.",
    scenarios: ["Мониторинг", "Съемка", "Спецзадача"],
    audience: "Промышленные и государственные заказчики",
    aircraft: "Под задачу и оборудование",
    requiredData: ["тип работ", "район", "требования", "сроки"],
    limits: "Требуется техническое задание и оценка ограничений района.",
    accent: true,
  },
  {
    id: "maintenance",
    title: "Техническое обслуживание",
    href: "/services/maintenance/",
    image: "/images/services/maintenance-hangar.png",
    summary:
      "Плановые работы, диагностика, ремонт и подготовка документации для владельцев ВС.",
    scenarios: ["Плановое ТО", "Диагностика", "Документы"],
    audience: "Владельцы и эксплуатанты воздушных судов",
    aircraft: "Модель уточняется",
    requiredData: ["модель", "регистрационный номер", "вид работ"],
    limits: "Состав работ определяется по документации и состоянию ВС.",
  },
  {
    id: "helicopter-base",
    title: "Базирование вертолетов",
    href: "/services/helicopter-base/",
    image: "/images/services/maintenance-hangar.png",
    summary:
      "Стоянка, ангарное хранение, охрана, инфраструктура и сопутствующее обслуживание.",
    scenarios: ["Стоянка", "Ангар", "Техническая поддержка"],
    audience: "Владельцы воздушных судов",
    aircraft: "Разные классы вертолетов",
    requiredData: ["модель", "период", "услуги", "даты"],
    limits: "Наличие мест и формат обслуживания подтверждаются отдельно.",
  },
  {
    id: "aerial-filming",
    title: "Воздушная съемка",
    href: "/services/aviation-operations/",
    image: "/images/hero/helicopter-main.png",
    summary:
      "Облеты территорий, съемка объектов и сопровождение медиа- или инженерных задач.",
    scenarios: ["Фото/видео", "Облет объекта", "Картографирование"],
    audience: "Медиа, девелоперы, инженеры",
    aircraft: "С учетом оборудования",
    requiredData: ["район", "цель съемки", "оборудование", "время"],
    limits: "Нужны разрешения и безопасный план полета.",
  },
  {
    id: "special",
    title: "Специальные задачи",
    href: "/request/",
    image: "/images/services/cargo-flight.png",
    summary:
      "Нестандартные задачи разбираются с менеджером, пилотами и техническими специалистами.",
    scenarios: ["Санавиация", "Поиск и спасение", "Монтаж"],
    audience: "Организации с нестандартной логистикой",
    aircraft: "После оценки задачи",
    requiredData: ["описание", "срок", "район", "ограничения"],
    limits: "Возможность выполнения зависит от разрешений, погоды и ресурсов.",
    accent: true,
  },
];

export const serviceRecommendations = [
  {
    task: "Перевезти пассажиров",
    serviceId: "passenger",
    explanation: "Нужны маршрут, дата, пассажиры и багаж.",
  },
  {
    task: "Доставить груз",
    serviceId: "cargo",
    explanation: "Важно заранее указать массу, габариты и упаковку.",
  },
  {
    task: "Добраться в труднодоступное место",
    serviceId: "helicopter-rental",
    explanation: "Менеджер проверит площадку, погоду и разрешения.",
  },
  {
    task: "Провести воздушную съемку",
    serviceId: "aerial-filming",
    explanation: "Потребуется район съемки и требования к оборудованию.",
  },
  {
    task: "Выполнить монтажные работы",
    serviceId: "aviation-operations",
    explanation: "Нужны характеристики груза и план работ.",
  },
  {
    task: "Разместить вертолет",
    serviceId: "helicopter-base",
    explanation: "Проверяется наличие места и набор услуг.",
  },
  {
    task: "Провести техническое обслуживание",
    serviceId: "maintenance",
    explanation: "Нужны модель, регистрационный номер и вид работ.",
  },
  {
    task: "Обсудить нестандартную задачу",
    serviceId: "special",
    explanation: "Заявку лучше начать с свободного описания задачи.",
  },
];
