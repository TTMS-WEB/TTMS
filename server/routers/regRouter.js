const regRouter = (app)=> {
    app.use('/ttms', require('./tasks'));
};

export default regRouter;
