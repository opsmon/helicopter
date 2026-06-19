import type { Aircraft } from "@/types/site";

export const fleet: Aircraft[] = [
  {
    id: "mi-8-demo",
    name: "Вертолет среднего класса",
    image: "/images/hero/helicopter-main.png",
    description:
      "Демонстрационная карточка для пассажирских, грузовых и авиационных работ.",
    passengers: 20,
    payload: "до 3 000 кг",
    range: "до 500 км",
    cruiseSpeed: "до 220 км/ч",
    purposes: ["пассажиры", "груз", "авиационные работы"],
    isDemoData: true,
  },
  {
    id: "light-demo",
    name: "Легкий вертолет",
    image: "/images/gallery/coastal-flight.png",
    description:
      "Демонстрационный вариант для индивидуальных маршрутов, облетов и съемки.",
    passengers: 4,
    payload: "требует подтверждения",
    range: "требует подтверждения",
    cruiseSpeed: "требует подтверждения",
    purposes: ["частный перелет", "облет", "съемка"],
    isDemoData: true,
  },
  {
    id: "maintenance-demo",
    name: "Воздушное судно на обслуживании",
    image: "/images/gallery/hangar-dusk.png",
    description:
      "Карточка показывает формат будущего каталога флота и технических возможностей.",
    payload: "по документации",
    range: "по документации",
    cruiseSpeed: "по документации",
    purposes: ["ТО", "диагностика", "базирование"],
    isDemoData: true,
  },
];
