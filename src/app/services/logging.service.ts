export class LoggingService {
    logStatusChange(status: string) {
        console.log(`${new Date().toLocaleString()}: ${status}`)
    }    
}
