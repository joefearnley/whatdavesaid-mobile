import { useState } from 'react';
import {
  IonItem,
  IonLabel,
  IonIcon
} from '@ionic/react';
import { play } from 'ionicons/icons';
import { Clip } from '../data/clips';
import './ClipListItem.css';
import { Howl } from 'howler';

interface ClipProps {
  clip: Clip;
}

const ClipListItem: React.FC<ClipProps> = ({ clip }) => {

  const [ clipIsPlaying, setClipIsPlaying ] = useState(false);

  const playClip = () => {
    const soundClip = new Howl({
      src: [clip.path],
      onend: function() {
        console.log('Finished!');
        setClipIsPlaying(clipIsPlaying);
      }
    });

    setClipIsPlaying(!clipIsPlaying);
    soundClip.play();
  };

  return (
    <IonItem button onClick={playClip} detail={false}>
      <IonLabel className="ion-padding-start">
        <h2>
          {
            clipIsPlaying ?
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
              <rect className="eq-bar eq-bar--1" x="4" y="4" width="3.7" height="8"/>
              <rect className="eq-bar eq-bar--2" x="10.2" y="4" width="3.7" height="16"/>
              <rect className="eq-bar eq-bar--3" x="16.3" y="4" width="3.7" height="11"/>
              <rect className="eq-bar eq-bar--4" x="22.4" y="4" width="3.7" height="10"/>
            </svg>
            :
            <IonIcon icon={play}></IonIcon>
          }

          <span className="ion-padding-start">{clip.title}</span>
        </h2>
      </IonLabel>
    </IonItem>
  );
};

export default ClipListItem;
