
const zod=require('zod');

const create_to_do=zod.object({
    title:zod.string(),
    description:zod.string(),
});


const update_to_do=zod.object({
    id:zod.string(),
});

module.exports={
    create_to_do,
    update_to_do,
}