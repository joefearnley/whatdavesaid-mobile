import ClipListItem from '../components/ClipListItem';
import { useState } from 'react';
import { Clip, getClips } from '../data/clips';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
  IonImg,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {

  const [clips, setClips] = useState<Clip[]>([]);

  useIonViewWillEnter(() => {
    const allClips = getClips();
    setClips(allClips);
  });

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <IonGrid>
              <IonRow className="ion-align-items-center">
                <IonCol size="2">
                  <IonImg src={'/assets/img/dave.jpg'} />
                </IonCol>
                <IonCol size="10" className="ion-text-center">
                  What Dave Said
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {clips.map(c => <ClipListItem key={c.id} clip={c} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
