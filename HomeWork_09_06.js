// В рамках БД audiohosting_150124 напишите след/запросы:

// 1. Вывести данные об одном треке (на ваш выбор)

db.tracks.findOne(
    { title: "Track 1" }
)
////////

// 2. Вывести данные юзеров не из USA (в проекции - без страны)

db.users.find(
    { country: { $ne: 'USA' } }, 
    { country: 0 } 
)
/////////////

// 3. Вывести данные о треках продолжительностью 30 мин и более (в проекции - без первичного ключа)

db.tracks.find(
    { duration_secs: { $gte: 30 * 60 } }, 
    { _id: 0 } 
)
////////

// 4. Вывести страны и имена всех клиентов

db.users.find(
    {},
    { _id: 0, country: 1, name: 1 } 
)
