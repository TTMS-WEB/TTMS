const regRouter = (app)=> {
    app.use('/ttms', require('./ttms'));
};

export default regRouter;
