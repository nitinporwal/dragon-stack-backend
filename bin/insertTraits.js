const TRAITS = require('../data/traits.json');
const pool = require('../databasePool');

TRAITS.map(TRAIT => {
    const traitType = TRAIT.type;
    const tratiValues = TRAIT.values;

    tratiValues.map(tratiValue => {
        pool.query(
            `INSERT INTO trait("traitType", "traitValue") 
            VALUES($1, $2) RETURNING id`,
            [traitType, tratiValue],
            (error, response) => {
                if(error) console.log(error);
                const traitId = response.rows[0].id;

                console.log(`Inserted the trait - id ${traitId}`);
            }
        )
    })
})