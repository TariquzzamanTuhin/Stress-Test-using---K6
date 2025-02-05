import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 10,
  iterations: 20,
};
export default function () {
  http.get('http://instagram.com');
  
}