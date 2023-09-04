import React, { useState } from 'react';
import { ethers } from 'ethers';
import './styles.css'
import logoMetaMask from '../../assets/MetaMask_Fox.svg'
import { Home } from '../Home';

export function LoginScreen() {
    const [username, setUsername] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [balance, setBalance] = useState('');
    const [message, setMessage] = useState('');
    const [showButton, setShowButton] = useState(true);
    const [showHome, setShowHome] = useState(false);


    const handleLogin = () => {
        toggleShowButton();
        connect();
    };

    const toggleShowHome = () => {
        setLoggedIn(!loggedIn);
        return setShowHome(!showHome);
    }
    
    const toggleShowButton = () => {
        return setShowButton(!showButton);
    }

    async function connect() {
        if (!window.ethereum) {
            return setMessage('No MetaMask');
        }

        setLoggedIn(true);
        setMessage(`Conectando com a blockchain...`);

        await window.ethereum.send('eth_requestAccounts');

        const address = window.ethereum.selectedAddress;
        const provider = new ethers.BrowserProvider(window.ethereum);
        const balance = await provider.getBalance(address);

        setUsername(address);
        setBalance(ethers.formatEther(balance.toString()));
        setMessage('');
    }

    return (
        <div className='main-div'>
            {
                <div>
                    {(username && loggedIn) && (
                        <div>
                            <div> 
                                <p className='labels-logged-in'>
                                    Logado com Sucesso!
                                </p>
                            </div>
                            <div className='div-display-flex'> 
                                <p className='labels-logged-in'>
                                    Seu Endereço é: {username}
                                </p>
                                <p className='labels-logged-in'>
                                    Seu Saldo é: {balance}
                                </p>
                            </div>
                            <div className='div-display-flex'>
                                <button onClick={ () => toggleShowHome() } className='button-continue'>
                                    <p>Continuar</p>
                                </button> 
                            </div>
                        </div>
                    )}
                    {loggedIn && (
                        <div>
                            <p> {message}</p>
                        </div>
                    )}
                    { showButton && (
                        <button onClick={handleLogin} className="centered-button">
                        <img
                            src={logoMetaMask}
                            alt="MetaMask"
                            width="50"
                            height="50"
                        />
                        <p className='button-label'>Entrar com MetaMask</p>
                    </button>
                    )}
                </div>
            }
            { showHome && (
                <Home></Home>
            )}
        </div>
    );
};