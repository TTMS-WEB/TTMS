const regRouter = (app)=> {
    app.use('/ttms', require('./index'));
};

export default regRouter;
