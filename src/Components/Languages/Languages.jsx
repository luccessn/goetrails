import React, { useState } from "react";
import { Listbox, ListboxItem } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { TiWorld } from "react-icons/ti";

export const ListboxWrapper = ({ children }) => (
  <div className="w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
    {children}
  </div>
);

export default function App() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["text"]));

  const [isHidden, setIsHidden] = useState(false);

  const Language = [
    { code: "en", lang: "English" },
    { code: "geo", lang: "Georgian" },
    { code: "ru", lang: "Russian" },
    { code: "ar", lang: "Arabic" },
  ];
  const { i18n } = useTranslation();

  // Toggle the language list visibility
  const toggleLanguages = () => {
    setIsHidden(!isHidden);
  };
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="transition-transform">
      <button
        onClick={toggleLanguages}
        className=" w-8   hover:scale-125 duration-200 hover:text-blue-500 relative"
      >
        <TiWorld className="text-7xl" />
        <span
          className="absolute -top-14 left-[50%] -translate-x-[50%] 
              z-20 origin-left scale-0 px-3 py-2 text-xl font-bold
              shadow-md transition-all duration-300 ease-in-out 
              group-hover:scale-100 group-hover:top-[-30px]"
        >
          Languages
        </span>
      </button>

      <div
        className={` relative left-0 ssm:left-[20%] md:left-[35%]  flex flex-col w-[200px] mt-2   transition-all duration-300 ease-in-out transform ${
          isHidden ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
        style={{ visibility: isHidden ? "visible" : "hidden" }}
      >
        <ListboxWrapper>
          <Listbox
            disallowEmptySelection
            aria-label="Single selection example"
            selectedKeys={selectedKeys}
            selectionMode="single"
            variant="flat"
            onSelectionChange={setSelectedKeys}
            className="text-black"
          >
            {Language.map((lng) => (
              <ListboxItem
                key={lng.code}
                onPress={() => changeLanguage(lng.code)}
              >
                {lng.lang}
              </ListboxItem>
            ))}
          </Listbox>
        </ListboxWrapper>
      </div>
    </div>
  );
}
