


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
                "next":  4               
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
                "next": 5
            },
            {
                "option":"BSP (Shonchoi Potro)",
                "next": 5               
            },
            {
                "option":"LIP (Life Insurance Premimum)",
                "next":  5              
            },
            {
                "option":"Share Market",
                "next":  5              
            },
            {
                "option":"Provident Fund",
                "next":  5              
            }
        ]
    }
    ,
    {
        "id":5,
        "type":"radio",
        "pre":4,
        "tag":"salary",
        "question":"Already Paid Tax in Advance? (AIT)",
        "optionlist":[
            {
                "option":"Yes",
                "next": 6
            },
            {
                "option":"No",
                "next": -1              
            }
        ]
    }
    ,
    {
        "id":6,
        "type":"checkbox",
        "pre":5,
        "tag":"salary",
        "question":"Paid Tax in!",
        "optionlist":[
            {
                "option":"Car Tax!",
                "next": 7
            },
            {
                "option":"Business",
                "next": 7              
            },
            {
                "option":"As Contractor",
                "next": 7              
            },
            {
                "option":"As Supplier",
                "next": 7              
            },
            {
                "option":"Other",
                "next": 7              
            }
        ]
    }
    ,
    {
        "id":7,
        "type":"radio",
        "pre":6,
        "tag":"salary",
        "question":"Do You Have any Income under 82C?",
        "optionlist":[
            {
                "option":"yes",
                "next": 8
            },
            {
                "option":"no",
                "next": 9                
            }
        ]
    }
    ,
    {
        "id":8,
        "type":"checkbox",
        "pre":7,
        "tag":"salary",
        "question":"Nature of income under 82C",
        "optionlist":[
            {
                "option":"Gain Tax",
                "next": 9
            },
            {
                "option":"Sale of Rent",
                "next": 9                
            },
            {
                "option":"BSP",
                "next": 9                
            }
            ,
            {
                "option":"Others",
                "next": 9                
            }
        ]
    }
    ,
    {
        "id":9,
        "type":"radio",
        "pre":7,
        "tag":"salary",
        "question":"Do You Need Help Submitting Tax Return!!",
        "optionlist":[
            {
                "option":"Yes",
                "next": -1
            },
            {
                "option":"No",
                "next": -1              
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
                "next": 202
            },
            {
                "option":"no",
                "next": 202                
            },
            {
                "option":"yes (Construction or Development)",
                "next": 202                
            }
        ]
    }
    ,
    {
        "id":202,
        "type":"radio",
        "pre":201,
        "tag":"house",
        "question":"Have you paid House holding tax or City Corporation Tax Before!!",
        "optionlist":[
            {
                "option":"yes",
                "next": 203
            },
            {
                "option":"no",
                "next": 203                
            }
        ]
    }
    ,
    {
        "id":203,
        "type":"radio",
        "pre":202,
        "tag":"house",
        "question":"Do You Have Insurence!",
        "optionlist":[
            {
                "option":"yes",
                "next": 204
            },
            {
                "option":"no",
                "next": 204                
            }
        ]
    }
    ,
    {
        "id":204,
        "type":"radio",
        "pre":203,
        "tag":"house",
        "question":"What is the Type of Your Ownership?",
        "optionlist":[
            {
                "option":"Whole",
                "next": -1
            },
            {
                "option":"Partial",
                "next": -1                
            }
        ]
    }
    ,
    {
        "id":300,
        "type":"checkbox",
        "pre":1,
        "tag":"business",
        "question":"What is the nature of yout Business?",
        "optionlist":[
            {
                "option":"Partnership",
                "next": 301
            },
            {
                "option":"Farm",
                "next": 301                
            },
            {
                "option":"Company",
                "next": 301
            },
            {
                "option":"AOP (Assosiation of Person)",
                "next": 301                
            },
            {
                "option":"NGO",
                "next": 301
            },
            {
                "option":"Others",
                "next": 301                
            }
        ]
    }
    ,
    {
        "id":301,
        "type":"radio",
        "pre":300,
        "tag":"business",
        "question":"Do you maintain account!?",
        "optionlist":[
            {
                "option":"Yes",
                "next": 302
            },
            {
                "option":"No",
                "next": 305                
            }
        ]
    }
    ,
    {
        "id":302,
        "type":"radio",
        "pre":301,
        "tag":"business",
        "question":"Do you maintain books of account!?",
        "optionlist":[
            {
                "option":"Yes",
                "next": 303
            },
            {
                "option":"No",
                "next": 305                
            }
        ]
    }
    ,
    {
        "id":303,
        "type":"radio",
        "pre":300,
        "tag":"business",
        "question":"Can You Provide Audit Report!?",
        "optionlist":[
            {
                "option":"Yes",
                "next": 305
            },
            {
                "option":"No",
                "next": 304                
            }
        ]
    }
    ,
    {
        "id":304,
        "type":"radio",
        "pre":303,
        "tag":"business",
        "question":"Do you want us to create audit Report!!?",
        "optionlist":[
            {
                "option":"Yes",
                "next": 305
            },
            {
                "option":"No",
                "next": 305                
            }
        ]
    }
    ,
    {
        "id":305,
        "type":"radio",
        "pre":300,
        "tag":"business",
        "question":"Do you have any exempted income?",
        "optionlist":[
            {
                "option":"Yes",
                "next": -1
            },
            {
                "option":"No",
                "next": -1               
            }
        ]
    }
    ,
    {
        "id":400,
        "type":"checkbox",
        "pre":1,
        "tag":"security",
        "question":"Nature of Security Income!",
        "optionlist":[
            {
                "option":"TNT bond",
                "next": -1
            },
            {
                "option":"National Investment Bond",
                "next": -1                
            },
            {
                "option":"Treasary Bond",
                "next": -1  
            },
            {
                "option":"Debencher",
                "next": -1  
            },
            {
                "option":"Savings Instrument",
                "next": -1  
            }
        ]
    }
    ,
    {
        "id":500,
        "type":"checkbox",
        "pre":1,
        "tag":"capitalgain",
        "question":"Nature of Capital Gain",
        "optionlist":[
            {
                "option":"Selling of Properties",
                "next": -1
            },
            {
                "option":"Share market",
                "next": -1                
            },
            {
                "option":"Mutual Fund",
                "next": -1  
            }
        ]
    }
    ,
    {
        "id":600,
        "type":"checkbox",
        "pre":1,
        "tag":"security",
        "question":"Nature of Other Income!",
        "optionlist":[
            {
                "option":"Bank Interest",
                "next": -1
            },
            {
                "option":"Devident",
                "next": -1                
            },
            {
                "option":"Lottery",
                "next": -1  
            },
            {
                "option":"Renting Machine",
                "next": -1  
            },
            {
                "option":"Cultural Renumeration",
                "next": -1  
            }
        ]
    }
];

export default question;