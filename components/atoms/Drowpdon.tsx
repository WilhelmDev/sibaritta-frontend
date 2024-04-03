import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Dropdown = () => {
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

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
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
    setSelectedImage(image);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCountryCode(e.target.value);
  };

  return (
    <div className="relative flex w-full h-full">
      <div
        className="bg-white border flex items-center gap-[.5rem]   py-2 px-4 rounded cursor-pointer w-[20rem] h-[3.5rem]"
        onClick={toggleDropdown}
      >
        <div className=" ">
          <Image
            src={selectedImage!}
            width={20}
            height={10}
            alt={"..."}
            className=" "
          />
        </div>
        {selectedCountry ? selectedCountry : "Select a country"}
      </div>
      {isOpen && (
        <div className="absolute bg-white border  rounded    max-h-60 overflow-y-auto z-10  w-[20rem] mt-[2.7rem]">
          {countries.map((country) => (
            <div
              key={country.name.common}
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() =>
                handleSelectCountry(
                  country.name.common,
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
                alt={country.name.common}
                className="mr-2"
              />
              <span>{country.name.common}</span>
            </div>
          ))}
        </div>
      )}
      <input
        type="text"
        value={selectedCountryCode || ""}
        onChange={handleInputChange}
        className="  px-4 py-2 border border-gray-300 rounded"
        placeholder="Enter country code"
      />
    </div>
  );
};

export default Dropdown;
