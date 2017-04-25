/**
 * Created by Administrator on 2017/4/6 0006.
 */
var myjq=$.noConflict();
myjq(document).ready(function(){
    myjq("#b1").click(function(){
        myjq("#p1").text("new hello");
    })
})