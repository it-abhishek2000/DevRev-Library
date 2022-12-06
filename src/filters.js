const Filters = ({setSearchBy}) => {
    return (
      <div className="searchFilter">
        <a href="#" className="all" onClick={()=>setSearchBy("all")} >
          <span>All</span>
        </a>
        <a href="#" className="all" onClick={() =>setSearchBy("title")}>
          <span>Title</span>
        </a>
        <a href="#" className="all" onClick={()=>setSearchBy("authors")}>
          <span>Author</span>
        </a>
        <a href="#" className="all" onClick={()=>setSearchBy("categories")}>
          <span>Subject</span>
        </a>
        <a href="#" id="all" onClick={() => setSearchBy("publishedDate")}>
          <span>Publish Date</span>
        </a>
      </div>
    );
  };
export default Filters;