import { Router } from 'express'
import {createProduct, getProducts, getProductsById, updateProduct, deleteProduct} from './handlers/product'
import { body, param } from 'express-validator'
import { handleInputErrors } from './middleware'

const router: Router = Router()


router.get('/', getProducts)
router.get('/:id', 
    param('id').isInt().withMessage('ID no valido'),
    handleInputErrors,
    getProductsById)

router.post('/', 

    body('name').notEmpty().withMessage('el nombre del producto es obligatorio'),
    body('price').isNumeric().withMessage('valor no valido').notEmpty().withMessage('el precio es obligatorio').custom(value => value > 0).withMessage('precio no valido'),
    handleInputErrors,
    createProduct

)



router.put('/:id', 
    param('id').isInt().withMessage('ID no valido'),
    body('name').notEmpty().withMessage('el nombre del producto es obligatorio'),
    body('price').isNumeric().withMessage('valor no valido').notEmpty().withMessage('el precio es obligatorio').custom(value => value > 0).withMessage('precio no valido'),
    handleInputErrors,
    updateProduct)

router.patch('/:id', 
    handleInputErrors,
    updateProduct
)

router.delete('/:id',
    param('id').isInt().withMessage('ID no valido'),
    handleInputErrors,
    deleteProduct
)


export default router
