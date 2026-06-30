import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar,
  IonToast
} from '@ionic/react';

import React, { useState } from 'react';
import { createRepository } from '../services/GithubService';
import './Tab2.css';

const Tab2: React.FC = () => {
const [name, setName] = useState("");
const [description, setDescription] = useState("");

const [message, setMessage] = useState("");
const [showToast, setShowToast] = useState(false);
const guardarRepositorio = async () => {

  if (name.trim() === "") {
    setMessage("Ingrese el nombre del repositorio");
    setShowToast(true);
    return;
  }

  try {

    await createRepository(name, description);

    setMessage("Repositorio creado correctamente");
    setShowToast(true);

    setName("");
    setDescription("");

  } catch (error) {

    setMessage("Error al crear el repositorio");
    setShowToast(true);

  }

}
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Formulario de repositorio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Formulario de repositorio</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="form-container">
          <IonInput
            className="form-field"
            label="Nombre del repositorio"
            labelPlacement="floating"
            placeholder="Ingrese el nombre del repositorio"
            value={name}
            onIonInput={(e) => setName(e.detail.value!)}
          />
          <IonTextarea
            className="form-field"
            label="Descripcion"
            labelPlacement="floating"
            placeholder="Ingrese la descripcion del repositorio"
            rows={6}
            value={description}
            onIonInput={(e) => setDescription(e.detail.value!)}
          />
          <IonButton
            className="form-field"
            expand="block"
            color="primary"
            onClick={guardarRepositorio}
          >
            Guardar
          </IonButton>

          <IonToast
            isOpen={showToast}
            message={message}
            duration={2000}
            onDidDismiss={() => setShowToast(false)}
          />
                    
        </div>


      </IonContent>
    </IonPage>
  );
};

export default Tab2;
