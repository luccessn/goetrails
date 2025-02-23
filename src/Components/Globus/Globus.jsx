import React from "react";
import InfiniteMenu from "../seccomp/InfiniteMenu";
// import AnimatedContent from "../seccomp/AnimatedContent";
const items = [
  {
    image:
      "https://cdnn1.img.sputnik-georgia.com/img/24036/04/240360445_0:42:1547:916_600x0_80_0_0_f54399b0d92c641f55b85b9e07a48ec5.jpg",
    link: "https://google.com/",
    description: "This is pretty cool, right?",
  },

  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Gudauri_Georgia_Panorama_P.Liparteliani.jpg",
    link: "https://google.com/",
    description: "This is pretty cool, right?",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Martvili_28.jpg/1920px-Martvili_28.jpg",
    link: "https://google.com/",
    description: "This is pretty cool, right?",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/46/%E1%83%93%E1%83%90%E1%83%93%E1%83%98%E1%83%90%E1%83%9C%E1%83%94%E1%83%91%E1%83%98%E1%83%A1_%E1%83%A1%E1%83%90%E1%83%A1%E1%83%90%E1%83%AE%E1%83%9A%E1%83%94.jpg",
    link: "https://google.com/",
    description: "This is pretty cool, right?",
  },
  //
  {
    image:
      "https://www.muchbetteradventures.com/magazine/content/images/size/w2000/2019/09/11094949/iStock-1003994074.jpg",
    link: "https://google.com/",
    description: "This is pretty cool, right?",
  },
  {
    image:
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/f3/b8/60.jpg",
    link: "https://google.com/",
    description: "This is pretty cool, right?",
  },
];
const Middle = () => {
  // const [isScrolled, setisScrolled] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const responsiveThreshold = window.innerHeight * 0.1;
  //     if (window.scrollY > responsiveThreshold) {
  //       setisScrolled(true);
  //     } else {
  //       setisScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <>
      <div style={{ height: "800px", position: "relative" }} className="">
        <InfiniteMenu items={items} />
      </div>
    </>
  );
};

export default Middle;
