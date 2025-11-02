import express from 'express'
import { registerUser, loginUser, getProfile, upadateProfile, bookAppointment, listAppointments, cancelAppointment , paymentRazorpay, verifyRazorpay} from '../controllers/userController.js'
import authUser from '../middlewares/authUser.js'
import upload from '../middlewares/multer.js'
const app = express()
app.use(express.json())

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)

userRouter.get('/get-profile', authUser ,getProfile)
userRouter.post('/update-profile', upload.single('image'), authUser,upadateProfile)
userRouter.post('/book-appointment', authUser, bookAppointment)
userRouter.get('/appointments', authUser, listAppointments)
userRouter.post('/cancel-appointment', authUser, cancelAppointment)
userRouter.post('/payment-razorpay', authUser, paymentRazorpay)
userRouter.post('/verifyRazorpay', authUser, verifyRazorpay)


export default userRouter