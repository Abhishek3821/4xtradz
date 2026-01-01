import React from "react";

const offices = [
  {
    country: "Australia",
    company: "CMC Markets Asia Pacific Pty Ltd",
    address: [
      "Level 20, Tower 3, International Towers",
      "300 Barangaroo Avenue",
      "Sydney",
      "NSW 2000",
      "Australia",
    ],
    phone: "+61 300 303 888",
    email: "clientservices@cmmarkets.com",
    website: "https://www.cmmarkets.com/en-au",
  },
  {
    country: "Canada",
    company: "CMC Markets Canada Inc",
    address: [
      "81 Bay Street, Suite 3550",
      "Toronto, Ontario",
      "M5J 0E7",
      "Canada",
    ],
    phone: "+1 866 884 2608",
    email: "contact@cmmarkets.ca",
    website: "https://www.cmmarkets.com/en-ca",
  },
  {
    country: "United Kingdom - HQ",
    company: "CMC Markets UK plc",
    address: [
      "133 Houndsditch",
      "London",
      "EC3A 7BX",
      "United Kingdom",
    ],
    phone: "+44 (0)20 7170 8200",
    email: "clientmanagement@cmmarkets.co.uk",
    website: "https://www.cmmarkets.com/en-gb",
  },
  {
    country: "New Zealand",
    company: "CMC Markets NZ Ltd",
    address: [
      "Level 39, ANZ Centre",
      "23–29 Albert Street",
      "Auckland, 1010",
      "New Zealand",
    ],
    phone: "+64 (0)9 359 1200",
    email: "support@cmmarkets.co.nz",
    website: "https://www.cmmarkets.com/en-nz",
  },
  {
    country: "Norway",
    company: "CMC Markets Germany GmbH Filial Oslo",
    address: [
      "Fridtjof Nansens plass 6",
      "0160",
      "Oslo, Norway",
    ],
    phone: "+47 22 01 97 02",
    email: "salg@cmmarkets.no",
    website: "https://www.cmmarkets.com/no-no",
  },
  {
    country: "Poland",
    company: "CMC Markets Germany GmbH sp. z o.o. oddział w Polsce",
    address: [
      "ul. Emilii Plater 53",
      "Warszawa",
      "00-113",
      "Polska",
    ],
    phone: "+48 22 160 5600",
    email: null,
    website: "https://www.cmmarkets.com/pl-pl",
  },
  {
    country: "Singapore",
    company: "CMC Markets Singapore Pte. Ltd",
    address: [
      "2 Central Boulevard, West Tower",
      "Unit #25-03, IO Central Boulevard Towers",
      "Singapore 018916",
    ],
    phone: "+65 6559 6000",
    email: "info@cmmarkets.com.sg",
    website: "https://www.cmmarkets.com/en-sg",
  },
  {
    country: "Spain",
    company: "CMC Markets Germany GmbH",
    address: [
      "Sucursal en España",
      "Paseo de la Castellana, 40, 9ª planta",
      "28046 Madrid",
      "España",
    ],
    phone: "+34 911 40 705",
    email: "soporteclientes@cmmarkets.es",
    website: "https://www.cmmarkets.com/es-es",
  },
  {
    country: "United Arab Emirates",
    company: "CMC Markets Middle East Ltd",
    address: [
      "Office 2903",
      "ICD Brookfield Place, DIFC",
      "Dubai",
      "United Arab Emirates",
    ],
    phone: "+971 800 0357 04373",
    email: null,
    website: null,
  },
];

const InternationalOffices = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-12">
          International offices
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-sm"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                {office.country}
              </h3>

              <p className="text-sm text-gray-800 mb-3">
                {office.company}
              </p>

              <div className="text-sm text-gray-700 space-y-1 mb-4">
                {office.address.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>

              {office.phone && (
                <p className="text-sm mb-1">
                  <a
                    href={`tel:${office.phone.replace(/\s/g, "")}`}
                    className="underline text-blue-600"
                  >
                    {office.phone}
                  </a>
                </p>
              )}

              {office.email && (
                <p className="text-sm mb-1">
                  <a
                    href={`mailto:${office.email}`}
                    className="underline text-blue-600"
                  >
                    {office.email}
                  </a>
                </p>
              )}

              {office.website && (
                <p className="text-sm">
                  <a
                    href={office.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-600"
                  >
                    {office.website.replace("https://", "")}
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InternationalOffices;
