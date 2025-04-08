//React related
import React, { useState,useEffect } from 'react'
//Css Related
import './ExtraCSS.css'
//Components
import FrontBGimagePart from './FrontBGimagePart'
import CatageorySEl from './CatageorySEl'
import FrequentlyAsked from './FrequentlyAsked'
import MostBookedServises from './MostBookedServises'
import TextAreaShow from './TextAreaShow'


function PagePart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [Category,setCategory]=useState("All")
  return (
    <>
      <div className="main w-full min-h-screen bg-white p-10 pt-8 text-zinc-800">
        <FrontBGimagePart />
        <CatageorySEl Category={Category} setCategory={setCategory}/>
        <TextAreaShow />
        <MostBookedServises />
        <FrequentlyAsked />
      </div>
    </>
  )
}

export default PagePart