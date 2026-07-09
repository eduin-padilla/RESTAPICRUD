import { Router } from 'express'
import {createProduct, getProducts} from './handlers/product'
import { body } from 'express-validator'
import { handleInputErrors } from './middleware'

const router: Router = Router()


router.get('/', getProducts)

router.post('/', 

    body('name').notEmpty().withMessage('el nombre del producto es obligatorio'),
    body('price').isNumeric().withMessage('valor no valido').notEmpty().withMessage('el precio es obligatorio').custom(value => value > 0).withMessage('precio no valido'),
    handleInputErrors,
    createProduct

)



router.patch('/', (req,res ) => {
    res.json('desde patch')
})


export default router
