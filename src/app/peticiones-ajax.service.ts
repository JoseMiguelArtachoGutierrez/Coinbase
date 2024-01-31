import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, onSnapshot } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { GoogleAuthProvider, GithubAuthProvider, getAuth, signInWithPopup, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from '@angular/fire/auth';
import {onAuthStateChanged } from '@angular/fire/auth';
import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { query, where } from 'firebase/firestore';
import { Router } from '@angular/router';

import { FirebaseApp, provideFirebaseApp } from '@angular/fire/app';


@Injectable({
  providedIn: 'root'
})
export class PeticionesAjaxService {

  datosApi:any;
  detalleApi:any;
  constructor(private http: HttpClient){ 
  }
  peticionAjax(variable:any){
    this.http.get("https://api.coingecko.com/api/v3/search?query="+variable).subscribe( (data:any)=>{
      console.log(data)
      this.datosApi=data.coins;
    })
  }
  detalleAjax(id:any){
    this.http.get("https://api.coingecko.com/api/v3/coins/"+id).subscribe( (data:any)=>{
      console.log(data)
      this.detalleApi=data;
    })
  }
  arrayTodosLosDetalles(array:any){
    let resultado:any=[];
    for (let i = 0; i < array.length; i++) {
      this.http.get("https://api.coingecko.com/api/v3/coins/"+array[i].id).subscribe( (data:any)=>{
        resultado.push(data)
      })
    }
    return resultado;
  }

  cincuenta(){
    this.http.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=50&page=1&sparkline=true&locale=en").subscribe( (data:any)=>{
      console.log("sisisisiisisi",data)
      let array:any[]=[]
      for (let i = 0; i < data.length; i++) {
        array.push(data[i])
      }
      this.datosApi=array
    })
  }

  
}
