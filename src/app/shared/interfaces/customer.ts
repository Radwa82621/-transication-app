export interface Customer {
    "id": string,
    "name": string,
    "transications": Transication[],
    "total":number
}


export interface Transication{
    "date":string,
    "store_name": string  ,
    "payment_method": string ,
    "price":number

}