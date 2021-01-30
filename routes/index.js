let express = require('express');

let bodyParser = require('body-parser');
let router = express.Router();
let algrmts = require('../src/algoritms');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
router.use(bodyParser.json());

/*  GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'WebAPI Recaudaciones' });
});
/*  GET Recaudaciones Totales */
router.get('/recaudaciones', algrmts.getAll);

/*  POST Recaudacion detallada*/
router.post('/recaudaciones/detallada', algrmts.getComplet);

/*  POST Editar Recaudacion*/
router.post('/recaudaciones/id', algrmts.validate);

/*  POST Añadir Recaudacion*/
router.post('/recaudaciones/new', algrmts.insertNewCollection);

/* POST Añadir alumno programa*/
router.post('/alumnoprograma', algrmts.insertNewCollectionAlumnoPrograma);


//CAMBIO
/* PUT Actualizar Observacion*/
router.put('/recaudaciones/observaciones', algrmts.updateObservation);

// GET Recaudacion
router.get('/recaudaciones/observaciones/:id', algrmts.getObservation);

/* GET Listar Conceptos */
router.get('/conceptos', algrmts.getAllConcepts);

/* GET Listar Tipos */
router.get('/tipos', algrmts.getAllTypes);

/* GET Listar Moneda */
router.get('/moneda', algrmts.getAllCoins);

/* GET Listar Ubicaciones */
router.get('/ubicaciones', algrmts.getAllUbications);

/* GET Obtener recibo */
router.get('/recibo/:id', algrmts.getReceipt);

/* GET Listar Estado Civil */
router.get('/estadoCivil', algrmts.getDataEstadoCivil);

/* GET Listar Tipo de Ingreso*/
router.get('/tipoIngreso', algrmts.getDataTipoIngreso);

/* GET Listar Permanencia */
router.get('/permanencia', algrmts.getDataPermanencia);

/* GET Listar Situción */
router.get('/situaciones', algrmts.getDataSituaciones);

/* GET ALUMNO */
router.get('/alumno/:id', algrmts.getAlumno);

//Inicio Nuevas rutas
router.get('/alumnos/:id', algrmts.getDataAlumno);
router.get('/programas', algrmts.getDataProgramas);;

router.post('/desasignarRecibo', algrmts.fnDesasignarReciboAlumno);
router.post('/asignacionesDisponibles', algrmts.fnGetSiglaCodigoDisponibles);
router.post('/asignarCodigoPrograma', algrmts.fnAsignarCodigoAlumnoIdPrograma);

router.delete('/deleteAlumno', algrmts.fndeleteAlumno);
router.put('/updateAlumno', algrmts.updateAlumno);
//Fin nuevas rutas

/* POST login */
router.post('/login', algrmts.login);

// cambio
/* GET perfil */
router.get('/perfil', algrmts.perfil);
router.get('/benef', algrmts.benef);
router.get('/config', algrmts.config);

module.exports = router;