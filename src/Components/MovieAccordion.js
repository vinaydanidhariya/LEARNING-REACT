import React from 'react';
import { Accordion, Card, Image } from "react-bootstrap";
 
const MovieAccordion = props => {
 const { movies } = props;
 return (
     <Accordion style={{width: "90%", margin: "0px auto 40px", cursor: "pointer"}}>
       {
         movies.map(movie => {
           return (
             <Card key={movie.id}>
               <Accordion.Toggle as={Card.Header} eventKey={movie.id}>
                 {movie.title}
               </Accordion.Toggle>
               <Accordion.Collapse eventKey={movie.id}>
                 <Card.Body>
                 <Image fluid src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
                 <h5 style={{marginBottom: "0"}}>{movie.title}</h5>
                 <p style={{fontSize: ".8rem", fontStyle: "italic"}}>Release Date: {new Date(movie.release_date).toLocaleDateString()}</p>
                 <p>{movie.overview}</p>
                 </Card.Body>
               </Accordion.Collapse>
             </Card>
           )
         })
       }
     </Accordion>
   );
}
 
export default MovieAccordion;