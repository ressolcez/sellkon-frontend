import React, { useState,useEffect } from 'react'
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Divider from '@material-ui/core/Divider';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeService from '../services/HomePageServices';
import Carousel, { consts } from "react-elastic-carousel";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import RecommendedProducts from './RecommendedProducts'
import OpinionsComponent from './Opinions';
import AddOpinion from './AddOpinion'
import Rating from "@mui/material/Rating";
import {useParams} from "react-router-dom";
import {useCart} from "react-use-cart"
const breakPoints = [
  { width: 500, itemsToShow: 5 },
];


const StyledDivider = styled(Divider)`
  color: white;
`
const StyledContainer = styled.div`
      margin-top: 40px;
      margin-left:200px;
      width:70%;
`

const StyledInsideCont = styled.div`
    display:flex;
    margin-bottom: 10px;
`

const StyledGalery = styled.div`
     width: 35%;
     margin-top: 60px;
     margin-bottom: 20px;
     margin-left: 70px;
`
const StyledDesc = styled.div`
    margin-top: 60px;
    width: 45%;
    padding: 10px;
    margin-left: 100px;
`

const StyledSpec = styled.div`
    margin-top: 10px;
`

const StyledTables = styled.div`
`

const StyledPrice = styled.div`
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
`

const ButtonCarousel = styled.button`
    width: 50px;
    height: 50px;
    margin-top: 70px;
    border: none;
    background-color: #fef6f6;
    :focus {outline:none;}
    border-radius: 50%;
`

const StyledCarouselContainer = styled.div`
    height:200px;
`

const StyledOpinions = styled.div`
font-size: 18px;
`

