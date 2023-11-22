import React, { useState } from 'react';
import { Equipe, getEquipes } from '../data/equipe';
import EquipeComponent from '../components/Equipe';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  const [equipes, setEquipes] = useState<Equipe[]>([]);

  useIonViewWillEnter(() => {
    const equipesData = getEquipes();
    setEquipes(equipesData);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>NBA</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">NBA</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {equipes.map(equipe => (
            <EquipeComponent key={equipe.id} equipe={equipe} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
