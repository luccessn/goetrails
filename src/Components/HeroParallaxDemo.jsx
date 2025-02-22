"use client";
import React from "react";
import { HeroParallax } from "./Ui/hero-parallax";
import FadeContent from "./seccomp/FadeContent ";
export function HeroParallaxDemo() {
  return (
    <FadeContent
      blur={true}
      duration={1000}
      easing="ease-out"
      initialOpacity={0}
    >
      {" "}
      <HeroParallax products={products} />{" "}
    </FadeContent>
  );
}
export const products = [
  {
    title: "Mtkheta",
    link: "https://cursor.so",
    thumbnail:
      "https://mbg.ge/uploads/locblogs/large/43febcadb44ccd2a63f1848424d51383.jpg",
  },
  {
    title: "Tbilisi",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://ticket.vanillasky.ge/sites/default/files/inline-images/digital2.png",
  },
  {
    title: "Qutaisi",
    link: "https://userogue.com",
    thumbnail:
      "https://gff.ge/under21/wp-content/uploads/2022/10/Kutaisi-1.jpg",
  },

  {
    title: "Batumi",
    link: "https://editorially.org",
    thumbnail:
      "https://api.visitbatumi.com/media/image/ec568ecc98e84a9db0c9d34c051c2191.jpg",
  },
  {
    title: "Martvili Canyon",
    link: "https://editrix.ai",
    thumbnail:
      "https://cdn.georgiantravelguide.com/storage/files/martvilis-kanioni-canyon-visitor-center-2.jpg",
  },
  {
    title: "Vardzia",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://cdn.1tv.ge/app/uploads/2021/05/1621941310-190012207_3962757313801942_6199427861416597190_n.jpg",
  },

  {
    title: "Prometheus Cave",
    link: "https://algochurn.com",
    thumbnail: "https://nationalparks.ge/files/155246177044promete5.jpg",
  },
  {
    title: "Mestia",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://www.muchbetteradventures.com/magazine/content/images/2019/09/11095113/Hiking-in-Georgia.jpeg",
  },
  {
    title: "Tusheti",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://static.conciergetbilisi.com/Uploads/editor-image_d113448e-2552-4bf5-96c4-8d2d96fc6113.jpeg",
  },
  {
    title: "Green Cape",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://static.conciergetbilisi.com/Uploads/editor-image_1668e759-3f55-4305-ac9b-a0b692a19642.jpeg",
  },
  {
    title: "Yvareli",
    link: "https://renderwork.studio",
    thumbnail:
      "https://static.conciergetbilisi.com/Uploads/editor-image_455a742e-86dc-45e5-949f-8d92277081c4.jpeg",
  },

  {
    title: "Dashbash Canyon",
    link: "https://cremedigital.com",
    thumbnail:
      "https://static.conciergetbilisi.com/Uploads/editor-image_784fa1a5-42e6-4c95-9b9b-3bd94340b260.jpeg",
  },
  {
    title: "Sataflia",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://static.conciergetbilisi.com/Uploads/editor-image_8da16564-dee4-4f95-b0a1-0eced4808793.jpeg",
  },
  {
    title: "Dmanisi",
    link: "https://invoker.lol",
    thumbnail:
      "https://gdb.rferl.org/9d7e7e33-5590-410c-9677-fcc927976894_w1080_h608_s.jpg",
  },
  {
    title: "Dashbash Canyon",
    link: "https://cremedigital.com",
    thumbnail:
      "https://static.conciergetbilisi.com/Uploads/editor-image_784fa1a5-42e6-4c95-9b9b-3bd94340b260.jpeg",
  },

  {
    title: "Svaneti",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://cdn.georgiantravelguide.com/storage/thumbnails/mestia-in-winter-2.jpg",
  },
  {
    title: "Bakuriani",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Gudauri_Georgia_Panorama_P.Liparteliani.jpg",
  },
  {
    title: "Okatsi Canyon",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://reginfo.ge/media/k2/items/cache/e7623022370b992338d18aa3b2bf4409_XL.jpg?t=1499781283",
  },
];
