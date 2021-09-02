const searchBooks = () => {
    const searchText = document.getElementById('search-field').value;
    
    
    if (searchText ==='') {
        console.log('write something');
    }
    else if (typeof searchText !== 'string'){
        console.log('ehifbgeifngn');
    }
    else {
        
        fetch(`https://openlibrary.org/search.json?q=${searchText}`)
            .then(res => res.json())
            .then(data => displayResult(data))
    }
    
}


const displayResult = (books) => {
    
    const bookArr = books.docs;
    
    // TOTAL BOOK COUNT 
    const resultCountContainer = document.getElementById('result-count');
    resultCountContainer.innerHTML = `
    <h3>Showing <span>${bookArr.length}</span> of <span>${books.num_found}</span> books</h3>
    `
    //Showing found books
    
    
    bookArr.forEach(book => {
        const result = document.getElementById('result');
        const div = document.createElement('div');
        div.classList.add('col-md-4')
        div.innerHTML = `
        <div class="card "  style="width: 18rem;">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
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

