import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // {email:string, password:any}
  authenticated: boolean = false
  loginData$: Observable<any> = of({ email: 'abc@gmail.com', password: 'abc123' })
  cardData$:Observable<any>=from([{type:'Total Users', amount:1500, percentage:2.36, month:'Since last month'},
  {type:'Savings Account', amount:1500, percentage:2.36, month:'Since last month'},
  {type:'Savings Account', amount:1500, percentage:2.36, month:'Since last month'},
  {type:'Savings Account', amount:1500, percentage:2.36, month:'Since last month'}])
  tableData$: Observable<any> = from([
    { name: 'Monicca James', userId: '123456789', phonenumber: '+91 9876543210', transactionCategory: {type:'Income', category:'Salary'}, transactionAmount: '$200', accountType: 'Savings', balanceAmount: '$6000' },
    { name: 'Samantha', userId: '123456789', phonenumber: '+91 9876543210', transactionCategory: {type:'Income', category:'Salary'}, transactionAmount: '$200', accountType: 'Savings', balanceAmount: '$6000' }, 
    
    { name: 'Catherine',userId: '123456789',phonenumber: '+91 9876543210', transactionCategory: {type:'Income', category:'Salary'}, transactionAmount: '$200', accountType: 'Savings', balanceAmount: '$6000' },
    { name: 'Monicca James', userId: '123456789', phonenumber: '+91 9876543210', transactionCategory: {type:'Income', category:'Salary'}, transactionAmount:  '$200', accountType: 'Savings', balanceAmount: '$6000' }, 
    { name: 'Ileana ', userId: '123456789', phonenumber: '+91 9876543210', transactionCategory: {type:'Income', category:'Salary'}, transactionAmount:  '$200', accountType: 'Savings', balanceAmount: '$6000' }
    ,
    { name: 'Monicca James', userId: '123456789', phonenumber: '+91 9876543210', transactionCategory: {type:'Income', category:'Salary'}, transactionAmount: '$200', accountType: 'Savings', balanceAmount: '$6000' },
    { name: 'Samantha', userId: '123456789', phonenumber: '+91 9876543210', transactionCategory: {type:'Income', category:'Salary'}, transactionAmount: '$200', accountType: 'Savings', balanceAmount: '$6000' }, 
    
    { name: 'Catherine',userId: '123456789',phonenumber: '+91 9876543210', transactionCategory: {type:'Income', category:'Salary'}, transactionAmount: '$200', accountType: 'Savings', balanceAmount: '$6000' },
    { name: 'Monicca James', userId: '123456789', phonenumber: '+91 9876543210', transactionCategory: {type:'Income', category:'Salary'}, transactionAmount:  '$200', accountType: 'Savings', balanceAmount: '$6000' }, 
    { name: 'Ileana ', userId: '123456789', phonenumber: '+91 9876543210', transactionCategory: {type:'Income', category:'Salary'}, transactionAmount:  '$200', accountType: 'Savings', balanceAmount: '$6000' }
    
  ])
  constructor(private http: HttpClient) {

  }

  getFlags() {
    return this.http.get<any>('https://restcountries.com/v3.1/independent?status=true')
  }

  isAuthenticated() {

    return this.authenticated
  }
}
