 const MockResponse = {
     userLoggedIn : {
        "responseCode" : "000",
        "response" : {
            "payload" : {
                "records" : [
                    {
                        name: 'anuj tiwari',
                        emailId: 'snujtiwarmnnit@gmail.com',
                        following: 100,
                        boards: [
                            { id: 'board1', name: 'Board 1', pinCount: 4, isLocked: true, image: 'https://i.pinimg.com/75x75/8b/0b/e3/8b0be3749ca05848ce6b7d3fe5d3983f.jpg' },
                            { id: 'board2', name: 'Board 2', pinCount: 2, isLocked: false, image: 'https://i.pinimg.com/75x75/92/29/64/922964c806076e8975d494af90dcdffe.jpg' },
                            { id: 'board3', name: 'Board 3', pinCount: 6, isLocked: true, image: 'https://i.pinimg.com/75x75/8b/0b/e3/8b0be3749ca05848ce6b7d3fe5d3983f.jpg' },
                            { id: 'board4', name: 'Board 4', pinCount: 5, isLocked: false, image: 'https://i.pinimg.com/75x75/92/29/64/922964c806076e8975d494af90dcdffe.jpg' },
                        ],
                        pins: [
                            {id: 'pin1', title: 'pin1', description: 'desscription', image: 'https://i.pinimg.com/736x/84/6a/6f/846a6f06a19ebf9dca074eceacfab57b.jpg'},
                            {id: 'pin1', title: 'pin1', description: 'desscription', image: 'https://i.pinimg.com/474x/01/f0/30/01f0305e35b073a0e5e30f2fb13bb95b.jpg'},
                            {id: 'pin1', title: 'pin1', description: 'desscription', image: 'https://i.pinimg.com/564x/b1/ed/2f/b1ed2f13cff4f46ae09bae48a3cb5e8e.jpg'},
                            {id: 'pin1', title: 'pin1', description: 'desscription', image: 'https://i.pinimg.com/736x/84/6a/6f/846a6f06a19ebf9dca074eceacfab57b.jpg'},
                            {id: 'pin1', title: 'pin1', description: 'desscription', image: 'https://i.pinimg.com/564x/b1/ed/2f/b1ed2f13cff4f46ae09bae48a3cb5e8e.jpg'},
                        ],
                    }
                ]
            },
            "error" : {
                "errors" : []
            }
        }
     },
     pinCreated : {
        "responseCode" : "000",
        "response" : {
            "payload" : {
                "records" : [
                    {
                        "message" : "Pin Created : pinId",
                        "created" : true
                    }
                ]
            },
            "error" : {
                "errors" : []
            }
        }
     },
     getAllPin : {
        "responseCode" : "000",
        "response" : {
            "payload" : {
                "records" : [
                    {
                        pins : [
                            { id: 18, image: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f', description: 'Fern'},
                            { id: 19, image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f', description: 'Snacks'},
                            {image: 'https://i.pinimg.com/474x/4b/7f/46/4b7f46c91afc7f93503c4ecce49974bf.jpg', description: 'nothing' ,id: 11,},
                            {image: 'https://i.pinimg.com/564x/b1/ed/2f/b1ed2f13cff4f46ae09bae48a3cb5e8e.jpg', description: 'nothing' ,id: 12,},
                            {image: 'https://i.pinimg.com/736x/84/6a/6f/846a6f06a19ebf9dca074eceacfab57b.jpg', description: 'nothing' ,id: 13,},
                            { id: 20, image: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25', description: 'Mushrooms'},
                            { id: 21, image: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383', description: 'Tower'},
                            { id: 22, image: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1', description: 'Sea star'},
                            {image: 'https://i.pinimg.com/474x/01/f0/30/01f0305e35b073a0e5e30f2fb13bb95b.jpg', description: 'nothing' ,id: 5,},
                            {image: 'https://i.pinimg.com/474x/c9/aa/39/c9aa3963baa526ef70b51778800dd960.jpg', description: 'nothing' ,id: 6,},
                            {image: 'https://i.pinimg.com/736x/84/6a/6f/846a6f06a19ebf9dca074eceacfab57b.jpg', description: 'nothing' ,id: 7,},
                            { id: 23, image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62', description: 'Honey'},
                            { id: 24, image: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6', description: 'Basketball'},
                            { id: 25, image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e', description: 'Breakfast'},
                            { id: 26, image: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d', description: 'Tree'},
                            { id: 27, image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d', description: 'Burger'},
                            {image: 'https://i.pinimg.com/474x/01/f0/30/01f0305e35b073a0e5e30f2fb13bb95b.jpg', description: 'nothing' ,id: 15,},
                            {image: 'https://i.pinimg.com/474x/01/f0/30/01f0305e35b073a0e5e30f2fb13bb95b.jpg', description: 'nothing' ,id: 16,},
                            {image: 'https://i.pinimg.com/474x/01/f0/30/01f0305e35b073a0e5e30f2fb13bb95b.jpg', description: 'nothing' ,id: 17,},
                            { id: 28, image: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45', description: 'Camera'},
                            { id: 29, image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c', description: 'Coffee'},
                            { id: 30, image: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e', description: 'Camping Car'},
                            {image: 'https://i.pinimg.com/736x/84/6a/6f/846a6f06a19ebf9dca074eceacfab57b.jpg', description: 'nothing' ,id: 4,},
                            {image: 'https://i.pinimg.com/474x/01/f0/30/01f0305e35b073a0e5e30f2fb13bb95b.jpg', description: 'nothing' ,id: 8,},
                            {image: 'https://i.pinimg.com/564x/b1/ed/2f/b1ed2f13cff4f46ae09bae48a3cb5e8e.jpg', description: 'nothing' ,id: 9,},
                            { id: 31, image: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8', description: 'Hats'},
                            { id: 32, image: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af', description: 'Tomato basil'},
                            { id: 33, image: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7', description: 'Mountain'},
                            { id: 34, image: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6', description: 'Bike'},
                            {image: 'https://i.pinimg.com/736x/84/6a/6f/846a6f06a19ebf9dca074eceacfab57b.jpg', description: 'nothing' ,id: 1,},
                            {image: 'https://i.pinimg.com/474x/01/f0/30/01f0305e35b073a0e5e30f2fb13bb95b.jpg', description: 'nothing' ,id: 2,},
                            {image: 'https://i.pinimg.com/564x/b1/ed/2f/b1ed2f13cff4f46ae09bae48a3cb5e8e.jpg', description: 'nothing' ,id: 3,},
                            {image: 'https://i.pinimg.com/736x/84/6a/6f/846a6f06a19ebf9dca074eceacfab57b.jpg', description: 'nothing' ,id: 10,},
                            {image: 'https://i.pinimg.com/564x/b1/ed/2f/b1ed2f13cff4f46ae09bae48a3cb5e8e.jpg', description: 'nothing' ,id: 14,},
                          ]   
                    }
                ]
            },
            "error" : {
                "errors" : []
            }
        }
     },
     boardCreated : {
        "responseCode" : "000",
        "response" : {
            "payload" : {
                "records" : [
                    {
                        "message" : "board Created : boardId",
                        "created" : true
                    }
                ]
            },
            "error" : {
                "errors" : []
            }
        }
     },
     getAllBoard : {
        "responseCode" : "000",
        "response" : {
            "payload" : {
                "records" : [
                    {
                        dateWiseCards : [
                            {
                                id: 1,
                                date: '26 December 2023',
                                cards: [
                                    {
                                        id: 1,
                                        image: 'https://i.pinimg.com/736x/a5/a2/01/a5a201c79df6b147288121e177df0588.jpg',
                                        title: 'The Concept Is Bling',
                                        description: "Sparkling New Year's Eve Nails",
                                    },
                                    {
                                        id: 2,
                                        image: 'https://i.pinimg.com/736x/5e/b3/d6/5eb3d6a3fddc3b7107c5b41eb72846dc.jpg',
                                        title: 'New Beginnings',
                                        description: 'Merry Christmas & Happy New Year Greetings',
                                    },
                                    {
                                        id: 3,
                                        image: 'https://i.pinimg.com/736x/2e/19/33/2e1933077410e2b54745f4f98c23e2a8.jpg',
                                        title: 'New Year, New You vibes',
                                        description: "Mood Board: New Year's Eve",
                                    },
                                    {
                                        id: 4,
                                        image: 'https://i.pinimg.com/736x/09/e3/6e/09e36e56a20666792e9299e789b9de32.jpg',
                                        title: 'Manifest & Plan',
                                        description: '2024 Vision Board Inspo',
                                    },
                                    {
                                        id: 5,
                                        image: 'https://i.pinimg.com/736x/e2/f7/5e/e2f75eb3ea5c03cb8fa0fa3279114bd0.jpg',
                                        title: 'Change Is Good',
                                        description: 'Tips To Give Your Room A Makeover',
                                    },
                                ]
                            },
                            {
                                id: 2,
                                date: '25 December 2023',
                                cards: [
                                    {
                                        id: 6,
                                        image: 'https://i.pinimg.com/736x/58/a3/4e/58a34ea83e309909d572d446cf7b7891.jpg',
                                        title: 'Home Is Where The...',
                                        description: 'Celeb Homes To Make You Drool',
                                    },
                                    {
                                        id: 7,
                                        image: 'https://i.pinimg.com/736x/e8/8e/f5/e88ef55394146f49e02d5245abcf5223.jpg',
                                        title: 'Ho Ho Ho',
                                        description: 'Christmas Party Decor Ideas',
                                    },
                                    {
                                        id: 8,
                                        image: 'https://i.pinimg.com/736x/8f/8f/df/8f8fdf1f2af84dafcafbdd4f1d946162.jpg',
                                        title: 'Very Merry Morning',
                                        description: 'Christmas Holiday Breakfast',
                                    },
                                    {
                                        id: 9,
                                        image: 'https://i.pinimg.com/736x/a5/a5/3e/a5a53e40c9af6c799d542b4f490ee5b4.jpg',
                                        title: 'Relaxation Season',
                                        description: 'Quotes For All The Holiday Joy',
                                    },
                                ]
                            }
                            
                        ]   
                    }
                ]
            },
            "error" : {
                "errors" : []
            }
        }
     },
     getBoardById : {
        "responseCode" : "000",
        "response" : {
            "payload" : {
                "records" : [
                    {
                       boardName: 'board1',
                       boardId : 'board1',
                       pins: [
                        { id: 1, image: 'https://i.pinimg.com/474x/01/f0/30/01f0305e35b073a0e5e30f2fb13bb95b.jpg', description: 'a'},
                        // { id: 2, image: 'https://i.pinimg.com/564x/b1/ed/2f/b1ed2f13cff4f46ae09bae48a3cb5e8e.jpg', description: 'a'},
                        // { id: 1, image: 'https://i.pinimg.com/474x/01/f0/30/01f0305e35b073a0e5e30f2fb13bb95b.jpg', description: 'a'},
                        // { id: 2, image: 'https://i.pinimg.com/564x/b1/ed/2f/b1ed2f13cff4f46ae09bae48a3cb5e8e.jpg', description: 'a'},
                       ]
                    }
                ]
            },
            "error" : {
                "errors" : []
            }
        }
     },
     getTagList : {
        "responseCode" : "000",
        "response" : {
            "payload" : {
                "records" : [
                    {
                       tagList : [
                        {id: 'topic1', name: 'topic1'},
                        {id: 'topic2', name: 'topic2'},
                        {id: 'topic3', name: 'topic3'},
                        {id: 'topic4', name: 'topic4'},
                        {id: 'topic5', name: 'topic5'},
                        {id: 'topic6', name: 'topic6'},
                       ]
                    }
                ]
            },
            "error" : {
                "errors" : []
            }
        }
     },
 }

 export default MockResponse;