import React from "react";
import styled from "styled-components";
import imgs from '../imgs/logo-header.svg';
import "primeicons/primeicons.css";
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';  
import { NavLink } from "react-router-dom";

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    & nav ul{
        display: flex;
        gap: 10px;
        list-style: none;
    }

`;

const Header = () => {
    return ( 
        <HeaderContainer>
            <img src={imgs} alt="logo" />
                <IconField>
                    <InputText type="text" placeholder="Pesquisar produto..." className='w-full'/>
                    <InputIcon 
                        className={`pi pi-search`}
                    />
                </IconField>
            {/*<nav>
                <ul>
                    <li><NavLink to={"/cadastre-se"}>Cadastre-se</NavLink></li>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/produtos"}>Produtos</NavLink></li>
                    <li><NavLink to={"/categorias"}>Categorias</NavLink></li>
                    <li><NavLink to={"/produtos"}>Produtos</NavLink></li>
                </ul>
            </nav>*/}
            <Button label="Cadastre-se" link onClick={() =>  window.open('https://react.dev', '_blank')} className="primary height: 40px width: 114px border-radius: 4px bold "/>
            <Button label="Entrar" link onClick={() =>  window.open('https://react.dev', '_blank')} className="primary height: 40px width: 114px border-radius: 4px bold bg-pink"/>

            {/*primary, largura de 114px por 40px de altura, bordas arrendondadas em 4px e texto em negrito na cor white e font de 14px.*/}
        </HeaderContainer>
     );
}
 
export default Header;