import styled from "styled-components";

export const ImageContainer = styled.div`

    video{
        display:none ;
        width:100% ;

    }

    img{
        display:block ;
        width:100% ;
        }

    &:hover {
        video{
            display:block ;
        }

        img{
            display:none ;
        }

    }

`

export const ImageWrapper = styled.div`
    display:grid ;
    grid-template-columns: auto auto auto;
    column-gap: 20px;
    row-gap: 20px;
    padding:20px ;

    @media screen and (max-width:768px) {
        padding:10px ;
        grid-template-columns: auto auto;
  
    }

    @media screen and (max-width:480px) {
        grid-template-columns: auto;
  
    }

`
