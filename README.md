# Cat-sharing

## Start app instruction:

1). git clone https://github.com/Nikitapopov/Cat-sharing.git  
2). cd Car-sharing  
3). npm install  
4). docker-compose up  
5). npm run start:dev


## API methods description:

### /cats GET 
Description: getting an array of cats

#### Request

Parameters:  
optional params:  
page: integer - default: 1 - current page in pagination  
amount: integer - default: 10 -  amount items on page  

#### Response
Model:  

    [
        {  
            id: string,  
            name: string,  
            color: string,  
            breed: string,  
            age: integer,  
            photos: [string],  
            cost: integer,  
            isBooked: boolean  
        }
    ]

Example: 

    [
        {
            "id": 2,
            "name": "James",
            "color": "red",
            "breed": "Striped",
            "age": 6,
            "photos": [
                "url1",
                "url2"
            ],
            "cost": 1200,
            "isBooked": true
        }
    ]


### /cats/{id} GET 
Description: getting cat with defined ID

#### Request

Parameters:  
id: required(integer) - id number of cat

#### Response
Model:

    {
        id: string,
        name: string,
        color: string,
        breed: string,
        age: integer,
        photos: [string],
        cost: integer,
        isBooked: boolean
    }

Example: 

    {
        "id": 2,
        "name": "James",
        "color": "red",
        "breed": "Striped",
        "age": 6,
        "photos": [
            "url1",
            "url2"
        ],
        "cost": 1200,
        "isBooked": true
    }


### /cats/isBooked GET 
Description: getting an array of booked cats

#### Request

Parameters: 
optional params:  
page: integer - default: 1 - current page in pagination    
amount: integer - default: 10 -  amount items on page

#### Response
Model:

    [
        {
            id: string,
            name: string,
            color: string,
            breed: string,
            age: integer,
            photos: [string],
            cost: integer,
            isBooked: boolean
        }
    ]

Example: 

    [
        {
            "id": 2,
            "name": "James",
            "color": "red",
            "breed": "Striped",
            "age": 6,
            "photos": [
                "url1",
                "url2"
            ],
            "cost": 1200,
            "isBooked": true
        }
    ]


### /cats/isFree GET 
Description: getting an array of free cats

#### Request

Parameters:  
optional params:  
page: integer - default: 1 - current page in pagination  
amount: integer - default: 10 -  amount items on page

#### Response
Model:

    [
        {
            id: string,
            name: string,
            color: string,
            breed: string,
            age: integer,
            photos: [string],
            cost: integer,
            isBooked: boolean
        }
    ]

Example: 

    [
        {
            "id": 2,
            "name": "James",
            "color": "red",
            "breed": "Striped",
            "age": 6,
            "photos": [
                "url1",
                "url2"
            ],
            "cost": 1200,
            "isBooked": false
        }
    ]


### /cats POST 
Description: create a new one cat

#### Request

Body:

    {
        name: required and not empty (string) - name of creating cat    
        color: required (string) - color of creating cat    
        breed: required (string) - breed of creating cat    
        age: required (integer) - age of creating cat    
        photos: required ([photos]) - array of photos of creating cat    
        cost: required (string) - cost per hour of creating cat    
        isBooked: required (boolean) - 1 - cat is booked, 0 - cat is free
    }

Example: 

    {
        "name": "James",
        "color": "red",
        "breed": "Striped",
        "age": 6,
        "photos": [
            "url1",
            "url2"
        ],
        "cost": 1200,
        "isBooked": true
    }

#### Response
Model:

    {
        id: string,
        name: string,
        color: string,
        breed: string,
        age: integer,
        photos: [string],
        cost: integer,
        isBooked: boolean
    }

Example: 

    {
        "id": 2,
        "name": "James",
        "color": "red",
        "breed": "Striped",
        "age": 6,
        "photos": [
            "url1",
            "url2"
        ],
        "cost": 1200,
        "isBooked": false
    }


### /cats/{id} PUT 
Description: update a cat with defined ID

#### Request

Parameters:  
id: required(integer) - id number of updating cat

Body: 

    {
        name: required and not empty (string) - name of updating cat    
        color: required (string) - color of updating cat    
        breed: required (string) - breed of updating cat    
        color: required (integer) - age of updating cat    
        photos: required ([photos]) - array of photos of updating cat    
        cost: required (string) - cost per hour of updating cat    
        isBooked: required (boolean) - 1 - cat is booked, 0 - cat is free
    }

Example:

    {
        "name": "James",
        "color": "red",
        "breed": "Striped",
        "age": 6,
        "photos": [
            "url1",
            "url2"
        ],
        "cost": 1200,
        "isBooked": false
    }

#### Response
Model:

    {
        id: string,
        name: string,
        color: string,
        breed: string,
        age: integer,
        photos: [string],
        cost: integer,
        isBooked: boolean
    }

Example: 

    {
        "id": 2,
        "name": "James",
        "color": "red",
        "breed": "Striped",
        "age": 6,
        "photos": [
            "url1",
            "url2"
        ],
        "cost": 1200,
        "isBooked": false
    }


### /cats/{id} Delete 
Description: delete a cat with defined ID

#### Request

Parameters:  
id: required(integer) - id number of deleting cat

#### Response
No response except code status 200


### /cats/{id} PATCH 
Description: change booking status cat with defined ID

#### Request

Parameters:  
id: required(integer) - id number of updating cat

Body:

    {
        isBooked: required (boolean) - 1 - cat is booked, 0 - cat is free
    }

Example:

    {
        "isBooked": false
    }

#### Response
Model:

    {
        id: string,
        name: string,
        color: string,
        breed: string,
        age: integer,
        photos: [string],
        cost: integer,
        isBooked: boolean
    }

Example: 

    {
        "id": 2,
        "name": "James",
        "color": "red",
        "breed": "Striped",
        "age": 6,
        "photos": [
            "url1",
            "url2"
        ],
        "cost": 1200,
        "isBooked": false
    }
