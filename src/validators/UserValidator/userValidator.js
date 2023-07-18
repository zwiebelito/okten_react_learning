import Joi from "joi";

const userValidator = Joi.object({
    name: Joi.string().regex(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/).required().messages({
        'string.pattern.base': 'Name includes only Latin letters (max - 20)'
    }),
    username: Joi.string().regex(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/).required().messages({
        'string.pattern.base': 'Username includes only Latin letters'
    }),
    email: Joi.string().regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).required().messages({
        'string.pattern.base': 'Email need to includes @ symbol'
    })
})

export { userValidator }