function ProductDetailsComponent({products}) {

  let { id } = useParams();
  const { addItem } = useCart();

  const [recommendedProducts ,setRecommendedProducts] = useState([])
  const [opinions ,setOpinions] = useState([])

  const images = [
    {
      original: products.image,
    },
    {
      original: products.image,
    },
  ];

  useEffect(() => {
    HomeService.getRecommendedContent().then((response) => {
       setRecommendedProducts(response.data);
     });

     HomeService.getOpinionsToProduct(id).then((responseOpinion) => {
      setOpinions(responseOpinion.data);
    });

   }, []);

   const handleRating = () => {
    var rating = 0;
    var liczba_ocen = opinions.length;

    const StyledRatingCont = styled.div`
      text-align: center;
     
    `
    const StyledTextRating = styled.div`
    `
    const InsideCont = styled.text`
    font-size: 35px;
    `

    const StyledCount = styled.div` margin-bottom: 15px;`

      for(var i=0; i< liczba_ocen ; i++) 
      {
        rating += opinions[i].rating;
      }

      var finalSum = rating/liczba_ocen;
      finalSum = finalSum.toFixed(1);

      
      if(liczba_ocen == 0 ){
        finalSum = 0;
      }

      return(
        <StyledRatingCont>
          <StyledTextRating><InsideCont>{finalSum}</InsideCont>/5</StyledTextRating>
        <Rating name="read-only" value={finalSum} readOnly precision={0.5} size="large"/>
        <StyledCount>
        Liczba opinii({liczba_ocen})
        </StyledCount>
        <StyledDivider/>
        </StyledRatingCont>
      );
      
    }


  const handleTableSpec = () => {
    if(products.categoryModel?.category_id == 1){
      return(
        <table className="table table-sm table-striped">
        <tbody>
            <tr>
            <td> Procesor  </td>
            <td class="text-xs-left">{products.computerDetailsModel.processor}</td>
            </tr>
            <tr>
            <td> Chipset  </td>
            <td>{products.computerDetailsModel.chipset}</td>
            </tr>
            <tr>
            <td> Karta graficzna  </td>
            <td>{products.computerDetailsModel.grapic_card}</td>
            </tr>
            <tr>
            <td> Wielkość pamięci karty graficznej  </td>
            <td>{products.computerDetailsModel.grapic_card_max_mem}</td>
            </tr>
            <tr>
            <td>Wbudowane napędy optyczne</td>
            <td>{products.computerDetailsModel.optical_drives}</td>
            </tr>
            <tr>
            <td>Łączność</td>
            <td>{products.computerDetailsModel.connection}</td>
            </tr>
            <tr>
            <td>Zasilacz</td>
            <td>{products.computerDetailsModel.charger}</td>
            </tr>
            <tr>
            <td> Podświetlenie obudowy  </td>
            <td>{products.computerDetailsModel.casing_illum}</td>
            </tr>
            <tr>
            <td> System operacyjny  </td>
            <td>{products.computerDetailsModel.operating_system}</td>
            </tr>
            <tr>
            <td> Szerokość  </td>
            <td>{products.computerDetailsModel.width}</td>
            </tr>
            <tr>
            <td> Wysokość  </td>
            <td>{products.computerDetailsModel.height}</td>
            </tr>
            <tr>
            <td> Głębokość</td>
            <td>{products.computerDetailsModel.depth}</td>
            </tr>
        </tbody>
      </table>

      );
    }else if(products.categoryModel?.category_id == 2){
      return(
        <table className="table table-sm table-striped">
        <tbody>
            <tr>
            <td> Procesor  </td>
            <td class="text-xs-left">{products.laptopDetailsModel.processor}</td>
            </tr>
            <tr>
            <td> Chipset  </td>
            <td>{products.laptopDetailsModel.chipset}</td>
            </tr>
            <tr>
            <td> Karta graficzna  </td>
            <td>{products.laptopDetailsModel.grapic_card}</td>
            </tr>
            <tr>
            <td> Wielkość pamięci karty graficznej  </td>
            <td>{products.laptopDetailsModel.grapic_card_max_mem}</td>
            </tr>
            <tr>
            <td>Wbudowane napędy optyczne</td>
            <td>{products.laptopDetailsModel.optical_drives}</td>
            </tr>
            <tr>
            <td>Łączność</td>
            <td>{products.laptopDetailsModel.connection}</td>
            </tr>
            <tr>
            <td>Zasilacz</td>
            <td>{products.laptopDetailsModel.charger}</td>
            </tr>
            <tr>
            <td> System operacyjny  </td>
            <td>{products.laptopDetailsModel.operating_system}</td>
            </tr>
            <tr>
            <td> Szerokość  </td>
            <td>{products.laptopDetailsModel.width}</td>
            </tr>
            <tr>
            <td> Wysokość  </td>
            <td>{products.laptopDetailsModel.height}</td>
            </tr>
            <tr>
            <td> Głębokość</td>
            <td>{products.laptopDetailsModel.depth}</td>
            </tr>
            <tr>
            <td> Przekątna_ekranu</td>
            <td>{products.laptopDetailsModel.screen_diag}</td>
            </tr>
            <tr>
            <td> Jasność matrycy </td>
            <td>{products.laptopDetailsModel.matrix_britn}</td>
            </tr>
            <tr>
            <td> Rozdzielczość Ekranu </td>
            <td>{products.laptopDetailsModel.ekran_res}</td>
            </tr>
            <tr>
            <td> Typ Ekranu </td>
            <td>{products.laptopDetailsModel.ekran_type}</td>
            </tr>
        </tbody>
      </table>
      );
    }
    else{
      return(
<h4>Not implemented </h4>
      );
    }
}

  return (
    <StyledContainer> 
      <StyledInsideCont>
      <StyledGalery>
      <ImageGallery items={images}
              showIndex={false} 
              showThumbnails={false}
              lazyLoad={true}
              showPlayButton={false}/>
      </StyledGalery>
      <StyledDesc>

      <h3>{products.productName}</h3>
      {products.shortDesc} {products.fullDescription}
      <StyledPrice> <b>Cena:</b>  {products.newPrice},00zł</StyledPrice>
      {console.log(products)}
      <Button style={{backgroundColor: "green",}}variant="contained" endIcon={ <ShoppingCartIcon />} onClick={() => addItem(products)}>
        Dodaj do koszyka
      </Button>

      </StyledDesc>
      </StyledInsideCont>
      <StyledDivider/>

      <StyledSpec><h4>Specyfikacja:</h4></StyledSpec>
      <StyledTables>
          {handleTableSpec()}
      </StyledTables>
      <StyledDivider/>
      <StyledOpinions>Opinie:</StyledOpinions>
            {
              handleRating()
            }
            {opinions.map((item) => (
            <OpinionsComponent item={item} key={item.opinion_id} />
          ))}
          
      <StyledDivider/>
      <AddOpinion item = {products.product_id}/>
      <StyledSpec><h4>Polecane produkty:</h4></StyledSpec>
      
      {<StyledCarouselContainer>
      <Carousel breakPoints={breakPoints} 
        renderArrow={({ type, onClick }) => {
          const pointer = type === consts.PREV ? <ArrowLeftOutlined/> : <ArrowRightOutlined/>
          return <ButtonCarousel onClick={onClick}>{pointer}</ButtonCarousel>

        }}
        pagination = {false}
>
        {recommendedProducts.map((item) => (
            <RecommendedProducts opinions = {opinions} item={item} key={item.id} />
          ))}
        </Carousel>
              </StyledCarouselContainer>
        }
    </StyledContainer>
  );
}

export default ProductDetailsComponent

