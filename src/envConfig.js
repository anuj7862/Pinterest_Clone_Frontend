
//

import axios from "axios";

export const baseUrl =  'http://localhost:3000';

export const axiosInstances = {
    service : axios.create({
        baseURL: baseUrl,
    }),
};


export const serviceProps = {
    authService : {
        loginService: {
            uri: '/auth/login',
        },
        signupService: {
            uri: '/auth/signup',
        },
        logoutService: {
            uri: '/auth/logout',
        },
        userDetails : {
            uri : '/auth/userDetails',
        }
    },

    pinService : {
        createPin : {
            uri : '/pin/createPin',
        },
        getAllPin : {
            uri : '/pin/getAllPins',
        },
        getAllPinsByUserId : {
            uri : '/pin/getAllPinsByUserId',
        },
        deletePin : {
            uri : '/pin/deletePin'
        }
    },

    boardService : {
        createBoard: {
            uri : '/board/createBoard',
        },
        getAllBoards : {
            uri : '/board/getAllBoards',
        },
        getAllBoardsByUserId : {
            uri : '/board/getAllBoardsByUserId',
        },
        deleteBoard : {
            uri : '/board/deleteBoard'
        }
    },

    tagTopicService : {
        getTagTopics : {
            uri : '/topic/getTagTopics',
        },
        createTagTopic : {
            uri : '/topic/createTagTopic',
        },
    },

    exploreBoardService : {
        getExploreCards : {
            uri : '/exploreCard/getExploreCards',
        },
        createExploreCard : {
            uri : '/exploreCard/createExploreCard',
        },
    },

} 