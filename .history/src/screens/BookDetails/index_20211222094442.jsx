import axios from "axios";
import { useEffect, useState } from "react";
import { BookDetailscard } from "../../components/BookDetailsCard";


export default function BookDetails() {
    const [book, setBook] = useState([]);
    useEffect(() => {
    const bookId = '61bf586213ee99882eaeb05f';
    const url = 'http://localhost:3001/books/'
      axios.get(url + bookId)
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          console.log('Error!');
          throw new Error('Could not authenticate you!');
        }
        return res.data.book;
      })
      .then((book) => {
        setBook(book);
        console.log(book);
      });
    }, []);
    return (
        <main style={{ padding: "1rem 0" }}>
        <main style={{ padding: "1rem 0" }}>
        <h2>Book</h2>
        {(book) => <BookDetailscard key={book._id} bookData={book}/>}
      </main>
      </main>
    );
  }