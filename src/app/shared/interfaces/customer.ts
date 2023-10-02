export interface Customer {
    "id": string,
    "name": string,
    "transications": Transication[],
    "total":number
}


export interface Transication{
    "store_name": string  ,
    "payment_method": string ,
    "price":number

}