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
                <p>Suas informações estão seguras conosco</p>
                <p>Somos contra spam</p>
            </div>
            <div className="invite">
                <div className="invite invite-secondary"></div>
                <div className="invite">
                    <div className="invite-content">
                        <div className="invite-header">

                            <p>edição<span>#</span>03</p>
                            <p>conteúdo<span>_</span>inédito</p>
                        </div>
                        <div className="invite-dates">
                            <p>12 a 18 de outubro</p>
                            <p>100% online e gratuito!</p>
                        </div>
                        <div className="invite-me">
                            <h1>Lorene GM</h1>
                            <p>lorenalgm</p>
                        </div>
                    </div>
                    <div className="invite-identification">
                        <div className="logo"></div>
                        <h1>00001095</h1>
                    </div>
                </div>
                <div className="invite invite-secondary"></div>
            </div>
        </div>
    )
}