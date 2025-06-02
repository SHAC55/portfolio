import React from 'react'

const Aboutexpertise = () => {

    const skills = [
    // { img: 'https://cdn-icons-png.flaticon.com/128/7991/7991178.png', title: 'HTML5' },
    // { img: 'https://cdn-icons-png.flaticon.com/128/136/136527.png', title: 'CSS3' },
    { img: 'https://cdn-icons-png.flaticon.com/128/5968/5968292.png', title: 'JavaScript' },
    { img: 'https://cdn-icons-png.flaticon.com/128/3459/3459528.png', title: 'React.js' },
    { img: 'https://cdn-icons-png.flaticon.com/128/524/524554.png', title: 'Tailwind CSS' },
    // { img: 'https://cdn-icons-png.flaticon.com/128/11230/11230683.png', title: 'Context API' },
    { img: 'https://cdn-icons-png.flaticon.com/128/5968/5968322.png', title: 'Node.js' },
    { img: 'https://cdn-icons-png.flaticon.com/128/18025/18025491.png', title: 'Express.js' },
    { img: 'https://cdn-icons-png.flaticon.com/128/2906/2906274.png', title: 'MongoDB' },
    // { img: 'https://cdn-icons-png.flaticon.com/128/17723/17723800.png', title: 'JWT' },
    // { img: 'https://cdn-icons-png.flaticon.com/128/12372/12372184.png', title: 'RESTful APIs' },
    { img: 'https://cdn-icons-png.flaticon.com/128/15466/15466163.png', title: 'Git & GitHub' },
    { img: 'https://cdn-icons-png.flaticon.com/128/6489/6489902.png', title: 'Deployment' },
  ];

  return (
    <div className="bg-[#1f1f1f] p-6 rounded-3xl shadow-2xl border border-[#171717] w-full m-2">
      <h1 className="text-2xl font-medium text-white mb-4">My Expertise</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((skill, i) => (
          <div key={i} className="flex items-center gap-3 mt-4">
            <div className="bg-[#272727] rounded-full p-3 flex items-center justify-center w-12 h-12">
              <img src={skill.img} alt={skill.title} className="w-6 h-6 object-contain" />
            </div>
            <span className="text-gray-300 font-medium">{skill.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Aboutexpertise