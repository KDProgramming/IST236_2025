import Country from "../models/countries";
import Destination from "../models/destinations";

export const COUNTRIES: Country[] = [
  new Country("c1", "United States", "#f44336"), // Red
  new Country("c2", "Canada", "#2196f3"), // Blue
  new Country("c3", "Brazil", "#4caf50"), // Green
  new Country("c4", "Spain", "#ff9800"), // Orange
  new Country("c5", "Russia", "#9c27b0"), // Purple
  new Country("c6", "South Korea", "#ffeb3b"), // Yellow
  new Country("c7", "Japan", "#03a9f4"), // Light Blue
  new Country("c8", "Thailand", "#8bc34a"), // Light Green
  new Country("c9", "New Zealand", "#ff5722"), // Deep Orange
  new Country("c10", "Australia", "#673ab7"), // Deep Purple
];

export const DESTINATIONS: Destination[] = [
  new Destination(
    "d1",
    "c1",
    "Yosimite National Park",
    20,
    1890,
    4.6,
    "https://lh3.googleusercontent.com/p/AF1QipMCcI0H3rgPZ4kldKBaMjuf4O90fxWVAJpqnDVC=s680-w680-h510"
  ),
  new Destination(
    "d2",
    "c2",
    "CN Tower",
    32,
    1976,
    4.6,
    "https://lh3.googleusercontent.com/p/AF1QipNh_Ygt5NMXgOxrXXINMqaUHgbMX20uKatJj0kH=s294-w294-h220-k-no"
  ),
  new Destination(
    "d3",
    "c3",
    "Christ the Redeemer",
    38,
    1922,
    4.8,
    "https://lh3.googleusercontent.com/p/AF1QipMzAJtDqbSYNAY_2gTWNOcB9a-Ao4qMuN3n5psO=s294-w294-h220-k-no"
  ),
  new Destination(
    "d4",
    "c4",
    "Basilica de la Sagrada Familia",
    28,
    1882,
    4.8,
    "https://lh3.googleusercontent.com/gps-cs-s/AB5caB_ERKlVEXAnRpkRUsDMxbzx-nwBIY0AznfvZATx7gCG7CtjwU-dD2pw-I1dEX8WyihuUDvtDoY184SEM4IsSbE2pY-nX5bNk4IsmQTlfuCi05ChMBPBip0sSzGhqDaNw7-fP3FsHA=s294-w294-h220-k-no"
  ),
  new Destination(
    "d5",
    "c5",
    "State Heritage Museum",
    6,
    1764,
    4.8,
    "https://lh3.googleusercontent.com/gps-cs-s/AB5caB_OZ2wc-GFjYxR4q8QuVTVDIdszmA1w3R15K97A1qnvYkT--vG2ICZlKXKjoPfjAyqLM0xuRyO1L2ZmDy4l6s-lk275DdDz2cnlIEzj1s4UzYJF3Nl66IFInM0abSAjK46NhuwmRg=s294-w294-h220-k-no"
  ),
  new Destination(
    "d6",
    "c6",
    "Gyeongbokgung Palace",
    2,
    1395,
    4.6,
    "https://lh3.googleusercontent.com/gps-cs-s/AB5caB-fwE6Iyk4wATT2rQptt_Iam1DpGVwaAED3X74E1-DCcBZ7wxr3Y9uyJp0SrvhGBNQEOCNslfoyr2CbdRUQr49gTlW-7k7aB6tG6p9mCCSmVxf-QK8S4iVBuLVdiWhvE3HOsJj-=s294-w294-h220-k-no"
  ),
  new Destination(
    "d7",
    "c7",
    "Kiyomizu-dera",
    3,
    778,
    4.5,
    "https://lh3.googleusercontent.com/p/AF1QipOk_iqKz9nXGawfPdjmomwid4S6700j7eLGrf7m=s294-w294-h220-k-no"
  ),
  new Destination(
    "d8",
    "c8",
    "The Grand Palace",
    15,
    1782,
    4.6,
    "https://lh3.googleusercontent.com/p/AF1QipPmsVEOtBUaIGA3UpoPZbKeC45Mpunrl01bB-Hc=s294-w294-h220-k-no"
  ),
  new Destination(
    "d9",
    "c9",
    "Sky Tower",
    25,
    1997,
    4.5,
    "https://lh3.googleusercontent.com/proxy/BSlgfc6qlNeQsF3mDzYAPpuB4rBKic4Fv_CoYst2IugVkNDnlt37iVPwRV982ncUrP1maXqjtY8cUHfhhLNDBLZtnerz6NxxBY75YWxMEPOb_w29Kfc_9mdEjqU_72opMbTjzV06FrW_aafEyDN448VyNUcn5Q=s294-w294-h220-k-no"
  ),
  new Destination(
    "d10",
    "c10",
    "Hungry Mother State Park",
    28,
    1973,
    4.7,
    "https://lh3.googleusercontent.com/p/AF1QipMHftgSCBlvyjxYphi4gLqDC_62WWvZvyy1EBuh=s294-w294-h220-k-no"
  ),
  new Destination(
    "d11",
    "c1",
    "Smithsonian Nation Museum of American History",
    0,
    1964,
    4.4,
    "https://lh3.googleusercontent.com/p/AF1QipOs1peiFxM8Br-uqjh-zB1Vkj-iQqKGqWjiF-E1=s680-w680-h510"
  ),
  new Destination(
    "d12",
    "c2",
    "Notre-Dame Basilica of Montreal",
    12,
    1824,
    4.7,
    "https://lh3.googleusercontent.com/p/AF1QipPQ-sqC1Ahva2JTEqe1lhhKlo-5fPliiwWHugiK=s294-w294-h220-k-no"
  ),
  new Destination(
    "d13",
    "c3",
    "Iguazu Falls",
    43,
    1541,
    4.9,
    "https://lh3.googleusercontent.com/p/AF1QipPeTolUi6B268CjucDncHpOxjupNPYuByFJ_ZFy=s294-w294-h220-k-no"
  ),
  new Destination(
    "d14",
    "c4",
    "Museo Nacional del Prado",
    16,
    1819,
    4.7,
    "https://lh3.googleusercontent.com/gps-cs-s/AB5caB-aOmI_WvJIP6waasuexazhAC8po9LkHdO9P6QzI8ZOc5P1ign8bj_YbSblmkUOM24alEW4sqa-QH7RJXZnVYqqk9-98Nd3d-U5GupoayokyM16bk4PAlPo2WUTkWY_5CRMhhuwKw=s294-w294-h220-k-no"
  ),
  new Destination(
    "d15",
    "c5",
    "St. Basil's Cathedral",
    24,
    1561,
    4.8,
    "https://lh3.googleusercontent.com/gps-cs-s/AB5caB-4LdfHbGMZUZZ2SdCkcEH3HtLoaZoilagz1oKRxCQmtjIgqAchK1LIj3FshCQTeSRt4rGsjdfw3FAWT3u_8FiDWzBboRarjztOtUDdubTXT9TlqiQgmIktbcxzyvJIXtz5bhGnRw=s294-w294-h220-k-no"
  ),
  new Destination(
    "d16",
    "c6",
    "Bukchon Hanok Village",
    0,
    1392,
    4.4,
    "https://lh3.googleusercontent.com/gps-cs-s/AB5caB9PCMS-MsM5LVsopTkhUjXjGTK0GkblGYreOv0EzrdFBwM8_ictBA6O8U2Wr8EhHQ5H6P_FRtOvGpj492xw8oHsk2CD_DCoBvj4BJDoUEGuEVDtDFtzbVEdu5e_W2_t9KOegccPzQ=s294-w294-h220-k-no"
  ),
  new Destination(
    "d17",
    "c7",
    "Fushimi Inari Taisha",
    0,
    711,
    4.6,
    "https://lh3.googleusercontent.com/p/AF1QipNPOTpDCJCUExeJKRS3AJIivH9awUxSQOExnuja=s1360-w1360-h1020"
  ),
  new Destination(
    "d18",
    "c8",
    "The Temple of the Emerald Buddha",
    15,
    1783,
    4.7,
    "https://lh3.googleusercontent.com/p/AF1QipOky2XTdlMUYFOLusqI1h74UYd2JXmG-sxMNmQZ=s294-w294-h220-k-no"
  ),
  new Destination(
    "d19",
    "c9",
    "Waitomo Glowworm Caves",
    45,
    1887,
    4.5,
    "https://lh3.googleusercontent.com/p/AF1QipMqQzwNYISug-UrcT3AN6YiPn1uwFq_1oFI7ESD=s294-w294-h220-k-no"
  ),
  new Destination(
    "d20",
    "c10",
    "Royal Botanic Gardens Victoria - Melbourne Gardens",
    0,
    1846,
    4.8,
    "https://lh3.googleusercontent.com/p/AF1QipNr16xQjl9PqqLfiXee9kHtLv7xu-kvjiBPdeWw=s294-w294-h220-k-no"
  ),
];
