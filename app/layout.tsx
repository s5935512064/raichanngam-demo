import type { Metadata } from "next";
import { Viewport } from "next";
import { poppins, kanit } from "@utils/font";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import Transition from "@/components/Transition";
import "./globals.css";

import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./cookieconsent.css";
import "vanilla-cookieconsent/dist/cookieconsent.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "ไร่จันทร์งาม: ไร่ออร์แกนิกเพื่อความยั่งยืน",
  description:
    "สัมผัสรสชาติผลผลิตออร์แกนิกคุณภาพสูงจากไร่จันทร์งาม ไร่ที่ใส่ใจทุกขั้นตอนการผลิต ตั้งแต่ปลูกจนถึงมือคุณ พร้อมผลไม้และผักสดออร์แกนิกหลากหลายชนิด ส่งตรงถึงร้านอาหารระดับมิชลินสตาร์",
  keywords: [
    "organic melons",
    "Chan Ngam Farm",
    "organic farming",
    "family farm",
    "premium fruit",
    "marian plum",
    "organic mango",
    "organic pomelo",
    "organic vegetables",
    "Michelin-starred restaurants",
    "sustainability",
    "sustainable agriculture",
    "farm-to-table",
    "Thai organic produce",
    "gourmet ingredients",
    "pesticide-free",
    "eco-friendly farming",
    "luxury produce",
    "artisanal farming",
    "biodiversity",
    "เมล่อนออร์แกนิก",
    "ไร่จันทร์งาม",
    "เกษตรอินทรีย์",
    "ฟาร์มครอบครัว",
    "ผลไม้พรีเมียม",
    "มะยงชิด",
    "มะม่วงออร์แกนิก",
    "ส้มโอออร์แกนิก",
    "ผักสวนครัวออร์แกนิก",
    "ร้านอาหารมิชลินสตาร์",
    "ความยั่งยืน",
    "เกษตรกรรมยั่งยืน",
    "จากฟาร์มสู่โต๊ะอาหาร",
    "ผลิตภัณฑ์ออร์แกนิกไทย",
    "วัตถุดิบระดับพรีเมียม",
    "ปลอดสารพิษ",
    "การเกษตรเป็นมิตรกับสิ่งแวดล้อม",
    "ผลผลิตหรูหรา",
    "การเกษตรแบบดั้งเดิม",
    "ความหลากหลายทางชีวภาพ",
  ],
  authors: [{ name: "Chalaluk Bunnag" }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/raichanngam.ico",
  },
  openGraph: {
    title: "ไร่จันทร์งาม: ไร่ออร์แกนิกเพื่อความยั่งยืน",
    description:
      "สัมผัสรสชาติผลผลิตออร์แกนิกคุณภาพสูงจากไร่จันทร์งาม ไร่ที่ใส่ใจทุกขั้นตอนการผลิต ตั้งแต่ปลูกจนถึงมือคุณ พร้อมผลไม้และผักสดออร์แกนิกหลากหลายชนิด ส่งตรงถึงร้านอาหารระดับมิชลินสตาร์",
    url: "https://raichanngam.com",
    siteName: "ไร่จันทร์งาม: ไร่ออร์แกนิกเพื่อความยั่งยืน",
    locale: "th_TH",
    type: "website",
  },
};

interface Props {
  children: React.ReactNode;
  params: { locale: string };
}

export default function RootLayout({ children, params }: Props) {
  return (
    <html
      lang={params.locale}
      className={`${poppins.variable} ${kanit.variable}`}
    >
      <Transition>{children}</Transition>
    </html>
  );
}
