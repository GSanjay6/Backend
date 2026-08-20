class ApiResponse {
    constructor (statusCode, data, mesaage="Success"){
        this.statusCode=statusCode
        this.data=data
        this.mesaage=mesaage
        this.success=statusCode < 400
    }
}