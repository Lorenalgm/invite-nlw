import React from 'react';

export default function Invite(){
    return(
        <div className="container">
            <div className="form">
                <h1>Junte-se a Lorena GM no NLW</h1>
                <p>Um evento online e gratuito para evoluirmos juntos para o próximo nível em programação. <a href="https://nextlevelweek.com/convite/lorenalgm">Saiba mais.</a></p>

                <input type="text" placeholder="Nome"></input>
                <input type="email" placeholder="E-mail"></input>
                <a href="https://nextlevelweek.com/convite/lorenalgm" className="button">QUERO PARTICIPAR</a>
            </div>
            <div className="invite">
                <div className="invite invite-secondary"></div>
                <div className="invite"></div>
                <div className="invite invite-secondary"></div>
            </div>
        </div>
    )
}