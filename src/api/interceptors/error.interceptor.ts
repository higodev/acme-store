import { 
  Injectable, 
  NestInterceptor, 
  ExecutionContext, 
  CallHandler, 
  HttpException, 
  HttpStatus
} from "@nestjs/common";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements NestInterceptor{
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    return next
      .handle()
      .pipe(
        catchError(err => throwError(new HttpException({
          status: HttpStatus.BAD_REQUEST,
          error:  'Ops! Deu algo errado na sua requisição.',
        }, 400))),
      );
  }

}