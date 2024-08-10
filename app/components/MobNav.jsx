import React from 'react'


const links = [
    {
      name: "How It Works",
      path: "/works",
    },
    {
      name: "The App",
      path: "/app",
    },
    {
      name: "Reviews",
      path: "/reviews",
    }
  ];
  
const MobNav = () => {
  return (
   <>
     <nav className={` ${textColor} hidden md:flex md:ml-auto md:mr-auto flex gap-16 flex-wrap items-center text-xl justify-center`}>
      {links.map((link, index) => (
        <a key={index} href={link.path} className="mr-5 hover:text-yellow-400 cursor-pointer">
          {link.name}
        </a>
      ))}
    </nav>
   </>
  )
}

export default MobNav
