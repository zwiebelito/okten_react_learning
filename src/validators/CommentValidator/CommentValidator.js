import Joi from "joi";

const CommentValidator = Joi.object({
    postId: Joi.number().max(700).required(),

    name: Joi.string().regex(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/).required().messages({
        'string.pattern.base': 'Name includes only Latin letters (max - 20)'
    }),

    email: Joi.string().regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).required().messages({
        'string.pattern.base': 'Email need to includes @ symbol'
    }),

    body: Joi.string().max(20).required()

})

export { CommentValidator }