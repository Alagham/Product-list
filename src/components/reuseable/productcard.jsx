import "./productcard.css"


function Card ({ProductImg, ProductName, Price , styles}) {
    return ( 
        <div className={`card-details ${styles}`}>
            <image>
               <img src={ProductImg} alt="" />
            </image>
           <main>
            <h2>{ProductName}</h2>
            <p>{Price}</p>
            <button>ADD TO CART</button>
           </main>
        </div>
     );
};
 
export default Card;