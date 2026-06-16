import { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        
        <div className="card-container">
          <IonCard className='card'>
            <img
            src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
            alt='Avatar'
            />
            <IonHeader>
              <IonCardTitle>Daniela Pinto</IonCardTitle>
              <IonCardSubtitle>danielapintobazante</IonCardSubtitle>
              <IonCardContent>
                <p>Desarrollador de software con experiencia en aplicaciones moviles y web. Apasionado por la tecnologia, el aprendizaj conrinuo</p>
              </IonCardContent>
            </IonHeader>
          </IonCard>
        </div>
        

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
