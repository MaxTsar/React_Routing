import React from 'react';
import Book from '../components/Book.jsx';

export default function Books(props) {
    console.log(props.match.params.topic);
    const books = props.match.params.topic ? 
                    props.books.filter((item) => item.topic === props.match.params.topic)
                    :
                    props.books
    return (
        <section className="books">
            {
                books.map((item) => {
                    return <Book 
                                key={item.id}
                                img={item.img}
                                title={item.title}
                                author={item.author}
                                year={item.year} />;
                })
            }
        </section>
    );
}