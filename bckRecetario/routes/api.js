let express = require('express');
let router = express.Router();

let passport = require('passport');
let passportJWT = require('passport-jwt');

let extractJWT = passportJWT.ExtractJwt;
let strategyJWT = passportJWT.Strategy;

passport.use(
  new strategyJWT(
    {
      jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET
    },
    (payload, next)=>{
       var user = payload;
       return next(null, user);
    }
  )
)

const jwtAuthMiddleware = passport.authenticate('jwt', {session:false});

let seguridadRoutes = require('./api/seguridad');
let recetasRoutes  = require('./api/recetas');
let usuariosRoutes = require('./api/usuarios');



router.use('/seguridad',seguridadRoutes);
router.use('/recetas',jwtAuthMiddleware,recetasRoutes);
router.use('/usuarios',jwtAuthMiddleware,usuariosRoutes);









module.exports = router;