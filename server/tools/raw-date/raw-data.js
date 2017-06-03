export default {
    UserInfo: [
        {
            username: 'li',
            sex: '女',
            password: '123456',
            phone: 123456789,
            address: '北京'
        },
        {
            username: 'huang',
            sex: '女',
            password: '123456',
            phone: 123456789,
            address: '北京'
        },
        {
            username: 'han',
            sex: '女',
            password: '123456',
            phone: 123456789,
            address: '北京'
        },
        {
            username: 'root',
            sex: '女',
            password: '123456',
            phone: 123456789,
            address: '北京'
        },
    ],
    PlayInfo: [
        {
            playName: "致青春",
            playTime: 120,
            playType: "爱情片",
            playActor: "赵薇",
            playPrice: 30
        },
        {
            playName: "欢乐颂",
            playTime: 120,
            playType: "爱情片",
            playActor: "刘涛",
            playPrice: 38
        },
        {
            playName: "白鹿原",
            playTime: 120,
            playType: "历史片",
            playActor: "张嘉译",
            playPrice: 50
        }
    ],
    Studios: [
        {
            id: 1,
            studioName: '巨幕厅',
            studioInfo: '这是一个大厅',
            col: 10,
            row: 10
        },
        {
            id: 2,
            studioName: '小厅',
            studioInfo: '这是一个小厅',
            col: 10,
            row: 10
        },
        {
            id: 3,
            studioName: '中厅',
            studioInfo: '这是一个中厅',
            col: 10,
            row: 10
        }],
    Seat: [
        {
            studioId: 1,
            seatArray: [{status: -1},{status: 0},{status: 0},{status: 0},{status: 0}, {status: -1}]
        },
        {
            studioId: 2,
            seatArray: [{status:0 },{status: -1},{status: 0},{status: 0},{status: 0}, {status: -1}]
        },
        {
            studioId: 3,
            seatArray: [{status: 0},{status: 0},{status: -1},{status: 0},{status: 0}, {status: -1}]
        }
    ],
    PlayPlan: [
        {
            planName: "白鹿原",
            planStudio: 1,
            date:new Date('2017-06-02'),
            time: 1,
        },
        {
            planName: "欢乐颂",
            planStudio: 2,
            date:new Date('2017-06-01'),
            time: 2,
        },
        {
            planName: "致青春",
            planStudio: 3,
            date:new Date('2017-06-03'),
            time: 3,
        }
    ],
    Schedule: [
        {
            ScheduleName: "致青春",
            ScheduleStudio: 1,
            ScheduleDate:1,
            ScheduleTime: 1,
            ScheduleActor:"赵薇",
            SchedulePrice:30,
            TicketArray:[]
        }
    ]
}