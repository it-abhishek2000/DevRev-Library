import Card from "./book";
import booksList from "./booksList.json";



const AllBooks = ({FilterData}) => {
    
    return(<div className="AllCards">
      {FilterData.map((x, index) => {
        return <Card detail={x} key={index} />;
      })}
    </div>);
};
export default AllBooks;