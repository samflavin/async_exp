
// getCustomer(1, (customer) => {
//     console.log('Customer: ', customer);
//     if (customer.isGold) {
//         getTopMovies((movies) => {
//             console.log('Top movies: ', movies);
//             sendEmail(customer.email, movies, () => {
//                 console.log('Email sent...')
//             });
//         });
//     }
// });

async function sendGoldMovieEmail(){
    try {
        const customer = await getCustomer(1);
        if(customer.isGold){
        const movies = await getTopMovies();
        const email = await sendEmail(customer.email, movies)
        console.log(email)
        } else {
        console.log('not a gold member')
        }

    } catch(err) {
        console.log(err)
    }


}
sendGoldMovieEmail();



function getCustomer(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting customer info...')
            resolve({
                id: 1,
                name: 'Mosh Hamedani',
                isGold: true,
                email: 'email'
            });
        }, 4000);
    })
}

function getTopMovies() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting their top movies..')
            resolve(['movie1', 'movie2']);
        }, 4000);
    })
  
}

function sendEmail(email, movies) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Email sent!');
        }, 4000);
    })
}