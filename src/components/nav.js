import React from 'react'
import {page} from "./../config"

function nav() {
  return (
    
       <div className="flex flex-row justify-center gap-40 bg-slate-600 text-gray-50 p-6 text-xl">
          <a href="#about">{page.page1}</a>
          <a href="#spots">{page.page2}</a>
          <a href="#restaurant">{page.page3}</a>
          <a href="#education">{page.page4}</a>
          <a href="#map">{page.page5}</a>              
       </div>
    
  )
}

export default nav
