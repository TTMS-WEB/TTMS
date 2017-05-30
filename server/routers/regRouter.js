/**
 * Created by lipeishang on 17-5-30.
 */
const regRouter = (app)=> {
    app.use('/ttms', require('./ttms'));
};

export default regRouter;
