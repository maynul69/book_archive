const searchBooks = () => {
    const searchText = document.getElementById('search-field').value;

    fetch(`https://openlibrary.org/search.json?q=${searchText}`)
        .then(res => res.json())
        .then(data => displayResult(data.docs))
    
}

const displayResult = (books) => {
    console.log(books);
    books.forEach(book => {
        console.log(book);
        const result = document.getElementById('result');
        const div = document.createElement('div');
        div.classList.add('col-md-4')
        div.innerHTML = `
        <div class="card "  style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title text-center">${book.title}</h5>
                <p class="card-text text-center">Author: ${book.author_name}</p>
                <p class="card-text text-center">First Published In: ${book.first_publish_year}</p>
                
            </div>
        </div>
        `
        result.appendChild(div);
    });
}

