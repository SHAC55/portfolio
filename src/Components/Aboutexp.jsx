import React from 'react'

const Aboutexp = () => {

     const companies = [
    {
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQEMRfX2ouW2lw/company-logo_200_200/company-logo_200_200/0/1727855093948/prodigy_infotech_logo?e=1753920000&v=beta&t=dYo_1rfVmo_UGzzHcCVBHKHS-oAwpfDzcJqVF-Iim8c",
      name: "Prodigy Infotech",
      role: "Web Development Intern",
      date: "1 Jul 2024 - 31 Jul 2024",
    },
  ];

  return (
    <div className="bg-[#1f1f1f] p-6 rounded-3xl shadow-2xl border border-[#171717] w-full m-2">
      <h1 className="text-2xl font-medium text-white mb-4">Work Experience</h1>

      <div className="space-y-4">
        {companies.map((c, i) => (
          <div
            key={i}
            className="flex justify-between items-center gap-4 bg-[#272727] p-4 rounded-lg"
          >
            <div className="flex items-center ">
              <img
                src={c.logo}
                alt={c.name}
                className="w-12 h-12 object-contain"
              />
              <div className="ml-2">
                <h2 className="text-white text-lg font-semibold">{c.name}</h2>
                <p className="text-gray-400">{c.role}</p>
              </div>
            </div>

            <div>
              <p className="text-gray-500 text-sm">{c.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Aboutexp