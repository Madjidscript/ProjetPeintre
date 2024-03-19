

const requireAuth = (req, res, next) => {
    // Vérifie si la session existe et si un utilisateur est stocké dans la session
    if (!req.session || !req.session.admin) {
      // Si aucun utilisateur n'est stocké dans la session, renvoie une réponse 401
      // avec un message indiquant à l'utilisateur qu'il doit être connecté pour accéder à la ressource
      return res.status(401).json({ message: 'Vous devez être connecté pour accéder à cette ressource.' });
    }
    // Si l'utilisateur est authentifié, passe au middleware suivant
    next();
  };

  module.exports= requireAuth;