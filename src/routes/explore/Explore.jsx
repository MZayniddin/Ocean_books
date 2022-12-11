import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import c from './Explore.module.css';

//components
import BookCard from '../../components/book-card/BookCard';

const Filter = () => {
  const { id, category } = useParams();
  const [resultArr, setResultArr] = useState([]);
  useEffect(()=>{
    fetch(`http://127.0.0.1:8000/main/v1/products/list/?category=${id}`)
    .then(response => response.json())
    .then(data => setResultArr(data))
  },[id])
  console.log(resultArr);
  return (
    <div className={c["explore"]}>
      <div className="container">
        <h2 className={c["explore-title"]}>{category}</h2>
        <div className={c["result-wrapper"]}>
        {
          resultArr.map(({ id, name, author , year, language, image }) => (
            <BookCard
              key={id}
              id={id}
              name={name}
              author={author.name}
              year={year}
              language={language}
              image={image}
            />
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Filter