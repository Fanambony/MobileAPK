import React, { useState, useEffect } from 'react';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonToolbar,
  IonModal,
  IonButton,
  IonTitle,
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import { useParams } from 'react-router';
import { getEquipe } from '../data/equipe';
import { Equipe } from '../data/equipe';
import { getJoueursEquipe } from '../data/joueur';
import { Joueur } from '../data/joueur';
import './ViewMessage.css';

function Joueurs() {
  const [equipe, setEquipe] = useState<Equipe>();
  const [joueurs, setJoueurs] = useState<Joueur[]>([]);
  const [selectedJoueur, setSelectedJoueur] = useState<Joueur | null>(null);
  const [showModal, setShowModal] = useState(false);
  const params = useParams<{ id: string }>();

  useEffect(() => {
    const equipeData = getEquipe(parseInt(params.id, 10));
    setEquipe(equipeData);

    if (equipeData) {
      const joueursEquipe = getJoueursEquipe(equipeData.id);
      setJoueurs(joueursEquipe);
    }
  }, [params.id]);

  const openModal = (joueur: Joueur) => {
    setSelectedJoueur(joueur);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedJoueur(null);
    setShowModal(false);
  };

  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="NBA" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {equipe ? (
          <>
            <IonItem>
              <IonIcon aria-hidden="true" icon={personCircle} color="primary"></IonIcon>
              <IonLabel className="ion-text-wrap">
                <h2>
                  {equipe.fromName}
                  <span className="date"></span>
                </h2>
              </IonLabel>
            </IonItem>

            <IonList>
              <IonItem>
                <IonLabel>
                  <h2>Liste des Joueurs</h2>
                </IonLabel>
              </IonItem>
              {joueurs.map(joueur => (
                <IonItem key={joueur.numero} onClick={() => openModal(joueur)}>
                  <IonLabel>
                    <h2>{joueur.nom}</h2>
                    <p>{joueur.position}</p>
                    <p>Numero: {joueur.numero}</p>
                  </IonLabel>
                </IonItem>
              ))}
            </IonList>

            <IonModal isOpen={showModal} onDidDismiss={closeModal}>
              <IonHeader>
                <IonToolbar>
                  <IonButtons slot="start">
                    <IonButton onClick={closeModal}>Fermer</IonButton>
                  </IonButtons>
                  <IonTitle>Statistiques du Joueur</IonTitle>
                </IonToolbar>
              </IonHeader>
              <IonContent className="ion-padding">
                {selectedJoueur && (
                  <IonList>
                    <IonItem>
                      <IonLabel>
                        <h2>{selectedJoueur.nom}</h2>
                        <p>Match jouer: {selectedJoueur.MJ}</p>
                        <p>Point par match: {selectedJoueur.PPM}</p>
                        <p>Rebond par match: {selectedJoueur.RPM}</p>
                        <p>Passe decisif par match: {selectedJoueur.PDPM}</p>
                        <p>Minute par match: {selectedJoueur.MPM}</p>
                        <p>Efficacite: {selectedJoueur.EFF}</p>
                        <p>Field goal: {selectedJoueur.FG}</p>
                        <p>Three point: {selectedJoueur.ThreeP}</p>
                        <p>lancer front: {selectedJoueur.LF}</p>
                      </IonLabel>
                    </IonItem>
                  </IonList>
                )}
              </IonContent>
            </IonModal>
          </>
        ) : (
          <div>Equipe not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default Joueurs;
