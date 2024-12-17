# ------- User story -------

# User :

## 1. Générer une carte de bibliothèque (POST /) :
**En tant qu'utilisateur,**
**Je veux** générer ma carte de bibliothèque afin de récupérer mon numéro de carte de bibliothèque,
**Afin de** pouvoir emprunter des livres.

### Critère d'acceptation :
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

<br><br>

# MemberCard :

## Récupérer toutes les memberCards (GET /)
**En tant qu'utilisateur,**
**Je veux** voir une liste de toutes les memberCards,
**Afin de** pouvoir rapidement accéder aux informations sur toutes les memberCards dans le système.

### Critères d'acceptation :
- Le système récupère une liste de toutes les memberCards depuis la base de données.
- La réponse inclut les détails essentiels des memberCards (par exemple, ID, numéro etc...).
- S'il n'y a pas de memberCards, le système renvoie une liste vide.


## Récupérer une memberCard par ID (GET /:id)
**En tant qu'utilisateur,**
**Je veux** consulter des informations détaillées sur une memberCard spécifique,
**Afin de** pouvoir voir les informations spécifiques à la memberCard.

### Critères d'acceptation :
- Le système récupère les détails d'une memberCard sur la base de l'ID fourni.
- La réponse inclut tous les détails pertinents de la memberCard (par exemple, ID, numéro etc...).
- Si l'ID de la memberCard n'existe pas, le système renvoie une erreur 404 avec un message explicatif.


## Créer une memberCard (POST /)
**En tant qu'administrateur,**
**Je veux** créer une nouvelle memberCard,
**Afin de** pouvoir l'ajouter au système avec les informations nécessaires.

### Critères d'acceptation :
- Une requête valide contient les informations de la memberCard (par exemple, ID, numéro etc...).
- Le système crée une nouvelle memberCard et la stocke dans la base de données.
- Si les données saisies sont invalides (par exemple, champs requis manquants), le système renvoie une erreur 400 avec un retour sur la validation.
- Après la création, le système répond avec les détails du la nouvelle memberCard créé.


## Mettre à jour une memberCard (PUT /:id)
**En tant qu'administrateur,**
**Je veux** mettre à jour les informations d'une memberCards,
**Afin de** pouvoir modifier ses données si nécessaire.

### Critères d'acceptation :
- Le système met à jour la memberCard sur la base de l'ID fourni et du corps de la requête.
- Une requête valide contient uniquement les champs à mettre à jour (par exemple, numéro).
- Si l'ID de la memberCard n'existe pas, le système renvoie une erreur 404.
- Si les données saisies sont invalides, le système renvoie une erreur 400 avec un retour sur la validation.
- Les détails mis à jour de la memberCard sont reflétés dans la base de données.


## Supprimer une memberCard (DELETE /:id)
**En tant qu'administrateur,**
**Je veux** supprimer une memberCard du système,
**Afin de** pouvoir retirer une memberCard qui n'est plus nécessaire.

### Critères d'acceptation :
- Le système supprime la memberCard associé à l'ID fourni.
- Si l'ID de la memberCard n'existe pas, le système renvoie une erreur 404.
- Si la suppression est réussie, le système répond avec un message de confirmation.
- La memberCard supprimé n'est plus récupérable dans la base de données.