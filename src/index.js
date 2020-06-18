import React from 'react';
import ReactDom from 'react-dom';
import { render } from '@testing-library/react';
import './index.css';
// import Data from './data'
//Stateless functional Component 
// always return JSX

// function Greet(){
//   return (
//    <div>
// <Person />     
//    </div>
//   )
// }


//three arguments elements,propsObject, children


// const Person=()=>{
//   render()
//     return(
// <div></div>      
//     )
//   }

//Mini Book Project

// function Books(){
//   return (
//     <section>
//     <Book />
//     </section>
//   )
// }

// const Book=()=>{
//   return ( 
//   <article>
//     <CoverImage />
//     <Title />
//     <Author />
//   </article>
//   )
// }
// const CoverImage= ()=> <img src="https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL._AC_UL200_SR200,200_.jpg" alt="Book"/>
// const Title=() => <h1>The Very Hungry Caterpillar Board book – March 23, 1994</h1>;
// const Author=() => <p>Eric ceil</p>;

//PROPS (PROPERTIES)= ARGUMENTS
// function sayName(name){
  // console.log(name)
//}
//sayName("john")

function People(){
  return(
    <section>
      <Person name="Hamza Ali" job="developer"><p>Ab ye kisi kitab mein nhi likha</p></Person>
      <Person name="Ahmed" job="designer"/>

    </section>
  )
}

const Person=(props,Children)=>{
  console.log(props);
  
  return(
  <article className="book">
    <h1>{props.name}</h1>
    <p>{props.job}</p>
    {props.children}

    <hr/>
  </article>
  )
}

// const Person1=()=>{
//   console.log();
  
//   return(
//   <article>
//     <h1>Ahmed</h1>
//     <p>Designer folio</p>
//     <hr/>
//   </article>
//   )
// }


ReactDom.render(<People />,document.getElementById('root'));