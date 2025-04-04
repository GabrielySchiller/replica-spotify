import React from 'react'
import SingleItem from './SingleItem';
import { Link, useLocation } from 'react-router-dom';

const Itemlist = ({title , items, itemsArray, path, idPath}) => {

  const {pathname} = useLocation();
  const home = pathname === "/";
  const finalItems = home ? items : Infinity;
  
  return (
    <div className='item-list'>
             <div className='item-list__subtitulos'>
                <h2 className='item-list__subtitulo'> {title} Populares</h2>

                { home ? (<Link className='item-list__link' to={path} > Mostrar tudo</Link>) 
                : (<></>)}
            
            </div>
         
   
          <div className='item-list__container'>

          {itemsArray.length > 0 ? ( itemsArray.slice(0, finalItems) // Limita os itens exibidos
            .map((currentObj, index) => (
              
              <SingleItem 
              idPath={idPath}
              {...currentObj} 
              key={`${title}-${index}`} 
              />
            
            ))) : (<p>Nenhum item disponível</p>)} 
          </div>
    </div>
  );
};
 export default Itemlist


// import React from "react";
// import SingleItem from "./SingleItem";
// import { Link } from "react-router-dom";

// const ItemList = ({ title, items, itemsArray, path, idPath }) => {
//   // console.log(items);

//   return (
//     <div className="item-list">
//       <div className="item-list__header">
//         <h2>{title} populares</h2>
//         <Link to={path} className="item-list__link">
//           Mostrar tudo
//         </Link>
//       </div>

//       <div className="item-list__container">
//         {itemsArray
//           .filter((currentValue, index) => index < items)
//           .map((currObj, index) => (
//             <SingleItem
//         
//               idPath={idPath}
//               {...currObj}
//               key={`${title}-${index}`}
//             />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default ItemList;



      
    
