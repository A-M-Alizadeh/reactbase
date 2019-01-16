export default class callB{
    static load(cb){
        setTimeout(() => {
            cb();
        }, 3000);
    }
}