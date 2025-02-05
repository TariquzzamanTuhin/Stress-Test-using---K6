import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  stages:[
    
    {duration: '30s', target:50},
    {duration: '15s', target:50},
    {duration: '5s', target:0}

  ]
}
export default function () {
  http.get('http://instagram.com')
  
}