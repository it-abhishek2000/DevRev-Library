
const Card = ({detail}) => {
  
  return (<div className="card">
    <img src={detail.thumbnailUrl} className="thumbnail"></img>
    <h3>{detail.title}</h3>
    <h4>{detail.authors.join(", ")}</h4>
    <h4>{detail.categories}</h4>
    
  </div>);
};
export default Card;
