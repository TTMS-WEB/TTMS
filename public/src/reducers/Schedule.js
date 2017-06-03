const Schedule = (state = [], action)=> {
    switch (action.type) {
        case 'SHOW_PLAY_SCHEDULE':
            return action.content;
    }
    return state;
};

export default Schedule;

