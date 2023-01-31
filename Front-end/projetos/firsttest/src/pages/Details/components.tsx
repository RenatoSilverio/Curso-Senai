import styled from "styled-components";


export const Container =styled.div`
    h1{
        text-align:center;
        margin 4rem 0;
    }   
`;
export const MovieList = styled.ul`
    list-style:none;
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
    column-gap:3rem;
    row-gap:4rem;
`;
export const Movie= styled.li`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
   
    img{
        width:180px;
        border-radius:1rem;
        margin-bottom:2rem;
    }
    span{
        font-weight:bold;
        font-size:120%;
        text-align: center;
    }
    a{
        transition:0.3s;
    }
    a:hover{
        transform:scale(1.1);
    }

    .deatils {
        display: flex;
        flex-direction: columns;
        align-itens: flex-start;
        margin-left: 4rem;
        max-whith: 50%;
    
    }

    button {
        background: #6654da;
        boreder: nono;
        cursuor: pointer;
        border-radiuns: 1rem;
        padding: 0.8rem 2rem;
        margin-top: 1rem;
        font-size:100%;
        transition: 0.3s;
    }

    button:houver{
        background:#5848c2;

    }

    spam{
        line-herght: 130%;
        margin-botton: 1rem;
        font-size: 110%;


    }

    release-date{
        opacity: 0,5;
    }

    background{ 
        object-fit: cover;
        z-indexz:-1;
        position: absolute;
        top: 0px;
        left: 0px;
        filter: blur (3px);
        .webkit-filter: blur(3px);
        opacity:0.6;
        width: 100%;
    }
`;

