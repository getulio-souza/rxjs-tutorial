import { Observable } from "rxjs"

export function functionObs(){
  console.log("function called")
  return '1'
}

export const funcObservable = new Observable(observer => {
  console.log('observable called')
  observer.next('1')
  observer.next('2')
  setTimeout(() => {
    observer.next('3')
  },3000)
})
