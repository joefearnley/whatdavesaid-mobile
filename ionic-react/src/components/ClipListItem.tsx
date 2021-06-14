import {
  IonItem,
  IonLabel,
  IonNote
  } from '@ionic/react';
import { Clip } from '../data/clips';
import './Clip.css';

interface ClipProps {
  clip: Clip;
}

const ClipListItem: React.FC<ClipProps> = ({ clip }) => {
  return (
    <IonItem onClick={() => { console.log('clicked the clip....')}} detail={false}>
      <div slot="start" className="dot dot-unread"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          {clip.title}
        </h2>
      </IonLabel>
    </IonItem>
  );
};

export default ClipListItem;
