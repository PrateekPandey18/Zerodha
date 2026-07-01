import React, {useState} from "react";
import {Tooltip , Grow} from "@mui/material"
import { watchlist } from "../data/data";
import {BarChartOutlined, KeyboardArrowDown,KeyboardArrowUp, MoreHoriz} from "@mui/icons-material"

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>
      <ul className="list">
        {watchlist.map((stock,index)=>{
          return(
            <WatchListItem stock={stock} key={index}/>
          )
          
        })}
      </ul>
    </div>
  );
};
export default WatchList;

const WatchListItem= ({stock})=>{
  const [showWatchList,setShowWatchList] = useState(false);
  const handleMouseEnter = (e)=>{
    setShowWatchList(true);
  } 
  const handleMouseExit = (e)=>{
    setShowWatchList(false);
  } 

  return(
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
      <div className="item">
        <p className={stock.isDown? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down"/>
          ): <KeyboardArrowUp/>}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchList && <WatchListActions uid={stock.name}/>}
    </li>
  )
}

const WatchListActions = ({uid})=>{
  return(
    <span className="actions">
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
        <button className=" buy ">Buy</button>
      </Tooltip>
      <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
        <button className="sell ">Sell</button>
      </Tooltip>
      <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
        <button className="">
        <BarChartOutlined  className="icon"/>
        </button>
      </Tooltip>
      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button className="">
          <MoreHoriz className="icon"/>
        </button>
      </Tooltip>
    </span>
  )
}
