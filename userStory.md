# 1. Générer une carte de bibliothèque (POST /) :
**En tant qu'utilisateur,**
**Je veux** générer ma carte de bibliothèque afin de récupérer mon numéro de carte de bibliothèque,
**Afin de** pouvoir emprunter des livres.

## Critère d'acceptation :
- Renvoie le numéro de carte généré
- Ne génère pas de numéro de carte si le user en a déjà une



# 2. Emprunter un livre de la bibliothère (GET /) :
**En tant qu'utilisateur,**
**Je veux** emprunter un livre de la bibliothèque,
**Afin de** pouvoir le lire.

## Critère d'acceptation :
- Renvoie l'id du livre
- Modifie le statut du livre sur 'non dispo'
- Ne renvoie pas l'id du livre si il n'est pas dispo
- Ne renvoie pas l'id du livre si l'utilisateur ne possède pas de carte valide