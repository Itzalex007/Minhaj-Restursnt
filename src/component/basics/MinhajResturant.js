import React, { useState } from 'react'
import "./style.css"
import Menu from './MenuApi.js'
import MenuCard from './MenuCard'
import Navbar from './Navbar.js'


const uniqueList =[ ...new Set ( Menu.map((currentItem)=>{
return currentItem.category
})),"ALL",]
console.log(uniqueList);
const MinhajResturant = () => {
  const [menuData,setMenuData] = useState(Menu);
  const [menuList,setMenuList] = useState(uniqueList)
  const filterItem = (category) => {
    if(category==="ALL"){
      setMenuData(Menu)
      return 
    }
    const updatedList = Menu.filter((currentItem) =>{
      return currentItem.category === category 

    })
    setMenuData(updatedList);
  }
  return (
    <>
      <Navbar filterItem= {filterItem}  menuList={menuList}/>  


       <MenuCard menuData = {menuData} />
    </>
  )
}

export default MinhajResturant
