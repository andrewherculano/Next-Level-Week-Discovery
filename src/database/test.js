const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage')

Database.then(async (db) => {
    //INSERINDO DADOS
    /*    await saveOrphanage(db, {
            lat: "-23.1941379",
            lng: "-46.8743619",
            name: "Lar das meninos",
            about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
            whatsapp: "1198898852",
            images: [
                "https://images.unsplash.com/photo-1597553954309-30454e8502f9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    
                "https://images.unsplash.com/photo-1600720642653-529b16872835?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
            ].toString(),
            instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            opening_hours: "Horário de visitas Das 18h até 8h",
            open_on_weekends: "0"
        })*/

    //CONSULTANDO DADOS
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //CONSULTANDO UM DADO PELO id
    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    //console.log(orphanage)

    //DELETANDO DADOS
    /* console.log(await db.run('DELETE FROM orphanages WHERE id = "3"'))
     console.log(await db.run('DELETE FROM orphanages WHERE id = "4"'))
     console.log(await db.run('DELETE FROM orphanages WHERE id = "5"'))
     console.log(await db.run('DELETE FROM orphanages WHERE id = "6"'))
     console.log(await db.run('DELETE FROM orphanages WHERE id = "7"'))
     console.log(await db.run('DELETE FROM orphanages WHERE id = "8"')) */

})