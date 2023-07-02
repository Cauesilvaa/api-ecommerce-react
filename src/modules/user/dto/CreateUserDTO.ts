export interface CreateUserDTO {
    name: string,
    email: string,
    password: string,
    lastName: string,
    birth: Date,
    cpf: string,        
    country: string,    
    cep: string,        
    street: string,     
    complement: string, 
    city: string,       
    state: string,      
    status?: string,     
}
