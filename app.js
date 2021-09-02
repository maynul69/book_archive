const searchBooks = () => {
    const searchResult = document.getElementById('search-field');
    const searchText = searchResult.value;
            
        fetch(`https://openlibrary.org/search.json?q=${searchText}`)
            .then(res => res.json())
            .then(data => displayResult(data))
    searchResult.value = '';
}

const displayResult = (books) => {    
    const bookArr = books.docs;    
    // TOTAL BOOK COUNT 
    const resultCountContainer = document.getElementById('result-count');
    resultCountContainer.innerHTML = `
    <h3>Showing <span>${bookArr.length}</span> of <span>${books.num_found}</span> books</h3>
    `
    //Showing found books
    const result = document.getElementById('result');
    result.textContent = '';
    if (books.num_found===0) {
        const error = document.getElementById('error');
        error.innerText='Please Enter a Valid Name'
    }
    else {
        error.innerText = '';
        
        bookArr.forEach(book => {
            const div = document.createElement('div');
            div.classList.add('col-md-4')
            div.innerHTML = `
        <div class="card "  style="width: 18rem;">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title text-center">Title: ${book.title}</h5>
                <p class="card-text text-center">Author: ${book.author_name}</p>
                <p class="card-text text-center">First Published In: ${book.first_publish_year}</p>  
                <p class="card-text text-center">Publisher: ${book.publisher}</p>
            </div>
        </div>
        `
            result.appendChild(div);
        });      
    }
}

