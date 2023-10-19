let Books= new Array();


// module.exports;

exports.getBooks=()=> {
    return Books;

    // return BookList.filter(i=> {
    //     if (i.isRemoved!== true){   
    //         return Books;
    //     }
    // })
}


addBook=(Book, ReadDate,Rating)=>{
    Book.ReadDate=ReadDate;
    Book.Rating=Rating;
    Books.push(Book);
}

numberRead=()=>{
    return Books.length;
}

exports.removeBook=(title)=>{
    Books.map(i => {
        if (i.title === title){
            return i.isRemoved = true;
        }
    })
};