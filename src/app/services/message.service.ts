import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessageService {
    private subject = new Subject<any>();

    sendMessage(message: string, type: string) {
        this.subject.next({ text: message, type: type });
        setTimeout(() => this.clearMessage(), 6000);
        // console.log(this.subject.next(type));
    }

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
