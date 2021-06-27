import {
  IonItem,
  IonLabel,
  IonIcon
  } from '@ionic/react';
import { play } from 'ionicons/icons'
import { Clip } from '../data/clips';
import './ClipListItem.css';

interface ClipProps {
  clip: Clip;
}

const ClipListItem: React.FC<ClipProps> = ({ clip }) => {
  const playClip = () => {
      var clipAudio = new Audio(clip.path);
      clipAudio.play();
  };

  return (
    <IonItem button onClick={playClip} detail={false}>
      <IonLabel className="ion-padding-start">
        <h2>
          <IonIcon className="ion-padding-end" icon={play}></IonIcon>
          {clip.title}
        </h2>
      </IonLabel>
    </IonItem>
  );
};

export default ClipListItem;
