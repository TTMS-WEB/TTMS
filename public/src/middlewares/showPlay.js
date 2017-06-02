import request from "superagent";
import play from "../actions/play";

export default store=>next=>action=> {
    if (action.type === 'FINDPLAY') {
        request.post('/showPlay')
            .send({page: action.page})
            .end((err, res)=> {
                next({type: "SHOWPLAY", playInfo: res.body.data,maxsize:res.body.maxsize,size:res.body.size});
            })
    }
    else if (action.type === 'ADDPLAY') {
        request.post('/addPlay')
            .send({newPlay: action.newPlay})
            .end((err, res)=> {
                next({type: "ERRTIP", addResult: res.body.addResult});
                store.dispatch(play.showPlay(action.newPlay.page));
            })
    }
    else if (action.type === 'SEARCHPLAY') {
        if (action.searchPlay.searchPlayName === "") {
            store.dispatch(play.showPlay(action.searchPlay.page));
        }
        else {
            request.post('/searchPlay')
                .send({searchPlayName: action.searchPlay.searchPlayName, page: action.searchPlay.page})
                .end((err, res)=> {
                    next({type: 'CHANGEPLAY', resultPlay: res.body});
                })
        }
    }
    else if (action.type === 'REMOVEPLAY') {
        request.post('/removePlay')
            .send({playName: action.deletePlay.deletePlayName, page: action.deletePlay.page})
            .end(()=> {
                store.dispatch(play.showPlay(action.deletePlay.page));
            })
    }
    else if (action.type === 'MODIFYPLAY') {
        console.log(action);
        request.post('/modifyPlay')
            .send({newPlay: action.newPlay})
            .end(()=> {
                store.dispatch(play.showPlay(action.newPlay.page));
            })
    }
    else if (action.type === 'CHANGEPAGE') {
        store.dispatch({type: "CHANGESTATE", page: action.page});
        store.dispatch(play.showPlay(action.page));
    }
    else {
        next(action);
    }
}