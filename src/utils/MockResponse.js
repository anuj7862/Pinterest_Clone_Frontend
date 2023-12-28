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
            }
        }
     }
 }

 export default MockResponse;