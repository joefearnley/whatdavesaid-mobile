import { useState } from 'react';
import { Clip, getClip } from '../data/clips';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import { useParams } from 'react-router';
import './ViewClip.css';

function ViewClip() {
  const [clip, setClip] = useState<Clip>();
  const params = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    const msg = getClip(parseInt(params.id, 10));
    setClip(msg);
  });

  return (
    <IonPage id="view-clip-page">
      <IonContent fullscreen>
        {clip ? (
          <>
            <IonItem>
              <IonIcon icon={personCircle} color="primary"></IonIcon>
              <IonLabel className="ion-text-wrap">
                <h2>
                  {clip.title}
                  <span className="date">
                    <IonNote>{clip.fileName}</IonNote>
                  </span>
                </h2>
                <h3>
                  To: <IonNote>Me</IonNote>
                </h3>
              </IonLabel>
            </IonItem>
          </>
        ) : (
          <div>clip not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default ViewClip;
