import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface IFormValue {
  reference: any;
}

const Dropdown = ({ reference }: IFormValue) => {
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
        const sortedData = response.data.sort((a:any,b:any) => {
          const aName = a.name.common;
          const bName = b.name.common;
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

  return (
    <div className="relative flex w-full h-full max-w-[12rem]">
      <div
        className="phone-number flex items-center gap-[.5rem] cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="ml-4 ">
          <Image
            src={selectedImage!}
            width={30}
            height={30}
            alt={"..."}
            className=" "
            onClick={toggleDropdown}
          />
        </div>
        <div style={{ cursor: 'pointer' }}  className=" text-2xl" >▼</div>
        <input
          type="text"
          readOnly
          value={selectedCountryCode || ""}
          onChange={handleInputChange}
          className="px-4 py-2 border border-gray-300 rounded"
          placeholder="Enter country code"
        />
      </div>
      {isOpen && (
        <div className="absolute border rounded max-h-60 overflow-y-auto z-10  w-[20rem] mt-[2.7rem]">
          {countries.map((country) => (
            <div
              key={country.name.common}
              className="flex items-center px-4 py-2 cursor-pointer text-2xl hover:bg-gray-100 hover:text-black"
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
    </div>
  );
}

export default Dropdown;
