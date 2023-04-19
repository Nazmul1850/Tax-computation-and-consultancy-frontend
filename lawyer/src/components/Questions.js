


const question = [
    {
        "id":0,
        "question":"This is my first Question",
        "optionlist":[
            {
                "option":"Option 1",
                "next": 1
            },
            {
                "option":"Option 2",
                "next": 2                
            },
            {
                "option":"Option 3",
                "next": 3                
            }
        ]
    },
    {
        "id":1,
        "question":"This came from choosing option 1",
        "optionlist":[
            {
                "option":"Option 0",
                "next": 0
            },
            {
                "option":"Option 2",
                "next": 2                
            },
            {
                "option":"Option 3",
                "next": 3                
            }
        ]
    }
    ,
    {
        "id":2,
        "question":"This came from choosing option 2",
        "optionlist":[
            {
                "option":"Option 0",
                "next": 0
            },
            {
                "option":"Option 1",
                "next": 1                
            },
            {
                "option":"Option 3",
                "next": 3                
            }
        ]
    }
    ,
    {
        "id":3,
        "question":"This came from choosing option 3",
        "optionlist":[
            {
                "option":"Option 0",
                "next": 0
            },
            {
                "option":"Option 1",
                "next": 1                
            }
        ]
    }
];

export default question;