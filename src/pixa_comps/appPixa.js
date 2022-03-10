import React, { useEffect, useState } from 'react';
import axios from "axios";
import PixaInput from './pixaInput';
import PixaList from './pixaList';

function AppPixa(props){
  let [userSearch,setUserSearch] = useState("car")
  let [pics_ar,setPicsAr] = useState([])
  let allPic_ar = [];
  let limitShow = 2;
  let endScreen = false;

  useEffect(() => {
    doApi(userSearch);
    window.addEventListener("scroll" , onScroll)
    return () => {
      window.removeEventListener("scroll" , onScroll)
    }
  },[userSearch])

  const doApi = async(_searchQ) => {
    let url = `https://pixabay.com/api/?key=15489555-318fcca1200a48f374a1ce3ea&q=${_searchQ}&image_type=photo&pretty=true`;
    let resp = await axios.get(url);
    allPic_ar= resp.data.hits
    filterPics();

  }

  
  const onScroll = () => {
    if(window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1 && !endScreen){
      endScreen = true;
      limitShow += 2;
      filterPics();
    }
  }
  const filterPics = () => {
    let temp_ar = [...allPic_ar]
    // דואג שיחזיר רק כמות מאינדקס 0 עד הערך של המשתנה
    // שבגלילה משתנה ומוסיף לעצמו 10 כל פעם
    setPicsAr(temp_ar.splice(0,limitShow));
    endScreen = false;

  }

  return(
    <React.Fragment>
      <PixaInput setUserSearch={setUserSearch}/>
      <PixaList pics_ar={pics_ar} />
    </React.Fragment> 
  )
}

export default AppPixa