import axios from "axios";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import OutsideClick from "@/components3/OutsideClick"

interface IFormValue {
  reference: any;
  color?: any
}

const Dropdown = ({ reference, color }: IFormValue) => {
  const [countries, setCountries] = useState<any[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(
    "Mexico "
  );
  const [selectedCountryCode, setSelectedCountryCode] = useState<string | null>(
    "+52"
  );
  const [selectedImage, setSelectedImage] = useState<string | null>(
    "https://flagcdn.com/w320/mx.png"
  );
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const sortedData = response.data.sort((a:any,b:any) => {
          const aName = a.translations.spa.common;
          const bName = b.translations.spa.common;
          return (aName < bName) ? -1 : (aName > bName) ? 1 : 0;
        });
        setCountries(sortedData);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleSelectCountry = (
    countryName: string,
    countryCode: string,
    countrySuffix: string,
    image: string
  ) => {
    const fullCountryCode = countryCode + countrySuffix;

    setSelectedCountry(countryName);
    setSelectedCountryCode(fullCountryCode);
    reference(fullCountryCode);
    setSelectedImage(image);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCountryCode(e.target.value);
    reference(e.target.value);
  };

  OutsideClick(ref,toggleDropdown);

  return (
    <div className="relative flex max-w-[12rem] formularioNumero">
      
      <div
        className={`phone-number flex items-center gap-[.5rem] cursor-pointer ${color}`}
        onClick={toggleDropdown}
      >
        <div className="ml-4 ">
          <Image
            src={selectedImage!}
            width={40}
            height={40}
            alt={"..."}
            className=" "
            onClick={toggleDropdown}
          />
        </div>
        <div className=" text-2xl cursor-pointer" >▼</div>
        <input
          type="text"
          readOnly
          value={selectedCountryCode || ""}
          onChange={handleInputChange}
          className="md:px-3 h-full border border-gray-300 !w-20 text-xl cursor-pointer !bg-transparent"
          placeholder="Enter country code"
        />
      </div>
      {isOpen && (
        <div ref={ref} className="absolute border rounded max-h-60 overflow-y-auto z-10 w-[20rem] mt-[2.7rem]" id="country">
          {countries.map((country) => (
            <div
              key={country.translations.spa.common}
              className="flex items-center px-4 py-2 cursor-pointer text-2xl hover:bg-gray-100 hover:text-black"
              onClick={() =>
                handleSelectCountry(
                  country.translations.spa.common,
                  country.idd.root,
                  country.idd.suffixes[0],
                  country?.flags?.png
                )
              }
            >
              <Image
                src={country.flags.png}
                width={30}
                height={20}
                alt={country.translations.spa.common}
                className="mr-2"
              />
              <span>{country.translations.spa.common}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
