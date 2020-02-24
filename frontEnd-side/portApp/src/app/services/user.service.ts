import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Injectable()
export class UserService {

apiUrl = 'http://localhost:3000/api';

constructor(private http: HttpClient) { }

public registerUsers(user: any) {
    return this.http.post(`${this.apiUrl}/register` , user);
}

public loginUser(user: any){
    return this.http.post(`${this.apiUrl}/login` , user);
}

}


