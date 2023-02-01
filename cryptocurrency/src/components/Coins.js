import React from 'react'
import CoinItem from "./CoinItem";

const Coins = (props) => {
    return (
        <div className='container'>
            <div>
                <div className='heading'>
                    <p>#</p>
                    <p>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'>Mkt Cap</p>
                </div>



                {props.coins.map(coins =>{
                    return (
                        <CoinItem coin={coins} key={coins.id} />
                    )
                })}

            </div>
        </div>
    )
}

export default Coins