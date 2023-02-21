const db = require('../db')
const { Review, ThemePark } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const themePark1 = await new ThemePark({
        name: 'Disneyland',
        location: 'Anaheim, California, USA',
        description: "The original Disney theme park, known for its classic attractions like It's a Small World and Pirates of the Caribbean. Great for family!",
        image: 'https://i.imgur.com/vJSUu5w.jpg',
        rating: '4.5/5'
    })
    themePark1.save()
    const themePark2 = await new ThemePark({
        name: 'Universal Studios',
        location: 'Orlando, Florida, USA',
        description: "A movie-themed park with attractions based on popular franchises like Harry Potter, Jurassic Park, and The Simpsons.",
        image: ' https://i.imgur.com/eXLJdDk.jpg',
        rating: '4.6/5'
    })
    themePark2.save()
    const themePark3 = await new ThemePark({
        name: 'Legoland',
        location: 'Billund, Denmark',
        description: "A park built entirely out of Lego bricks, with attractions and activities for kids and adults.",
        image: 'https://i.imgur.com/vJSUu5w.jpg',
        rating: '4.5/5'
    })
    themePark3.save()
    const themePark4 = await new ThemePark({
        name: 'Europa-Park',
        location: 'Rust, Germany',
        description: "A large theme park with rides and attractions themed around different countries in Europe, such as Italy, Greece, and Scandinavia.",
        image: 'https://i.imgur.com/fbsbgEa.jpg',
        rating: '4.2/5'
    })
    themePark4.save()
    const themePark5 = await new ThemePark({
        name: 'Tokyo Disney Resort',
        location: 'Urayasu, Japan',
        description: "A Disney theme park located in Japan, with unique attractions like Pooh's Hunny Hunt and Journey to the Center of the Earth.",
        image: 'https://i.imgur.com/4nzVcpG.jpg',
        rating: '4.3/5'
    })
    themePark5.save()
    const themePark6 = await new ThemePark({
        name: 'SeaWorld',
        location: 'Orlando, Florida, USA',
        description: "A marine-themed park with shows featuring dolphins, whales, and other aquatic animals, as well as rides and exhibits.",
        image: 'https://i.imgur.com/fonZvYh.jpg',
        rating: '4.1/5'
    })
    themePark6.save()



    const reviews = [
        {
            name: 'Jimmy Smith', comment: 'Absolutely loved this park! The rides were thrilling and the theming was incredible.', themeParkId: themePark1._id
        },
        { name: 'Sally Hanson', comment: 'Had a great time with the family at this park. Lots of fun rides for all ages and plenty of food options. Only downside was the long lines.', themeParkId: themePark2._id },
        {
            name: 'Candi Soles', comment: "The theming was great, but the lines were just too long. Spent most of the day waiting and didn't get to do everything we wanted.", themeParkId: themePark3._id
        },
        { name: 'Louise Santos', comment: 'This park was a bit small, but the rides were still a lot of fun. Would recommend for a half-day trip.', themeParkId: themePark4._id },
        { name: 'Sunny Crowles', comment: 'Was disappointed with the lack of shade and seating throughout the park. Had to stand in line for a long time with nowhere to sit.', themeParkId: themePark5._id },
        { name: 'Danny Camp', comment: 'The shows were incredible and the park had a great atmosphere. Rides were a bit too intense for me though.', themeParkId: themePark6._id },

    ]
    await Review.insertMany(reviews)
    console.log("Added Reviews!")
}

const run = async () => {
    await main()
    // db.close() 
}

run()