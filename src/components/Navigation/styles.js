import styled,{css} from 'styled-components'


export const Nav=styled.nav`
    top:47px;
    left:${props=>props.showNavigation ? '0%' : '-100%'};
    position:fixed;
    height:100vh;
    background:#3a3a3a;
    z-index:1;
    transition:all ease-in-out .5s;
    & li{
        list-style:none;
    }
    & ul a{
         color:#e9ebec;
         displaY:block;
         width:100%;
        text-decoration:none;
        display:flex;
        align-items:center;
        padding:10px;
    }
    & ul a > svg:nth-child(1){
        margin-right:5px;
        font-size:25px;
    }
    & ul a > svg:nth-child(2){
        font-size:15px;
        position:relative;
        top:2px;
        margin-left:5px;
    }
    & ul a:hover{
        color:#fff;
    }
    & ul li a:hover{
        background:#2e2e2e;
        cursor:pointer;
    }
    & > ul{
        padding-left:0px;
        & > li{
            border-bottom:1px solid #e9ebec;
        }
    }
    //Media queries
    @media(min-width:1024px){
        left:0%;
    }
`
