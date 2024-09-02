import React from 'react'
import Stripe from './Stripe'

function Stripes() {

    var data = [
        {
          url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d486ac04cccf98e13fff_bcgp.svg",
          number: 52,
        },
        {
          url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b62de955b9aa4d2dd0_64868959b481181dd14c03a2_Silvr_logo_white.png",
          number: 2,
        },
        {
          url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db9_63aed9b4493ff77bba5e9939_spotify.svg",
          number: 12,
        },
        {
          url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bafc1c77261cbab231_63aedb322c152d2deae759ec_mural.svg",
          number: 52,
        },
        {
          url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66979aadafcf09e77ccdf8b0_logo-white.svg",
          number: 2,
        },
        {
          url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b997d53302df1b9075_63aeda082c152d7b32e74c9d_remind.svg",
          number: 12,
        },
      ];

  return (
    <div className='flex items-center mt-20'>
        {data.map((elem,index)=>(
            <Stripe val={elem}/>
        ))}
    </div>
  )
}

export default Stripes