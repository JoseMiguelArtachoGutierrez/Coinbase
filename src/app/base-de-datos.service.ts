import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, onSnapshot } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { GoogleAuthProvider, GithubAuthProvider, getAuth, signInWithPopup, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from '@angular/fire/auth';
import {  onAuthStateChanged } from '@angular/fire/auth';
import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { query, where } from 'firebase/firestore';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BaseDeDatosService {
  usuario:any;
  monedasUsuario:any;
  sesionIniciada:any;
  constructor(private http: HttpClient, private router:Router, private firestore: Firestore) { }


 
  iniciaSesison() {
    console.log("hola")
    const auth = getAuth();  
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)!;
        //const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        onAuthStateChanged(auth, (user) => {
          this.usuario = user;
          this.router.navigate(['/homer']);
        });
        
        console.log("Login Google exitoso")
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode,errorMessage)
        // ...
      });
  }
  loginGitHub(){
    const auth = getAuth(); 
    signInWithPopup(auth, new GithubAuthProvider())
    .then((response:any)=>{
      this.usuario = response.user;
      console.log(this.usuario.uid);
      onAuthStateChanged(auth, (user) => {
        this.usuario = user;
        this.router.navigate(['/homer']);
      });
    })
    .catch((error:any)=>{
      console.log(error);
    })
  }

  cerrarSesion(){
    const auth = getAuth();
    signOut(auth).then(() => {
      
    }).catch((error) => {
      
    });
  }
  usuarioActual() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.usuario = user;
    });
  }
  estaUsuarioIniciadoSesion(): Promise<boolean> {
    const auth = getAuth();

    return new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => {
        resolve(!!user);
      });
    });
  }

  obtenerDatos(): Promise<void> {
    return new Promise((resolve, reject) => {
      const auth = getAuth();
  
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          getDocs(query(collection(this.firestore, 'monedas'), where('uid', '==', uid)))
            .then((response) => {
              this.monedasUsuario = response.docs.map((doc) => doc.data());
              console.log(this.monedasUsuario)
              resolve(); // Resuelve la promesa después de obtener los datos
            })
            .catch((error) => {
              console.error('Error al obtener los datos:', error);
              reject(error); // Rechaza la promesa en caso de error
            });
        } else {
        }
      });
    });
  }

  monedasGuardaar(id:any){
    const auth = getAuth();
    const uid = this.usuario?.uid;
    if (uid) {
      console.log("hola")
      addDoc(collection(this.firestore, 'monedas'), {
        id:id,
        uid:uid
      })
      .then(() => {console.log('Moneda guardada');})
      .catch((error) => {console.error('Error al guardar la moneda:', error);});
    }else{
      console.error('Error: No se pudo obtener el UID del usuario.');
    }
  }
  eliminarMoneda( idMoneda: string) {
    const uid = this.usuario?.uid;
    const firestore = getFirestore();
    const colRef = collection(firestore, 'monedas');
    
    getDocs(query(colRef, where('uid', '==', uid), where('id', '==', idMoneda)))
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // Obtener la referencia al documento y eliminarlo
          
          const docRef = doc.ref;
          deleteDoc(docRef)
            .then(() => {
              console.log('Moneda eliminada exitosamente');
            })
            .catch((error) => {
              console.error('Error al eliminar la moneda:', error);
            });
        });
      })
      .catch((error) => {
        console.error('Error al realizar la consulta:', error);
      });
  }
}
