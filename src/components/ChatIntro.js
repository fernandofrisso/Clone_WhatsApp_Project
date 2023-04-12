import React from 'react';

import './ChatIntro.css';

import LogoWhats from '../img/introwhats.jpg';

export default () => {

    return(


        <div className='chatIntro'>

            <img src={LogoWhats} alt=''/>
            <h1>Mantenha seu Celular Conectado</h1>
            <h2>O WhatsApp conecta seu telefone para sincronizar suas mensagens </h2>

        </div>
    )
}