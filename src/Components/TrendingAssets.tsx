import React from "react";
import AssetCard from "./AssetCard";

import Bitcoin from '../IconAssets/Bitcoin_logo.png';
import Solana from "../IconAssets/Solana_logo.png";
import Ethereum from "../IconAssets/Ethereum_logo.jpg";
import BinanceUSD from "../IconAssets/BinanceUSD.png";
import ShibaInu from '../IconAssets/shiba-inu-logo.png';

export default function TrendingAssets() {

    const defaultItemList = [
        {
            id:1,
            name:'Bitcoin',
            icon:Bitcoin,
            acronym:'BTC',
            price:31812.80,
            movement:10.00,
            TVL:60000,
            frequentlyBrought:[Solana,Ethereum,BinanceUSD]
        },
        {
            id:2,
            name:'Solana',
            icon:Solana,
            acronym:'SOL',
            movement:-12.32,
            price:32.83,
            TVL:60000,
            frequentlyBrought:[Bitcoin,Ethereum,BinanceUSD]
        },
        {
            id:3,
            name:'Ethereum',
            icon:Ethereum,
            acronym:'ETH',
            movement:-11.93,
            price:1466.45,
            TVL:60000,
            frequentlyBrought:[Solana,Bitcoin,BinanceUSD]
        },
        {
            id:4,
            name:'Binance USD',
            icon:BinanceUSD,
            acronym:'BUSD',
            movement:0.26,
            price:1.00,
            TVL:60000,
            frequentlyBrought:[Solana,Ethereum,Bitcoin]
        },
        {
            id:5,
            name:'Shiba Inu',
            icon:ShibaInu,
            acronym:'SHIB',
            movement:-8.1,
            price:0.00000000001948,
            TVL:60000,
            frequentlyBrought:[Solana,Ethereum,BinanceUSD]
        },

    ]


    return(
        <div >
        <h2 className="trendingDiv">
            Trending Assets
        </h2>
        <div style={{ display: 'flex',paddingTop:'50px' }}>
        {defaultItemList.map((item) => (
            <AssetCard 
                key={item.id} 
                name={item.name} 
                icon={item.icon} 
                acronym={item.acronym} 
                movement={item.movement}
                price={item.price} 
                tvl={item.TVL}
                frequentlyBrought={item.frequentlyBrought}/>
        ))}</div>
        
        </div>
    );
}