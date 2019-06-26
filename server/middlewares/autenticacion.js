const jwt = require("jsonwebtoken");

// ================
// Verificar token
// ================
// obligatorio usar next para seguir con la funcion dependiente de usuario.js
let verificaToken = (req, res, next) => {
  // obtencion del metodo get para header
  let token = req.get("token");

  jwt.verify(token, process.env.SEED, (err, decode) => {
    if (err) {
      return res.status(401).json({
        err: {
          message: "Token no valido"
        }
      });
    }

    req.usuario = decode.usuario;
    next();
  });
};

// ================
// Verifica AdminRole
// ================
let verificaAdmin_Role = (req, res, next) => {
    // obtencion del metodo get para header
    let token = req.get("token");
  
    jwt.verify(token, process.env.SEED, (err, decode) => {
      if (err) {
        return res.status(401).json({
          err: {
            message: "Token no valido"
          }
        });
      }

      if(req.usuario.rol === 'ADMIN_ROLE') {
        next();
      } else {
          return res.json({
              ok: false,
              message: 'No es administrador'
          })
      }
      
    });
  };
  

module.exports = {
  verificaToken,
  verificaAdmin_Role
};
