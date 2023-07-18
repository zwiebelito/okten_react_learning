import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Max number of symbols - 20'
    }),
    price: Joi.number().min(0).max(50000).required(),
    year: Joi.number().min(2000).max(new Date().getFullYear()).required()
})

export { carValidator }