export default {
    UserInfo: [
        {
            username: 'li',
            password: '123456',
            phone: 123456789
        },
        {
            username: 'huang',
            password: '123456',
            phone: 123456789
        },
        {
            username: 'han',
            password: '123456',
            phone: 123456789
        },
    ],
    PlayInfo: [
        {
            playName: "致青春",
            playTime: "2hours",
            playType: "qingchu",
            playActor: "赵薇",
            playPrice: 30
        },
        {
            playName: "欢乐颂",
            playTime: '2hours',
            playType: "qingchu",
            playActor: "刘涛",
            playPrice: 30
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
            studioId: 4,
            seatArray:[{status:0},{status:-1}]
        }
    ],
}