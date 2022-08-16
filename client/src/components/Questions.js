


const question = [
    {
        "id":0,
        "type":"radio",
        "tag":"basic",
        "pre":0,
        "question":"Eager to Provide us some Usefull information !!!",
        "optionlist":[
            {
                "option":"yes",
                "next": 1
            },
            {
                "option":"no",
                "next": -1              
            }
        ]
    },
    {
        "id":1,
        "type":"radio",
        "pre":0,
        "question":"What is the nature of your income",
        "tag":"basic",
        "optionlist":[
            {
                "option":"Salary",
                "next": 2
            },
            {
                "option":"House Rent",
                "next": 200                
            },
            {
                "option":"Business",
                "next": 300                
            },
            {
                "option":"Security",
                "next": 400                
            },
            {
                "option":"Capital Gain",
                "next": 500                
            },
            {
                "option":"Others",
                "next": 600                
            }
        ]
    },
    {
        "id":2,
        "type":"radio",
        "pre":1,
        "tag":"salary",
        "question":"What is Your Service Type",
        "optionlist":[
            {
                "option":"Government",
                "next": 3
            },
            {
                "option":"Private",
                "next": 3              
            }
        ]
    },
    {
        "id":3,
        "type":"radio",
        "pre":2,
        "tag":"salary",
        "question":"Are You Tax Resident or not! (minimun of 180 days staying in country == resident)",
        "optionlist":[
            {
                "option":"Yes",
                "next": 4
            },
            {
                "option":"No",
                "next": 4                
            },
            {
                "option":"Foreign Resident",
                "next":  3               
            }
        ]
    },
    {
        "id":4,
        "type":"checkbox",
        "pre":3,
        "tag":"salary",
        "question":"Nature of Investment",
        "optionlist":[
            {
                "option":"DPS (Deposit Pension Scheme)",
                "next": -1
            },
            {
                "option":"BSP (Shonchoi Potro)",
                "next": -1               
            },
            {
                "option":"LIP (Life Insurance Premimum)",
                "next":  -1              
            },
            {
                "option":"Share Market",
                "next":  -1              
            },
            {
                "option":"Provident Fund",
                "next":  -1              
            }
        ]
    }
    ,
    {
        "id":200,
        "type":"radio",
        "pre":1,
        "tag":"house",
        "question":"What is the Type of Rental!",
        "optionlist":[
            {
                "option":"Residential",
                "next": 201
            },
            {
                "option":"Commertial",
                "next": 201                
            }
        ]
    }
    ,
    {
        "id":201,
        "type":"radio",
        "pre":200,
        "tag":"house",
        "question":"Have you taken bank loan against House Property!",
        "optionlist":[
            {
                "option":"yes",
                "next": -1
            },
            {
                "option":"no",
                "next": -1                
            },
            {
                "option":"yes (Construction or Development)",
                "next": -1                
            }
        ]
    }
];

export default question;