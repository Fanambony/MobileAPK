import React from 'react';
import {
  IonItem,
  IonLabel,
} from '@ionic/react';
import { Equipe } from '../data/equipe';

interface EquipeProps {
  equipe: Equipe;
}

const EquipeListItem: React.FC<EquipeProps> = ({ equipe }) => {
  return (
    <IonItem routerLink={`/joueurs/${equipe.id}`} detail={false}>
      <div slot="start" className="dot dot-unread"></div>
      <IonLabel className="ion-text-wrap">
        <h2>{equipe.fromName}</h2>
      </IonLabel>
    </IonItem>
  );
};

export default EquipeListItem;
